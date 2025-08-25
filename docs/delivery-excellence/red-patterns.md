# Red Patterns

<style>
.red-patterns-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.5;
    color: #374151;
    background: #fef2f2;
    padding: 40px 20px;
    margin: -2rem -2rem 2rem -2rem;
}

.red-patterns-header {
    text-align: center;
    margin-bottom: 50px;
}

.red-patterns-header h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 10px;
}

.red-patterns-header p {
    font-size: 1.1rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

.red-patterns-alert {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 1px solid #fca5a5;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    text-align: center;
}

.red-patterns-alert h3 {
    color: #b91c1c;
    font-size: 1.2rem;
    margin-bottom: 8px;
}

.red-patterns-alert p {
    color: #7f1d1d;
    font-size: 0.95rem;
}

.red-patterns-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
    margin-top: 20px;
}

.red-pattern-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-left: 4px solid;
    transition: all 0.2s ease;
    position: relative;
}

.red-pattern-card:hover {
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
    transform: translateY(-2px);
}

.red-pattern-icon {
    font-size: 1.5rem;
    margin-bottom: 12px;
    display: block;
}

.red-pattern-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 8px;
    line-height: 1.3;
}

.red-pattern-description {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;
}

.red-pattern-highlight {
    background: #fee2e2;
    color: #b91c1c;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 500;
}

