window.addEventListener('load', function() {
    const loader = document.getElementById('pageLoader');
    
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});