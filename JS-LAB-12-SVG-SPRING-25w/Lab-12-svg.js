//LAB 12 - SVG OUTDOOR SCENE
const sun = document.getElementById('sun');
const sky = document.getElementById('sky');
const ground = document.getElementById('ground');
let isNight = false;

sun.addEventListener('click', () => {
  isNight = !isNight;
  sky.setAttribute('fill', isNight ? 'midnightblue' : 'skyblue');
  ground.setAttribute('fill', isNight ? 'darkgreen' : 'green');
  sun.setAttribute('fill', isNight ? 'white' : 'yellow');
});