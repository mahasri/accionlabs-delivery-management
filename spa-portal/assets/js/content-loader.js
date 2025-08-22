// Content Loader Module for Delivery Excellence Portal

class ContentLoader {
    constructor() {
        this.cache = new Map();
        this.currentContent = null;
        this.loadingTimeout = null;
    }

    /**
     * Load content based on content ID
     * @param {string} contentId - The ID of the content to load
     */
    async loadContent(contentId) {
        const config = CONTENT_CONFIG[contentId];
        
        if (!config) {
            console.error('Content configuration not found:', contentId);
            this.showErrorState('Content not found');
            return;
        }

        try {
            this.showLoadingState();
            this.currentContent = contentId;

            // Update UI state
            this.updateNavigationState(contentId);
            this.updatePageTitle(config);
            this.updateBreadcrumb(config);

            // Load content based on type
            switch (config.type) {
                case 'overview':
                    this.loadOverviewContent(config);
                    break;
                case 'markdown':
                    await this.loadMarkdownContent(config);
                    break;
                case 'excel':
                case 'word':
                case 'powerpoint':
                    this.loadOfficeDocument(config);
                    break;
                case 'pdf':
                    this.loadPDFDocument(config);
                    break;
                case 'template-list':
                case 'checklist-list':
                case 'guide-list':
                    await this.loadListContent(config);
                    break;
                case 'placeholder':
                    this.loadPlaceholderContent(config);
                    break;
                default:
                    await this.loadMarkdownContent(config);
            }

            // Update table of contents
            this.updateTableOfContents(config);

        } catch (error) {
            console.error('Error loading content:', error);
            this.showErrorState(error.message);
        } finally {
            this.hideLoadingState();
        }
    }

    /**
     * Load overview content with cards
     */
    loadOverviewContent(config) {
        document.getElementById('contentCards').style.display = 'grid';
        document.getElementById('quickActions').style.display = 'flex';
        
        const viewer = document.getElementById('documentViewer');
        const placeholder = document.getElementById('documentPlaceholder');
        
        // Clear any existing content
        this.clearDocumentViewer();
        
        // Show welcome placeholder
        placeholder.style.display = 'flex';
        placeholder.innerHTML = `
            <div class="icon">🏆</div>
            <h3>Welcome to Delivery Excellence Portal</h3>
            <p>Your comprehensive resource for delivery governance, best practices, and operational excellence</p>
            <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-secondary);">
                Navigate using the sidebar or click on the cards above to explore different sections
            </p>
        `;
    }

    /**
     * Load markdown content from file
     */
    async loadMarkdownContent(config) {
        document.getElementById('contentCards').style.display = 'none';
        
        try {
            // Check cache first
            let content = this.cache.get(config.path);
            
            if (!content) {
                const response = await fetch(`${CONFIG.CONTENT_BASE_PATH}/${config.path}`);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                content = await response.text();
                this.cache.set(config.path, content);
            }

            // Convert markdown to HTML and display
            const htmlContent = this.convertMarkdownToHTML(content);
            this.displayHTMLContent(htmlContent);

        } catch (error) {
            console.error('Error loading markdown:', error);
            // Show sample content as fallback
            this.displaySampleContent(config);
        }
    }

    /**
     * Load Office documents (Excel, Word, PowerPoint)
     */
    loadOfficeDocument(config) {
        document.getElementById('contentCards').style.display = 'none';
        
        const viewer = document.getElementById('documentViewer');
        this.clearDocumentViewer();

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.title = config.title;

        // Use provided URL or construct Office Online URL
        if (config.url) {
            iframe.src = config.url;
        } else {
            const fileUrl = `${CONFIG.GITHUB_BASE_URL}/docs/${config.path}`;
            iframe.src = `${CONFIG.DOCUMENT_VIEWER.OFFICE_ONLINE_BASE}?src=${encodeURIComponent(fileUrl)}`;
        }

        viewer.appendChild(iframe);

        // Handle iframe loading
        iframe.onload = () => {
            console.log('Office document loaded successfully');
        };

        iframe.onerror = () => {
            this.showErrorState('Failed to load Office document');
        };
    }

    /**
     * Load PDF documents
     */
    loadPDFDocument(config) {
        document.getElementById('contentCards').style.display = 'none';
        
        const viewer = document.getElementById('documentViewer');
        this.clearDocumentViewer();

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.title = config.title;

        const pdfUrl = config.url || `${CONFIG.GITHUB_BASE_URL}/docs/${config.path}`;
        iframe.src = `${pdfUrl}${CONFIG.DOCUMENT_VIEWER.PDF_VIEWER_OPTIONS}`;

        viewer.appendChild(iframe);
    }

