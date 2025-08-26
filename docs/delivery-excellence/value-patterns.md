# Value Patterns

<style>
    .value-patterns-container {
        max-width: 1200px;
        margin: 20px auto;
        padding: 20px;
        font-family: 'Segoe UI', Arial, sans-serif;
    }
    
    .value-patterns-title {
        text-align: center;
        font-size: 2.5rem;
        color: #1e40af;
        margin-bottom: 30px;
        font-weight: bold;
    }
    
    .value-patterns-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    
    .value-pattern-card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 4px solid #3b82f6;
        transition: transform 0.3s ease;
    }
    
    .value-pattern-card:hover {
        transform: translateY(-5px);
    }
    
    .value-pattern-icon {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .value-pattern-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 8px;
    }
    
    .value-pattern-description {
        font-size: 0.9rem;
        color: #6b7280;
        line-height: 1.5;
    }
    
    /* Completely hide RHS table of contents for this page */
    .md-sidebar--secondary {
        display: none !important;
        width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Adjust main content width when RHS is hidden */
    .md-content {
        margin-right: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
        margin-left: 0 !important;
    }
    
    /* Ensure the main container uses full width */
    .md-main {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Adjust the main content area */
    .md-main__inner {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Remove any grid layout that might be causing the RHS space */
    .md-grid {
        max-width: 100% !important;
        margin: 0 !important;
    }
    
    /* Ensure the page uses full width */
    .md-typeset {
        max-width: 100% !important;
        margin: 0 !important;
    }
    
    @media (max-width: 768px) {
        .value-patterns-grid {
            grid-template-columns: 1fr;
        }
        .value-patterns-title {
            font-size: 2rem;
        }
    }
</style>

<div class="value-patterns-container">
    <div class="value-patterns-grid">
        <div class="value-pattern-card">
            <div class="value-pattern-icon">📚</div>
            <div class="value-pattern-title">Documentation Excellence</div>
            <div class="value-pattern-description">
                Maintain comprehensive architecture, setup, rules, tools, and best practices documentation to enable team efficiency and knowledge transfer.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🧪</div>
            <div class="value-pattern-title">Unit Test Coverage</div>
            <div class="value-pattern-description">
                Write unit test cases on code not written by you to ensure reliability and prevent regressions across the codebase.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🎓</div>
            <div class="value-pattern-title">Effective Induction Guide</div>
            <div class="value-pattern-description">
                Create structured onboarding materials that help new team members quickly understand systems, processes, and expectations.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🔧</div>
            <div class="value-pattern-title">Proactive Issue Resolution</div>
            <div class="value-pattern-description">
                Fix issues in the file/area working on even if they're outside the immediate scope to maintain code health.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🎯</div>
            <div class="value-pattern-title">Holistic Understanding</div>
            <div class="value-pattern-description">
                Understand the whole functionality not just the story to make informed decisions and avoid tunnel vision.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">💬</div>
            <div class="value-pattern-title">Open Communication</div>
            <div class="value-pattern-description">
                Communicate openly, effectively, consultatively with team members and stakeholders to ensure alignment and collaboration.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🤖</div>
            <div class="value-pattern-title">QA Automation</div>
            <div class="value-pattern-description">
                Implement automated testing strategies to catch issues early and maintain consistent quality standards across releases.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">♻️</div>
            <div class="value-pattern-title">Code Reusability</div>
            <div class="value-pattern-description">
                Re-use code/library already there to avoid duplication, reduce development time, and leverage proven solutions.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🛡️</div>
            <div class="value-pattern-title">Security First</div>
            <div class="value-pattern-description">
                Perform vulnerability checks during every check-in to maintain secure code standards and prevent security debt.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">📊</div>
            <div class="value-pattern-title">Productivity Measurement</div>
            <div class="value-pattern-description">
                Measure, improve productivity on a regular basis through metrics analysis and process optimization.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🐛</div>
            <div class="value-pattern-title">Quality Gates</div>
            <div class="value-pattern-description">
                Watch on bug count and quality gates and stick by it to maintain consistent quality standards.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🔍</div>
            <div class="value-pattern-title">Competitive Analysis</div>
            <div class="value-pattern-description">
                Compare similar products and features to identify improvement opportunities and maintain competitive advantage.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">⚡</div>
            <div class="value-pattern-title">Tech Debt Management</div>
            <div class="value-pattern-description">
                Constantly assess tech debt and highlight removal to prevent accumulation and maintain system health.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">💡</div>
            <div class="value-pattern-title">Feature Innovation</div>
            <div class="value-pattern-description">
                Identify projects/features to improve the product based on user feedback and market analysis.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">⚡</div>
            <div class="value-pattern-title">Performance Optimization</div>
            <div class="value-pattern-description">
                Check performance and improve DB queries, UI calls, page load time to ensure optimal user experience.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">📝</div>
            <div class="value-pattern-title">Production Monitoring</div>
            <div class="value-pattern-description">
                Check logs on production regularly - identify exceptions to prevent issues and maintain system stability.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">👥</div>
            <div class="value-pattern-title">Usability Focus</div>
            <div class="value-pattern-description">
                Check usability and accessibility to ensure inclusive design and optimal user experience.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🔄</div>
            <div class="value-pattern-title">Process Improvement</div>
            <div class="value-pattern-description">
                Suggest ways to improve process/metrics continuously to enhance team efficiency and delivery quality.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🔥</div>
            <div class="value-pattern-title">Heat Map Analytics</div>
            <div class="value-pattern-description">
                Setup heat map and constantly update to visualize usage patterns and identify optimization opportunities.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">📋</div>
            <div class="value-pattern-title">Team Assessment</div>
            <div class="value-pattern-description">
                Perform 9 box half yearly assessment of the team to understand performance and potential distribution.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🚀</div>
            <div class="value-pattern-title">Innovation Events</div>
            <div class="value-pattern-description">
                Organize hackathon every quarter to foster innovation, team collaboration, and creative problem-solving.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">💼</div>
            <div class="value-pattern-title">Customer Focus</div>
            <div class="value-pattern-description">
                Hold regular discussion on customer business and idea blitz sessions to stay aligned with business needs.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🐞</div>
            <div class="value-pattern-title">Bug Blitz Sessions</div>
            <div class="value-pattern-description">
                Have regular bug blitz to address bugs en-masse and systematically improve overall quality.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">📊</div>
            <div class="value-pattern-title">Data Mining Insights</div>
            <div class="value-pattern-description">
                Mine JIRA to analyze stories, bugs to identify hotspots in code and ensure expert coverage for critical areas.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">🔄</div>
            <div class="value-pattern-title">CI/CD Excellence</div>
            <div class="value-pattern-description">
                Implement robust pipeline with unit test, code coverage, automation of smoke and vulnerability checks.
            </div>
        </div>

        <div class="value-pattern-card">
            <div class="value-pattern-icon">📈</div>
            <div class="value-pattern-title">JIRA Optimization</div>
            <div class="value-pattern-description">
                Update clean analyze JIRAs to maintain accurate project tracking and identify improvement areas.
            </div>
        </div>
    </div>
</div>
