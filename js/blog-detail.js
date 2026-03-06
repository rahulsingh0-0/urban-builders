const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

fetch('data/blogs.json')
  .then(response => response.json())
  .then(blogs => {
    const blog = blogs.find(b => b.slug === slug);
    const content = document.getElementById('blog-content');
    const relatedPosts = document.getElementById('related-posts');
    
    if (blog) {
      content.innerHTML = `
        <div class="blog-detail">
          <div class="blog-detail-meta">
         <div>
          <i class="fas fa-tag"></i>
            <span>${blog.category}</span>
         </div>

         <div>
            <i class="far fa-calendar-alt"></i>
            <span>${blog.date}</span>
         </div>
  
          <div>
            <i class="fas fa-user"></i>
            <span>By ${blog.author}</span>
          </div>
          </div>
          <h1 class="blog-detail-title">${blog.title}</h1>
          <img src="${blog.image}" alt="${blog.title}" class="blog-detail-image">
          <div class="blog-detail-content">
            ${blog.content}
          </div>
          <a href="index.html#news" class="back-link">← Back to News</a>
        </div>
      `;
      
      const related = blogs.filter(b => b.id !== blog.id).slice(0, 3);
      relatedPosts.innerHTML = related.map(post => `
        <a href="blog-detail.html?slug=${post.slug}" class="related-post">
          <img src="${post.image}" alt="${post.title}">
          <div class="related-post-content">
            <span class="related-date">${post.date}</span>
            <h4>${post.title}</h4>
          </div>
        </a>
      `).join('');
    } else {
      content.innerHTML = '<div class="blog-not-found"><h1>Blog not found</h1><a href="index.html#news">← Back to Homepage</a></div>';
    }
  });
