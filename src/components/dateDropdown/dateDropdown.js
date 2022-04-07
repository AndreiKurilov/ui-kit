import './dateDropdown.scss';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const dateDropdown = new AirDatepicker('.textField__input', {
  position: 'bottom center',
  inline: false
})

const textFieldInput = document.querySelector('.textField__input');

textFieldInput.addEventListener('keydown', function(event) {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
});
