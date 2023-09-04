document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ol li');

    navLinks.forEach((link, i) => {
        setTimeout(() => {
            link.style.opacity = '1';
        }, 400 * (i + 1));
    })
})