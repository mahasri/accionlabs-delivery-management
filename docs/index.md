# AccionLabs Delivery Management Portal

Welcome to the comprehensive delivery management portal for AccionLabs. This centralized platform provides access to all delivery excellence tools, templates, checklists, and governance processes used across our organization.

## 🎯 Quick Access

<div class="grid" markdown>

<div class="card" markdown>

### 📋 Delivery Excellence
Access our comprehensive delivery excellence framework including checklists, templates, and best practices.

[:octicons-arrow-right-24: Go to Delivery Excellence](delivery-excellence/)

</div>

<div class="card" markdown>

### 🏛️ Delivery Governance
Explore our governance processes, maturity dashboards, and value board frameworks.

[:octicons-arrow-right-24: Go to Delivery Governance](delivery-governance/)

</div>

<div class="card" markdown>

### 📊 Dashboards & Reports
View real-time delivery metrics, maturity assessments, and performance indicators.

[:octicons-arrow-right-24: View Dashboards](delivery-governance/maturity-dashboard/)

</div>

<div class="card" markdown>

### 📁 Templates & Documents
Download and access all delivery management templates and documents.

[:octicons-arrow-right-24: Browse Templates](delivery-excellence/templates/)

</div>

</div>

## 🚀 What's New

!!! info "Latest Updates"
    - **Q4 2024**: Enhanced Architecture Value Board framework
    - **Q4 2024**: New Program Value Board templates
    - **Q4 2024**: Updated delivery maturity assessment criteria
    - **Q4 2024**: Improved SharePoint integration workflow

## 📈 Key Metrics Overview

<div class="grid" markdown>

<div class="card" markdown>

### Active Projects
**{{ active_projects }}**

Currently managed through our delivery excellence framework

</div>

<div class="card" markdown>

### Delivery Maturity Score
**{{ maturity_score }}%**

Average across all delivery teams

</div>

<div class="card" markdown>

### Governance Reviews
**{{ review_count }}**

Completed this quarter

</div>

<div class="card" markdown>

### Templates Available
**{{ template_count }}**

Ready-to-use templates and checklists

</div>

</div>

## 🎯 Featured Content

### Essential Checklists

- [Pre-Kickoff Checklist](delivery-excellence/checklists/pre-kickoff.md) - Ensure project readiness
- [Kick-Off Checklist](delivery-excellence/checklists/kick-off.md) - Launch projects successfully
- [Induction Checklist](delivery-excellence/checklists/induction.md) - Onboard team members
- [Performance Review](delivery-excellence/checklists/performance.md) - Assess delivery performance

### Key Templates

- [QBR Template](delivery-excellence/templates/qbr.md) - Quarterly Business Review
- [MBR Template](delivery-excellence/templates/mbr.md) - Monthly Business Review
- [All Is Well Report](delivery-excellence/templates/all-is-well-report.md) - Status reporting

### Governance Frameworks

- [Architecture Value Board](delivery-governance/architecture-value-board/) - Technical governance
- [Program Value Board](delivery-governance/program-value-board/) - Program governance
- [Maturity Dashboard](delivery-governance/maturity-dashboard.md) - Performance tracking

## 🔧 Tools & Technologies

Our delivery management ecosystem integrates with:

- **SharePoint** - Document management and collaboration
- **Power BI** - Analytics and reporting
- **Azure DevOps** - Project management and tracking
- **Teams** - Communication and meetings
- **OneDrive** - File storage and sharing

## 📞 Support & Resources

### Need Help?

- **PMO Team**: pmo@accionlabs.com
- **Delivery Excellence**: delivery@accionlabs.com
- **Technical Support**: tech-support@accionlabs.com

### Quick Links

- [Induction Guide](delivery-excellence/induction-guide.md) - New to delivery management?
- [Review Process](delivery-governance/review-process.md) - Understanding governance reviews
- [Best Practices](delivery-governance/architecture-value-board/best-practices.md) - Industry best practices

## 🔄 Recent Activity

<div class="timeline" markdown>

### This Week
- Updated QBR template with new metrics
- Completed 5 delivery maturity assessments
- Published new induction checklist

### Last Week
- Conducted 3 Architecture Value Board reviews
- Updated Program Value Board framework
- Added 2 new performance templates

</div>

---

*Last updated: {{ git_revision_date_localized }}*

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.card {
  padding: 1.5rem;
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 0.5rem;
  background: var(--md-default-bg-color);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.timeline {
  border-left: 2px solid var(--md-primary-fg-color);
  padding-left: 1rem;
  margin: 2rem 0;
}

.timeline h3 {
  color: var(--md-primary-fg-color);
  margin-bottom: 0.5rem;
}
</style>
