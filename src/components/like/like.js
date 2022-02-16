import './like.scss';

class LikeCounter {
  constructor(selector) {
    this.selector = selector;
    this.addListener();
  }
  
  addListener() {
    this.selector.addEventListener('click', function(e) {
      let numberLikes = e.target.innerText;
      numberLikes++;
      e.target.innerText = numberLikes;
      if (numberLikes > 5) {
        e.target.classList.add("like_colored");
        e.target.classList.add("like_gradient");
      }
    })
  }
}

const likeButton = document.querySelectorAll('.like');

if (likeButton.length > 0) {
  likeButton.forEach((selector) => new LikeCounter(selector));
}
