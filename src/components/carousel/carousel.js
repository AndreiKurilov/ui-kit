import './carousel.scss';

export class Carousel {
  constructor(selector) {
    this.selector = selector;
    this.findButtons();
    this.makeDots();
    this.addListeners();
  }

  findButtons() {
    this.btnPrev = this.selector.querySelector(".carousel__buttonPrev");
    this.btnNext = this.selector.querySelector(".carousel__buttonNext");
    this.carouselSlides = this.selector.querySelectorAll(".carousel__link");
    this.dots = this.selector.querySelector(".carousel__slideDots");
  }
  
  makeDots() {
    let dotsFragment = new DocumentFragment();
      for (let i = 0; i < this.carouselSlides.length; i++) {
        let dot = document.createElement("li");
        dot.classList.add("carousel__dot");
        dotsFragment.appendChild(dot);
        if ( i == 0) {
          dot.classList.add("carousel__dot_current");
        }
      }
    this.dots.append(dotsFragment)
  }
  
  addListeners() {
    let slideIndex = 0;
    this.dotsTotal = this.selector.querySelectorAll(".carousel__dot");

    this.selector.addEventListener("click", (function(event) {
      this.carouselSlides[slideIndex].style.display = "none";
      this.dotsTotal[slideIndex].classList.toggle("carousel__dot_current");
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
      this.dotsTotal[slideIndex].classList.toggle("carousel__dot_current");
    }).bind(this));
  }
}
