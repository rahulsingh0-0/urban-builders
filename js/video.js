document.addEventListener('DOMContentLoaded', function() {
    const videoTrigger = document.getElementById('videoTrigger');
    const videoModal = document.getElementById('videoModal');
    const closeVideo = document.querySelector('.close-video');
    const modalVideo = document.getElementById('modalVideo');
    
    if (videoTrigger) {
        videoTrigger.addEventListener('click', function() {
            videoModal.style.display = 'block';
            modalVideo.play();
        });
    }
    
    if (closeVideo) {
        closeVideo.addEventListener('click', function() {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        });
    }
    
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
});