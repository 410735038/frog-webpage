// -------------slideshow-------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
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
// --------------navslide----------
const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav2')
	const navlinks = document.querySelectorAll('.navfade');

	// toogle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		//animate links
		// navlinks.forEach((link, index) => {
		// 	if(link.style.animation){
		// 		link.style.animation = '';
		// 	}else{
		// 		link.style.animation = 'nav2fade 0,5s ease-in forwards ${index/5 + 2}s';
		// 	}
		// 	// console.log(index/5);
		// });
	});
}
navSlide();

// --------------story-li-hover----------------

function showPrag(x,i){
	const storyprag  = document.querySelectorAll('.story-prag');
	console.log(i);
	for(j = 0; j < storyprag.length; j++){
		if(j == i){
			storyprag[j].style.display = "inline";
		}
		else{
			storyprag[j].style.display = "none";
		}
	}
	// storyprag.style.display = "none";
	
}