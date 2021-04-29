const navSlide = () => {
    const burger = document.querySelector('.burger');
    
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        navlinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
                console.log(index);       
        });
    });

    $(".burger").click(function(){
        $(".nav-links").toggleClass("nav-active");
        $(this).toggleClass("toggle");
    })

    const navdrop = document.querySelector('.nav-hover-btn')
    const dropcontent = document.querySelector('.dropdown-content');

    navdrop.addEventListener('mouseover', () => {
        dropcontent.style.animation = "navdropFade 1s";
    })

    $(".nav-hover-btn").mouseover(function(){
        $(".dropdown-content").css("display", "block");
    })
    $(".nav-hover-btn").mouseout(function(){
        $(".dropdown-content").css("display", "none");
    })

    $(".welcome-button").click(function(){
        $(".welcome-slide").toggleClass("welcome-active");
        setTimeout(flash,1500);
    })

}

const flash = () => {
    
    $(".welcome-slide").css("display", "none");
    const homemap = document.querySelector('.homemap')
    homemap.style.animation = "homemapFade 2s";
    
}

navSlide();