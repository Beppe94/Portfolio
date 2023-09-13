document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll("nav ol li");

    navLinks.forEach((link, i) => {
        setTimeout(() => {
            link.style.opacity = '1';
        }, 500 * (i + 1));
    })
})

/*
document.addEventListener('DOMContentLoaded', function() {
    const aboutDiv = document.querySelectorAll(".about-me p");

    
    aboutDiv.forEach((letter, i) => {
        if(letter instanceof HTMLElement ) {

            setTimeout(() => {
                letter.style.right = '0px';
            }, 500 * (i + 1));
        }
    })
})
*/

function makeStars() {
    const numStars = 150;
    const container = document.querySelector('.background');

    for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        container.appendChild(star);

        if(Math.random() < .5) {
            star.classList.add('star-glow');
        }

        const x = Math.random() * 100;
        const y = Math.random() * 95;     
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
    }
}

makeStars()