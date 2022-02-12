import chalk from "chalk"
import { Player } from "./player.js"

export class Board {
  constructor() {
    this.table = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.marks = [
      chalk.gray('-'),
      chalk.blueBright('O'),
      chalk.magenta('X')
    ]
  }

  /**
   * Place a piece on board[pos]
   * if it is empty (0)
   * 
   * @param {Player} player Player who place (0-1)
   * @returns {boolean} return true if successful
   */
  async place(player) {
    const pos = await player.calcMove(this)

    if (this.table[pos] == 0) {
      this.table[pos] = player.order
      return true
    }

    console.log('Placement Error, Already someone there')
    return false
  }

  /**
   * Print out board with marks
   * 
   * @returns {void} return true if successful
   */
  print() {
    const arr = []

    for (let i = 0; i < 3; i++) {
      let row = []

      for (let j = 0; j < 3; j++) {
        row.push(this.marks[this.table[i * 3 + j]])
      }

      arr.push(row.join(' | '))
    }


    console.log(arr.join('\n') + '\n')
  }

  /**
   * Check if Player Win
   * 
   * @param {Player} player Player (0-1)
   * @returns {boolean} return true if player win
   */
  checkIsWin(player) {
    const checkList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < checkList.length; i++) {
      const check = checkList[i]
      let count = 0

      for (let i = 0; i < check.length; i++) {
        if (this.table[check[i]] === player.order) {
          count = count + 1
        }

        if (count === 3) {
          return true
        }
      }
    }

    return false
  }
}