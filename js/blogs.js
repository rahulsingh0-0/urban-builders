document.addEventListener('DOMContentLoaded', async function() {
    const newsTrack = document.getElementById('newsTrack');
    const prevBtn = document.querySelector('.news-section-prev');
    const nextBtn = document.querySelector('.news-section-next');
    let currentIndex = 0;
    
    try {
        const response = await fetch('/data/blogs.json');
        const blogs = await response.json();
        
        newsTrack.innerHTML = blogs.map(blog => `
            <div class="news-section-card">
                <a href="blog-detail.html?slug=${blog.slug}" class="news-section-card-img">
                    <img src="${blog.image}" alt="${blog.title}">
                </a>
                <div class="news-section-card-body">
                    <div class="news-section-meta">
                        <span><i class="fas fa-user"></i> by: ${blog.author}</span>
                        <span><i class="fas fa-tag"></i> ${blog.category}</span>
                    </div>
                    <a style="text-decoration:none" alt=${blog.slug} href="blog-detail.html?slug=${blog.slug}">
                    <h3 class="news-section-card-title">${blog.title}</h3>
                </a>
                    <div class="news-section-footer">
                        <span class="news-section-date"><i class="far fa-calendar-alt"></i> ${blog.date}</span>
                        <a href="blog-detail.html?slug=${blog.slug}" class="news-section-read-more">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        setTimeout(() => {
            document.querySelectorAll('.news-section-card').forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, 100);
        
        const updateSlider = () => {
            const cardWidth = newsTrack.querySelector('.news-section-card').offsetWidth;
            const gap = 30;
            newsTrack.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        };
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            const maxIndex = blogs.length - 3;
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });
        
    } catch (error) {
        console.error('Error loading blogs:', error);
    }
});