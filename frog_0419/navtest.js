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
        dropcontent.style.animation = "navdropFade 1s";
    })


}


navSlide();