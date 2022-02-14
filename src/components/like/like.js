import './like.scss';

class LikeCounter {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    this.selector.addEventListener('click', function(e) {
      e.target.innerText++;
    })
  }
}

const likeButton = document.querySelectorAll('.like__button');

if (likeButton.length > 0) {
  likeButton.forEach((selector) => new LikeCounter(selector));
}