/* Red pattern color variations */
.red-card-1 { border-left-color: #dc2626; }
.red-card-2 { border-left-color: #ef4444; }
.red-card-3 { border-left-color: #f87171; }
.orange-card-1 { border-left-color: #ea580c; }
.orange-card-2 { border-left-color: #f97316; }
.orange-card-3 { border-left-color: #fb923c; }
.yellow-card { border-left-color: #eab308; }
.amber-card { border-left-color: #f59e0b; }

@media (max-width: 768px) {
    .red-patterns-grid {
        grid-template-columns: 1fr;
    }
    
    .red-patterns-header h1 {
        font-size: 2.5rem;
    }
}
</style>

<div class="red-patterns-container">
    <div class="red-patterns-header">
        <h1>Red Patterns</h1>
        <p>Early warning signs to identify, mitigate, and prevent project risks before they escalate</p>
    </div>

    <div class="red-patterns-alert">
        <h3>⚠️ Early Detection is Key</h3>
        <p>These patterns indicate potential risks that require immediate attention and proactive intervention</p>
    </div>

    <div class="red-patterns-grid">
        <div class="red-pattern-card red-card-1">
            <div class="red-pattern-icon">😐</div>
            <div class="red-pattern-title">Mediocre Performance Acceptance</div>
            <div class="red-pattern-description">Team is <span class="red-pattern-highlight">just meeting expectations</span> without striving for excellence or continuous improvement.</div>
        </div>

        <div class="red-pattern-card red-card-2">
            <div class="red-pattern-icon">🤐</div>
            <div class="red-pattern-title">Communication Breakdown</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Team is not talking</span> - lack of collaboration and knowledge sharing between team members.</div>
        </div>

        <div class="red-pattern-card red-card-3">
            <div class="red-pattern-icon">🚧</div>
            <div class="red-pattern-title">Persistent Blockers</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">People blocked forever</span> with no access or waiting indefinitely for something to proceed without escalation.</div>
        </div>

        <div class="red-pattern-card orange-card-1">
            <div class="red-pattern-icon">✅</div>
            <div class="red-pattern-title">False Confidence</div>
            <div class="red-pattern-description">As per team assessment <span class="red-pattern-highlight">"all is well"</span> without proper metrics or evidence to support the claim.</div>
        </div>

        <div class="red-pattern-card orange-card-2">
            <div class="red-pattern-icon">🐛</div>
            <div class="red-pattern-title">Escaped Defects</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Release issues - escaped defects</span> reaching production, indicating gaps in testing and quality processes.</div>
        </div>

        <div class="red-pattern-card orange-card-3">
            <div class="red-pattern-icon">📊</div>
            <div class="red-pattern-title">Poor Estimation Accuracy</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Estimations not done correctly</span> leading to unrealistic timelines and delivery commitments.</div>
        </div>

        <div class="red-pattern-card red-card-1">
            <div class="red-pattern-icon">⏰</div>
            <div class="red-pattern-title">Work Ethics Issues</div>
            <div class="red-pattern-description">Team <span class="red-pattern-highlight">not following work ethics - joining calls later than scheduled time</span> and showing lack of professionalism.</div>
        </div>

        <div class="red-pattern-card red-card-2">
            <div class="red-pattern-icon">❓</div>
            <div class="red-pattern-title">Unclear Delivery Commitment</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Delivery commitment unclear due to lack of DoD/DoR</span> creating ambiguity in expectations and deliverables.</div>
        </div>

        <div class="red-pattern-card red-card-3">
            <div class="red-pattern-icon">📚</div>
            <div class="red-pattern-title">Product Knowledge Gaps</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Lack of product knowledge</span> within the team affecting decision-making and feature development quality.</div>
        </div>

        <div class="red-pattern-card orange-card-1">
            <div class="red-pattern-icon">👤</div>
            <div class="red-pattern-title">Single Point of Failure</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Lack of critical knowledge within team - dependency on individual is high</span> creating risk and bottlenecks.</div>
        </div>

        <div class="red-pattern-card orange-card-2">
            <div class="red-pattern-icon">⏱️</div>
            <div class="red-pattern-title">Timeline Uncertainty</div>
            <div class="red-pattern-description">Unclear <span class="red-pattern-highlight">delivery timelines and time to complete</span> tasks, making planning and commitments difficult.</div>
        </div>

        <div class="red-pattern-card orange-card-3">
            <div class="red-pattern-icon">🔒</div>
            <div class="red-pattern-title">Security & Compliance Risks</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Security & compliance concerns in coding</span> such as hardcoding credentials or poor security practices.</div>
        </div>

        <div class="red-pattern-card red-card-1">
            <div class="red-pattern-icon">🔓</div>
            <div class="red-pattern-title">Data Privacy Violations</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">PII data shared into free instance</span> creating compliance risks and potential data breaches.</div>
        </div>

        <div class="red-pattern-card red-card-2">
            <div class="red-pattern-icon">⚖️</div>
            <div class="red-pattern-title">Unbalanced Team Dynamics</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Some people good others are relying on the good ones</span> creating inequality and burnout risks.</div>
        </div>

        <div class="red-pattern-card red-card-3">
            <div class="red-pattern-icon">🗣️</div>
            <div class="red-pattern-title">Excessive Explanation Overhead</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Onshore team spends a lot of time explaining</span> indicating knowledge gaps or communication inefficiencies.</div>
        </div>

        <div class="red-pattern-card orange-card-1">
            <div class="red-pattern-icon">💬</div>
            <div class="red-pattern-title">Customer Dismissiveness</div>
            <div class="red-pattern-description">Customer says <span class="red-pattern-highlight">"Oh I can do in 15 mins"</span> indicating undervaluation of team expertise and effort.</div>
        </div>

        <div class="red-pattern-card orange-card-2">
            <div class="red-pattern-icon">📝</div>
            <div class="red-pattern-title">Poor JIRA Discipline</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">JIRA updates not on time, detailed</span> leading to poor visibility and project tracking issues.</div>
        </div>

        <div class="red-pattern-card orange-card-3">
            <div class="red-pattern-icon">📋</div>
            <div class="red-pattern-title">Excessive Review Comments</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Lots of review comments on code check-in</span> indicating quality issues or lack of coding standards adherence.</div>
        </div>

        <div class="red-pattern-card red-card-1">
            <div class="red-pattern-icon">⏰</div>
            <div class="red-pattern-title">Late Escalation</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Not escalating on time, near the end of project - everything is delayed</span> causing last-minute crisis situations.</div>
        </div>

        <div class="red-pattern-card red-card-2">
            <div class="red-pattern-icon">🛡️</div>
            <div class="red-pattern-title">Performance Feedback Resistance</div>
            <div class="red-pattern-description"><span class="red-pattern-highlight">Team pushes back on resource performance comments</span> indicating defensiveness and lack of growth mindset.</div>
        </div>
    </div>
</div>

<script>
// Add subtle entrance animation
const cards = document.querySelectorAll('.red-pattern-card');

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 50);
});

// Add click interaction
cards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.02) translateY(-2px)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 150);
    });
});
</script>
