'use strict';

function boardRefresh() {
  const tds = Array.from(document.querySelectorAll('td'));
  const cells = game.board.flat();

  tds.forEach((td, index) => {
    if (cells[index] !== 0) {
      td.textContent = cells[index];
      td.className = 'field-cell';
      td.classList.add(`field-cell--${cells[index]}`);
    } else {
      td.textContent = '';
      td.className = 'field-cell';
    }
  });
}

const Game = require('../modules/Game.class');
const game = new Game();

const clickButton = document.querySelector('button');

clickButton.addEventListener('click', () => {
  if (game.getStatus() === 'idle') {
    game.start();
    boardRefresh();

    clickButton.classList.remove('start');
    clickButton.classList.add('restart');
    clickButton.textContent = 'Restart';
  } else {
    game.restart();
    boardRefresh();

    clickButton.classList.remove('restart');
    clickButton.classList.add('start');
    clickButton.textContent = 'Start';
  }

  // if (clickButton.textContent === 'Start') {
  //   addNewNumbers();
  //   addNewNumbers();

  if (game.getStatus() === 'playing') {
  }

  // } else {
  //   restartGame();

  //   clickButton.classList.remove('restart');
  //   clickButton.classList.add('start');
  //   clickButton.textContent = 'Start';
  // }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && game.getStatus() === 'playing') {
    game.moveUp();
    boardRefresh();
  }

  if (e.key === 'ArrowDown') {
    game.moveDown();
  }

  if (e.key === 'ArrowLeft') {
    game.moveLeft();
    boardRefresh();
  }

  if (e.key === 'ArrowRight') {
    game.moveRight();
    boardRefresh();
  }
});
