document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const propertyType = document.querySelector('.filter-select[data-placeholder="Property Type"] .selected-text').textContent;
    const propertyStatus = document.querySelector('.filter-select[data-placeholder="Property Status"] .selected-text').textContent;
    
    let type = '';
    if (propertyType.toLowerCase().includes('residential')) {
        type = 'residential';
    } else if (propertyType.toLowerCase().includes('commercial')) {
        type = 'commercial';
    }
    
    let status = '';
    if (propertyStatus.toLowerCase().includes('ongoing') || propertyStatus.toLowerCase() === 'ongong') {
        status = 'ongoing';
    } else if (propertyStatus.toLowerCase().includes('completed')) {
        status = 'completed';
    } else if (propertyStatus.toLowerCase().includes('upcoming')) {
        status = 'upcoming';
    }
    
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (type) params.append('type', type);
    
    window.location.href = `/projects.html${params.toString() ? '?' + params.toString() : ''}`;
});
