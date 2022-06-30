import '../roomNumber/roomNumber.js';
import '../roomPrice/roomPrice.js';
import '../rate/rate.js';
import '../commentCount/commentCount.js';
import './roomWidget.scss';

class Carousel {
  constructor(selector) {
    this.selector = selector;
    this.findButtons();
    this.makeDots();
    this.addListeners();
  }

  findButtons() {
    this.btnPrev = this.selector.querySelector(".roomWidget__buttonPrev");
    this.btnNext = this.selector.querySelector(".roomWidget__buttonNext");
    this.carouselSlides = this.selector.querySelectorAll(".roomWidget__img");
    this.dots = this.selector.querySelector(".roomWidget__slideDots");
  }
  
  makeDots() {
    let dotsFragment = new DocumentFragment();
      for (let i = 0; i < this.carouselSlides.length; i++) {
        let dot = document.createElement("li");
        dot.classList.add("roomWidget__dot");
        dotsFragment.appendChild(dot);
        if ( i == 0) {
          dot.classList.add("roomWidget__dot_current");
        }
      }
    this.dots.append(dotsFragment)
  }
  
  addListeners() {
    let slideIndex = 0;
    this.dotsTotal = this.selector.querySelectorAll(".roomWidget__dot");

    this.selector.addEventListener("click", (function(event) {
      this.carouselSlides[slideIndex].style.display = "none";
      this.dotsTotal[slideIndex].classList.toggle("roomWidget__dot_current");
      let btnClick = event.target;
      
      if (btnClick == this.btnPrev) {
        slideIndex--;
        if ( slideIndex < 0)  {
          slideIndex = this.carouselSlides.length - 1;
        }
      }
      
      if (btnClick == this.btnNext) {
        slideIndex++;
        if ( slideIndex > (this.carouselSlides.length - 1) ) {
          slideIndex = 0;
        }
      }
      
      this.carouselSlides[slideIndex].style.display = "block";
      this.dotsTotal[slideIndex].classList.toggle("roomWidget__dot_current");
    }).bind(this));
  }
}

const roomWidgets = document.querySelectorAll('.roomWidget');

if (roomWidgets.length > 0) {
  roomWidgets.forEach(( selector ) => {new Carousel( selector )});
}
