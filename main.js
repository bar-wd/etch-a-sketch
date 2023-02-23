'use-strict';

const gridContainer = document.querySelector('div.grid-container');
const slider = document.querySelector('.slider');
let gridSquares;

function createSquares(numberOfSquares) {
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

createSquares(16);

gridSquares.forEach(square => square.addEventListener('mouseover', addHover));
