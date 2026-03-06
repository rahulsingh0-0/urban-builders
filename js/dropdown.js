document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.filter-select');
    
    dropdowns.forEach(dropdown => {
        const selectedText = dropdown.querySelector('.selected-text');
        const dropdownList = dropdown.querySelector('.dropdown-list');
        const items = dropdown.querySelectorAll('.dropdown-list li');
        
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
        
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                selectedText.textContent = this.textContent;
                dropdown.classList.remove('active');
            });
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.filter-select')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});