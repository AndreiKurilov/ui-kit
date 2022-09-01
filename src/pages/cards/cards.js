import '../../components/cardRegistration/cardRegistration.js';
import '../../components/cardSearchRoom/cardSearchRoom.js';
import '../../components/dateDropdown/dateDropdown.js';
import '../../components/roomWidget/roomWidget.js';
import '../../components/linksPages/linksPages.js';
import '../../layouts/layout.scss';
import './cards.scss'

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import '../../components/dateDropdown/dateDropdown.scss';

let buttonApply = {
  content: 'Применить',
  className: 'air-datepicker-button',
  onClick: (dp) => {
    dp.hide();
  }
}

const dateDropdownInline = new AirDatepicker(".cards__airDatepicker", {
  position: 'bottom center',
  classes: "air-datepicker",
  classes: "air-datepicker_big",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
  range: true,
  multipleDates: 2,
  selectedDates: [ '2019-08-19', '2019-08-23' ],
})
