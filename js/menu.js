document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Disable/enable scroll
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Scroll behavior - hide on scroll down, show on scroll up
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 100) {
            nav.classList.remove('scrolled');
        } else if (currentScroll < lastScroll) {
            // Scrolling up
            nav.classList.add('scrolled');
        } else {
            // Scrolling down
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
});