import './heading.scss';

class Expandable–°heckbox {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    this.selector.addEventListener('click', () =>
    this.selector.classList.toggle('active'));
  }
}

const headingExpandMore = document.querySelectorAll('.heading_expand-more');


if (headingExpandMore.length > 0) {
  headingExpandMore.forEach((selector) => new Expandable–°heckbox(selector));
}









// addListener() {
//   this.selector.addEventListener('click', this.toggleActived.bind(this));
// }
  
// toggleActived() {
//   this.selector.classList.toggle('active');
// }
