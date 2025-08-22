# PVB Review Team

<style>
/* Hide right sidebar */
.md-sidebar--secondary { display: none !important; }
.md-content { margin-right: 0 !important; }

/* PVB Team specific styles */
.pvb-container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    overflow: hidden;
}

.pvb-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
}

.pvb-header h1 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 300;
}

.pvb-header p {
    margin: 10px 0 0 0;
    font-size: 1.2em;
    opacity: 0.9;
    display: none;
}

.pvb-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    margin-bottom: 1.5rem;
}

.pvb-stat-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    border-left: 3px solid #667eea;
}

.pvb-stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 5px;
}

.pvb-stat-label {
    color: #666;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.pvb-team-section {
    padding: 1rem;
}

.pvb-team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.pvb-member-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
}

.pvb-member-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}

.pvb-member-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
}

.pvb-member-role {
    color: #667eea;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 0.8rem;
}

.pvb-member-email {
    color: #666;
    font-size: 0.8rem;
    word-break: break-all;
}

.pvb-role-filter {
    margin-bottom: 1.5rem;
    text-align: center;
}

.pvb-filter-btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.pvb-filter-btn:hover, .pvb-filter-btn.active {
    background: #764ba2;
    transform: scale(1.05);
}

.pvb-search-box {
    width: 100%;
    max-width: 400px;
    padding: 0.75rem 1rem;
    margin: 1rem auto;
    display: block;
    border: 2px solid #e0e0e0;
    border-radius: 15px;
    font-size: 0.9rem;
    transition: border-color 0.3s ease;
}

.pvb-search-box:focus {
    outline: none;
    border-color: #667eea;
}

.pvb-hidden {
    display: none;
}

@media (max-width: 768px) {
    .pvb-team-grid {
        grid-template-columns: 1fr;
    }
    .pvb-stats {
        grid-template-columns: repeat(2, 1fr);
    }
    .pvb-header h1 {
        font-size: 1.5rem;
    }
}
</style>

<div class="pvb-container">
    <div class="pvb-header">
        <h1>🏗️ PVB Team</h1>
        <p>Program Value Board - Team Members & Roles</p>
    </div>
    
    <div class="pvb-stats">
        <div class="pvb-stat-card">
            <div class="pvb-stat-number" id="totalMembers">25</div>
            <div class="pvb-stat-label">Total Members</div>
        </div>
        <div class="pvb-stat-card">
            <div class="pvb-stat-number" id="vpCount">2</div>
            <div class="pvb-stat-label">VP, Delivery</div>
        </div>
        <div class="pvb-stat-card">
            <div class="pvb-stat-number" id="ddCount">8</div>
            <div class="pvb-stat-label">DD, Delivery</div>
        </div>
        <div class="pvb-stat-card">
            <div class="pvb-stat-number" id="dmCount">15</div>
            <div class="pvb-stat-label">DM, Delivery</div>
        </div>
    </div>
    
    <div class="pvb-team-section">
        <input type="text" class="pvb-search-box" id="searchBox" placeholder="Search by name, role, or email...">
        
        <div class="pvb-role-filter">
            <button class="pvb-filter-btn active" data-role="all">All Roles</button>
            <button class="pvb-filter-btn" data-role="VP, Delivery">VP, Delivery</button>
            <button class="pvb-filter-btn" data-role="DD, Delivery">DD, Delivery</button>
            <button class="pvb-filter-btn" data-role="DM, Delivery">DM, Delivery</button>
            <button class="pvb-filter-btn" data-role="PMO Advisor">PMO Advisor</button>
            <button class="pvb-filter-btn" data-role="CDO">CDO</button>
        </div>
        
        <div class="pvb-team-grid" id="teamGrid">
            <div class="pvb-member-card" data-role="VP, Delivery">
                <div class="pvb-member-name">Anand Shah</div>
                <div class="pvb-member-role">VP, Delivery</div>
                <div class="pvb-member-email">anand.shah@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Ananth Rao</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">ananth.rao@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Ashish Moses</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">ashish.moses@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Maher Srinivas Ravula</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">maher.ravula@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="PMO Advisor">
                <div class="pvb-member-name">Mukunda Rao</div>
                <div class="pvb-member-role">PMO Advisor</div>
                <div class="pvb-member-email">mukunda.rao@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Nikhil Damwani</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">nikhil.damwani@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Raghavendra TS</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">raghavendra.ts@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="CDO">
                <div class="pvb-member-name">Ramesh Narasimhan</div>
                <div class="pvb-member-role">CDO</div>
                <div class="pvb-member-email">ramesh.narasimhan@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Sandeep Narayanan S</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">sandeep.ns@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Subhash Thakur</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">subhash.thakur@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Sunil Das G</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">sunil.das@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Suresh P</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">suresh.p@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Swathi Kadoor</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">swathi.kadoor@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="VP, Delivery">
                <div class="pvb-member-name">Venugopal Reddy</div>
                <div class="pvb-member-role">VP, Delivery</div>
                <div class="pvb-member-email">venu.reddy@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Vijay Kumar Noolu</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">vijayk.n@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Salil Mathur</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">salil.mathur@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Mahalakshmi Raman</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">mahalakshmi.sr@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Jigar Gala</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">jigar.gala@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Bharath Kishore Aluri</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">bharathkishore.a@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Amresh Singh</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">amresh.singh@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Vasundhara Eppala</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">vasundhara.eppala@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Sandeep Rangaswamy</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">sandeep.rangaswamy@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Amit Garg</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">amit.garg@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Nirav Thakker</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">nirav.thakker@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Piyush Singh</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">piyush.singh@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Rajesh Kumar Singh</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">rajesh.kumarsingh@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Sudheer Chejarla</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">venkatasudheer.chejarla@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DM, Delivery">
                <div class="pvb-member-name">Murali Aravelly</div>
                <div class="pvb-member-role">DM, Delivery</div>
                <div class="pvb-member-email">murali.aravelly@accionlabs.com</div>
            </div>
            <div class="pvb-member-card" data-role="DD, Delivery">
                <div class="pvb-member-name">Munish Goyal</div>
                <div class="pvb-member-role">DD, Delivery</div>
                <div class="pvb-member-email">munish.goyal@accionlabs.com</div>
            </div>
        </div>
    </div>
</div>

<script>
// Search functionality
document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.pvb-member-card');
    
    cards.forEach(card => {
        const name = card.querySelector('.pvb-member-name').textContent.toLowerCase();
        const role = card.querySelector('.pvb-member-role').textContent.toLowerCase();
        const email = card.querySelector('.pvb-member-email').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || role.includes(searchTerm) || email.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter functionality
document.querySelectorAll('.pvb-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.pvb-filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const selectedRole = this.getAttribute('data-role');
        const cards = document.querySelectorAll('.pvb-member-card');
        
        cards.forEach(card => {
            if (selectedRole === 'all' || card.getAttribute('data-role') === selectedRole) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
</script>
