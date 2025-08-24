# Accionisms - Leadership Principles

## Overview

Accionisms are our core leadership principles and values that guide every aspect of our delivery excellence approach and organizational culture. These principles embody our commitment to excellence, innovation, and value-driven delivery.

## 🌟 Our Leadership Principles

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .accionisms-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
        min-height: 100vh;
        padding: 20px;
    }

    .accionisms-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .accionisms-header {
        background: linear-gradient(135deg, #1e3a8a, #3b82f6, #1e40af);
        color: white;
        padding: 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .accionisms-header::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>') repeat;
        animation: float 20s linear infinite;
    }

    @keyframes float {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    .accionisms-header h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 2;
    }

    .accionisms-header p {
        font-size: 1.3rem;
        opacity: 0.9;
        font-weight: 300;
        position: relative;
        z-index: 2;
    }

    .principles-grid {
        padding: 40px 30px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .principle-card {
        background: white;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        border: 2px solid transparent;
    }

    .principle-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .principle-card:nth-child(1) { border-color: #1e40af; }
    .principle-card:nth-child(1)::before { background: linear-gradient(90deg, #1e40af, #3b82f6); }
    
    .principle-card:nth-child(2) { border-color: #059669; }
    .principle-card:nth-child(2)::before { background: linear-gradient(90deg, #059669, #10b981); }
    
    .principle-card:nth-child(3) { border-color: #dc2626; }
    .principle-card:nth-child(3)::before { background: linear-gradient(90deg, #dc2626, #ef4444); }
    
    .principle-card:nth-child(4) { border-color: #7c3aed; }
    .principle-card:nth-child(4)::before { background: linear-gradient(90deg, #7c3aed, #8b5cf6); }
    
    .principle-card:nth-child(5) { border-color: #ea580c; }
    .principle-card:nth-child(5)::before { background: linear-gradient(90deg, #ea580c, #f97316); }
    
    .principle-card:nth-child(6) { border-color: #0891b2; }
    .principle-card:nth-child(6)::before { background: linear-gradient(90deg, #0891b2, #06b6d4); }
    
    .principle-card:nth-child(7) { border-color: #c2410c; }
    .principle-card:nth-child(7)::before { background: linear-gradient(90deg, #c2410c, #ea580c); }
    
    .principle-card:nth-child(8) { border-color: #9333ea; }
    .principle-card:nth-child(8)::before { background: linear-gradient(90deg, #9333ea, #a855f7); }
    
    .principle-card:nth-child(9) { border-color: #0d9488; }
    .principle-card:nth-child(9)::before { background: linear-gradient(90deg, #0d9488, #14b8a6); }
    
    .principle-card:nth-child(10) { border-color: #1d4ed8; }
    .principle-card:nth-child(10)::before { background: linear-gradient(90deg, #1d4ed8, #3b82f6); }
    
    .principle-card:nth-child(11) { border-color: #be185d; }
    .principle-card:nth-child(11)::before { background: linear-gradient(90deg, #be185d, #ec4899); }
    
    .principle-card:nth-child(12) { border-color: #047857; }
    .principle-card:nth-child(12)::before { background: linear-gradient(90deg, #047857, #059669); }
    
    .principle-card:nth-child(13) { border-color: #7c2d12; }
    .principle-card:nth-child(13)::before { background: linear-gradient(90deg, #7c2d12, #c2410c); }
    
    .principle-card:nth-child(14) { border-color: #581c87; }
    .principle-card:nth-child(14)::before { background: linear-gradient(90deg, #581c87, #7c3aed); }
    
    .principle-card:nth-child(15) { border-color: #155e75; }
    .principle-card:nth-child(15)::before { background: linear-gradient(90deg, #155e75, #0891b2); }
    
    .principle-card:nth-child(16) { border-color: #991b1b; }
    .principle-card:nth-child(16)::before { background: linear-gradient(90deg, #991b1b, #dc2626); }

    .principle-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .principle-card:hover::before {
        transform: scaleX(1);
    }

    .principle-icon {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        font-size: 24px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        position: relative;
        overflow: hidden;
        color: white;
    }

    .principle-card:nth-child(1) .principle-icon { background: linear-gradient(135deg, #1e40af, #3b82f6); }
    .principle-card:nth-child(2) .principle-icon { background: linear-gradient(135deg, #059669, #10b981); }
    .principle-card:nth-child(3) .principle-icon { background: linear-gradient(135deg, #dc2626, #ef4444); }
    .principle-card:nth-child(4) .principle-icon { background: linear-gradient(135deg, #7c3aed, #8b5cf6); }
    .principle-card:nth-child(5) .principle-icon { background: linear-gradient(135deg, #ea580c, #f97316); }
    .principle-card:nth-child(6) .principle-icon { background: linear-gradient(135deg, #0891b2, #06b6d4); }
    .principle-card:nth-child(7) .principle-icon { background: linear-gradient(135deg, #c2410c, #ea580c); }
    .principle-card:nth-child(8) .principle-icon { background: linear-gradient(135deg, #9333ea, #a855f7); }
    .principle-card:nth-child(9) .principle-icon { background: linear-gradient(135deg, #0d9488, #14b8a6); }
    .principle-card:nth-child(10) .principle-icon { background: linear-gradient(135deg, #1d4ed8, #3b82f6); }
    .principle-card:nth-child(11) .principle-icon { background: linear-gradient(135deg, #be185d, #ec4899); }
    .principle-card:nth-child(12) .principle-icon { background: linear-gradient(135deg, #047857, #059669); }
    .principle-card:nth-child(13) .principle-icon { background: linear-gradient(135deg, #7c2d12, #c2410c); }
    .principle-card:nth-child(14) .principle-icon { background: linear-gradient(135deg, #581c87, #7c3aed); }
    .principle-card:nth-child(15) .principle-icon { background: linear-gradient(135deg, #155e75, #0891b2); }
    .principle-card:nth-child(16) .principle-icon { background: linear-gradient(135deg, #991b1b, #dc2626); }

    .principle-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 12px;
        line-height: 1.3;
    }

    .principle-description {
        color: #5a6c7d;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .highlight {
        padding: 3px 10px;
        border-radius: 8px;
        font-weight: 600;
        color: #1f2937;
    }

    .principle-card:nth-child(1) .highlight { background: rgba(30, 64, 175, 0.15); }
    .principle-card:nth-child(2) .highlight { background: rgba(5, 150, 105, 0.15); }
    .principle-card:nth-child(3) .highlight { background: rgba(220, 38, 38, 0.15); }
    .principle-card:nth-child(4) .highlight { background: rgba(124, 58, 237, 0.15); }
    .principle-card:nth-child(5) .highlight { background: rgba(234, 88, 12, 0.15); }
    .principle-card:nth-child(6) .highlight { background: rgba(8, 145, 178, 0.15); }
    .principle-card:nth-child(7) .highlight { background: rgba(194, 65, 12, 0.15); }
    .principle-card:nth-child(8) .highlight { background: rgba(147, 51, 234, 0.15); }
    .principle-card:nth-child(9) .highlight { background: rgba(13, 148, 136, 0.15); }
    .principle-card:nth-child(10) .highlight { background: rgba(29, 78, 216, 0.15); }
    .principle-card:nth-child(11) .highlight { background: rgba(190, 24, 93, 0.15); }
    .principle-card:nth-child(12) .highlight { background: rgba(4, 120, 87, 0.15); }
    .principle-card:nth-child(13) .highlight { background: rgba(124, 45, 18, 0.15); }
    .principle-card:nth-child(14) .highlight { background: rgba(88, 28, 135, 0.15); }
    .principle-card:nth-child(15) .highlight { background: rgba(21, 94, 117, 0.15); }
    .principle-card:nth-child(16) .highlight { background: rgba(153, 27, 27, 0.15); }

    .accionisms-footer {
        background: linear-gradient(135deg, #374151, #1f2937);
        color: white;
        padding: 30px;
        text-align: center;
    }

    .accionisms-footer p {
        opacity: 0.9;
        font-size: 1.1rem;
        font-weight: 500;
    }

    @media (max-width: 1024px) {
        .principles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
            padding: 30px 25px;
        }
    }

    @media (max-width: 768px) {
        .accionisms-header h1 {
            font-size: 2.5rem;
        }
        
        .principles-grid {
            grid-template-columns: 1fr;
            padding: 25px 20px;
            gap: 16px;
        }
        
        .principle-card {
            padding: 18px;
        }

        .principle-title {
            font-size: 1rem;
        }

        .principle-description {
            font-size: 0.85rem;
        }
    }

    .pulse {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
    }

    /* Hide RHS table of contents for this page */
    .md-sidebar--secondary {
        display: none !important;
    }
    
    /* Adjust main content width when RHS is hidden */
    .md-content {
        margin-right: 0 !important;
    }
</style>

<div class="accionisms-container">
    <div class="accionisms-wrapper">
        <div class="accionisms-header">
            <h1>Accionisms</h1>
        </div>

        <div class="principles-grid">
            <div class="principle-card">
                <div class="principle-icon">🌍</div>
                <div class="principle-title">You Are Not Alone - Leverage Larger Accion</div>
                <div class="principle-description">
                    Someone would have solved the problem somewhere in Accion. <span class="highlight">Tap into collective wisdom</span> and learn from the experiences of others across the organization.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">💭</div>
                <div class="principle-title">Give and Accept Direct Feedback</div>
                <div class="principle-description">
                    Foster a culture of <span class="highlight">honest communication</span>. Learn to both deliver and receive feedback constructively for continuous improvement.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🎯</div>
                <div class="principle-title">Do Simple Things Right and Consistently</div>
                <div class="principle-description">
                    Excellence lies in <span class="highlight">consistent execution</span> of fundamental practices. Master the basics before moving to complexity.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🔧</div>
                <div class="principle-title">Be Hands-On</div>
                <div class="principle-description">
                    Know the details, no corner office mentality. Stay connected to the work and <span class="highlight">lead from the front</span> with deep understanding.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🎪</div>
                <div class="principle-title">Identify the Roles</div>
                <div class="principle-description">
                    Clearly define <span class="highlight">who is responsible and who is accountable</span>. Eliminate confusion through crystal-clear role definition.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🌱</div>
                <div class="principle-title">Shades of Green</div>
                <div class="principle-description">
                    Embrace nuanced thinking and recognize that most situations exist in <span class="highlight">gradients rather than absolutes</span>.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🌈</div>
                <div class="principle-title">Work-Life Harmony</div>
                <div class="principle-description">
                    Strive for <span class="highlight">integration rather than balance</span>. Create sustainable rhythms that honor both professional and personal commitments.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">💝</div>
                <div class="principle-title">Employee = Customer</div>
                <div class="principle-description">
                    Treat employees with the same care and attention as customers. <span class="highlight">Internal service excellence</span> drives external success.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">✨</div>
                <div class="principle-title">Add Value in Everything You Do</div>
                <div class="principle-description">
                    Every action should contribute meaningfully. Ask yourself: <span class="highlight">"How does this create value?"</span> before proceeding.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🌟</div>
                <div class="principle-title">Strive for Excellence</div>
                <div class="principle-description">
                    <span class="highlight">"Excite your customer every day"</span> - Go beyond meeting expectations to create memorable experiences.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🎭</div>
                <div class="principle-title">No Politics - Be Direct</div>
                <div class="principle-description">
                    Eliminate office politics through <span class="highlight">transparent, direct communication</span>. Say what you mean with respect and clarity.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">📖</div>
                <div class="principle-title">Continuous Learning</div>
                <div class="principle-description">
                    Never stop growing. <span class="highlight">Curiosity and adaptability</span> are essential for staying relevant and effective.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🎨</div>
                <div class="principle-title">Democratizing Innovation</div>
                <div class="principle-description">
                    Make innovation accessible to everyone. <span class="highlight">Break down barriers</span> that prevent creative thinking at all levels.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon">🧠</div>
                <div class="principle-title">Hire People Smarter Than You</div>
                <div class="principle-description">
                    "I get scared if I am the smartest in my team." Surround yourself with <span class="highlight">exceptional talent</span> that challenges and elevates you.
                </div>
            </>

            <div class="principle-card">
                <div class="principle-icon">📈</div>
                <div class="principle-title">Expect More from All</div>
                <div class="principle-description">
                    If you need to deliver more, <span class="highlight">raise expectations across the board</span>. High standards lift everyone's performance.
                </div>
            </div>

            <div class="principle-card">
                <div class="principle-icon pulse">🚀</div>
                <div class="principle-title">Zero Politics - No Bureaucracy</div>
                <div class="principle-description">
                    Create an environment of <span class="highlight">simplicity and transparency</span>. Remove unnecessary layers and processes that slow progress.
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // Add smooth scroll behavior and card animations
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.principle-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    });
</script>

## Key Principles Summary

Our Accionisms principles are organized around four core themes:

### 🤝 **Collaboration & Communication**
- **You Are Not Alone** - Leverage the collective wisdom of the larger Accion organization
- **Give and Accept Direct Feedback** - Foster honest, constructive communication
- **No Politics - Be Direct** - Eliminate office politics through transparency

### 🎯 **Excellence & Execution**
- **Do Simple Things Right and Consistently** - Master the fundamentals
- **Be Hands-On** - Stay connected to the work and lead from the front
- **Strive for Excellence** - "Excite your customer every day"

### 🌱 **Growth & Innovation**
- **Continuous Learning** - Never stop growing and adapting
- **Democratizing Innovation** - Make innovation accessible to everyone
- **Hire People Smarter Than You** - Surround yourself with exceptional talent

### 💎 **Value & Culture**
- **Add Value in Everything You Do** - Every action should contribute meaningfully
- **Employee = Customer** - Treat employees with the same care as customers
- **Work-Life Harmony** - Create sustainable integration of work and life

## Integration with Delivery Excellence

These principles are deeply integrated into our delivery excellence framework:

- **Guiding Decision Making** - Every delivery decision is evaluated against these principles
- **Team Development** - Principles shape our approach to team building and leadership
- **Client Relationships** - Values inform how we interact with and serve our clients
- **Continuous Improvement** - Principles drive our commitment to ongoing enhancement

---

*Accionisms are not just words on a page—they are the living values that drive our success and shape our culture of delivery excellence.*
