/* eslint-disable import/extensions */
import Game from './Game.js';
import Board from './Board.js';
import WinnerChecker from './WinnerChecker.js';

let game;
const playerOneNameInput = document.getElementById('player-1-name');
const playerTwoNameInput = document.getElementById('player-2-name');
const newGameButton = document.getElementById('new-game');
// const boardSquare = document.getElementById('board-squares');
const gameNameDiv = document.getElementById('game-name');
const clickTargets = document.getElementById('click-targets');

// helper function to check if player name input fields empty
const setNewGameButton = () => {
  const p1 = playerOneNameInput.value;
  const p2 = playerTwoNameInput.value;
  if (p1 && p2) {
    newGameButton.removeAttribute('disabled');
  } else {
    newGameButton.setAttribute('disabled', 'true');
  }
};

// change click target color
const changeClickTargetColor = () => {
  // const clickTarget = ev.target;
  if (game.currentPlayer === 1) {
    clickTargets.classList.add('red');
    clickTargets.classList.remove('black');

    game.setCurrentPlayer = 2;
  } else {
    clickTargets.classList.add('black');
    clickTargets.classList.remove('red');
    game.setCurrentPlayer = 1;
  }
};

playerOneNameInput.addEventListener('keyup', setNewGameButton);

playerTwoNameInput.addEventListener('keyup', setNewGameButton);

newGameButton.addEventListener('click', () => {
  if (!game) {
    game = new Game(new Board(), new WinnerChecker(),
      playerOneNameInput.value, playerTwoNameInput.value);
    const div = document.createElement('div');
    const gameName = game.getGameName;
    div.textContent = gameName;
    gameNameDiv.appendChild(div);
    playerOneNameInput.value = '';
    playerTwoNameInput.value = '';
    newGameButton.setAttribute('disabled', 'true');
  }
});

clickTargets.addEventListener('click', (ev) => {
  const clickTarget = ev.target;
  if (!game || !clickTarget.id.includes('column')) {
    return;
  }
  changeClickTargetColor(ev);
  const column = Number.parseInt(ev.target.id[ev.target.id.length - 1], 10);
  game.board.addToken(column, game.currentPlayer);
  game.board.updateBoardUI(game.currentPlayer);
  const winner = WinnerChecker.checkColumn(game.board.getBoard,
    game.board.getLastSquare, game.currentPlayer);
  console.log(winner);
});
