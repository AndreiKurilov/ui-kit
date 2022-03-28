// import '../dropdownItem/dropdownItem.js';
import './dropdown.scss';
// import {DropdownOptions} from '../dropdownItem/dropdownItem.js';

class Dropdown {
  constructor( selector ) {
    this.mainSelector = selector;
    this.findElements();
    this.addListener();
    this.setInitialStateBtn();
    console.log(this)
  }

  findElements() {
    this.dropdownTotal = this.mainSelector.querySelector('.dropdown__total');
    this.btnMinus = this.mainSelector.querySelector('.dropdownItem__btnMinus');
    this.btnPlus = this.mainSelector.querySelector('.dropdownItem__btnPlus');
    this.itemNumber = this.mainSelector.querySelector('.dropdownItem__number');
    this.bedroomsInput = this.mainSelector.querySelector("#bedrooms");
    this.bedsInput = this.mainSelector.querySelector("#beds");
    this.bathroomsInput = this.mainSelector.querySelector("bathrooms");
  }

  isDisabled (btn) {
    btn.setAttribute("disabled", '');
    btn.classList.add('dropdownItem__btn_disabled');
  }

  isActivated (btn) {
    btn.removeAttribute("disabled", '');
    btn.classList.remove('dropdownItem__btn_disabled');
  }

  setInitialStateBtn() {
    if ( this.itemNumber.value == 0 ) {
      this.isDisabled(this.btnMinus);
    }
  }

  addListener() {
    this.mainSelector.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    if ( e.target == this.btnMinus ) {
      if ( this.itemNumber.value > 0 ) {
        this.itemNumber.value--;
        this.isActivated(this.btnMinus);
        this.isActivated(this.btnPlus);
      }
      if ( this.itemNumber.value == 1) {
        this.isDisabled(this.btnMinus);
      } 
    }
    if ( e.target == this.btnPlus ) {
      if ( this.itemNumber.value < 3 ) {
        this.itemNumber.value++;
        this.isActivated(this.btnMinus);
      }
      if ( this.itemNumber.value == 3 ) {
        this.isDisabled(this.btnPlus);
      }
    }

    this.dropdownTotal.value = `${this.bedroomsInput.value} спальни, ${this.bedsInput.value} кровати`;
  };

} 

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
