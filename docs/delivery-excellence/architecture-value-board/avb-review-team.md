# AVB Review Team

<style>
    .avb-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: #f8fafc;
        color: #334155;
        line-height: 1.6;
        margin: 0;
        padding: 0;
    }

    .avb-header {
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        color: white;
        padding: 1rem;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .avb-header h1 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 0;
    }

    .avb-header p {
        display: none;
    }

    .avb-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
    }

    .avb-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .avb-stat-card {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        border-left: 3px solid #3b82f6;
        text-align: center;
    }

    .avb-stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: #1e3a8a;
        margin-bottom: 0.25rem;
    }

    .avb-stat-label {
        color: #64748b;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .avb-tracker-section {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        margin-bottom: 2rem;
    }

    .avb-section-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e3a8a;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 0.5rem;
    }

    .avb-team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        width: 100%;
    }

    .avb-team-member {
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    }

    .avb-team-member:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.12);
    }

    .avb-member-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .avb-member-avatar {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #3b82f6, #06b6d4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1rem;
    }

    .avb-member-info h3 {
        color: #333;
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 0.95rem;
    }

    .avb-member-role {
        color: #3b82f6;
        font-weight: 500;
        margin-bottom: 10px;
        font-size: 0.8rem;
    }

    .avb-member-details {
        margin-top: 0.75rem;
    }

    .avb-detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem 0;
        border-bottom: 1px solid #e2e8f0;
        font-size: 0.8rem;
    }

    .avb-detail-row:last-child {
        border-bottom: none;
    }

    .avb-detail-label {
        font-weight: 500;
        color: #475569;
    }

    .avb-detail-value {
        color: #1e293b;
        font-weight: 600;
    }

    .avb-status-badge {
        padding: 0.2rem 0.5rem;
        border-radius: 15px;
        font-size: 0.7rem;
        font-weight: 500;
    }

    .avb-status-active {
        background: #dcfce7;
        color: #166534;
    }

    .avb-status-available {
        background: #dbeafe;
        color: #1d4ed8;
    }

    .avb-status-busy {
        background: #fed7d7;
        color: #c53030;
    }

    .avb-expertise-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        margin-top: 0.75rem;
    }

    .avb-expertise-tag {
        background: #e0f2fe;
        color: #0369a1;
        padding: 0.2rem 0.5rem;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: 500;
    }

    /* Search and Filter Styles */
    .avb-search-box {
        width: 100%;
        max-width: 400px;
        padding: 0.75rem 1rem;
        margin: 1rem auto;
        display: block;
        border: 2px solid #e2e8f0;
        border-radius: 15px;
        font-size: 0.9rem;
        transition: border-color 0.3s ease;
        background: white;
    }

    .avb-search-box:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .avb-role-filter {
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .avb-filter-btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .avb-filter-btn:hover, .avb-filter-btn.active {
        background: #1e3a8a;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(30, 58, 138, 0.3);
    }

    @media (max-width: 768px) {
        .avb-container {
            padding: 1rem;
        }
        
        .avb-stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .avb-team-grid {
            grid-template-columns: 1fr;
        }
    }

    /* Hide the right sidebar "On this page" section */
    .md-sidebar--secondary {
        display: none !important;
    }
    
    /* Adjust main content to use full width */
    .md-content {
        margin-right: 0 !important;
    }
</style>

<div class="avb-dashboard">
    <div class="avb-header">
        <h1>🏗️ AVB Team</h1>
    </div>

    <div class="avb-container">
        <!-- Team Statistics -->
        <div class="avb-stats-grid">
            <div class="avb-stat-card">
                <div class="avb-stat-value">36</div>
                <div class="avb-stat-label">Active Team Members</div>
            </div>
        </div>

        <!-- Team Members -->
        <div class="avb-tracker-section">
            
            <!-- Search and Filter Controls -->
            <input type="text" class="avb-search-box" id="searchBox" placeholder="Search by name, role, or expertise...">
            
            <div class="avb-role-filter">
                <button class="avb-filter-btn active" data-role="all">All Roles</button>
                <button class="avb-filter-btn" data-role="Chief Architect">Chief Architect</button>
                <button class="avb-filter-btn" data-role="Senior Architect">Senior Architect</button>
                <button class="avb-filter-btn" data-role="Solution Architect">Solution Architect</button>
                <button class="avb-filter-btn" data-role="Technical Architect">Technical Architect</button>
                <button class="avb-filter-btn" data-role="Tech Manager">Tech Manager</button>
                <button class="avb-filter-btn" data-role="Tech Lead">Tech Lead</button>
            </div>
            
            <div class="avb-team-grid">
                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">DC</div>
                        <div class="avb-member-info">
                            <h3>DC</h3>
                            <div class="avb-member-role">Chief Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-active">Active</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Architecture</span>
                        <span class="avb-expertise-tag">Design</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">BN</div>
                        <div class="avb-member-info">
                            <h3>Bikramjeet Nath</h3>
                            <div class="avb-member-role">Senior Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-active">Active</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">NodeJS</span>
                        <span class="avb-expertise-tag">AWS</span>
                        <span class="avb-expertise-tag">Kafka</span>
                        <span class="avb-expertise-tag">Database Design</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Shaikh Shahid</h3>
                            <div class="avb-member-role">Solution Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Mumbai</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-active">Active</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">System Design</span>
                        <span class="avb-expertise-tag">Blockchain</span>
                        <span class="avb-expertise-tag">AI</span>
                        <span class="avb-expertise-tag">Web3.0</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">VS</div>
                        <div class="avb-member-info">
                            <h3>Vaibhav Satam</h3>
                            <div class="avb-member-role">Senior Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Mumbai</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-available">Available</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">React</span>
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">NodeJS</span>
                        <span class="avb-expertise-tag">GraphQL</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SK</div>
                        <div class="avb-member-info">
                            <h3>Siva Kalyan K</h3>
                            <div class="avb-member-role">Solution Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-active">Active</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Data Engineering</span>
                        <span class="avb-expertise-tag">Big Data</span>
                        <span class="avb-expertise-tag">BI & Data Warehouse</span>
                        <span class="avb-expertise-tag">Oracle</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Sanket Shah</h3>
                            <div class="avb-member-role">Senior Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Remote</span>
                        </div>
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Status:</span>
                            <span class="avb-status-badge avb-status-active">Active</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Enterprise Architecture</span>
                        <span class="avb-expertise-tag">Azure OpenAI</span>
                        <span class="avb-expertise-tag">Cloud Architecture</span>
                        <span class="avb-expertise-tag">Kubernetes</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">BA</div>
                        <div class="avb-member-info">
                            <h3>Bharath Kishore Aluri</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Application Architecture</span>
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">NodeJs</span>
                        <span class="avb-expertise-tag">AWS</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">DM</div>
                        <div class="avb-member-info">
                            <h3>Dhanapathi Marepalli</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Hyderabad</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">AWS</span>
                        <span class="avb-expertise-tag">Node JS</span>
                        <span class="avb-expertise-tag">Java</span>
                        <span class="avb-expertise-tag">Docker</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">GS</div>
                        <div class="avb-member-info">
                            <h3>Gaurav Sharma</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">C#</span>
                        <span class="avb-expertise-tag">ASP.NET</span>
                        <span class="avb-expertise-tag">WebAPIs</span>
                        <span class="avb-expertise-tag">SQL Server</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">PKS</div>
                        <div class="avb-member-info">
                            <h3>Pavan Kumar Singaraju</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Java ecosystem</span>
                        <span class="avb-expertise-tag">Docker</span>
                        <span class="avb-expertise-tag">K8s</span>
                        <span class="avb-expertise-tag">AWS</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Shaukat Saleem</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">C#</span>
                        <span class="avb-expertise-tag">ASP.NET</span>
                        <span class="avb-expertise-tag">MVC</span>
                        <span class="avb-expertise-tag">SQL Server</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Shishir Shrivastava</h3>
                            <div class="avb-member-role">Tech Manager</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Pune</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">React</span>
                        <span class="avb-expertise-tag">Angular</span>
                        <span class="avb-expertise-tag">React Native</span>
                        <span class="avb-expertise-tag">NodeJS</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">PB</div>
                        <div class="avb-member-info">
                            <h3>Pramod Bhosale</h3>
                            <div class="avb-member-role">Technical Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Mumbai</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">React</span>
                        <span class="avb-expertise-tag">ASP.NET</span>
                        <span class="avb-expertise-tag">.Net Core</span>
                        <span class="avb-expertise-tag">Angular</span>
                        <span class="avb-expertise-tag">Azure</span>
                        <span class="avb-expertise-tag">NodeJS</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">PM</div>
                        <div class="avb-member-info">
                            <h3>Prasanna MS</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">C#</span>
                        <span class="avb-expertise-tag">ASP.NET</span>
                        <span class="avb-expertise-tag">MySQL</span>
                        <span class="avb-expertise-tag">Kubernetes</span>
                        <span class="avb-expertise-tag">Azure</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">RK</div>
                        <div class="avb-member-info">
                            <h3>Rakesh Raghu Kava</h3>
                            <div class="avb-member-role">Technical Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">C#</span>
                        <span class="avb-expertise-tag">ASP.NET MVC</span>
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">.Net Core</span>
                        <span class="avb-expertise-tag">Azure</span>
                        <span class="avb-expertise-tag">Kafka</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">RB</div>
                        <div class="avb-member-info">
                            <h3>Ramesh Babu</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Accessibility</span>
                        <span class="avb-expertise-tag">WCAG</span>
                        <span class="avb-expertise-tag">ADA</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">RN</div>
                        <div class="avb-member-info">
                            <h3>Ravikumar Numboori</h3>
                            <div class="avb-member-role">Senior Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Hyderabad</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">.NET Ecosystem</span>
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">GitHub Actions</span>
                        <span class="avb-expertise-tag">AWS</span>
                        <span class="avb-expertise-tag">GCP</span>
                        <span class="avb-expertise-tag">OKTA</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">RK</div>
                        <div class="avb-member-info">
                            <h3>Rinesh KM</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">.NET Ecosystem</span>
                        <span class="avb-expertise-tag">MS SQL</span>
                        <span class="avb-expertise-tag">MySQL</span>
                        <span class="avb-expertise-tag">Kubernetes</span>
                        <span class="avb-expertise-tag">Azure</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Sadiq Shaikh</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Mumbai</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Data Engineering</span>
                        <span class="avb-expertise-tag">Big Data</span>
                        <span class="avb-expertise-tag">BI & Data Warehouse</span>
                        <span class="avb-expertise-tag">ETL Tools</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">SS</div>
                        <div class="avb-member-info">
                            <h3>Sagar Sollapure</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Pune</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">ASP.NET</span>
                        <span class="avb-expertise-tag">Angular</span>
                        <span class="avb-expertise-tag">Microservices</span>
                        <span class="avb-expertise-tag">Azure Functions</span>
                        <span class="avb-expertise-tag">Azure SQL</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">TB</div>
                        <div class="avb-member-info">
                            <h3>Thiraviaraj</h3>
                            <div class="avb-member-role">Tech Lead</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">Angular</span>
                        <span class="avb-expertise-tag">React</span>
                        <span class="avb-expertise-tag">ECMAScript 6</span>
                        <span class="avb-expertise-tag">PWA</span>
                        <span class="avb-expertise-tag">GitHub Actions</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">TD</div>
                        <div class="avb-member-info">
                            <h3>Trilochan Dash</h3>
                            <div class="avb-member-role">Senior Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">.NET Ecosystem</span>
                    </div>
                </div>

                <div class="avb-team-member">
                    <div class="avb-member-header">
                        <div class="avb-member-avatar">PV</div>
                        <div class="avb-member-info">
                            <h3>Padmavathii Vijay</h3>
                            <div class="avb-member-role">Solution Architect</div>
                        </div>
                    </div>
                    <div class="avb-member-details">
                        <div class="avb-detail-row">
                            <span class="avb-detail-label">Location:</span>
                            <span class="avb-detail-value">Bangalore</span>
                        </div>
                    </div>
                    <div class="avb-expertise-tags">
                        <span class="avb-expertise-tag">.NET Ecosystem</span>
                        <span class="avb-expertise-tag">Databases</span>
                        <span class="avb-expertise-tag">Azure</span>
                        <span class="avb-expertise-tag">Cloud Architecture</span>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>

<script>
// Search functionality
document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.avb-team-member');
    
    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const role = card.querySelector('.avb-member-role').textContent.toLowerCase();
        const expertiseTags = Array.from(card.querySelectorAll('.avb-expertise-tag'))
            .map(tag => tag.textContent.toLowerCase()).join(' ');
        
        if (name.includes(searchTerm) || role.includes(searchTerm) || expertiseTags.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter functionality
document.querySelectorAll('.avb-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.avb-filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const selectedRole = this.getAttribute('data-role');
        const cards = document.querySelectorAll('.avb-team-member');
        
        cards.forEach(card => {
            const role = card.querySelector('.avb-member-role').textContent;
            if (selectedRole === 'all' || role === selectedRole) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
</script>
