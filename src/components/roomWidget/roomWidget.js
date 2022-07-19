import '../roomNumber/roomNumber.js';
import '../roomPrice/roomPrice.js';
import '../rate/rate.js';
import '../commentCount/commentCount.js';
import { Carousel } from '../carousel/carousel.js';
import './roomWidget.scss';

const roomWidgets = document.querySelectorAll('.roomWidget');

if (roomWidgets.length > 0) {
  roomWidgets.forEach(( selector ) => {new Carousel( selector )});
}
