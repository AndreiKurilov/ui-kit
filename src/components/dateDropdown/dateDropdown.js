import './dateDropdown.scss';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const dateDropdown = new AirDatepicker('.textField__input', {
  position: 'bottom center',
  inline: false
})
