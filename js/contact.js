const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNyOR0YBoqSZmgvGBBLdjjqCs6kJRcJCZrrTsmkETXtSTwuV-b4xmjnrlqtjVF_ES1Cw/exec';

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnIcon = document.getElementById('btnIcon');
    
    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);
    formData.append('message', e.target.message.value);
    
    btn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData
        });
        
        btnText.textContent = 'Sent!';
        btnIcon.className = 'fas fa-check';
        e.target.reset();
        
        setTimeout(() => {
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
            btn.disabled = false;
        }, 3000);
    } catch (error) {
        btnText.textContent = 'Failed';
        btnIcon.className = 'fas fa-times';
        
        setTimeout(() => {
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
            btn.disabled = false;
        }, 3000);
    }
});
