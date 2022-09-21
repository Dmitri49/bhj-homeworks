const revealElement = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;

    revealElement.forEach((item) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;

        if (elementTop < viewportHeight) {
            item.classList.add('reveal_active');
        }
    
        if (elementBottom < 0 && elementTop < 0) {
            item.classList.remove('reveal_active');
        }
    });
});
