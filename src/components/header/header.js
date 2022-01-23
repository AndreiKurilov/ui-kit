import '../logo/logo.js';
import '../nav/nav.js';
import '../button/button.js';
import './header.scss';

const menuBurgerItem = document.querySelectorAll(".js-menu-burger");
if( menuBurgerItem.length > 0) {
  menuBurgerItem.forEach((item) => {
    item.addEventListener ('click', function(){
      document.querySelector('.header__menu-burger').classList.toggle('active');
      document.querySelector('.header__menu-burger-icon').classList.toggle('active');
      document.querySelector('.header__wrapper').classList.toggle('active');
    })
  })
}
