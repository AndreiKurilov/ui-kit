import './chart.scss';

const itemList = document.querySelectorAll('.chart__item');
const circleList = document.querySelectorAll('.chart__circle');
const chartNumber = document.querySelector('.chart__number');
const doughnutCount = document.querySelector('.chart__doughnutCount');

const votesNumber = [520, 260, 260, 0];
const colors = ["#FFE39C", "#66D2EA", "#BC9CFF", "#919191"];

function showNumberOfVotes (item, index) {
  item.addEventListener('mouseover', function () {
    circleList[index].classList.add('chart__circle_hovered');
    chartNumber.innerHTML = `${votesNumber[index]}`;
    doughnutCount.setAttribute("fill", `${colors[index]}`);
  });
  
  item.addEventListener('mouseout', function () {
    circleList[index].classList.remove('chart__circle_hovered');
    chartNumber.innerHTML = "1040"
    doughnutCount.setAttribute("fill", "#919191" )
  });
};

itemList.forEach((item, index) => showNumberOfVotes(item, index));
circleList.forEach((item, index) => showNumberOfVotes(item, index));
