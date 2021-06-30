// --------------nav bar--------------
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navlinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
      console.log(index);
    });

    burger.classList.toggle("toggle");
  });

  const navdrop = document.querySelector(".nav-hover-btn");
  const dropcontent = document.querySelector(".dropdown-content");

  navdrop.addEventListener("mouseover", () => {
    dropcontent.style.display = "block";
    dropcontent.style.animation = "navdropFade 1s";
  });
  nav.addEventListener("mouseout", () => {
    dropcontent.style.display = "none";
  });
};
navSlide();

// -----------------slider------------------
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// ----------------hide story----------------
const s_hide = (i) => {
  const storyprag = document.querySelectorAll(".story");
  for (j = 0; j < storyprag.length; j++) {
    if (j == i) {
      storyprag[j].style.display = "flex";
      storyprag[j].style.animation = "storyhide 1.5s";
    } else {
      storyprag[j].style.display = "none";
    }
  }
};

// const slideshow = () => {
//   const carouselslide = document.querySelector(".carousel-slide");
//   const carouselImages = document.querySelectorAll(".carousel-slide img");

//   //Buttons
//   const prevBtn = document.querySelector("#prevBtn");
//   const nextBtn = document.querySelector("#nextBtn");

//   //counter
//   let counter = 1;
//   const size = carouselslide.clientWidth;
//   console.log(carouselslide.clientWidth);
//   carouselslide.style.transform = "translateX(" + -size * counter + "px)";

//   //button listeners
//   nextBtn.addEventListener("click", () => {
//     // console.log(carouselImages.length);
//     if (counter >= carouselImages.length - 1) return;
//     carouselslide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     console.log(counter);
//     carouselslide.style.transform = "translateX(" + -size * counter + "px)";
//   });

//   prevBtn.addEventListener("click", () => {
//     if (counter <= 0) return;
//     carouselslide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     // console.log(counter);
//     carouselslide.style.transform = "translateX(" + -size * counter + "px)";
//   });

//   carouselslide.addEventListener("transitionend", () => {
//     // console.log(carouselImages[counter]);
//     if (carouselImages[counter].id === "lastClone") {
//       // carouselslide.style.transition = "none";
//       counter = carouselImages.length - 2;
//       carouselslide.style.transform = "translateX(" + -size * counter + "px)";
//     }
//     if (carouselImages[counter].id === "firstClone") {
//       // carouselslide.style.transition = "none";
//       counter = carouselImages.length - counter;
//       carouselslide.style.transform = "translateX(" + -size * counter + "px)";
//     }
//   });
// };

// slideshow();

const ul_hide = (ulchildNum, ulcontentNum) => {
  const ulContentPrag = document.querySelectorAll(".ul_content");
  const ulChildPrag = document.querySelectorAll(".ul_child");
  ulChildPrag[ulchildNum].style.display = "flex";
  ulContentPrag[ulcontentNum].style.display = "none";
  ulChildPrag[ulchildNum].style.animation = "storyhide 1.5s";
};

const ul_tag_prev = (ulchildNum, ulcontentNum) => {
  const ulContentPrag = document.querySelectorAll(".ul_content");
  const ulChildPrag = document.querySelectorAll(".ul_child");
  ulChildPrag[ulchildNum].style.display = "none";
  ulContentPrag[ulcontentNum].style.display = "block";
  ulContentPrag[ulcontentNum].style.animation = "storyshow 1.5s";
};

// const frog_slide2 = () => {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
  //   var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
    slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  }
// }

// frog_slide2();
