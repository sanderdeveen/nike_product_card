const container = document.querySelector('.container');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');

color2.addEventListener('click', () => {
  container.classList.add('change')
});

color1.addEventListener('click', () => {
  container.classList.remove('change')
});
