document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll("nav ol li");

    navLinks.forEach((link, i) => {
        setTimeout(() => {
            link.style.opacity = '1';
        }, 500 * (i + 1));
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelectorAll("p");

    name.forEach((letter, i) => {
        setTimeout(() => {
            letter.style.left = '0px';
        }, 700 * (i + 1));
    })
})