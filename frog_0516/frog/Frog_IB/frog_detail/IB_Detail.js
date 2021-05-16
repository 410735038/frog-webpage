const title_slide = () => {
    const title = document.querySelectorAll('.front_title'); 
    const hide_content = document.querySelectorAll('.under_content');

    title.forEach((link, index) => {
        title[index].addEventListener('click', () => {
            title[index].classList.toggle('front_title-active');
            for(i = 0; i < title.length ; i++){
                if(i == index) {
                    title[i].classList.remove('front_title-backActive');
                    continue;
                } else {
                    title[i].classList.remove('front_title-active');
                    title[i].classList.toggle('front_title-backActive');
                    hide_content[i].style.display = "none";
                }
            }
            // flash(index, hide_content);
            // setTimeout(flash(index, hide_content), 1500);
            setTimeout(() => {
                hide_content[index].style.animation = "hideFade 2s";
                hide_content[index].style.display = "block";
            }, 750);
            // hide_content[index].style.display = "block";
        })
    })
}

const bBlock_slide = () => {
    const arrow = document.querySelector('.bBlock_arrow');
    const bBlock = document.querySelector('.bottomBlock');
    arrow.addEventListener('click', () => {
        // bBlock.style.display = "block";
        window.scrollTo({top:500, left:0, behavior:'smooth'});
    })
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        // nav.classList.toggle('nav-active');
        //here need to change to jquery too...
        navlinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
                console.log(index);
        });
        // burger.classList.toggle('toggle');
    });

    $(".burger").click(function(){
        $(".nav-links").toggleClass("nav-active");
        $(this).toggleClass("toggle");
    })
    
    // ---------------------nav drop----------------------
    const navdrop = document.querySelector('.nav-hover-btn')
    const dropcontent = document.querySelector('.dropdown-content');


    navdrop.addEventListener('mouseover', () => {
        dropcontent.style.display = "block";
        dropcontent.style.animation = "navdropFade 1s";
    })
    nav.addEventListener('mouseout', () => {
        dropcontent.style.display = "none";
    })

}

bBlock_slide();
navSlide();
title_slide();