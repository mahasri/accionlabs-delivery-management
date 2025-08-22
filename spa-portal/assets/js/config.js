// Configuration for Delivery Excellence Portal

const CONFIG = {
    // API endpoints
    API_BASE_URL: '',
    GITHUB_BASE_URL: 'https://raw.githubusercontent.com/mahasri/accionlabs-delivery-management/main',
    
    // SharePoint configuration
    SHAREPOINT: {
        BASE_URL: 'https://accionlabs.sharepoint.com',
        SITE_COLLECTION: '/sites/delivery',
        DOCUMENT_LIBRARY: '/Shared Documents'
    },
    
    // Content paths
    CONTENT_BASE_PATH: '../docs',
    
    // UI settings
    SIDEBAR: {
        COLLAPSED_WIDTH: '60px',
        EXPANDED_WIDTH: '280px',
        AUTO_COLLAPSE_BREAKPOINT: 768
    },
    
    // Document viewer settings
    DOCUMENT_VIEWER: {
        OFFICE_ONLINE_BASE: 'https://view.officeapps.live.com/op/embed.aspx',
        PDF_VIEWER_OPTIONS: '#toolbar=1&navpanes=0&scrollbar=1',
        IFRAME_TIMEOUT: 10000
    },
    
    // Search configuration
    SEARCH: {
        MIN_QUERY_LENGTH: 2,
        MAX_RESULTS: 20,
        DEBOUNCE_DELAY: 300
    },
    
    // Analytics (if needed)
    ANALYTICS: {
        ENABLED: false,
        GOOGLE_ANALYTICS_ID: ''
    }
};

