// Main Application Module for Delivery Excellence Portal

class DeliveryExcellenceApp {
    constructor() {
        this.initialized = false;
        this.components = {};
        this.state = {
            currentSection: 'overview',
            sidebarCollapsed: false,
            rightSidebarCollapsed: false,
            mobileMenuOpen: false,
            searchOpen: false
        };
    }

    async init() {
        if (this.initialized) return;

        try {
            console.log('🚀 Initializing Delivery Excellence Portal...');
            
            // Initialize components
            await this.initializeComponents();
            
            // Setup global handlers
            this.setupGlobalHandlers();
            
            // Setup utilities
            this.setupUtilities();
            
            // Load initial content
            this.loadInitialContent();
            
            // Mark as initialized
            this.initialized = true;
            
            console.log('✅ Delivery Excellence Portal initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize portal:', error);
            this.showInitializationError(error);
        }
    }

    async initializeComponents() {
        // Initialize content loader
        if (typeof ContentLoader !== 'undefined') {
            this.components.contentLoader = new ContentLoader();
        }

        // Initialize navigation manager
        if (typeof NavigationManager !== 'undefined') {
            this.components.navigationManager = new NavigationManager();
        }

        // Initialize document viewer
        if (typeof DocumentViewer !== 'undefined') {
            this.components.documentViewer = new DocumentViewer('documentViewer');
        }

        console.log('📦 Components initialized:', Object.keys(this.components));
    }

