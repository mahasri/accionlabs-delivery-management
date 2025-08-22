// Document Viewer Module for Delivery Excellence Portal

class DocumentViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentDocument = null;
        this.loadingTimeout = null;
        this.retryCount = 0;
        this.maxRetries = 3;
        
        this.init();
    }

    init() {
        if (!this.container) {
            console.error('Document viewer container not found');
            return;
        }
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Handle iframe load events
        this.container.addEventListener('load', (e) => {
            if (e.target.tagName === 'IFRAME') {
                this.handleIframeLoad(e.target);
            }
        }, true);

        // Handle iframe error events
        this.container.addEventListener('error', (e) => {
            if (e.target.tagName === 'IFRAME') {
                this.handleIframeError(e.target);
            }
        }, true);
    }

    async loadDocument(config) {
        try {
            this.currentDocument = config;
            this.retryCount = 0;
            
            this.showLoading();
            this.clearViewer();

            switch (config.type) {
                case 'pdf':
                    await this.loadPDF(config);
                    break;
                case 'excel':
                case 'word':
                case 'powerpoint':
                    await this.loadOfficeDocument(config);
                    break;
                case 'sharepoint':
                    await this.loadSharePointDocument(config);
                    break;
                case 'html':
                    await this.loadHTMLContent(config);
                    break;
                case 'image':
                    await this.loadImage(config);
                    break;
                default:
                    throw new Error(`Unsupported document type: ${config.type}`);
            }

            this.hideLoading();
            
        } catch (error) {
            console.error('Document loading failed:', error);
            this.showError(error.message);
        }
    }

    async loadPDF(config) {
        const iframe = this.createIframe(config);
        
        // Try multiple PDF viewing strategies
        const strategies = [
            () => this.loadPDFWithViewer(iframe, config),
            () => this.loadPDFDirect(iframe, config),
            () => this.loadPDFWithGoogleViewer(iframe, config)
        ];

        await this.tryStrategies(strategies, config);
    }

    async loadPDFWithViewer(iframe, config) {
        // Use PDF.js viewer if available
        const viewerUrl = 'assets/pdfjs/web/viewer.html';
        const pdfUrl = this.getDocumentUrl(config);
        iframe.src = `${viewerUrl}?file=${encodeURIComponent(pdfUrl)}`;
        this.container.appendChild(iframe);
    }

    async loadPDFDirect(iframe, config) {
        // Direct browser PDF viewer
        const pdfUrl = this.getDocumentUrl(config);
        iframe.src = `${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`;
        this.container.appendChild(iframe);
    }

    async loadPDFWithGoogleViewer(iframe, config) {
        // Google Docs Viewer fallback
        const pdfUrl = this.getDocumentUrl(config);
        iframe.src = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
        this.container.appendChild(iframe);
    }

    async loadOfficeDocument(config) {
        const iframe = this.createIframe(config);
        
        const strategies = [
            () => this.loadWithOfficeOnline(iframe, config),
            () => this.loadWithGoogleViewer(iframe, config),
            () => this.showDownloadOption(config)
        ];

        await this.tryStrategies(strategies, config);
    }

    async loadWithOfficeOnline(iframe, config) {
        // Microsoft Office Online Viewer
        const docUrl = this.getDocumentUrl(config);
        const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docUrl)}`;
        iframe.src = viewerUrl;
        this.container.appendChild(iframe);
    }

    async loadWithGoogleViewer(iframe, config) {
        // Google Docs Viewer
        const docUrl = this.getDocumentUrl(config);
        const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(docUrl)}&embedded=true`;
        iframe.src = viewerUrl;
        this.container.appendChild(iframe);
    }

    async loadSharePointDocument(config) {
        const iframe = this.createIframe(config);
        
        // SharePoint document embedding
        if (config.embedUrl) {
            iframe.src = config.embedUrl;
        } else {
            // Construct SharePoint embed URL
            const baseUrl = CONFIG.SHAREPOINT.BASE_URL;
            const embedUrl = `${baseUrl}/_layouts/15/Doc.aspx?sourcedoc=${config.documentId}&action=embedview`;
            iframe.src = embedUrl;
        }
        
        this.container.appendChild(iframe);
        
        // Handle SharePoint authentication if needed
        this.handleSharePointAuth(iframe);
    }

    async loadHTMLContent(config) {
        const content = config.content || await this.fetchContent(config.url);
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'document-content';
        contentDiv.innerHTML = content;
        
        this.container.appendChild(contentDiv);
    }

    async loadImage(config) {
        const img = document.createElement('img');
        img.src = this.getDocumentUrl(config);
        img.alt = config.title || 'Document image';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        
        this.container.appendChild(img);
    }

    createIframe(config) {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.title = config.title || 'Document viewer';
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('webkitallowfullscreen', 'true');
        iframe.setAttribute('mozallowfullscreen', 'true');
        
        return iframe;
    }

    getDocumentUrl(config) {
        if (config.url) {
            return config.url;
        } else if (config.path) {
            return `${CONFIG.GITHUB_BASE_URL}/docs/${config.path}`;
        } else {
            throw new Error('No URL or path specified for document');
        }
    }

    async tryStrategies(strategies, config) {
        for (let i = 0; i < strategies.length; i++) {
            try {
                await strategies[i]();
                return; // Success - exit
            } catch (error) {
                console.warn(`Strategy ${i + 1} failed:`, error);
                if (i === strategies.length - 1) {
                    throw error; // Last strategy failed
                }
                this.clearViewer(); // Clear before trying next strategy
            }
        }
    }

    async fetchContent(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.text();
    }

    handleIframeLoad(iframe) {
        console.log('Iframe loaded successfully');
        this.hideLoading();
        
        // Try to detect if the iframe actually loaded content
        setTimeout(() => {
            try {
                // This will throw an error for cross-origin iframes
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDoc.title === 'Error' || iframeDoc.body.innerText.includes('error')) {
                    throw new Error('Iframe loaded error page');
                }
            } catch (error) {
                // Cross-origin - assume success if no error event fired
                console.log('Cross-origin iframe - assuming success');
            }
        }, 1000);
    }

    handleIframeError(iframe) {
        console.error('Iframe failed to load');
        this.handleRetry();
    }

    handleSharePointAuth(iframe) {
        // Check for SharePoint authentication redirects
        iframe.onload = () => {
            try {
                const iframeLocation = iframe.contentWindow.location.href;
                if (iframeLocation.includes('login.microsoftonline.com')) {
                    this.showAuthenticationRequired();
                }
            } catch (error) {
                // Cross-origin restriction - normal behavior
                console.log('SharePoint document loaded (cross-origin)');
            }
        };
    }

    showAuthenticationRequired() {
        this.clearViewer();
        const authDiv = document.createElement('div');
        authDiv.className = 'auth-required';
        authDiv.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">🔐</div>
                <h3>Authentication Required</h3>
                <p>This SharePoint document requires authentication.</p>
                <button onclick="this.parentElement.parentElement.remove(); window.open('${this.currentDocument.url}', '_blank')" 
                        class="action-btn" style="margin-top: 20px;">
                    🌐 Open in SharePoint
                </button>
            </div>
        `;
        this.container.appendChild(authDiv);
    }

    showDownloadOption(config) {
        this.clearViewer();
        const downloadDiv = document.createElement('div');
        downloadDiv.className = 'download-option';
        downloadDiv.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">📄</div>
                <h3>Preview Not Available</h3>
                <p>This document cannot be previewed in the browser.</p>
                <button onclick="window.open('${this.getDocumentUrl(config)}', '_blank')" 
                        class="action-btn" style="margin-top: 20px;">
                    📥 Download ${config.title}
                </button>
            </div>
        `;
        this.container.appendChild(downloadDiv);
    }

    handleRetry() {
        if (this.retryCount < this.maxRetries) {
            this.retryCount++;
            console.log(`Retrying document load (${this.retryCount}/${this.maxRetries})`);
            setTimeout(() => {
                this.loadDocument(this.currentDocument);
            }, 1000 * this.retryCount); // Exponential backoff
        } else {
            this.showError('Failed to load document after multiple attempts');
        }
    }

    showLoading() {
        const loading = this.container.querySelector('.loading');
        if (loading) {
            loading.style.display = 'flex';
        }

        const placeholder = this.container.querySelector('.document-placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        // Set timeout for loading
        this.loadingTimeout = setTimeout(() => {
            this.hideLoading();
            this.showError('Document loading timeout');
        }, CONFIG.DOCUMENT_VIEWER.IFRAME_TIMEOUT);
    }

    hideLoading() {
        const loading = this.container.querySelector('.loading');
        if (loading) {
            loading.style.display = 'none';
        }

        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = null;
        }
    }

    showError(message) {
        this.clearViewer();
        const placeholder = this.container.querySelector('.document-placeholder');
        if (placeholder) {
            placeholder.style.display = 'flex';
            placeholder.innerHTML = `
                <div class="icon">❌</div>
                <h3>Document Load Error</h3>
                <p>${message}</p>
                <button onclick="location.reload()" class="action-btn" style="margin-top: 15px;">
                    🔄 Retry
                </button>
            `;
        }
    }

    clearViewer() {
        // Remove all content except loading and placeholder
        const elementsToRemove = this.container.querySelectorAll('iframe, .document-content, .auth-required, .download-option');
        elementsToRemove.forEach(element => element.remove());
    }

    // Public methods for external control
    downloadCurrentDocument() {
        if (this.currentDocument) {
            const url = this.getDocumentUrl(this.currentDocument);
            const link = document.createElement('a');
            link.href = url;
            link.download = this.currentDocument.filename || 'document';
            link.click();
        }
    }

    printCurrentDocument() {
        const iframe = this.container.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            try {
                iframe.contentWindow.print();
            } catch (error) {
                console.log('Cannot print cross-origin iframe, opening in new window');
                window.open(iframe.src, '_blank');
            }
        } else {
            window.print();
        }
    }

    enterFullscreen() {
        const iframe = this.container.querySelector('iframe');
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        } else {
            // Fallback: fullscreen the container
            if (this.container.requestFullscreen) {
                this.container.requestFullscreen();
            }
        }
    }

    getCurrentDocument() {
        return this.currentDocument;
    }

    isLoading() {
        const loading = this.container.querySelector('.loading');
        return loading && loading.style.display === 'flex';
    }
}

