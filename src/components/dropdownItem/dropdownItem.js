import './dropdownItem.scss';

// this = dropdownItem

class DropdownOptions {
  constructor( selector ) {
    this.mainSelector = selector;
    this.addListener();
  }
  
  addListener() {
    this.mainSelector.addEventListener('click', function(e) {
      
      let btnMinus = this.mainSelector.childNodes['.dropdownItem__btnMinus'];
      let btnPlus = this.mainSelector.childNodes['.dropdownItem__btnMinus'];
      let itemNumber = this.mainSelector.childNodes['.dropdownItem__number'];
      
      let numberDefault = this.itemNumber.innerText;
      
      function isDisabled (btn) {
        btn.setAttribute("disabled", '');
        btn.classList.add('dropdownItem__btn_disabled');
      }
      
      function isActivated (btn) {
        btn.removeAttribute("disabled", '');
        btn.classList.remove('dropdownItem__btn_disabled');
      }
      
      if ( e.target == btnMinus ) {
        if ( numberDefault > 0 ) {
          numberDefault--;
          isActivated(btnMinus);
          isActivated(btnPlus);
        }
        if ( numberDefault == 0) {
          isDisabled(btnMinus);
        } 
      }
      if ( e.target == btnPlus ) {
        if ( numberDefault < 3 ) {
          numberDefault++;
          isActivated(btnMinus);
        }
        if ( numberDefault == 3 ) {
          isDisabled(btnPlus);
        }
      }
      itemNumber.innerText = numberDefault;

    });
  }
}

const dropdownItem = document.querySelectorAll('.dropdownItem__buttons');

if (dropdownItem.length > 0) {
  dropdownItem.forEach(( selector ) => new DropdownOptions( selector ));
}
