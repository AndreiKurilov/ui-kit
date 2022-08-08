import '../dropdownItem/dropdownItem.js';
import './dropdown.scss';
import {DropdownItem} from '../dropdownItem/dropdownItem.js';
import {optionsComfort, optionsGuests} from './state.js';

export class Dropdown {
  constructor( selector ) {
    this.mainSelector = selector;
    this.expandDropdown();
    this._state = {};
    this.createDropdownItems();
    this.setTotalValue();
    this.clearValues();
    this.applyResult();
  }

  expandDropdown() {
    this.dropdownExpand = this.mainSelector.querySelector('.dropdown__block');
    this.dropdownExpand.addEventListener('click', () =>
      this.dropdownExpand.classList.toggle('active'));
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
  
  onItemChange(id, value) {
    this._state[id] = value;
    this.setTotalValue();
  }
  
  setTotalValue() {
    this.dropdownTotal = this.mainSelector.querySelector('.dropdown__total');
    
    const ddPlaceholder = Object.values(this._state).map(Number).reduce((sum, current) => sum + current);
    
    if ( this.mainSelector.dataset.id == "comfort" ) {
      if ( ddPlaceholder === 0) {
        this.dropdownTotal.value = optionsComfort.placeholder;
      } else {
        const entryFirst = Object.entries(this._state)[0];
        const optionOne = `${entryFirst[1]} ${entryFirst[1] < 2 ? optionsComfort.bedrooms[0] : optionsComfort.bedrooms[1]}`;

        const entrySecond = Object.entries(this._state)[1];
        const optionTwo = `${entrySecond[1]} ${entrySecond[1] < 2 ? optionsComfort.beds[0] : optionsComfort.beds[1]}`;

        const entryThird = Object.entries(this._state)[2];
        const optionThree = `${entryThird[1]} ${entryThird[1] < 2 ? optionsComfort.bathrooms[0] : optionsComfort.bathrooms[1]}`;
        
        if ( entryFirst[1] == 0 ) {
          this.dropdownTotal.value = `${optionTwo}`;
          if ( entrySecond[1] == 0 && entryThird[1] > 0 ) {
            this.dropdownTotal.value = optionsComfort.placeholder;
          } 
        }

        else if ( entrySecond[1] == 0 ) {
          this.dropdownTotal.value = `${optionOne}`;
        }

        else {
          this.dropdownTotal.value = `${optionOne}, ${optionTwo}...`;
        }
      }
    }

    if ( this.mainSelector.dataset.id == "guests" ) {
      if ( ddPlaceholder === 0) {
        this.dropdownTotal.value = optionsGuests.placeholder;
      } else {
        const entryFirst = Object.values(this._state).slice(0, 2).map(Number).reduce((sum, current) => sum + current);

        const optionOne = `${entryFirst} ${entryFirst < 2 ? optionsGuests.guests[0] : entryFirst < 5 ? optionsGuests.guests[1] : optionsGuests.guests[2]}`;

        const entrySecond = Object.entries(this._state)[2];
        const optionTwo = `${entrySecond[1]} ${entrySecond[1] < 2 ? optionsGuests.babies[0] : optionsGuests.babies[1]}`;
        
        if ( entryFirst == 0 ) {
          this.dropdownTotal.value = optionsGuests.placeholder;
        }

        else if ( entrySecond[1] == 0 ) {
          this.dropdownTotal.value = `${optionOne}`;
        }

        else {
          this.dropdownTotal.value = `${optionOne}, ${optionTwo}`;
        }
      }
    }
  }

  clearValues() {
    if ( this.mainSelector.dataset.id == "guests" ) {

      this.buttonClear = this.mainSelector.querySelector('[data-btn="clear"]');
      this.dropdownItemNumbers = this.mainSelector.querySelectorAll(".dropdownItem__number");

      this.buttonClear.addEventListener("click", () => {
        this.dropdownItemNumbers.forEach((item) => {
          item.value = 0;
        })
        for (let key in this._state) {
          if(this._state.hasOwnProperty(key)) {
            this._state[key] = 0;
          }
        }
        this.setTotalValue();
      })
    }
  }

  applyResult() {
    if ( this.mainSelector.dataset.id == "guests" ) {
      this.buttonApply = this.mainSelector.querySelector('[data-btn="apply"]');
      this.buttonApply.addEventListener("click", () => {
        if ( this.dropdownTotal.value != optionsGuests.placeholder ) {
          this.dropdownExpand.classList.toggle('active');
        }
      })
    }
  }
};

const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length > 0) {
  dropdowns.forEach(( selector ) => { new Dropdown( selector )})
}
