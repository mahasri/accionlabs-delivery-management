// Collapsible Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible sections
    initializeCollapsibleNav();
});

// Also initialize when MkDocs Material theme loads
if (typeof window !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(initializeCollapsibleNav, 500);
    });
    
    // Initialize after any navigation changes
    document.addEventListener('click', function(e) {
        if (e.target.matches('.md-nav__link')) {
            setTimeout(initializeCollapsibleNav, 100);
        }
    });
}

function initializeCollapsibleNav() {
    // Get all main section titles (Delivery Excellence, Delivery Execution, etc.)
    const sectionTitles = document.querySelectorAll('.md-sidebar--primary .md-nav__title, .md-nav--primary .md-nav__item--nested > .md-nav__link');
    
    console.log('Found section titles:', sectionTitles.length);
    
    sectionTitles.forEach(title => {
        console.log('Processing title:', title.textContent.trim());
        // Add click event listener
        title.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the associated nav list (submenu)
            const navItem = this.closest('.md-nav__item');
            const navList = navItem.querySelector('.md-nav__list');
            
            if (navList) {
                // Toggle collapsed state
                const isCollapsed = navList.classList.contains('collapsed');
                
                if (isCollapsed) {
                    // Expand
                    navList.classList.remove('collapsed');
                    this.classList.remove('collapsed');
                    
                    // Set max-height to actual height for smooth animation
                    const height = navList.scrollHeight;
                    navList.style.maxHeight = height + 'px';
                    
                    // Store expanded state
                    localStorage.setItem(`nav-section-${this.textContent.trim()}`, 'expanded');
                } else {
                    // Collapse
                    navList.classList.add('collapsed');
                    this.classList.add('collapsed');
                    navList.style.maxHeight = '0px';
                    
                    // Store collapsed state
                    localStorage.setItem(`nav-section-${this.textContent.trim()}`, 'collapsed');
                }
            }
        });
        
        // Restore saved state on page load
        restoreCollapsedState(title);
    });
}

function restoreCollapsedState(title) {
    const navItem = title.closest('.md-nav__item');
    const navList = navItem.querySelector('.md-nav__list');
    const sectionName = title.textContent.trim();
    const savedState = localStorage.getItem(`nav-section-${sectionName}`);
    
    if (navList && savedState === 'collapsed') {
        navList.classList.add('collapsed');
        title.classList.add('collapsed');
        navList.style.maxHeight = '0px';
    } else if (navList) {
        // Default to expanded for new sections
        navList.style.maxHeight = navList.scrollHeight + 'px';
    }
}

// Handle dynamic content loading (for MkDocs Material theme)
function handleDynamicContent() {
    // Re-initialize after any dynamic content changes
    setTimeout(() => {
        initializeCollapsibleNav();
    }, 100);
}

// Listen for navigation changes
if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', handleDynamicContent);
    window.addEventListener('popstate', handleDynamicContent);
}
