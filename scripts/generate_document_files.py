#!/usr/bin/env python3
"""
Script to generate all document files for the Delivery Excellence section.
This script creates markdown files for guides and templates with embedded iframe viewers.
"""

import os
import json

# Document data - guides
guides_data = [
    {
        "title": "Induction Guide",
        "url": "https://tinyurl.com/Induction-Guide",
        "description": "Comprehensive onboarding guide for new team members to ensure smooth integration and productivity.",
        "purpose": "Accelerate new team member productivity and integration",
        "whenToUse": "New team member onboarding, role transitions, team expansion",
        "howToUse": "Follow the structured onboarding process step by step",
        "keySections": ["Company Overview", "Role Expectations", "Tools and Access", "Team Integration"],
        "tips": "Assign a buddy/mentor to support the new team member during induction"
    },
    {
        "title": "Manager Handbook By HR",
        "url": "https://tinyurl.com/Manager-Handbook-by-HR",
        "description": "Comprehensive guide for managers covering HR policies, team management, and leadership best practices.",
        "purpose": "Provide managers with HR guidelines and leadership best practices",
        "whenToUse": "New manager onboarding, HR policy reference, team management situations",
        "howToUse": "Reference specific sections as needed for different situations",
        "keySections": ["HR Policies", "Team Management", "Performance Reviews", "Conflict Resolution"],
        "tips": "Keep this handbook easily accessible for quick reference during team situations"
    },
    {
        "title": "PIP_Policy",
        "url": "https://tinyurl.com/PIPPOLICY",
        "description": "Performance Improvement Plan policy and procedures for managing underperforming team members.",
        "purpose": "Provide structured approach for performance improvement",
        "whenToUse": "Performance issues, underperforming team members, HR interventions",
        "howToUse": "Follow the structured PIP process with clear goals and timelines",
        "keySections": ["Performance Assessment", "Improvement Goals", "Timeline", "Review Process"],
        "tips": "Document all interactions and progress during the PIP process"
    }
]

