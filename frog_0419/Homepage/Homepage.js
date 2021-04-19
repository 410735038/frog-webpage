const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
            console.log(index/5);
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

const changeW = () => {
    const mobj1 = document.querySelector('.map-object1');
    const img1 = document.querySelector('.container');
    // mobj1.style.width = ;
}



changeW();