

document.addEventListener("DOMContentLoaded", () => {
    // Countdown animation for statistics
    const counters = document.querySelectorAll('.counter');
    const speed = 100;
    
    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(startCounting, options);
    counters.forEach(counter => observer.observe(counter));

    // Scroll Reveal Animation for About Page
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
            }
        });
    }, { threshold: 0.15, rootMargin: '-50px' });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // Animated Timeline for Story Section
    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.scroll-reveal-timeline');
    
    if (timelineLine && timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate the line
                    timelineLine.classList.add('active');
                    
                    // Animate each timeline item with delay
                    timelineItems.forEach((item) => {
                        const delay = parseInt(item.getAttribute('data-delay')) || 0;
                        setTimeout(() => {
                            item.classList.add('active');
                        }, delay + 500);
                    });
                    
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const storySection = document.querySelector('.story-timeline');
        if (storySection) {
            timelineObserver.observe(storySection);
        }
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            console.log('Menu clicked');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    // Video trigger
    const videoTrigger = document.getElementById('videoTrigger');
    if (videoTrigger) {
        videoTrigger.addEventListener('click', () => {
            videoTrigger.style.transform = "scale(0.95)";
            setTimeout(() => {
                videoTrigger.style.transform = "scale(1)";
            }, 200);
        });
    }

    // News slider
    const newsTrack = document.getElementById('newsTrack');
    if (newsTrack) {
        const newsPrev = document.querySelector('.news-section-prev');
        const newsNext = document.querySelector('.news-section-next');
        const newsCards = document.querySelectorAll('.news-section-card');
        let newsIndex = 0;

        function moveNewsSlider() {
            const gap = 30;
            const cardWidth = newsCards[0].offsetWidth;
            newsTrack.style.transform = `translateX(-${newsIndex * (cardWidth + gap)}px)`;
        }

        if (newsNext) {
            newsNext.addEventListener('click', () => {
                const itemsInView = window.innerWidth > 1024 ? 3 : (window.innerWidth > 650 ? 2 : 1);
                if (newsIndex < newsCards.length - itemsInView) {
                    newsIndex++;
                } else {
                    newsIndex = 0;
                }
                moveNewsSlider();
            });
        }

        if (newsPrev) {
            newsPrev.addEventListener('click', () => {
                if (newsIndex > 0) {
                    newsIndex--;
                    moveNewsSlider();
                }
            });
        }

        window.addEventListener('resize', () => {
            newsIndex = 0;
            moveNewsSlider();
        });
    }
});