# Document data - templates
templates_data = [
    {
        "title": "Interview Evaluation Sheet",
        "url": "https://tinyurl.com/IV-Evaluation",
        "description": "Standardized template for evaluating candidates during interviews to ensure consistent assessment.",
        "purpose": "Standardize interview evaluation and candidate assessment",
        "whenToUse": "Candidate interviews, hiring decisions, team expansion",
        "howToUse": "Complete the evaluation during or immediately after interviews",
        "keySections": ["Technical Skills", "Communication", "Cultural Fit", "Overall Assessment"],
        "tips": "Provide specific examples and feedback for each evaluation criteria"
    },
    {
        "title": "Issue_Register",
        "url": "https://tinyurl.com/IssueRegis",
        "description": "Template for tracking and managing project issues with status, priority, and resolution tracking.",
        "purpose": "Track and manage project issues systematically",
        "whenToUse": "Issue identification, problem tracking, project monitoring",
        "howToUse": "Log issues as they arise and update status regularly",
        "keySections": ["Issue Description", "Priority", "Assigned To", "Resolution Status"],
        "tips": "Review the issue register regularly in team meetings"
    },
    {
        "title": "Knowledge Transfer Progress Tracker",
        "url": "https://tinyurl.com/KTDOCU",
        "description": "Template for tracking knowledge transfer activities and ensuring successful handover of responsibilities.",
        "purpose": "Track knowledge transfer progress and ensure successful handovers",
        "whenToUse": "Team transitions, role changes, project handovers",
        "howToUse": "Update progress regularly and verify knowledge transfer completion",
        "keySections": ["Knowledge Areas", "Transfer Status", "Verification", "Completion Date"],
        "tips": "Include practical exercises to verify knowledge transfer effectiveness"
    },
    {
        "title": "MOM Template",
        "url": "https://tinyurl.com/MOMTEMPLAT",
        "description": "Minutes of Meeting template for capturing key discussion points, decisions, and action items.",
        "purpose": "Document meeting outcomes and track action items",
        "whenToUse": "All project meetings, client meetings, team discussions",
        "howToUse": "Complete during or immediately after meetings",
        "keySections": ["Agenda", "Discussion Points", "Decisions", "Action Items"],
        "tips": "Distribute MOM within 24 hours of the meeting"
    },
    {
        "title": "Project Estimation Template",
        "url": "https://tinyurl.com/ProjectEstimationTemp",
        "description": "Comprehensive template for project effort estimation including time, resources, and cost analysis.",
        "purpose": "Provide accurate project estimates for planning and budgeting",
        "whenToUse": "Project planning, proposal preparation, resource allocation",
        "howToUse": "Break down work into manageable components and estimate each",
        "keySections": ["Work Breakdown", "Effort Estimation", "Resource Requirements", "Risk Factors"],
        "tips": "Include buffer time for unexpected challenges and dependencies"
    },
    {
        "title": "Project Kickoff Template (Sample)",
        "url": "https://tinyurl.com/kickoffsample",
        "description": "Sample template for project kickoff meetings to ensure all stakeholders are aligned and project starts successfully.",
        "purpose": "Ensure successful project initiation and stakeholder alignment",
        "whenToUse": "Project initiation, stakeholder alignment, team formation",
        "howToUse": "Customize the template for your specific project needs",
        "keySections": ["Project Overview", "Stakeholder Roles", "Timeline", "Communication Plan"],
        "tips": "Involve all key stakeholders in the kickoff meeting"
    },
    {
        "title": "Project SOW",
        "url": "https://tinyurl.com/ProjectSOW",
        "description": "Statement of Work template defining project scope, deliverables, timeline, and terms.",
        "purpose": "Define clear project scope and deliverables",
        "whenToUse": "Project initiation, contract preparation, scope definition",
        "howToUse": "Complete all sections with detailed information and get stakeholder approval",
        "keySections": ["Project Scope", "Deliverables", "Timeline", "Terms and Conditions"],
        "tips": "Ensure all stakeholders review and approve the SOW before starting work"
    },
    {
        "title": "QBR",
        "url": "https://tinyurl.com/QBRTempp",
        "description": "Quarterly Business Review template for comprehensive project and business performance assessment.",
        "purpose": "Review project and business performance quarterly",
        "whenToUse": "Quarterly reviews, performance assessment, stakeholder updates",
        "howToUse": "Complete the review with current data and prepare for stakeholder presentation",
        "keySections": ["Performance Metrics", "Achievements", "Challenges", "Next Quarter Plan"],
        "tips": "Include both quantitative metrics and qualitative insights"
    },
    {
        "title": "RAID Log",
        "url": "https://tinyurl.com/Raidlogg",
        "description": "Risks, Assumptions, Issues, and Dependencies log template for comprehensive project risk management.",
        "purpose": "Track and manage project risks, assumptions, issues, and dependencies",
        "whenToUse": "Project planning, risk management, issue tracking",
        "howToUse": "Regularly update the RAID log and review in team meetings",
        "keySections": ["Risks", "Assumptions", "Issues", "Dependencies"],
        "tips": "Assign owners and review dates for each RAID item"
    },
    {
        "title": "RASCI Template",
        "url": "https://tinyurl.com/RASCITemp",
        "description": "Responsible, Accountable, Support, Consulted, Informed matrix template for role clarity.",
        "purpose": "Define clear roles and responsibilities for project activities",
        "whenToUse": "Project planning, team formation, role definition",
        "howToUse": "Define RASCI for each major project activity",
        "keySections": ["Activities", "Roles", "Responsibilities", "Stakeholders"],
        "tips": "Ensure only one person is Accountable for each activity"
    },
    {
        "title": "RCA Template",
        "url": "https://tinyurl.com/RCADocu",
        "description": "Root Cause Analysis template for investigating and resolving issues systematically.",
        "purpose": "Identify root causes of issues and implement preventive measures",
        "whenToUse": "Issue investigation, problem resolution, process improvement",
        "howToUse": "Follow the systematic RCA process to identify underlying causes",
        "keySections": ["Problem Description", "Root Cause Analysis", "Solutions", "Prevention"],
        "tips": "Focus on process and system issues rather than blaming individuals"
    },
    {
        "title": "Requirement Traceability Matrix",
        "url": "https://tinyurl.com/ReqTrace",
        "description": "Template for tracking requirements from business needs through design to testing and delivery.",
        "purpose": "Ensure all requirements are implemented and tested",
        "whenToUse": "Requirements management, testing planning, project tracking",
        "howToUse": "Map requirements to design, development, and testing activities",
        "keySections": ["Requirements", "Design Elements", "Test Cases", "Status"],
        "tips": "Update the matrix regularly as requirements evolve"
    },
    {
        "title": "Retro Report",
        "url": "https://tinyurl.com/RetroRepoo",
        "description": "Retrospective report template for capturing lessons learned and improvement opportunities.",
        "purpose": "Capture lessons learned and identify improvement opportunities",
        "whenToUse": "Sprint retrospectives, project reviews, process improvement",
        "howToUse": "Facilitate open discussion and document key insights",
        "keySections": ["What Went Well", "What Could Improve", "Action Items", "Follow-up"],
        "tips": "Focus on actionable improvements and assign owners for action items"
    },
    {
        "title": "Risk Register",
        "url": "https://tinyurl.com/RiskRegg",
        "description": "Comprehensive risk register template for identifying, assessing, and managing project risks.",
        "purpose": "Systematically identify and manage project risks",
        "whenToUse": "Project planning, risk assessment, ongoing risk management",
        "howToUse": "Regularly review and update risks with current status and mitigation plans",
        "keySections": ["Risk Description", "Probability", "Impact", "Mitigation Strategy"],
        "tips": "Review the risk register in every project status meeting"
    },
    {
        "title": "Timesheet Document",
        "url": "https://tinyurl.com/TimesheetDoc",
        "description": "Standardized timesheet template for tracking project time and effort allocation.",
        "purpose": "Track time spent on project activities for billing and analysis",
        "whenToUse": "Time tracking, project billing, effort analysis",
        "howToUse": "Complete daily or weekly with accurate time allocation",
        "keySections": ["Date", "Activities", "Hours", "Project Codes"],
        "tips": "Submit timesheets regularly and ensure accuracy for billing purposes"
    },
    {
        "title": "WSR",
        "url": "https://tinyurl.com/WSRTemp",
        "description": "Weekly Status Report template for regular project progress updates and stakeholder communication.",
        "purpose": "Provide regular project status updates to stakeholders",
        "whenToUse": "Weekly reporting, stakeholder updates, project monitoring",
        "howToUse": "Complete weekly with current progress and upcoming activities",
        "keySections": ["Progress Summary", "Achievements", "Challenges", "Next Week Plan"],
        "tips": "Keep reports concise and focus on key highlights and issues"
    }
]

