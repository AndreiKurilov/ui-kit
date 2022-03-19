import '../dropdownItem/dropdownItem.js';
import './dropdown.scss';

class ExpandableDropdown {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    this.selector.addEventListener('click', () =>
    this.selector.classList.toggle('active'));
  }
}

const dropdownExpanded = document.querySelectorAll('.dropdown__block');

if (dropdownExpanded.length > 0) {
  dropdownExpanded.forEach((selector) => new ExpandableDropdown(selector));
}

let itemsTotal = document.querySelector('.dropdown__total');
import {numberDefault} from "../dropdownItem/dropdownItem.js";
itemsTotal.innerText = `${numberDefault} спальни`;
