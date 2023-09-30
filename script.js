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

function switchHome() {
    const list = document.querySelectorAll('li a');
    if(window.innerWidth <= 500) {
        const homeImg = document.createElement('img');
        homeImg.src = 'Images/home.svg';
        homeImg.setAttribute('width', '50');
        homeImg.setAttribute('height', '50');
        const link = document.createElement('a');
        link.href = '#home'

        list[0].parentNode.appendChild(link);
        link.appendChild(homeImg);
        list[0].parentNode.removeChild(list[0]);
    } else {
        list[0].textContent = 'Home';
    }
}

function switchAbout() {
    const list = document.querySelectorAll('li a');
    if(window.innerWidth <= 500) {
        const homeImg = document.createElement('img');
        homeImg.src = 'Images/about.svg';
        homeImg.setAttribute('width', '50');
        homeImg.setAttribute('height', '50');
        const link = document.createElement('a');
        link.href = '#about'

        list[1].parentNode.appendChild(link);
        link.appendChild(homeImg);
        list[1].parentNode.removeChild(list[1]);
    } else {
        list[1].textContent = 'About';
    }
}

function switchProject() {
    const list = document.querySelectorAll('li a');
    if(window.innerWidth <= 500) {
        const homeImg = document.createElement('img');
        homeImg.src = 'Images/projects.svg';
        homeImg.setAttribute('width', '50');
        homeImg.setAttribute('height', '50');
        const link = document.createElement('a');
        link.href = '#projects'

        list[2].parentNode.appendChild(link);
        link.appendChild(homeImg);
        list[2].parentNode.removeChild(list[2]);
    } else {
        list[2].textContent = 'Projects';
    }
}

function switchContact() {
    const list = document.querySelectorAll('li a');
    if(window.innerWidth <= 500) {
        const homeImg = document.createElement('img');
        homeImg.src = 'Images/contact.svg';
        homeImg.setAttribute('width', '50');
        homeImg.setAttribute('height', '50');
        const link = document.createElement('a');
        link.href = '#contact'

        list[3].parentNode.appendChild(link);
        link.appendChild(homeImg);
        list[3].parentNode.removeChild(list[3]);
    } else {
        list[3].textContent = 'Contact';
    }
}


window.addEventListener('resize', switchHome)
window.addEventListener('resize', switchAbout)
window.addEventListener('resize', switchProject)
window.addEventListener('resize', switchContact)


const sections = document.querySelectorAll("section[id]");

function navHighlight() {
    let scrollY = window.pageYOffset;

    console.log(scrollY);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 500;
        let sectionId = current.getAttribute('id');

        
        if(scrollY <= 188) {
            document.querySelector("li a[href*=" + "home" + "]").classList.add('active');
        }
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("li a[href*=" +sectionId +"]").classList.add('active');
        } else {
            document.querySelector("li a[href*=" +sectionId +"]").classList.remove('active');
        }

        if(window.innerWidth >= 1440 && scrollY >= 2535) {
            document.querySelector("li a[href*=" + "contact" + "]").classList.add('active');
        }
    })
}

window.addEventListener('scroll', navHighlight)

console.log(sections);