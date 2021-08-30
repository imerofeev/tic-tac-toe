class TicTacToe {
  constructor() {
    this.currentPlayer = 'x'
    this.winner = null
    this.matrix = []

    for (let i = 0; i < 3; i++) {
      this.matrix[i] = []
      for (let j = 0; j < 3; j++) {
        this.matrix[i][j] = null
      }
    }
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayer
      this.currentPlayer = (this.currentPlayer === 'x' ? 'o' : 'x')
      return true
    }
    return false
  }

  win() {
    if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) {
      return this.matrix[0][0]
    }

    if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) {
      return this.matrix[0][2]
    }

    for (let i = 0; i < 3; i++) {
      if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
        return this.matrix[i][0]
      }
    }

    for (let i = 0; i < 3; i++) {
      if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
        return this.matrix[0][i]
      }
    }
    return null
  }

  isFinished() {
    this.winner = this.win()
    return !!(this.isDraw() || this.winner !== null);
  }

  getWinner() {
    this.winner = this.win()
    return this.winner
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.matrix[i][j] === null) {
          return false
        }
      }
    }
    return true
  }

  isDraw() {
    this.winner = this.win()
    return this.noMoreTurns() && this.winner === null
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex]
  }
}

module.exports = TicTacToe;
