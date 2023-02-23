'use-strict';

const gridContainer = document.querySelector('div.grid-container');
const slider = document.getElementById('myRange');
const clearBtn = document.querySelector('.clear-btn');
let gridSquares;
let sliderValue = slider.value;

function initialSettings() {
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${20}, auto)`;
  slider.addEventListener('input', changeGridSize);
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
  clearBtn.addEventListener('click', resetSettings);
}

function resetSettings(event) {
  gridContainer.replaceChildren();
  slider.value = 20;
  sliderValue = slider.value;
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${sliderValue}, auto)`;
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
  sliderValue = Number(slider.value);
  gridContainer.replaceChildren();
  createGrid(sliderValue * sliderValue);
  gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, auto)`;
  gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
}

initialSettings();
