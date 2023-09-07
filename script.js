document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll("nav ol li");

    navLinks.forEach((link, i) => {
        setTimeout(() => {
            link.style.opacity = '1';
        }, 500 * (i + 1));
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector(".about-me").childNodes;

    name.forEach((letter, i) => {
        if(letter instanceof HTMLElement) {

            setTimeout(() => {
                letter.style.left = '0px';
            }, 500 * (i + 1));
        }
    })
})