export default class Game {
  constructor(board, winnerChecker, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = 2;
    this.winner = undefined;
    this.winnerChecker = winnerChecker;
  }

  get getGameName() {
    const gameName = `${this.player1} vs. ${this.player2}`;
    return gameName;
  }

  set setCurrentPlayer(player) {
    this.currentPlayer = player;
  }
}
