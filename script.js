document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll("nav ol li");

    navLinks.forEach((link, i) => {
        setTimeout(() => {
            link.style.opacity = '1';
        }, 500 * (i + 1));
    })
})


function makeStars() {
    const numStars = 150;
    const container = document.querySelector('.background');

    for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        container.appendChild(star);

        if(Math.random() < .3) {
            star.classList.add('star-glow');
        }

        const x = Math.random() * 100;
        const y = Math.random() * 115;     
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        const xWidth = Math.random() * 30;
        const yHeight = Math.random() * 30;
    }
}

makeStars()

function randomStar() {

    const stars = document.querySelectorAll(".star");
    
    const starArray = [...stars].sort(() => .5 - Math.random());
    
    const randomStars = starArray.slice(0, 30);
    
    randomStars.forEach(element => {
        element.style.width = '5px';
        element.style.height = '5px';
        element.style.boxShadow = '0px 0px 35px 5px rgba(196, 196, 156, 0.89)';
    })
}

randomStar()

