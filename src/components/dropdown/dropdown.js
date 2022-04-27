import '../dropdownItem/dropdownItem.js';
import './dropdown.scss';
import {DropdownItem} from '../dropdownItem/dropdownItem.js';

class Dropdown {
  constructor( selector ) {
    this.mainSelector = selector;
    this.findElements();
    this._state = {};
    this.createDropdownItems();
    this.setTotalValue();
    console.log(this)
  }

  findElements() {
    this.dropdownTotal = this.mainSelector.querySelector('.dropdown__total');
  }

  onItemChange(id, value) {
    this._state[id] = value;
    this.setTotalValue();
  }

  createDropdownItems() {
    const dropdownItems = this.mainSelector.querySelectorAll('.dropdownItem');
    if (dropdownItems.length > 0) {
      dropdownItems.forEach(( selector ) => {
        const dropdownOptions = new DropdownItem( selector, this.onItemChange.bind(this) );
        this._state[dropdownOptions.getId()] = dropdownOptions.getValue();
      })
    }
  }
  
  setTotalValue() {
    const propsMap = {
      bedrooms: "спальни",
      beds: "кровати",
      bathrooms: "ванные комнаты"
    }

    const ddTotal = Object.entries(this._state).slice(0, 2).map((entry) => {
      const key = entry[0];
      const value = entry[1];
      return `${value} ${propsMap[key]}`;
    })

    const ddTotalValue = ddTotal.join(', ').concat('...');

    this.dropdownTotal.value = ddTotalValue;
  }
};

const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length > 0) {
  dropdowns.forEach(( selector ) => {
    const dropDown = new Dropdown( selector );
  })
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