def create_filename(title):
    """Convert title to filename-friendly format"""
    return title.lower().replace(' ', '-').replace('(', '').replace(')', '').replace('_', '-')

def generate_markdown_content(doc):
    """Generate markdown content for a document"""
    filename = create_filename(doc['title'])
    
    content = f"""# {doc['title']}

## Overview

{doc['description']}

## Purpose

{doc['purpose']}

## When to Use

- {doc['whenToUse']}

## How to Use

{doc['howToUse']}

## Key Sections

- {chr(10).join('- ' + section for section in doc['keySections'])}

## 💡 Tips

{doc['tips']}

---

## Document Viewer

<div class="document-viewer-container">
    <div class="viewer-header">
        <div class="viewer-title">
            <h2>{doc['title']}</h2>
            <p>{doc['description']}</p>
        </div>
        <div class="viewer-controls">
            <button class="btn-fullscreen" onclick="toggleFullscreen()" title="Full Screen">
                <span class="material-icons">fullscreen</span>
            </button>
            <a href="{doc['url']}" target="_blank" class="btn-download" title="Download">
                <span class="material-icons">download</span>
            </a>
        </div>
    </div>
    
    <div class="document-iframe-container">
        <iframe src="{doc['url']}" frameborder="0" width="100%" height="600px"></iframe>
    </div>
</div>

<script>
function toggleFullscreen() {{
    const iframe = document.querySelector('.document-iframe-container iframe');
    if (document.fullscreenElement) {{
        document.exitFullscreen();
    }} else {{
        iframe.requestFullscreen();
    }}
}}
</script>

<style>
.document-viewer-container {{
    margin: 2rem 0;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}}

.viewer-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
}}

.viewer-title h2 {{
    margin: 0 0 0.5rem 0;
    color: #3f51b5;
}}

.viewer-title p {{
    margin: 0;
    color: #666;
}}

.viewer-controls {{
    display: flex;
    gap: 0.5rem;
}}

.viewer-controls button,
.viewer-controls a {{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease;
}}

.viewer-controls button:hover,
.viewer-controls a:hover {{
    background: #3f51b5;
    color: white;
    border-color: #3f51b5;
}}

.document-iframe-container {{
    padding: 1rem;
    background: white;
}}

.document-iframe-container iframe {{
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}}

@media (max-width: 768px) {{
    .viewer-header {{
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }}
    
    .viewer-controls {{
        width: 100%;
        justify-content: space-between;
    }}
}}
</style>
"""
    return filename, content

def main():
    """Main function to generate all document files"""
    base_dir = "docs/delivery-excellence"
    
    # Create guides directory and files
    guides_dir = os.path.join(base_dir, "guides")
    os.makedirs(guides_dir, exist_ok=True)
    
    print("Generating guide files...")
    for doc in guides_data:
        filename, content = generate_markdown_content(doc)
        filepath = os.path.join(guides_dir, f"{filename}.md")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created: {filepath}")
    
    # Create templates directory and files
    templates_dir = os.path.join(base_dir, "templates")
    os.makedirs(templates_dir, exist_ok=True)
    
    print("\nGenerating template files...")
    for doc in templates_data:
        filename, content = generate_markdown_content(doc)
        filepath = os.path.join(templates_dir, f"{filename}.md")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created: {filepath}")
    
    print(f"\nGenerated {len(guides_data)} guide files and {len(templates_data)} template files.")

if __name__ == "__main__":
    main()