    /**
     * Load list content (templates, checklists, guides)
     */
    async loadListContent(config) {
        document.getElementById('contentCards').style.display = 'none';
        
        let listItems = [];
        
        if (config.templates) listItems = config.templates;
        else if (config.checklists) listItems = config.checklists;
        else if (config.guides) listItems = config.guides;

        const htmlContent = this.generateListHTML(config, listItems);
        this.displayHTMLContent(htmlContent);
    }

    /**
     * Load placeholder content for coming soon sections
     */
    loadPlaceholderContent(config) {
        document.getElementById('contentCards').style.display = 'none';
        
        const viewer = document.getElementById('documentViewer');
        const placeholder = document.getElementById('documentPlaceholder');
        
        this.clearDocumentViewer();
        placeholder.style.display = 'flex';
        placeholder.innerHTML = `
            <div class="icon">🚧</div>
            <h3>${config.title}</h3>
            <p>${config.subtitle}</p>
            <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-secondary);">
                This section will be available soon. The Delivery Handbook will be integrated into this portal in the upcoming release.
            </p>
        `;
    }

    /**
     * Display sample content as fallback
     */
    displaySampleContent(config) {
        const sampleContent = this.getSampleContent(config.title);
        this.displayHTMLContent(sampleContent);
    }

    /**
     * Generate HTML for list-type content
     */
    generateListHTML(config, items) {
        const itemsHTML = items.map(item => {
            const typeIcon = this.getTypeIcon(item.type);
            return `
                <div class="content-card" onclick="loadDocument('${item.path}', '${item.type}')">
                    <h4>${typeIcon} ${item.name}</h4>
                    <p>Click to view or download this ${item.type || 'document'}</p>
                </div>
            `;
        }).join('');

        return `
            <div class="document-content">
                <h1>${config.title}</h1>
                <p>${config.subtitle}</p>
                <div class="content-cards" style="display: grid; margin-top: 30px;">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }

    /**
     * Get icon for document type
     */
    getTypeIcon(type) {
        const icons = {
            'excel': '📊',
            'word': '📄',
            'powerpoint': '📋',
            'pdf': '📕',
            'markdown': '📝'
        };
        return icons[type] || '📄';
    }

    /**
     * Convert markdown to HTML (basic implementation)
     */
    convertMarkdownToHTML(markdown) {
        return markdown
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em>$1</em>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
            .replace(/^- (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(?!<[hul])/gim, '<p>')
            .replace(/(?![hul]>)$/gim, '</p>');
    }

    /**
     * Display HTML content in the document viewer
     */
    displayHTMLContent(htmlContent) {
        const viewer = document.getElementById('documentViewer');
        this.clearDocumentViewer();

        const contentDiv = document.createElement('div');
        contentDiv.className = 'document-content';
        contentDiv.innerHTML = htmlContent;
        
        viewer.appendChild(contentDiv);
    }

    /**
     * Get sample content for fallback display
     */
    getSampleContent(title) {
        const sampleContents = {
            'Governance Framework': `
                <h1>Governance Framework</h1>
                <h2>Overview</h2>
                <p>Our governance framework ensures consistent delivery quality across all projects through structured reviews, standardized processes, and continuous improvement.</p>
                
                <h2>Key Components</h2>
                <ul>
                    <li><strong>Architecture Value Board (AVB):</strong> Technical architecture reviews</li>
                    <li><strong>Program Value Board (PVB):</strong> Program-level governance</li>
                    <li><strong>Quality Assurance:</strong> Continuous quality monitoring</li>
                    <li><strong>Risk Management:</strong> Proactive risk identification and mitigation</li>
                </ul>
                
                <h2>Review Process</h2>
                <ol>
                    <li><strong>Initial Assessment:</strong> Project scope and complexity evaluation</li>
                    <li><strong>Architecture Review:</strong> Technical design validation</li>
                    <li><strong>Milestone Reviews:</strong> Regular progress and quality checks</li>
                    <li><strong>Final Assessment:</strong> Delivery quality and lessons learned</li>
                </ol>
            `,
            'Architecture Value Board': `
                <h1>Architecture Value Board (AVB)</h1>
                <h2>Purpose</h2>
                <p>The Architecture Value Board ensures technical excellence and consistency across all delivery projects through systematic architecture reviews and technology standardization.</p>
                
                <h2>Review Scope</h2>
                <ul>
                    <li><strong>Technical Architecture:</strong> System design and technology choices</li>
                    <li><strong>Security Framework:</strong> Security architecture and compliance</li>
                    <li><strong>Performance Standards:</strong> Scalability and performance criteria</li>
                    <li><strong>Integration Patterns:</strong> System integration approaches</li>
                </ul>
                
                <h2>Tools & Technologies</h2>
                <p>Recommended technology stack and tools:</p>
                <ul>
                    <li><strong>Frontend:</strong> React, Angular, Vue.js</li>
                    <li><strong>Backend:</strong> Node.js, .NET Core, Java Spring</li>
                    <li><strong>Database:</strong> PostgreSQL, MongoDB, SQL Server</li>
                    <li><strong>Cloud:</strong> AWS, Azure, Google Cloud</li>
                </ul>
            `,
            'Program Value Board': `
                <h1>Program Value Board (PVB)</h1>
                <h2>Overview</h2>
                <p>The Program Value Board focuses on program-level governance, ensuring alignment with business objectives and maximizing value delivery across all projects.</p>
                
                <h2>Key Responsibilities</h2>
                <ul>
                    <li><strong>Value Assessment:</strong> Measuring and tracking value delivery</li>
                    <li><strong>Resource Optimization:</strong> Efficient resource allocation</li>
                    <li><strong>Risk Management:</strong> Program-level risk identification and mitigation</li>
                    <li><strong>Stakeholder Alignment:</strong> Ensuring stakeholder satisfaction</li>
                </ul>
                
                <h2>Process Metrics</h2>
                <p>Key metrics tracked by PVB:</p>
                <ul>
                    <li><strong>Delivery Metrics:</strong> On-time delivery, quality scores</li>
                    <li><strong>Financial Metrics:</strong> Budget adherence, cost optimization</li>
                    <li><strong>Customer Metrics:</strong> Satisfaction scores, NPS</li>
                    <li><strong>Team Metrics:</strong> Productivity, engagement, retention</li>
                </ul>
            `
        };

        return sampleContents[title] || `
            <h1>${title}</h1>
            <p>Content for ${title} is being loaded. Please check back later for updates.</p>
        `;
    }

    /**
     * Update navigation state
     */
    updateNavigationState(contentId) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current item
        const activeItem = document.querySelector(`[onclick="loadContent('${contentId}')"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    /**
     * Update page title and subtitle
     */
    updatePageTitle(config) {
        document.getElementById('contentTitle').textContent = config.title;
        document.getElementById('contentSubtitle').textContent = config.subtitle;
        document.title = `${config.title} - Delivery Excellence Portal`;
    }

    /**
     * Update breadcrumb navigation
     */
    updateBreadcrumb(config) {
        const breadcrumb = document.getElementById('breadcrumb');
        const currentPage = document.getElementById('currentPage');
        if (currentPage) {
            currentPage.textContent = config.title;
        }
    }

    /**
     * Update table of contents
     */
    updateTableOfContents(config) {
        const tocContent = document.getElementById('tocContent');
        if (!tocContent || !config.toc) return;

        const tocHTML = config.toc.map(item => `
            <div class="toc-item" onclick="scrollToSection('${item.id}')">
                ${item.title}
            </div>
        `).join('');

        tocContent.innerHTML = `
            <div class="toc-section expanded">
                <div class="toc-section-header">
                    <span>${config.icon} ${config.title}</span>
                    <span>▼</span>
                </div>
                <div class="toc-items">
                    ${tocHTML}
                </div>
            </div>
        `;
    }

    /**
     * Clear document viewer
     */
    clearDocumentViewer() {
        const viewer = document.getElementById('documentViewer');
        const placeholder = document.getElementById('documentPlaceholder');
        const loading = document.getElementById('loading');
        
        // Remove any existing content except placeholder and loading
        const existingContent = viewer.querySelectorAll('iframe, .document-content');
        existingContent.forEach(element => element.remove());
        
        placeholder.style.display = 'none';
        loading.style.display = 'none';
    }

    /**
     * Show loading state
     */
    showLoadingState() {
        const loading = document.getElementById('loading');
        const placeholder = document.getElementById('documentPlaceholder');
        
        loading.style.display = 'flex';
        placeholder.style.display = 'none';
        
        // Clear any existing timeout
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        
        // Set loading timeout
        this.loadingTimeout = setTimeout(() => {
            this.hideLoadingState();
            this.showErrorState('Loading timeout');
        }, CONFIG.DOCUMENT_VIEWER.IFRAME_TIMEOUT);
    }

    /**
     * Hide loading state
     */
    hideLoadingState() {
        const loading = document.getElementById('loading');
        loading.style.display = 'none';
        
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = null;
        }
    }

    /**
     * Show error state
     */
    showErrorState(message) {
        const viewer = document.getElementById('documentViewer');
        const placeholder = document.getElementById('documentPlaceholder');
        
        this.clearDocumentViewer();
        placeholder.style.display = 'flex';
        placeholder.innerHTML = `
            <div class="icon">❌</div>
            <h3>Content Unavailable</h3>
            <p>${message}</p>
            <button class="action-btn" onclick="location.reload()" style="margin-top: 15px;">
                🔄 Retry
            </button>
        `;
    }
}

// Initialize content loader
const contentLoader = new ContentLoader();

// Global function for loading content (called from HTML)
function loadContent(contentId) {
    contentLoader.loadContent(contentId);
}

// Global function for loading documents directly
function loadDocument(path, type) {
    console.log('Loading document:', path, type);
    // Implementation for direct document loading
}
