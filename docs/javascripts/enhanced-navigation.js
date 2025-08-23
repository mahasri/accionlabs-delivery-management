/**
 * Enhanced Navigation for Delivery Excellence
 * Debug version with console logging
 */

console.log('🚀 Enhanced Navigation Script Loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📋 DOM Content Loaded - Starting Enhanced Navigation');
    
    // Simple test to verify script is running
    setTimeout(() => {
        addEnhancements();
    }, 500);
});

function addEnhancements() {
    console.log('🔧 Adding navigation enhancements...');
    
    // Find all nested navigation items
    const nestedItems = document.querySelectorAll('.md-nav__item--nested');
    console.log(`📁 Found ${nestedItems.length} nested navigation items`);
    
    // Add inline styles for immediate visibility
    const style = document.createElement('style');
    style.innerHTML = `
        /* Enhanced Navigation Arrows */
        .md-nav__item--nested .md-nav__container > .md-nav__link::after,
        .md-nav__item--nested > label[for^="__nav_"]::after {
            content: "▶" !important;
            position: absolute !important;
            right: 8px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            font-size: 12px !important;
            color: #666 !important;
            transition: transform 0.2s ease !important;
        }
        
        /* Expanded State */
        .md-nav__toggle:checked + .md-nav__container > .md-nav__link::after,
        .md-nav__toggle:checked + label[for^="__nav_"]::after {
            transform: translateY(-50%) rotate(90deg) !important;
            color: #3b82f6 !important;
        }
        
        /* Enhanced Hover */
        .md-nav__item--nested .md-nav__container > .md-nav__link:hover::after,
        .md-nav__item--nested > label[for^="__nav_"]:hover::after {
            color: #3b82f6 !important;
        }
        
        /* Position relative for parent elements */
        .md-nav__item--nested .md-nav__container > .md-nav__link,
        .md-nav__item--nested > label[for^="__nav_"] {
            position: relative !important;
        }
    `;
    document.head.appendChild(style);
    console.log('✨ CSS styles added');
    
    // Add counters
    nestedItems.forEach((item, index) => {
        const link = item.querySelector('.md-nav__container > .md-nav__link');
        const label = item.querySelector('label[for^="__nav_"]');
        const target = link || label;
        
        if (target) {
            const subItems = item.querySelectorAll('.md-nav[data-md-level] .md-nav__item');
            console.log(`📊 Section "${target.textContent.trim()}" has ${subItems.length} sub-items`);
            
            if (subItems.length > 0) {
                // Add counter as text
                const counter = document.createElement('span');
                counter.style.cssText = `
                    position: absolute !important;
                    right: 25px !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    background: #e5e7eb !important;
                    color: #6b7280 !important;
                    font-size: 10px !important;
                    padding: 2px 5px !important;
                    border-radius: 8px !important;
                    font-weight: 500 !important;
                `;
                counter.textContent = subItems.length;
                counter.className = 'nav-counter';
                
                // Remove existing counter
                const existing = target.querySelector('.nav-counter');
                if (existing) existing.remove();
                
                target.appendChild(counter);
                console.log(`✅ Added counter (${subItems.length}) to "${target.textContent.trim()}"`);
            }
        }
    });
    
    // Auto-expand key sections
    const autoExpand = ['Delivery Execution', 'Delivery Cadences'];
    nestedItems.forEach(item => {
        const checkbox = item.querySelector('.md-nav__toggle');
        const link = item.querySelector('.md-nav__container > .md-nav__link');
        const label = item.querySelector('label[for^="__nav_"]');
        const target = link || label;
        
        if (checkbox && target) {
            const text = target.textContent.trim();
            if (autoExpand.some(section => text.includes(section))) {
                checkbox.checked = true;
                console.log(`📂 Auto-expanded: ${text}`);
            }
        }
    });
    
    console.log('🎉 Enhanced navigation setup complete!');
}

// Run immediately if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('⏳ Waiting for DOM to load...');
} else {
    console.log('✅ DOM already loaded, running immediately');
    setTimeout(addEnhancements, 100);
}