import './dropdownItem.scss';

// this = dropdownItem

class DropdownOptions {
  constructor( selector ) {
    this.mainSelector = selector;
    this.addListener();
    this.findElements();
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


  addListener() {
    this.mainSelector.addEventListener('click', function(e) {

      this.itemNumber = 2;
      let numberDefault = this.itemNumber;
      
      if ( e.target == this.btnMinus ) {
        if ( numberDefault > 0 ) {
          numberDefault--;
          this.isActivated(this.btnMinus);
          this.isActivated(this.btnPlus);
        }
        if ( numberDefault == 0) {
          this.isDisabled(this.btnMinus);
        } 
      }
      if ( e.target == this.btnPlus ) {
        if ( numberDefault < 3 ) {
          numberDefault++;
          this.isActivated(this.btnMinus);
        }
        if ( numberDefault == 3 ) {
          this.isDisabled(this.btnPlus);
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
