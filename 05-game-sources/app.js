const startBtn = document.querySelector('.start');
// const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const colors = [
  'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
  'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(to top, #0250c5 0%, #d43f8d 100%)',
  'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
  'linear-gradient(to right, #f9d423 0%, #ff4e50 100%)',
];

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
    if (time === 5) {
      timeEl.classList.add('alarm');
    } else if (time < 5) {
      timeEl.classList.toggle('alarm-scale');
    }
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
  const color = getRandomColor();

  circle.classList.add('circle');
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;

  board.append(circle);
}

function getRamdomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
