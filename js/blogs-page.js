document.addEventListener('DOMContentLoaded', async function() {
    const blogsGrid = document.getElementById('blogsGrid');
    
    try {
        const response = await fetch('/data/blogs.json');
        const blogs = await response.json();
        
        blogsGrid.innerHTML = blogs.map(blog => `
            <div class="news-section-card">
                <a href="blog-detail.html?slug=${blog.slug}" class="news-section-card-img">
                    <img src="${blog.image}" alt="${blog.title}">
                </a>
                <div class="news-section-card-body">
                    <div class="news-section-meta">
                        <span><i class="fas fa-user"></i> by: ${blog.author}</span>
                        <span><i class="fas fa-tag"></i> ${blog.category}</span>
                    </div>
                    <a href="blog-detail.html?slug=${blog.slug}" style="text-decoration:none" >
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
        
    } catch (error) {
        console.error('Error loading blogs:', error);
    }
});
