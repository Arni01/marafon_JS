const board = document.querySelector('#board');
const SQUARES_NUMBERS = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const createSquare = () => {
  return '<div class="square"></div>';
};

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  board.insertAdjacentHTML('beforeend', createSquare());
}

board.addEventListener('mouseover', ({ target }) => {
  if (target.className.includes('square')) {
    setColor(target);
  }
});

board.addEventListener('mouseout', ({ target }) => {
  if (target.className.includes('square')) {
    removeColor(target);
  }
});

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
