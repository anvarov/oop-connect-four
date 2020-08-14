export default class Game {
  constructor(board, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 'red';
    this.winner = undefined;
  }
}