    setupGlobalHandlers() {
        // Global error handler
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
            this.handleError(event.error);
        });

        // Global unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            this.handleError(event.reason);
        });

        // Global click handler for external links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="http"]')) {
                e.target.setAttribute('target', '_blank');
                e.target.setAttribute('rel', 'noopener noreferrer');
            }
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleGlobalKeydown(e);
        });

        // Visibility change handler (for analytics, etc.)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('📱 Page hidden');
            } else {
                console.log('📱 Page visible');
            }
        });
    }

    setupUtilities() {
        // Setup smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        // Setup focus management
        this.setupFocusManagement();

        // Setup print styles
        this.setupPrintHandling();

        // Setup performance monitoring
        this.setupPerformanceMonitoring();
    }

    setupFocusManagement() {
        // Track focus for accessibility
        let focusedElement = null;
        
        document.addEventListener('focusin', (e) => {
            focusedElement = e.target;
        });

        // Restore focus after modal/overlay closes
        window.restoreFocus = () => {
            if (focusedElement && document.contains(focusedElement)) {
                focusedElement.focus();
            }
        };
    }

    setupPrintHandling() {
        window.addEventListener('beforeprint', () => {
            console.log('🖨️ Preparing for print...');
            document.body.classList.add('printing');
        });

        window.addEventListener('afterprint', () => {
            console.log('🖨️ Print dialog closed');
            document.body.classList.remove('printing');
        });
    }

    setupPerformanceMonitoring() {
        // Monitor large DOM mutations
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 10) {
                        console.warn('⚠️ Large DOM mutation detected:', mutation.addedNodes.length);
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        // Monitor memory usage (if available)
        if (performance.memory) {
            setInterval(() => {
                const memInfo = performance.memory;
                if (memInfo.usedJSHeapSize > memInfo.totalJSHeapSize * 0.9) {
                    console.warn('⚠️ High memory usage detected');
                }
            }, 30000); // Check every 30 seconds
        }
    }

    loadInitialContent() {
        // Check URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get('section') || 'overview';
        
        // Load the requested section
        if (this.components.contentLoader) {
            this.components.contentLoader.loadContent(section);
        } else {
            // Fallback if content loader not available
            this.showFallbackContent(section);
        }
    }

    handleGlobalKeydown(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            this.toggleSearch();
        }

        // F11 for fullscreen
        if (e.key === 'F11') {
            e.preventDefault();
            this.toggleFullscreen();
        }

        // Alt + H for help
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            this.showHelp();
        }
    }

    handleError(error) {
        // Log error details
        console.error('Application error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        });

        // Show user-friendly error message
        this.showErrorNotification(error.message);
    }

    showInitializationError(error) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'initialization-error';
        errorContainer.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                text-align: center;
                z-index: 10000;
            ">
                <h2 style="color: #f44336; margin-bottom: 15px;">⚠️ Initialization Error</h2>
                <p style="margin-bottom: 20px;">The portal failed to initialize properly.</p>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">${error.message}</p>
                <button onclick="location.reload()" style="
                    background: #3f51b5;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                ">Reload Page</button>
            </div>
        `;
        document.body.appendChild(errorContainer);
    }

    showErrorNotification(message) {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #f44336;
                color: white;
                padding: 15px 20px;
                border-radius: 4px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 9999;
                max-width: 400px;
            ">
                <strong>Error:</strong> ${message}
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    float: right;
                    cursor: pointer;
                    font-size: 18px;
                    margin-left: 10px;
                ">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (document.contains(notification)) {
                notification.remove();
            }
        }, 5000);
    }

    showFallbackContent(section) {
        const contentTitle = document.getElementById('contentTitle');
        const contentSubtitle = document.getElementById('contentSubtitle');
        const documentViewer = document.getElementById('documentViewer');
        
        if (contentTitle) contentTitle.textContent = 'Delivery Excellence Portal';
        if (contentSubtitle) contentSubtitle.textContent = 'Loading...';
        
        if (documentViewer) {
            documentViewer.innerHTML = `
                <div class="document-placeholder" style="display: flex;">
                    <div class="icon">🏆</div>
                    <h3>Welcome to Delivery Excellence Portal</h3>
                    <p>The portal is initializing. Please wait a moment...</p>
                </div>
            `;
        }
    }

    toggleSearch() {
        this.state.searchOpen = !this.state.searchOpen;
        const searchOverlay = document.getElementById('searchOverlay');
        
        if (searchOverlay) {
            if (this.state.searchOpen) {
                searchOverlay.classList.add('active');
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            } else {
                searchOverlay.classList.remove('active');
                window.restoreFocus();
            }
        }
    }

    toggleFullscreen() {
        const documentViewer = document.getElementById('documentViewer');
        const iframe = documentViewer?.querySelector('iframe');
        
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        } else if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    showHelp() {
        const helpContent = `
            <h3>🔧 Keyboard Shortcuts</h3>
            <ul>
                <li><strong>Ctrl/Cmd + K:</strong> Search content</li>
                <li><strong>Ctrl/Cmd + B:</strong> Toggle table of contents</li>
                <li><strong>Alt + 1-9:</strong> Navigate to sections</li>
                <li><strong>F11:</strong> Fullscreen document viewer</li>
                <li><strong>Esc:</strong> Close modals/menus</li>
            </ul>
            
            <h3>📱 Navigation Tips</h3>
            <ul>
                <li>Hover over the left sidebar to see full navigation labels</li>
                <li>Use the table of contents on the right to jump to sections</li>
                <li>Click the TOC button in the header to collapse/expand it</li>
                <li>All documents open within the page for seamless browsing</li>
            </ul>
            
            <h3>🔗 Quick Links</h3>
            <ul>
                <li><a href="#" onclick="loadContent('governance')">Governance Framework</a></li>
                <li><a href="#" onclick="loadContent('templates')">Templates & Documents</a></li>
                <li><a href="#" onclick="loadContent('guides')">Process Guides</a></li>
            </ul>
        `;
        
        this.showModal('Help & Support', helpContent);
    }

    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'help-modal';
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            ">
                <div style="
                    background: white;
                    border-radius: 8px;
                    padding: 30px;
                    max-width: 600px;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                ">
                    <h2 style="margin-bottom: 20px; color: var(--primary-color);">${title}</h2>
                    <div>${content}</div>
                    <button onclick="this.closest('.help-modal').remove(); window.restoreFocus();" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #666;
                    ">×</button>
                    <button onclick="this.closest('.help-modal').remove(); window.restoreFocus();" style="
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-top: 20px;
                    ">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Handle escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                window.restoreFocus();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    // Utility methods
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

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Public API
    getState() {
        return { ...this.state };
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    reload() {
        location.reload();
    }
}

// Global functions for HTML onclick handlers
function toggleMobileMenu() {
    if (window.app?.components?.navigationManager) {
        window.app.components.navigationManager.toggleMobileMenu();
    }
}

function toggleRightSidebar() {
    if (window.app?.components?.navigationManager) {
        window.app.components.navigationManager.toggleRightSidebar();
    }
}

function toggleSearch() {
    if (window.app) {
        window.app.toggleSearch();
    }
}

function fullScreenDocument() {
    if (window.app) {
        window.app.toggleFullscreen();
    }
}

function openExternalLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

function downloadResource(resourceId) {
    console.log('Downloading resource:', resourceId);
    // Implementation for resource downloads
}

function loadContent(contentId) {
    if (window.app?.components?.contentLoader) {
        window.app.components.contentLoader.loadContent(contentId);
    }
}

function scrollToSection(sectionId) {
    if (window.app?.components?.navigationManager) {
        window.app.components.navigationManager.scrollToSection(sectionId);
    }
}

function toggleTocSection(header) {
    if (window.app?.components?.navigationManager) {
        window.app.components.navigationManager.toggleTocSection(header);
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    window.app = new DeliveryExcellenceApp();
    await window.app.init();
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.app) {
        // Page became visible - refresh if needed
        console.log('Page became visible');
    }
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeliveryExcellenceApp;
}
