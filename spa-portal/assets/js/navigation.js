// Navigation Module for Delivery Excellence Portal

class NavigationManager {
    constructor() {
        this.currentSection = 'overview';
        this.mobileMenuOpen = false;
        this.rightSidebarCollapsed = false;
        this.isMobile = window.innerWidth <= 768;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        this.setupResponsiveHandlers();
        
        // Initialize with overview
        this.loadContent('overview');
    }

    setupEventListeners() {
        // Mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.matches('[onclick*="toggleMobileMenu"]')) {
                e.preventDefault();
                this.toggleMobileMenu();
            }
        });

        // Right sidebar toggle
        document.addEventListener('click', (e) => {
            if (e.target.matches('[onclick*="toggleRightSidebar"]')) {
                e.preventDefault();
                this.toggleRightSidebar();
            }
        });

        // Content navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[onclick*="loadContent"]')) {
                e.preventDefault();
                const onclick = e.target.getAttribute('onclick');
                const match = onclick.match(/loadContent\('([^']+)'\)/);
                if (match) {
                    this.loadContent(match[1]);
                }
            }
        });

        // TOC section toggles
        document.addEventListener('click', (e) => {
            if (e.target.matches('.toc-section-header') || e.target.closest('.toc-section-header')) {
                e.preventDefault();
                const header = e.target.closest('.toc-section-header') || e.target;
                this.toggleTocSection(header);
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('leftSidebar');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            if (this.mobileMenuOpen && 
                !sidebar.contains(e.target) && 
                !toggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Escape to close mobile menu
            if (e.key === 'Escape' && this.mobileMenuOpen) {
                this.toggleMobileMenu();
            }

            // Navigation shortcuts (Alt + number)
            if (e.altKey && !isNaN(e.key) && e.key >= '1' && e.key <= '9') {
                e.preventDefault();
                const navItems = document.querySelectorAll('.nav-item[onclick*="loadContent"]');
                const index = parseInt(e.key) - 1;
                if (navItems[index]) {
                    const onclick = navItems[index].getAttribute('onclick');
                    const match = onclick.match(/loadContent\('([^']+)'\)/);
                    if (match) {
                        this.loadContent(match[1]);
                    }
                }
            }

            // Toggle sidebar with Ctrl/Cmd + B
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                this.toggleRightSidebar();
            }
        });
    }

    setupResponsiveHandlers() {
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;

            // Handle mobile/desktop transitions
            if (wasMobile && !this.isMobile) {
                // Moving from mobile to desktop
                if (this.mobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            } else if (!wasMobile && this.isMobile) {
                // Moving from desktop to mobile
                if (!this.rightSidebarCollapsed) {
                    this.rightSidebarCollapsed = true;
                    document.getElementById('rightSidebar').classList.add('collapsed');
                }
            }

            // Auto-show right sidebar on large screens
            if (window.innerWidth > 1200 && this.rightSidebarCollapsed) {
                this.rightSidebarCollapsed = false;
                document.getElementById('rightSidebar').classList.remove('collapsed');
            }
        });
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('leftSidebar');
        this.mobileMenuOpen = !this.mobileMenuOpen;
        
        if (this.mobileMenuOpen) {
            sidebar.classList.add('mobile-open');
        } else {
            sidebar.classList.remove('mobile-open');
        }

        // Update aria attributes for accessibility
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (toggle) {
            toggle.setAttribute('aria-expanded', this.mobileMenuOpen);
        }
    }

    toggleRightSidebar() {
        const sidebar = document.getElementById('rightSidebar');
        this.rightSidebarCollapsed = !this.rightSidebarCollapsed;
        
        if (this.rightSidebarCollapsed) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }

        // Adjust main content margin
        this.updateMainContentMargins();
    }

    toggleTocSection(header) {
        const section = header.parentElement;
        const isExpanded = section.classList.contains('expanded');
        const arrow = header.querySelector('span:last-child');
        
        // Close all other sections first
        document.querySelectorAll('.toc-section').forEach(s => {
            if (s !== section) {
                s.classList.remove('expanded');
                const otherArrow = s.querySelector('.toc-section-header span:last-child');
                if (otherArrow) otherArrow.textContent = '▶';
            }
        });
        
        // Toggle current section
        if (!isExpanded) {
            section.classList.add('expanded');
            if (arrow) arrow.textContent = '▼';
        } else {
            section.classList.remove('expanded');
            if (arrow) arrow.textContent = '▶';
        }
    }

    loadContent(contentId) {
        this.currentSection = contentId;
        
        // Close mobile menu if open
        if (this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }

        // Update navigation state
        this.updateNavigationState(contentId);
        
        // Load content via content loader
        if (window.contentLoader) {
            window.contentLoader.loadContent(contentId);
        } else {
            console.error('Content loader not available');
        }

        // Update URL without reloading page
        this.updateURL(contentId);
    }

    updateNavigationState(contentId) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current item
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const onclick = item.getAttribute('onclick');
            if (onclick && onclick.includes(`'${contentId}'`)) {
                item.classList.add('active');
            }
        });
    }

    updateMainContentMargins() {
        const mainContent = document.getElementById('mainContent');
        const rightSidebarWidth = this.rightSidebarCollapsed ? '0px' : '300px';
        
        if (window.innerWidth > 1200) {
            mainContent.style.marginRight = rightSidebarWidth;
        }
    }

    updateURL(contentId) {
        const newURL = new URL(window.location);
        newURL.searchParams.set('section', contentId);
        
        // Update URL without reloading
        history.pushState({ section: contentId }, '', newURL);
    }

    handleBackButton() {
        window.addEventListener('popstate', (e) => {
            const section = e.state?.section || 
                           new URLSearchParams(window.location.search).get('section') || 
                           'overview';
            this.loadContent(section);
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }

        // Update active TOC item
        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[onclick*="scrollToSection('${sectionId}')"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    // Accessibility helpers
    setupAccessibility() {
        // Add ARIA labels and roles
        const sidebar = document.getElementById('leftSidebar');
        sidebar.setAttribute('role', 'navigation');
        sidebar.setAttribute('aria-label', 'Main navigation');

        const rightSidebar = document.getElementById('rightSidebar');
        rightSidebar.setAttribute('role', 'complementary');
        rightSidebar.setAttribute('aria-label', 'Table of contents');

        // Add keyboard navigation for nav items
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    }

    // Animation helpers
    addLoadingAnimation() {
        const mainContent = document.getElementById('mainContent');
        mainContent.style.opacity = '0.7';
        mainContent.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 150);
    }

    // Initialize on load
    initializeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get('section') || 'overview';
        this.loadContent(section);
    }
}

// Global navigation functions (called from HTML)
let navigationManager;

function toggleMobileMenu() {
    if (navigationManager) {
        navigationManager.toggleMobileMenu();
    }
}

function toggleRightSidebar() {
    if (navigationManager) {
        navigationManager.toggleRightSidebar();
    }
}

function toggleTocSection(header) {
    if (navigationManager) {
        navigationManager.toggleTocSection(header);
    }
}

function scrollToSection(sectionId) {
    if (navigationManager) {
        navigationManager.scrollToSection(sectionId);
    }
}

function loadContent(contentId) {
    if (navigationManager) {
        navigationManager.loadContent(contentId);
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    navigationManager = new NavigationManager();
    navigationManager.setupAccessibility();
    navigationManager.handleBackButton();
    navigationManager.initializeFromURL();
});