// Search functionality
class SearchManager {
    constructor() {
        this.searchIndex = [];
        this.searchResults = [];
        this.isOpen = false;
        
        this.init();
    }

    init() {
        this.buildSearchIndex();
        this.setupEventListeners();
    }

    buildSearchIndex() {
        // Build search index from content configuration
        Object.entries(CONTENT_CONFIG).forEach(([id, config]) => {
            this.searchIndex.push({
                id: id,
                title: config.title,
                subtitle: config.subtitle,
                type: config.type,
                icon: config.icon,
                searchText: `${config.title} ${config.subtitle}`.toLowerCase()
            });
        });
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const searchOverlay = document.getElementById('searchOverlay');
        
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.performSearch(e.target.value);
            }, 300));

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeSearch();
                } else if (e.key === 'Enter') {
                    this.selectFirstResult();
                }
            });
        }

        if (searchOverlay) {
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay) {
                    this.closeSearch();
                }
            });
        }
    }

    openSearch() {
        const searchOverlay = document.getElementById('searchOverlay');
        const searchInput = document.getElementById('searchInput');
        
        if (searchOverlay) {
            searchOverlay.classList.add('active');
            this.isOpen = true;
            
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    }

    closeSearch() {
        const searchOverlay = document.getElementById('searchOverlay');
        
        if (searchOverlay) {
            searchOverlay.classList.remove('active');
            this.isOpen = false;
            this.clearResults();
        }
    }

    performSearch(query) {
        if (query.length < CONFIG.SEARCH.MIN_QUERY_LENGTH) {
            this.clearResults();
            return;
        }

        const results = this.searchIndex.filter(item => 
            item.searchText.includes(query.toLowerCase())
        ).slice(0, CONFIG.SEARCH.MAX_RESULTS);

        this.displayResults(results, query);
    }

    displayResults(results, query) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div style="padding: 20px; text-align: center; color: #666;">
                    No results found for "${query}"
                </div>
            `;
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" 
                 onclick="loadContent('${result.id}'); window.app.toggleSearch();"
                 style="padding: 15px 20px; cursor: pointer; border-bottom: 1px solid #eee;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.2rem;">${result.icon}</span>
                    <div>
                        <div style="font-weight: 500; color: #3f51b5;">${this.highlightMatch(result.title, query)}</div>
                        <div style="font-size: 0.9rem; color: #666;">${this.highlightMatch(result.subtitle, query)}</div>
                    </div>
                </div>
            </div>
        `).join('');

        searchResults.innerHTML = resultsHTML;
    }

    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    selectFirstResult() {
        const firstResult = document.querySelector('.search-result-item');
        if (firstResult) {
            firstResult.click();
        }
    }

    clearResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.innerHTML = '';
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize search
let searchManager;
function toggleSearch() {
    if (!searchManager) {
        searchManager = new SearchManager();
    }
    
    if (searchManager.isOpen) {
        searchManager.closeSearch();
    } else {
        searchManager.openSearch();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DocumentViewer, SearchManager };
}
