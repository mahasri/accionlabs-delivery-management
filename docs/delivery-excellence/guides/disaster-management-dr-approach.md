# Disaster Management - DR Approach

## Overview

Comprehensive guide for disaster recovery planning and implementation to ensure business continuity.

## Purpose

Establish disaster recovery procedures and business continuity plans to minimize downtime and data loss.

## When to Use

- Infrastructure planning
- Risk assessment
- Business continuity planning
- Disaster recovery preparation
- Compliance requirements

## How to Use

Follow the step-by-step approach to develop DR strategies. Regular testing of DR procedures is crucial for effectiveness.

## Key Sections

- Risk Assessment
- Recovery Strategies
- Testing Procedures
- Documentation

## 💡 Tips

Regular testing of DR procedures is crucial for effectiveness. Update plans based on lessons learned from tests.

---

## Document Viewer

<div class="document-viewer-container">
    <div class="viewer-header">
        <div class="viewer-title">
            <h2>Disaster Management - DR Approach</h2>
            <p>Business continuity planning guide</p>
        </div>
        <div class="viewer-controls">
            <button class="btn-fullscreen" onclick="toggleFullscreen()" title="Full Screen">
                <span class="material-icons">fullscreen</span>
            </button>
            <a href="https://tinyurl.com/DRAppr" target="_blank" class="btn-download" title="Download">
                <span class="material-icons">download</span>
            </a>
        </div>
    </div>
    
    <div class="document-iframe-container">
        <iframe src="https://tinyurl.com/DRAppr" frameborder="0" width="100%" height="600px"></iframe>
    </div>
</div>

<script>
function toggleFullscreen() {
    const iframe = document.querySelector('.document-iframe-container iframe');
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        iframe.requestFullscreen();
    }
}
</script>

<style>
.document-viewer-container {
    margin: 2rem 0;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}

.viewer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
}

.viewer-title h2 {
    margin: 0 0 0.5rem 0;
    color: #3f51b5;
}

.viewer-title p {
    margin: 0;
    color: #666;
}

.viewer-controls {
    display: flex;
    gap: 0.5rem;
}

.viewer-controls button,
.viewer-controls a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease;
}

.viewer-controls button:hover,
.viewer-controls a:hover {
    background: #3f51b5;
    color: white;
    border-color: #3f51b5;
}

.document-iframe-container {
    padding: 1rem;
    background: white;
}

.document-iframe-container iframe {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}

@media (max-width: 768px) {
    .viewer-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .viewer-controls {
        width: 100%;
        justify-content: space-between;
    }
}
</style>
