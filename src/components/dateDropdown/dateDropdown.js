import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './dateDropdown.scss';

let buttonApply = {
  content: 'Применить',
  className: 'air-datepicker-button',
  onClick: (dp) => {
    dp.hide();
  }
}

const dateDropdownStart = new AirDatepicker("#dropdownDateStart", {
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

const dateDropdownSelectStart = new AirDatepicker("#dropdownDateSelectStart", {
  position: 'bottom left',
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


const dateDropdownEnd = new AirDatepicker("#dropdownDateEnd", {
  position: 'bottom right',
  classes: "air-datepicker",
  classes: "air-datepicker_big",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
})

const dateDropdownSelectEnd = new AirDatepicker("#dropdownDateSelectEnd", {
  position: 'bottom right',
  classes: "air-datepicker",
  classes: "air-datepicker_big",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
  selectedDates: ['2019-08-23'],
})


const dateDropdownRange = new AirDatepicker("#dropdownDateRange", {
  position: 'bottom center',
  classes: "air-datepicker",
  classes: "air-datepicker_range",
  prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_back"></span>',
  nextHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_forward"></span>',
  navTitles: {
    days: 'MMMM yyyy'
  },
  buttons: [ 'clear', buttonApply ],
  range: true,
  multipleDates: 2,
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
