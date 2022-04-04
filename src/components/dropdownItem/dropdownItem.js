import './dropdownItem.scss';

export class DropdownOptions {
  constructor( selector ) {
    this.mainSelector = selector;
    this.findElements();
    this.addListener();
    this.setInitialStateBtn();
    console.log(this.itemNumber.shadowRoot)
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
      if ( this.itemNumber.value > 1 ) {
        this.itemNumber.value--;
        this.isActivated(this.btnMinus);
        this.isActivated(this.btnPlus);
      }
      if ( this.itemNumber.value == 1) {
        this.isDisabled(this.btnMinus);
      } 
    }
    if ( e.target == this.btnPlus ) {
      if ( this.itemNumber.value < 4 ) {
        this.itemNumber.value++;
        this.isActivated(this.btnMinus);
      }
      if ( this.itemNumber.value == 4 ) {
        this.isDisabled(this.btnPlus);
      }
    }
  };
} 
