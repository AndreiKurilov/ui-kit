import '../roomNumber/roomNumber.js';
import '../roomPrice/roomPrice.js';
import '../rate/rate.js';
import '../commentCount/commentCount.js';
import './roomWidget.scss';

const widget = document.querySelector(".roomWidget")
const btnPrev = widget.querySelector(".roomWidget__buttonPrev");
const btnNext = widget.querySelector(".roomWidget__buttonNext");
const carouselSlides = widget.querySelectorAll(".roomWidget__img");
const dots = widget.querySelector(".roomWidget__slideDots");

function makeDots() {
  let dotsFragment = new DocumentFragment();
  for (let i = 0; i < carouselSlides.length; i++) {
    let dot = document.createElement("li");
    dot.classList.add("roomWidget__dot");
    dotsFragment.appendChild(dot);
    if ( i == 0) {
      dot.classList.add("roomWidget__dot_current");
    }
  }
  
  dots.append(dotsFragment)
}
makeDots();

let i = 0;
btnNext.addEventListener("click", function() {
  carouselSlides[i].style.display = "none";
  i += 1;
  if ( i > (carouselSlides.length - 1) ) {
    i = 0
  }
  carouselSlides[i].style.display = "block";
})

btnPrev.addEventListener("click", function() {
  carouselSlides[i].style.display = "none";
  i -= 1;
  if ( i < 0)  {
    i = carouselSlides.length - 1;
  }
  carouselSlides[i].style.display = "block";
})




// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";
  
  
//   // var dots = document.getElementsByClassName("dot");
//   // for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   // dots[slideIndex-1].className += " active";
// }
