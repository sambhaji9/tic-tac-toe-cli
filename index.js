#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { startGame } from "./match.js";

console.log(figlet.textSync('Tic Tac Toe'))

console.log(`
===============================================================================================================
  ${chalk.yellow('How To Play')}

  ${chalk.yellow('1. Have the first player go first')}
  ${chalk.yellow('2. Have the second player go second.')} 
  ${chalk.yellow('3. Keep alternating moves until one of the players has drawn a row of three symbols or until no one can win.')}

  ${chalk.yellow('Any Question? Google it!')}
===============================================================================================================
`)

startGame()