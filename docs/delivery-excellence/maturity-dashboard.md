# Maturity Dashboard

## 5P Maturity Score

<div class="dashboard-container">

<!-- 5P Maturity Scores Section -->
<div class="p5-maturity-section">
    <h3>5P Maturity Score</h3>
    <div class="avg-maturity-score">
        <strong>Avg Maturity Score: 4.2</strong>
    </div>
    <div class="p5-maturity-grid">
        <div class="p5-score-item">
            <div class="p5-score-value score-4">4.0</div>
            <div class="p5-score-label">Product Maturity</div>
            <div class="p5-score-bullets">
                • Business Knowledge<br>
                • Functional Workflow<br>
                • Epic/Story Understanding
            </div>
        </div>
        <div class="p5-score-item">
            <div class="p5-score-value score-4">4.5</div>
            <div class="p5-score-label">Process Maturity</div>
            <div class="p5-score-bullets">
                • Development & Deployment<br>
                • Agile Maturity & Metrics<br>
                • Knowledge Management
            </div>
        </div>
        <div class="p5-score-item">
            <div class="p5-score-value score-4">4.1</div>
            <div class="p5-score-label">People Maturity</div>
            <div class="p5-score-bullets">
                • Skills & Performance<br>
                • Teamwork & Collaboration<br>
                • Training & Upskilling
            </div>
        </div>
        <div class="p5-score-item">
            <div class="p5-score-value score-4">4.2</div>
            <div class="p5-score-label">Platform Maturity</div>
            <div class="p5-score-bullets">
                • Architecture & Design<br>
                • Technology & Framework<br>
                • Tools & Automation
            </div>
        </div>
        <div class="p5-score-item">
            <div class="p5-score-value score-4">4.4</div>
            <div class="p5-score-label">Program Maturity</div>
            <div class="p5-score-bullets">
                • Project Management<br>
                • Customer Delight<br>
                • Value Initiatives
            </div>
        </div>
    </div>
</div>

<!-- Legend -->
<div class="legend">
    <span class="legend-item"><span class="legend-color score-1"></span>1 - Risk</span>
    <span class="legend-item"><span class="legend-color score-2"></span>2 - Needs Attention</span>
    <span class="legend-item"><span class="legend-color score-3"></span>3 - Neutral</span>
    <span class="legend-item"><span class="legend-color score-4"></span>4 - Meets Expectations</span>
    <span class="legend-item"><span class="legend-color score-5"></span>5 - Aligned/Excellent</span>
</div>

</div>

<!-- GenAI Adoption Maturity Section -->
<div class="genai-maturity-section">
    <h3>GenAI Adoption Maturity</h3>
    <div class="genai-maturity-container">
        <div class="genai-maturity-score">
            <div class="genai-score-value">3.1</div>
            <div class="genai-score-label">GenAI Adoption Maturity Score</div>
        </div>
        
        <div class="genai-maturity-legend">
            <div class="genai-legend-grid">
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-5"></span>
                    <span class="genai-legend-text"><strong>5</strong> - GenAI First</span>
                </div>
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-4"></span>
                    <span class="genai-legend-text"><strong>4</strong> - GenAI Projects Implementation</span>
                </div>
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-3"></span>
                    <span class="genai-legend-text"><strong>3</strong> - GenAI for SDLC</span>
                </div>
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-2"></span>
                    <span class="genai-legend-text"><strong>2</strong> - GenAI Evaluation in Progress</span>
                </div>
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-1"></span>
                    <span class="genai-legend-text"><strong>1</strong> - Open to GenAI but Not for Now</span>
                </div>
                <div class="genai-legend-item">
                    <span class="genai-legend-color level-0"></span>
                    <span class="genai-legend-text"><strong>0</strong> - No to GenAI</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* Hide RHS navigation for better content space */
.md-sidebar--secondary {
    display: none !important;
}

/* Adjust main content for full width */
.md-content {
    margin-right: 0 !important;
}

/* Remove right margin for full width layout */
.md-main__inner {
    margin-right: 0 !important;
}

/* Delivery Excellence Maturity Dashboard Styles */
.dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    border-radius: 8px;
}

.p5-maturity-section {
    margin-bottom: 40px;
}

.p5-maturity-section h3 {
    text-align: center;
    color: #333;
    margin-bottom: 15px;
    font-size: 1.4rem;
    font-weight: 600;
}

.avg-maturity-score {
    text-align: center;
    margin-bottom: 25px;
    font-size: 1.2rem;
    color: #2c3e50;
}

.p5-maturity-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin-bottom: 25px;
}

.p5-score-item {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.p5-score-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.p5-score-value {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    color: white;
}

.p5-score-label {
    font-size: 0.85rem;
    color: #495057;
    font-weight: 600;
    margin-bottom: 8px;
}

.p5-score-bullets {
    font-size: 0.7rem;
    color: #6c757d;
    line-height: 1.3;
    text-align: left;
    flex-grow: 1;
}

/* Pastel colors for p5 score values */
.p5-score-value.score-5 { background: #a8e6cf; color: #2d5a3d; }
.p5-score-value.score-4 { background: #b8e6b8; color: #2d5a2d; }
.p5-score-value.score-3 { background: #ffeaa7; color: #8b6f1a; }
.p5-score-value.score-2 { background: #ffd3a5; color: #8b5a2b; }
.p5-score-value.score-1 { background: #ffb3ba; color: #8b2a2a; }

.additional-metrics-section {
    margin-bottom: 40px;
}

.additional-metrics-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    max-width: 600px;
    margin: 0 auto;
}

.metric-item {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.metric-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.metric-item .metric-value {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    color: #8b6f1a;
}

.metric-item .metric-value.yellow-bg {
    background: #ffeaa7;
}

.metric-item .metric-label {
    font-size: 0.85rem;
    color: #495057;
    font-weight: 600;
    line-height: 1.3;
}

.legend {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #666;
}

.legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
}

.legend-color.score-1 { background: #ffb3ba; }
.legend-color.score-2 { background: #ffd3a5; }
.legend-color.score-3 { background: #ffeaa7; }
.legend-color.score-4 { background: #b8e6b8; }
.legend-color.score-5 { background: #a8e6cf; }

/* GenAI Adoption Maturity Styles */
.genai-maturity-section {
    margin-bottom: 40px;
}

.genai-maturity-section h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 600;
}

.genai-maturity-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.genai-maturity-score {
    text-align: center;
    flex: 1;
}

.genai-score-value {
    font-size: 3.5rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background: #ffc107;
    padding: 10px 20px;
    border-radius: 8px;
    display: inline-block;
}

.genai-score-label {
    font-size: 1.1rem;
    color: #495057;
    font-weight: 500;
}

.genai-maturity-legend {
    flex: 1;
    margin-left: 30px;
}

.genai-legend-grid {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.genai-legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
}

.genai-legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid #dee2e6;
}

.genai-legend-text {
    font-size: 0.75rem;
    color: #6c757d;
    font-weight: 400;
}

.level-5 { background: #28a745; }
.level-4 { background: #17a2b8; }
.level-3 { background: #ffc107; }
.level-2 { background: #fd7e14; }
.level-1 { background: #6c757d; }
.level-0 { background: #dc3545; }

/* Responsive Design */
@media (max-width: 768px) {
    .p5-maturity-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .p5-score-item {
        min-height: 100px;
        padding: 12px;
    }
    
    .additional-metrics-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .metric-item {
        min-height: 70px;
        padding: 12px;
    }
    
    .legend {
        gap: 15px;
    }
}
</style>
