import '../logo/logo.js';
import '../nav/nav.js';
import './header.scss';

class burgerMenu {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    this.selector.addEventListener('click', () =>
    this.selector.classList.toggle('active'));
  }
}

const burgerMenuItems = document.querySelectorAll('.header__menu-burger');

if (burgerMenuItems.length > 0) {
  burgerMenuItems.forEach((selector) => new burgerMenu(selector));
}
