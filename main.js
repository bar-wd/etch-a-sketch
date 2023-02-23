'use-strict';

const gridContainer = document.querySelector('div.grid-container');
const slider = document.getElementById('myRange');
const clearBtn = document.querySelector('.clear-btn');
let gridSquares;
let sliderValue = slider.value;

function initialSettings() {
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${sliderValue}, auto)`;
  slider.addEventListener('input', changeGridSize);
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
  clearBtn.addEventListener('click', resetSettings);
}

function resetSettings(event) {
  slider.value = 30;
  sliderValue = slider.value;
  resetGrid();
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

function resetGrid() {
  gridContainer.replaceChildren();
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${sliderValue}, auto)`;
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
}

function changeGridSize(event) {
  sliderValue = Math.round(Number(slider.value));
  resetGrid();
}

initialSettings();
