// Mermaid Diagram Initialization for AccionLabs Delivery Management Portal

// Initialize Mermaid when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Configure Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        sequence: {
            useMaxWidth: true,
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            mirrorActors: true,
            bottomMarginAdj: 1,
            useMaxWidth: true,
            rightAngles: false,
            showSequenceNumbers: false
        },
        gantt: {
            titleTopMargin: 25,
            barHeight: 20,
            barGap: 4,
            topPadding: 50,
            leftPadding: 75,
            gridLineStartPadding: 35,
            fontSize: 11,
            fontFamily: '"Open-Sans", "sans-serif"',
            numberSectionStyles: 4,
            axisFormat: '%Y-%m-%d'
        },
        journey: {
            useMaxWidth: true,
            diagramMarginX: 50,
            diagramMarginY: 10,
            leftPadding: 150,
            rightPadding: 150,
            topPadding: 50,
            bottomPadding: 50,
            nodeSpacing: 50,
            rankSpacing: 50,
            curve: 'basis',
            useMaxWidth: true
        },
        gitGraph: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        pie: {
            useWidth: 800,
            useHeight: 600
        },
        er: {
            useMaxWidth: true,
            diagramPadding: 20,
            layoutDirection: 'TB',
            minEntityWidth: 100,
            minEntityHeight: 75,
            entityPadding: 15,
            stroke: 'gray',
            fill: 'honeydew',
            fontSize: 12
        },
        class: {
            useMaxWidth: true,
            htmlLabels: true
        },
        state: {
            useMaxWidth: true,
            htmlLabels: true
        },
        userJourney: {
            useMaxWidth: true,
            diagramMarginX: 50,
            diagramMarginY: 10,
            leftPadding: 150,
            rightPadding: 150,
            topPadding: 50,
            bottomPadding: 50,
            nodeSpacing: 50,
            rankSpacing: 50,
            curve: 'basis',
            useMaxWidth: true
        }
    });

    // Find all mermaid diagrams and render them
    const mermaidElements = document.querySelectorAll('.mermaid');
    
    mermaidElements.forEach(function(element, index) {
        // Add loading indicator
        element.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">Loading diagram...</div>';
        
        // Get the diagram code
        const diagramCode = element.textContent || element.innerText;
        
        // Render the diagram
        mermaid.render('mermaid-diagram-' + index, diagramCode).then(function(result) {
            element.innerHTML = result.svg;
        }).catch(function(error) {
            console.error('Error rendering Mermaid diagram:', error);
            element.innerHTML = '<div style="text-align: center; padding: 20px; color: #f44336;">Error loading diagram</div>';
        });
    });
});

// Re-initialize Mermaid when navigating between pages (for SPA-like behavior)
document.addEventListener('DOMContentLoaded', function() {
    // Listen for navigation events
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const mermaidElements = document.querySelectorAll('.mermaid:not([data-mermaid-rendered])');
                if (mermaidElements.length > 0) {
                    mermaidElements.forEach(function(element, index) {
                        element.setAttribute('data-mermaid-rendered', 'true');
                        
                        // Add loading indicator
                        element.innerHTML = '<div style="text-align: center; padding: 20px; color: #666;">Loading diagram...</div>';
                        
                        // Get the diagram code
                        const diagramCode = element.textContent || element.innerText;
                        
                        // Render the diagram
                        mermaid.render('mermaid-diagram-dynamic-' + Date.now() + '-' + index, diagramCode).then(function(result) {
                            element.innerHTML = result.svg;
                        }).catch(function(error) {
                            console.error('Error rendering Mermaid diagram:', error);
                            element.innerHTML = '<div style="text-align: center; padding: 20px; color: #f44336;">Error loading diagram</div>';
                        });
                    });
                }
            }
        });
    });
    
    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Utility function to manually render a mermaid diagram
function renderMermaidDiagram(elementId, diagramCode) {
    const element = document.getElementById(elementId);
    if (element) {
        mermaid.render('mermaid-diagram-' + elementId, diagramCode).then(function(result) {
            element.innerHTML = result.svg;
        }).catch(function(error) {
            console.error('Error rendering Mermaid diagram:', error);
            element.innerHTML = '<div style="text-align: center; padding: 20px; color: #f44336;">Error loading diagram</div>';
        });
    }
}

// Export for global use
window.renderMermaidDiagram = renderMermaidDiagram;
