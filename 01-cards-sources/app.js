const container = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');

container.addEventListener('click', ({ target }) => {
  let parrent = target.closest('div').classList;

  if (parrent.value.includes('slide') && !parrent.value.includes('active')) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    parrent.add('active');
  }
});
