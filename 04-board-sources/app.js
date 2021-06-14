const board = document.querySelector('#board');
const SQUARES_NUMBERS = 600;
const colors = [
  '#00b9fc',
  '#47cf73',
  '#b957ff',
  '#ffdc2e',
  '#ff3c41',
  '#2cc7ff',
];

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

function setColor({ style }) {
  const color = getRandomColor();
  style.backgroundColor = color;
  style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
  style.borderColor = color;
}

function removeColor({ style }) {
  style.backgroundColor = '#a1a1a1';
  style.boxShadow = `0 0 5px rgb(39, 39, 39)`;
  style.borderColor = '#181818';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
