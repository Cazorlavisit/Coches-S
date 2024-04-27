const car = document.getElementById('car');
let carLeft = 200; // Posición inicial del coche

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && carLeft > 0) {
    carLeft -= 10;
  }
  if (event.key === 'ArrowRight' && carLeft < 350) {
    carLeft += 10;
  }
  car.style.left = carLeft + 'px';
});
