// --------------nav bar--------------
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
}
navSlide();

// -----------------slider------------------
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// ----------------hide story----------------
const s_hide = (x, i) => {
    const storyprag = document.querySelectorAll('.story');
    for(j = 0; j < storyprag.length; j++){
        if(j == i){
			storyprag[j].style.display = "flex";
            storyprag[j].style.animation = "storyhide 1.5s";
		}
		else{
			storyprag[j].style.display = "none";
		}
    }
}