// Content configuration - mapping of content IDs to their metadata
const CONTENT_CONFIG = {
    'overview': {
        title: 'Delivery Excellence Overview',
        subtitle: 'Comprehensive governance framework and best practices for delivery excellence',
        type: 'overview',
        showCards: true,
        icon: '🏆',
        toc: [
            { id: 'welcome', title: 'Welcome', level: 1 },
            { id: 'features', title: 'Key Features', level: 1 },
            { id: 'getting-started', title: 'Getting Started', level: 1 },
            { id: 'quick-access', title: 'Quick Access', level: 1 }
        ]
    },
    
    'governance': {
        title: 'Governance Framework',
        subtitle: 'Structured approach to project governance and quality assurance',
        type: 'markdown',
        path: 'delivery-excellence/governance-framework.md',
        icon: '🏛️',
        toc: [
            { id: 'overview', title: 'Overview', level: 1 },
            { id: 'components', title: 'Key Components', level: 1 },
            { id: 'review-process', title: 'Review Process', level: 1 },
            { id: 'activities', title: 'Governance Activities', level: 1 }
        ]
    },
    
    'architecture-board': {
        title: 'Architecture Value Board',
        subtitle: 'Technical architecture reviews and design guidelines',
        type: 'markdown',
        path: 'delivery-excellence/architecture-value-board/index.md',
        icon: '🏗️',
        toc: [
            { id: 'purpose', title: 'Purpose', level: 1 },
            { id: 'scope', title: 'Review Scope', level: 1 },
            { id: 'tools', title: 'Tools & Technologies', level: 1 },
            { id: 'process', title: 'Review Process', level: 1 },
            { id: 'best-practices', title: 'Best Practices', level: 1 }
        ]
    },
    
    'program-board': {
        title: 'Program Value Board',
        subtitle: 'Program-level governance and value delivery assessment',
        type: 'markdown',
        path: 'delivery-excellence/program-value-board/index.md',
        icon: '📋',
        toc: [
            { id: 'overview', title: 'Overview', level: 1 },
            { id: 'responsibilities', title: 'Key Responsibilities', level: 1 },
            { id: 'metrics', title: 'Process Metrics', level: 1 },
            { id: 'methodology', title: 'Review Methodology', level: 1 },
            { id: 'team', title: 'Team Structure', level: 1 }
        ]
    },
    
    'maturity-dashboard': {
        title: 'Maturity Dashboard',
        subtitle: 'Real-time project maturity and performance indicators',
        type: 'excel',
        url: 'https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/mahasri/accionlabs-delivery-management/raw/main/docs/delivery-excellence/templates/project-estimation-template.xlsx',
        icon: '📈',
        downloadUrl: 'https://github.com/mahasri/accionlabs-delivery-management/raw/main/docs/delivery-excellence/templates/project-estimation-template.xlsx'
    },
    
    'qbr': {
        title: 'Quarterly Business Review (QBR)',
        subtitle: 'Quarterly business review processes and templates',
        type: 'markdown',
        path: 'delivery-excellence/qbr.md',
        icon: '📊',
        templates: [
            {
                name: 'QBR Template',
                type: 'powerpoint',
                path: 'delivery-excellence/templates/qbr.pptx'
            }
        ]
    },
    
    'bi-weekly-mbr': {
        title: 'Bi-weekly MBR',
        subtitle: 'Monthly business review processes and guidelines',
        type: 'markdown',
        path: 'delivery-excellence/bi-weekly-mbr.md',
        icon: '📈',
        templates: [
            {
                name: 'MBR Template',
                type: 'powerpoint',
                path: 'delivery-excellence/templates/mbr.md'
            }
        ]
    },
    
    'templates': {
        title: 'Templates & Documents',
        subtitle: 'Standard templates for project management and reporting',
        type: 'template-list',
        path: 'delivery-excellence/templates/index.md',
        icon: '📄',
        templates: [
            { name: 'Project Charter', type: 'word', path: 'delivery-excellence/templates/project-charter.md' },
            { name: 'Risk Register', type: 'excel', path: 'delivery-excellence/templates/risk-register.xlsx' },
            { name: 'QBR Template', type: 'powerpoint', path: 'delivery-excellence/templates/qbr.pptx' },
            { name: 'All Is Well Report', type: 'word', path: 'delivery-excellence/templates/all-is-well-report.md' }
        ]
    },
    
    'checklists': {
        title: 'Checklists',
        subtitle: 'Quality assurance and review checklists',
        type: 'checklist-list',
        path: 'delivery-excellence/checklists/index.md',
        icon: '✅',
        checklists: [
            { name: 'EDC Checklist', path: 'delivery-excellence/checklists/edc.md' },
            { name: 'Architecture Review', path: 'delivery-excellence/checklists/architecture-development-review.md' },
            { name: 'Release Checklist', path: 'delivery-excellence/checklists/release-checklist.md' }
        ]
    },
    
    'guides': {
        title: 'Process Guides',
        subtitle: 'Step-by-step operational procedures',
        type: 'guide-list',
        path: 'delivery-excellence/guides/index.md',
        icon: '📚',
        guides: [
            { name: 'Induction Guide', type: 'pdf', path: 'delivery-excellence/guides/induction-guide.pdf' },
            { name: 'Disaster Management', type: 'markdown', path: 'delivery-excellence/guides/disaster-management-dr-approach.md' },
            { name: 'Manager Handbook', type: 'powerpoint', path: 'delivery-excellence/guides/manager-handbook-by-hr.pptx' }
        ]
    },
    
    'handbook': {
        title: 'Delivery Handbook',
        subtitle: 'Complete delivery methodology (Coming Soon)',
        type: 'placeholder',
        icon: '📖',
        comingSoon: true
    }
};

// Navigation structure
const NAVIGATION_STRUCTURE = [
    {
        section: 'core',
        title: 'Delivery Excellence Core',
        items: ['overview', 'governance', 'architecture-board', 'program-board', 'maturity-dashboard', 'qbr', 'bi-weekly-mbr']
    },
    {
        section: 'resources',
        title: 'Templates & Resources',
        items: ['templates', 'checklists', 'guides']
    },
    {
        section: 'future',
        title: 'Future Additions',
        items: ['handbook']
    }
];

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, CONTENT_CONFIG, NAVIGATION_STRUCTURE };
} else {
    window.CONFIG = CONFIG;
    window.CONTENT_CONFIG = CONTENT_CONFIG;
    window.NAVIGATION_STRUCTURE = NAVIGATION_STRUCTURE;
}
