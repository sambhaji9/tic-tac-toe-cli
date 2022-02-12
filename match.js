import { Board } from "./board.js"
import { Player } from "./player.js"

/**
 * Play game with board by player_1 and players_2
 * 
 * @param {Board} pos Place Position (0-8)
 * @param {firstPlayer} player Player who place (0-1)
 * @param {secondPlayer} player Player who place (0-1)
 * 
 * @returns {boolean} return true if successful
 */
export const startGame = async (board, firstPlayer, secondPlayer) => {
  // Init Board and Player
  board = new Board()
  
  firstPlayer = new Player(1)
  await firstPlayer.init()

  secondPlayer = new Player(2)
  await secondPlayer.init()

  // For recording turn
  let turn = 0

  for (let i = 0; i < 9; i++) {
    const inTurnPlayer = (turn % 2 + 1 === 1) ? firstPlayer : secondPlayer

    await board.place(inTurnPlayer)

    board.print()

    // Check If has winner
    if (board.checkIsWin(inTurnPlayer)) {
      console.log(`${inTurnPlayer.name} won!`)
      return
    }

    turn++
  }

  console.log('Draw!')
}