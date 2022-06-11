import './dateDropdown.scss';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let buttonApply = {
  content: 'Применить',
  className: 'air-datepicker-button',
  onClick: (dp) => {
    dp.hide();
  }
}


const dateDropdownDefault = new AirDatepicker("[data-id='dropdownDateDefault']", {
  position: 'bottom left',
  classes: "air-datepicker",
  classes: "air-datepicker_big",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
})

const dateDropdownSelect = new AirDatepicker("[data-id='dropdownDateSelect']", {
  position: 'bottom right',
  classes: "air-datepicker",
  classes: "air-datepicker_big",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
  selectedDates: ['2019-08-19'],
})

const dateDropdownRange = new AirDatepicker("[data-id='dropdownDateRange']", {
  position: 'bottom center',
  classes: "air-datepicker",
  classes: "air-datepicker_range",
  // inline: true,
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
  range: true,
  multipleDates: 2,
  // multipleDatesSeparator: ' - ',
  dateFormat(date) {
    const dateString = date.toLocaleString('ru', {
      day: '2-digit',
      month: 'short',
    });
    const dateArray = dateString.split(',');
    const dateFirst = dateArray[0].split('').slice(0, -1).join('');
    const dateSecond = dateArray[1].split('').slice(0, -1).join('');
    return `${dateFirst} - ${dateSecond}`
  },
  selectedDates: [ '2019-08-19', '2019-08-23' ],
})
