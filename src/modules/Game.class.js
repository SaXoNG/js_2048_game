'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(initialState) {
    this.board =
      initialState || Array.from({ length: 4 }, () => Array(4).fill(0));
    this.score = 0;
    this.status = 'idle';
  }

  moveLeft() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === 0 && this.board[i][j + 1] > 0) {
          this.board[i][j] = this.board[i][j + 1];
          this.board[i][j + 1] = 0;
        } else if (this.board[i][j] === 0 && this.board[i][j + 2] > 0) {
          this.board[i][j] = this.board[i][j + 2];
          this.board[i][j + 2] = 0;
        } else if (this.board[i][j] === 0 && this.board[i][j + 3] > 0) {
          this.board[i][j] = this.board[i][j + 3];
          this.board[i][j + 3] = 0;
        }

        if (this.board[i][j] === this.board[i][j + 1]) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j + 1] = 0;
        } else if (
          this.board[i][j] === this.board[i][j + 2] &&
          this.board[i][j + 1] === 0
        ) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j + 2] = 0;
        } else if (
          this.board[i][j] === this.board[i][j + 3] &&
          this.board[i][j + 1] === 0 &&
          this.board[i][j + 2] === 0
        ) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j + 3] = 0;
        }
      }
    }

    this.addRandomNumber();
  }

  moveRight() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = this.board.length - 1; j >= 0; j--) {
        if (this.board[i][j] === 0 && this.board[i][j - 1] > 0) {
          this.board[i][j] = this.board[i][j - 1];
          this.board[i][j - 1] = 0;
        } else if (this.board[i][j] === 0 && this.board[i][j - 2] > 0) {
          this.board[i][j] = this.board[i][j - 2];
          this.board[i][j - 2] = 0;
        } else if (this.board[i][j] === 0 && this.board[i][j - 3] > 0) {
          this.board[i][j] = this.board[i][j - 3];
          this.board[i][j - 3] = 0;
        }

        if (this.board[i][j] === this.board[i][j - 1]) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j - 1] = 0;
        } else if (
          this.board[i][j] === this.board[i][j - 2] &&
          this.board[i][j - 1] === 0
        ) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j - 2] = 0;
        } else if (
          this.board[i][j] === this.board[i][j - 3] &&
          this.board[i][j - 1] === 0 &&
          this.board[i][j - 2] === 0
        ) {
          this.board[i][j] = this.board[i][j] + this.board[i][j];
          this.board[i][j - 3] = 0;
        }
      }
    }

    this.addRandomNumber();
  }

  moveUp() {
    this.addRandomNumber();
  }

  moveDown() {
    console.log('hi ken down');
  }

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {
    console.log(this.board);
  }

  setStatus(value) {
    this.status = value;
  }

  addRandomNumber() {
    let count = 0;

    while (count < 1) {
      const randomRow = this.getRandomNum();
      const randomColumn = this.getRandomNum();

      if (this.board[randomRow][randomColumn] === 0) {
        this.board[randomRow][randomColumn] = 2;
        count++;
      }
    }
  }

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {
    return this.status;
  }

  getRandomNum() {
    return Math.floor(Math.random() * 4);
  }

  start() {
    this.setStatus('playing');
    this.addRandomNumber();
    this.addRandomNumber();
  }

  restart() {
    this.setStatus('idle');
    this.board = this.board.map((row) => row.map((col) => (col = 0)));
  }

  // Add your own methods here
}

module.exports = Game;
