import './like.scss';

class LikeCounter {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    const likes = document.querySelector('.like__number');
    let numberLikes = +likes.innerHTML;
    this.selector.addEventListener('click', function() {
      numberLikes +=1;
      likes.innerHTML = numberLikes;
    });
  }
}

const likeButton = document.querySelectorAll('.like');


if (likeButton.length > 0) {
  likeButton.forEach((selector) => new LikeCounter(selector));
}









// addListener() {
//   this.selector.addEventListener('click', this.toggleActived.bind(this));
// }
  
// toggleActived() {
//   this.selector.classList.toggle('active');
// }
