import '../dropdownItem/dropdownItem.js';
import './dropdown.scss';
import {DropdownOptions} from '../dropdownItem/dropdownItem.js';

class Dropdown {
  constructor( selector ) {
    this.mainSelector = selector;
    this.findElements();
    this.createDropdownItems();
    this.setTotalValue();
    console.log(this)
  }

  findElements() {
    this.dropdownTotal = this.mainSelector.querySelector('.dropdown__total');
    this.bedroomsInput = this.mainSelector.querySelector("#bedrooms");
    this.bedsInput = this.mainSelector.querySelector("#beds");
    this.bathroomsInput = this.mainSelector.querySelector("bathrooms");
  }

  createDropdownItems() {
    const dropdownItems = document.querySelectorAll('.dropdownItem');
    if (dropdownItems.length > 0) {
      dropdownItems.forEach(( selector ) => new DropdownOptions( selector ));
    }
  }
  
  setTotalValue() {
    this.dropdownTotal.value = `${this.bedroomsInput.value} спальни, ${this.bedsInput.value} кровати`;
  }
};

const dropdown = document.querySelectorAll('.dropdown');

if (dropdown.length > 0) {
  dropdown.forEach(( selector ) => new Dropdown( selector ));
}



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
