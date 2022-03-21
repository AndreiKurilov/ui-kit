import './dropdownItem.scss';

// this = dropdownItem

class DropdownOptions {
  constructor( selector ) {
    this.mainSelector = selector;
    this.addListener();
    this.findElements();

  }
  
  // this.mainNode.addEventListener('click', this.handleDropdownClick.bind(this));

  findElements() {
    this.btnMinus = this.mainSelector.querySelector('.dropdownItem__btnMinus');
    this.btnPlus = this.mainSelector.querySelector('.dropdownItem__btnPlus');
    this.itemNumber = this.mainSelector.querySelector('.dropdownItem__number');
    console.log(this.btnMinus)
    console.log(this.btnPlus)
    console.log(this.itemNumber)
  }

  addListener() {
    this.mainSelector.addEventListener('click', function(e) {

      
      this.itemNumber = 2;
      let numberDefault = this.itemNumber;
      
      function isDisabled (btn) {
        btn.setAttribute("disabled", '');
        btn.classList.add('dropdownItem__btn_disabled');
      }
      
      function isActivated (btn) {
        btn.removeAttribute("disabled", '');
        btn.classList.remove('dropdownItem__btn_disabled');
      }
      
      if ( e.target == this.btnMinus ) {
        if ( numberDefault > 0 ) {
          numberDefault--;
          isActivated(this.btnMinus);
          isActivated(this.btnPlus);
        }
        if ( numberDefault == 0) {
          isDisabled(this.btnMinus);
        } 
      }
      if ( e.target == this.btnPlus ) {
        if ( numberDefault < 3 ) {
          numberDefault++;
          isActivated(this.btnMinus);
        }
        if ( numberDefault == 3 ) {
          isDisabled(this.btnPlus);
        }
      }
      this.itemNumber = numberDefault;

    });
  }
}

const dropdownItem = document.querySelectorAll('.dropdownItem__buttons');

if (dropdownItem.length > 0) {
  dropdownItem.forEach(( selector ) => new DropdownOptions( selector ));
}
