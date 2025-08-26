# Red Patterns

<style>
    .red-patterns-container {
        max-width: 1200px;
        margin: 20px auto;
        padding: 20px;
        font-family: 'Segoe UI', Arial, sans-serif;
    }
    
    .red-patterns-title {
        text-align: center;
        font-size: 2.5rem;
        color: #dc2626;
        margin-bottom: 30px;
        font-weight: bold;
    }
    
    .red-patterns-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
    
    .red-pattern-card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-left: 4px solid #dc2626;
        transition: transform 0.3s ease;
    }
    
    .red-pattern-card:hover {
        transform: translateY(-5px);
    }
    
    .red-pattern-icon {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .red-pattern-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 8px;
    }
    
    .red-pattern-description {
        font-size: 0.9rem;
        color: #6b7280;
        line-height: 1.5;
    }
    
    /* Hide RHS table of contents for this page */
    .md-sidebar--secondary {
        display: none !important;
    }
    
    /* Adjust main content width when RHS is hidden */
    .md-content {
        margin-right: 0 !important;
    }
    
    @media (max-width: 768px) {
        .red-patterns-grid {
            grid-template-columns: 1fr;
        }
        .red-patterns-title {
            font-size: 2rem;
        }
    }
</style>

<div class="red-patterns-container">
    <h1 class="red-patterns-title">Red Patterns</h1>
    
    <div class="red-patterns-grid">
        <div class="red-pattern-card">
            <div class="red-pattern-icon">😐</div>
            <div class="red-pattern-title">Mediocre Performance Acceptance</div>
            <div class="red-pattern-description">
                Team is just meeting expectations without striving for excellence or continuous improvement.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🤐</div>
            <div class="red-pattern-title">Silent Disagreement</div>
            <div class="red-pattern-description">
                Team members disagree but don't voice concerns, leading to passive resistance and hidden issues.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">📉</div>
            <div class="red-pattern-title">Declining Quality Metrics</div>
            <div class="red-pattern-description">
                Bug counts, technical debt, or performance metrics are trending downward without intervention.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">⏰</div>
            <div class="red-pattern-title">Consistent Deadline Misses</div>
            <div class="red-pattern-description">
                Regular failure to meet sprint goals or project milestones without clear recovery plans.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🔄</div>
            <div class="red-pattern-title">Scope Creep Without Control</div>
            <div class="red-pattern-description">
                Requirements constantly changing without proper change management or impact assessment.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">👥</div>
            <div class="red-pattern-title">Team Member Isolation</div>
            <div class="red-pattern-description">
                Individuals working in silos without collaboration, knowledge sharing, or team cohesion.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">📞</div>
            <div class="red-pattern-title">Escalation Dependency</div>
            <div class="red-pattern-description">
                Team relies on management escalation for every decision instead of empowered decision-making.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">📚</div>
            <div class="red-pattern-title">Knowledge Silos</div>
            <div class="red-pattern-description">
                Critical knowledge held by single individuals without documentation or knowledge transfer.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🛠️</div>
            <div class="red-pattern-title">Technical Debt Accumulation</div>
            <div class="red-pattern-description">
                Quick fixes and workarounds piling up without addressing root causes or refactoring.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">📊</div>
            <div class="red-pattern-title">Metrics Ignored</div>
            <div class="red-pattern-description">
                Team not tracking or acting on key performance indicators and quality metrics.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🎯</div>
            <div class="red-pattern-title">Unclear Priorities</div>
            <div class="red-pattern-description">
                Team confused about what's most important, leading to scattered focus and effort.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">💬</div>
            <div class="red-pattern-title">Communication Breakdown</div>
            <div class="red-pattern-description">
                Regular miscommunication, missed meetings, or unclear expectations between team members.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🔥</div>
            <div class="red-pattern-title">Constant Firefighting</div>
            <div class="red-pattern-description">
                Team always reacting to emergencies instead of proactive planning and prevention.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">👎</div>
            <div class="red-pattern-title">Low Team Morale</div>
            <div class="red-pattern-description">
                Visible signs of frustration, burnout, or disengagement among team members.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🚫</div>
            <div class="red-pattern-title">Blame Culture</div>
            <div class="red-pattern-description">
                Team members pointing fingers instead of focusing on solutions and collective responsibility.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">📈</div>
            <div class="red-pattern-title">Unrealistic Expectations</div>
            <div class="red-pattern-description">
                Management or stakeholders setting impossible deadlines or scope without team input.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🔒</div>
            <div class="red-pattern-title">Process Rigidity</div>
            <div class="red-pattern-description">
                Following processes blindly without adapting to changing circumstances or team needs.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🎭</div>
            <div class="red-pattern-title">Theater Metrics</div>
            <div class="red-pattern-description">
                Focusing on vanity metrics that look good but don't reflect actual value or quality.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">🔄</div>
            <div class="red-pattern-title">No Retrospective Action</div>
            <div class="red-pattern-description">
                Conducting retrospectives but not implementing agreed-upon improvements or changes.
            </div>
        </div>

        <div class="red-pattern-card">
            <div class="red-pattern-icon">👀</div>
            <div class="red-pattern-title">Micromanagement</div>
            <div class="red-pattern-description">
                Excessive oversight and control that stifles creativity and team autonomy.
            </div>
        </div>
    </div>
</div>
