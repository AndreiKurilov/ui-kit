import './heading.scss';

const heading = document.querySelector('.heading');
const headingExpand = document.querySelector(".heading__title");

console.log(heading)
console.log(headingExpand)

heading.addEventListener('click', function() {
  headingExpand.classList.toggle('active');
  }
)
