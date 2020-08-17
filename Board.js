export default class Board {
  constructor() {
    this.rows = ['', '', '', '', '', ''];
    this.board = {
      0: { 'column-0': [...this.rows], lastFilled: 5 },
      1: { 'column-1': [...this.rows], lastFilled: 5 },
      2: { 'column-2': [...this.rows], lastFilled: 5 },
      3: { 'column-3': [...this.rows], lastFilled: 5 },
      4: { 'column-4': [...this.rows], lastFilled: 5 },
      5: { 'column-5': [...this.rows], lastFilled: 5 },
      6: { 'column-6': [...this.rows], lastFilled: 5 },
    };
    this.lastSquare = {};
  }

  addToken(column, playerNumber) {
    const { lastFilled } = this.board[column];
    const selectedColumn = this.board[column][`column-${column}`];
    selectedColumn[lastFilled] = playerNumber;
    this.board[column].lastFilled = lastFilled - 1;
    this.setLastSquare(lastFilled, column);
    // this.updateBoard(playerNumber);
  }

  setLastSquare(row, column) {
    this.lastSquare = { row, column };
  }

  get getLastSquare() {
    return this.lastSquare;
  }

  get getBoard() {
    return this.board;
  }

  updateBoardUI(playerNumber) {
    const { row, column } = this.getLastSquare;
    const div = document.createElement('div');
    console.log(`square-${row}-${column}`);
    const square = document.getElementById(`square-${row}-${column}`);
    const playerColors = new Map();
    playerColors.set(1, 'red');
    playerColors.set(2, 'black');
    div.classList.add('token', playerColors.get(playerNumber));
    square.appendChild(div);
    // this.updateBoard(column, row, playerNumber);

    // const squares = boardElement.childNodes;
  }

  // updateBoard(column, row, playerNumber) {
  //   this.board[column][`column-${column}`][row] = playerNumber;
  //   console.log(this.board)
  // }
}
