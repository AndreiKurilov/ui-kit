import './dropdownItem.scss';

export class DropdownOptions {
  constructor( selector ) {
    this.mainSelector = selector;
    this.findElements();
    this.addListener();
    this.numberDefault = this.itemNumber.value;
    this.setInitialStateBtn();
    console.log(this)
  }

  findElements() {
    this.btnMinus = this.mainSelector.querySelector('.dropdownItem__btnMinus');
    this.btnPlus = this.mainSelector.querySelector('.dropdownItem__btnPlus');
    this.itemNumber = this.mainSelector.querySelector('.dropdownItem__number');
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
      if ( this.numberDefault > 0 ) {
        this.numberDefault--;
        this.isActivated(this.btnMinus);
        this.isActivated(this.btnPlus);
      }
      if ( this.numberDefault == 0) {
        this.isDisabled(this.btnMinus);
      } 
    }
    if ( e.target == this.btnPlus ) {
      if ( this.numberDefault < 3 ) {
        this.numberDefault++;
        this.isActivated(this.btnMinus);
      }
      if ( this.numberDefault == 3 ) {
        this.isDisabled(this.btnPlus);
      }
    }
    this.itemNumber.value = this.numberDefault;
  };
} 

// let itemResult = 

const dropdownItems = document.querySelectorAll('.dropdownItem');

if (dropdownItems.length > 0) {
  dropdownItems.forEach(( selector ) => new DropdownOptions( selector ));
}
