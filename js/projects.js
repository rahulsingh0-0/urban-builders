const projectsData = {
    upcoming: [
        {
            name: "Moosa House",
            location: "Byculla, Mumbai",
            company: "USB Constructions",
            buildingName: "Moosa House",
            builtUpArea: "35,000 sq.ft",
            floors: "G+21",
            firm: "Partners",
            constructionDates: "Under Construction",
            image: "/images/moosa-house.jpeg",
            type: ["residential", "commercial"]
        }
    ],
    ongoing: [
        {
            name: "Usha Darshan",
            location: "Naupada, Thane",
            company: "Shree Chandra Developers",
            buildingName: "Usha Darshan",
            builtUpArea: "18,000 sq.ft",
            floors: "G+8",
            firm: "Partners",
            constructionDates: "Under Construction",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Larkins Nest",
            location: "Kasarvadavali, GB Road, Thane",
            company: "M/S. Amardeep Dev.",
            buildingName: "Larkins Nest",
            builtUpArea: "95,000 sq.ft",
            floors: "19 Stories",
            firm: "Partners",
            constructionDates: "Under Construction",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Urban Heritage",
            location: "Mahagiri, Thane",
            company: "Urban Space Group",
            buildingName: "Urban Heritage",
            builtUpArea: "45,000 sq.ft",
            floors: "G+12",
            firm: "Partners",
            constructionDates: "Under Construction",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Urban Square",
            location: "B Cabin, Thane",
            company: "Urban Space Group",
            buildingName: "Urban Square",
            builtUpArea: "22,000 sq.ft",
            floors: "G+10",
            firm: "Partners",
            constructionDates: "Under Construction",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },  

    ],
    completed: [
        {
            name: "Adnan Mahal",
            location: "K Villa, Thane",
            company: "M/S. Maskan Dev.",
            buildingName: "Adnan Mahal",
            builtUpArea: "20,000 sq.ft",
            floors: "G+5",
            firm: "Partners",
            constructionDates: "Oct 2000 - Feb 2002",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Adnan Mahal - B Wing",
            location: "K Villa, Thane",
            company: "M/S. Tanzeem Costr.",
            buildingName: "Adnan Mahal B Wing",
            builtUpArea: "15,000 sq.ft",
            floors: "G+7",
            firm: "Partners",
            constructionDates: "Jun 2007 - Nov 2009",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Ahmed Tower",
            location: "Rabodi, Thane",
            company: "M/S. Abbas Enter.",
            buildingName: "Ahmed Tower",
            builtUpArea: "20,000 sq.ft",
            floors: "G+7",
            firm: "Partners",
            constructionDates: "Sep 2004 - Jun 2007",
            image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Goodwill Residency",
            location: "Bhiwandi",
            company: "M/S. Goodwill Const.",
            buildingName: "Goodwill Residency",
            builtUpArea: "50,000 sq.ft",
            floors: "G+5",
            firm: "Partners",
            constructionDates: "Mar 2011 - Jun 2014",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Olive Residency",
            location: "Owale, Thane",
            company: "M/S. Goodwill Properties",
            buildingName: "Olive Residency",
            builtUpArea: "21,000 sq.ft",
            floors: "G+7",
            firm: "Partners",
            constructionDates: "Feb 2017 - Dec 2018",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        },
        {
            name: "Sai Orion",
            location: "Powai, Mumbai",
            company: "Vineet Buildcon Pvt. Ltd.",
            buildingName: "Sai Orion",
            builtUpArea: "1,00,000 sq.ft",
            floors: "G+8",
            firm: "Partners",
            constructionDates: "Oct 2023",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
            type: ["residential", "commercial"]
        }
    ]
};

function createProjectCard(project, status) {
    let statusClass = '';
    if (status === 'upcoming') statusClass = 'status-upcoming';
    else if (status === 'ongoing') statusClass = 'status-ongoing';
    else if (status === 'completed') statusClass = 'status-completed';
    
    const typeDisplay = Array.isArray(project.type) 
        ? project.type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' & ')
        : project.type.charAt(0).toUpperCase() + project.type.slice(1);
    
    return `
        <a style="text-decoration:none" href="/contact.html">
        <div class="project-card" data-type="${Array.isArray(project.type) ? project.type.join(' ') : project.type}">
            <div class="project-img">
                <img src="${project.image}" alt="${project.name}">
                <div class="project-overlay">
                    <span class="view-details-btn">View Details</span>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                <div class="project-details">
                    <div class="detail-item">
                        <span class="detail-label">Type</span>
                        <span class="detail-value">${typeDisplay}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Building</span>
                        <span class="detail-value">${project.buildingName}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Built-up Area</span>
                        <span class="detail-value">${project.builtUpArea}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Floors</span>
                        <span class="detail-value">${project.floors}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Timeline</span>
                        <span class="detail-value ${statusClass}">${project.constructionDates}</span>
                    </div>
                </div>
            </div>
        </div>
        </a>
    `;
}

function loadProjects(typeFilter = null) {
    const filterProjects = (projects) => {
        if (!typeFilter) return projects;
        return projects.filter(p => {
            if (Array.isArray(p.type)) {
                return p.type.includes(typeFilter);
            }
            return p.type === typeFilter;
        });
    };
    
    document.getElementById('upcomingGrid').innerHTML = filterProjects(projectsData.upcoming).map(p => createProjectCard(p, 'upcoming')).join('') || '<p style="text-align:center;padding:40px;color:#666;">No projects found</p>';
    document.getElementById('ongoingGrid').innerHTML = filterProjects(projectsData.ongoing).map(p => createProjectCard(p, 'ongoing')).join('') || '<p style="text-align:center;padding:40px;color:#666;">No projects found</p>';
    document.getElementById('completedGrid').innerHTML = filterProjects(projectsData.completed).map(p => createProjectCard(p, 'completed')).join('') || '<p style="text-align:center;padding:40px;color:#666;">No projects found</p>';
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const typeFilter = type && ['residential', 'commercial'].includes(type.toLowerCase()) ? type.toLowerCase() : null;
    
    loadProjects(typeFilter);
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    const status = urlParams.get('status');
    if (status && ['upcoming', 'ongoing', 'completed'].includes(status.toLowerCase())) {
        switchTab(status.toLowerCase());
        setTimeout(() => {
            document.querySelector('.projects-tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
});
