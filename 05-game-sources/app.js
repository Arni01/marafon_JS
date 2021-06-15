const startBtn = document.querySelector('.start');
// const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

const addClassUp = (element) => {
  element.classList.add('up');
};

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // screens[0].classList.add('up');
  addClassUp(e.target.closest('div'));
});

timeList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('time-btn')) {
    time = +target.dataset.time;
    addClassUp(target.closest('div'));
    startGame();
  }
});

board.addEventListener('click', ({ target }) => {
  if (target.classList.contains('circle')) {
    score++;
    target.remove();
    createRandomCirlce();
  }
});

function startGame() {
  setTime(time);
  let timeGame = setInterval(decreaseTime, 1000);
  createRandomCirlce();
  setTimeout(() => {
    clearInterval(timeGame);
  }, (time + 1) * 1000);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    --time;
    time < 10 ? `0${time}` : time;
    setTime(time);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:0${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет: <span 
  class="primary">${score}</span></h1>`;
}

function createRandomCirlce() {
  const circle = document.createElement('div');
  const size = getRamdomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRamdomNumber(0, width - size);
  const y = getRamdomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRamdomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
