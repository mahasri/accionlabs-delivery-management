// Collapsible Navigation for MkDocs Material Theme
document.addEventListener('DOMContentLoaded', function() {
  // Find all nested navigation items
  const nestedItems = document.querySelectorAll('.md-nav--primary .md-nav__item--nested');
  
  nestedItems.forEach(function(item) {
    const link = item.querySelector('> .md-nav__link');
    const list = item.querySelector('.md-nav__list');
    
    if (link && list) {
      // Set initial state (collapsed by default)
      item.setAttribute('data-md-state', 'closed');
      
      // Add click event listener
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const currentState = item.getAttribute('data-md-state');
        const newState = currentState === 'open' ? 'closed' : 'open';
        
        // Update state
        item.setAttribute('data-md-state', newState);
        
        // Store state in localStorage for persistence
        const itemId = link.textContent.trim().replace(/\s+/g, '-').toLowerCase();
        localStorage.setItem('nav-state-' + itemId, newState);
      });
      
      // Restore state from localStorage
      const itemId = link.textContent.trim().replace(/\s+/g, '-').toLowerCase();
      const savedState = localStorage.getItem('nav-state-' + itemId);
      if (savedState) {
        item.setAttribute('data-md-state', savedState);
      }
    }
  });
  
  // Add keyboard support for accessibility
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.closest('.md-nav--primary .md-nav__item--nested > .md-nav__link')) {
        e.preventDefault();
        focusedElement.click();
      }
    }
  });
});
