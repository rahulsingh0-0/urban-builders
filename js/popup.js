// Popup Modal
window.addEventListener('load', function() {
    setTimeout(function() {
        const modal = document.getElementById('popupModal');
        if (modal) {
            modal.classList.add('show');
        }
    }, 5000); // Show after 5 seconds
});

// Close modal functionality
const closeBtn = document.querySelector('.popup-close');
const modal = document.getElementById('popupModal');

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}
