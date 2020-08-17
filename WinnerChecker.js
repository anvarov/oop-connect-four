export default class WinnerChecker {
  constructor() {
    this.combinations = {
      1: { row: [], column: [], diagonal: [] },
      2: { row: [], column: [], diagonal: [] },
    };
  }

  isWinner(board, lastSquare, player) {
    return this.checkColumn(board, lastSquare, player);
    // this.checkRow();
    // this.checkDiagonal();
  }

  static checkColumn(boardObj, { column: columnIndex, row: rowIndex }, player) {
    // const board = boardObj[columnIndex];
    let counter = 0;
    // console.log(board[`column-${0 - 1}`])
    const currentColumn = boardObj[columnIndex][`column-${columnIndex}`];
    console.log(currentColumn[rowIndex]);
    for (let i = 1; i < 4; i += 1) {
      console.log(currentColumn[rowIndex + i], 'rowindex -1');
      console.log(currentColumn[rowIndex], 'row index');
      if (currentColumn[rowIndex + i] && currentColumn[rowIndex + i] === currentColumn[rowIndex]) {
        counter += 1;
      } else {
        return false;
      }
    }

    console.log(counter, 'counter');
    return counter === 3;
  }
}
