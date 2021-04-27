const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
                console.log(index);
            
        });

        burger.classList.toggle('toggle');
    });

    const navdrop = document.querySelector('.nav-hover-btn')
    const dropcontent = document.querySelector('.dropdown-content');

    navdrop.addEventListener('mouseover', () => {
        dropcontent.style.display = "block";
        dropcontent.style.animation = "navdropFade 1s";
    })
    nav.addEventListener('mouseout', () => {
        dropcontent.style.display = "none";
    })

    // open slide
    const welcomebutton = document.querySelector('.welcome-button')
    const welcomeslide = document.querySelector('.welcome-slide')
    

    welcomebutton.addEventListener('click', () =>{
        welcomeslide.classList.toggle('welcome-active');
        setTimeout(flash,1500);
        
        // homemap.style.display = "block";
    })
}

const flash = () => {
    const welcomeslide = document.querySelector('.welcome-slide')
    const homemap = document.querySelector('.homemap')
    welcomeslide.style.display = "none";
    homemap.style.animation = "homemapFade 2s";
    
}

navSlide();