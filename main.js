'use-strict';

const gridContainer = document.querySelector('div.grid-container');
const slider = document.getElementById('myRange');
let gridSquares;

function initialSettings() {
  createGrid(100);
  slider.addEventListener('input', changeGridSize);
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
}

function createGrid(numberOfSquares) {
  let count = numberOfSquares;
  while (count > 0) {
    gridContainer.appendChild(document.createElement('div'));
    count--;
  }
  gridSquares = document.querySelectorAll('.grid-container div');
}

function addHover(event) {
  event.target.classList.add('grid-square-hover');
}

function changeGridSize(event) {
  let sliderValue = Number(slider.value);
  gridContainer.replaceChildren();
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, auto)`;
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
}

initialSettings();
