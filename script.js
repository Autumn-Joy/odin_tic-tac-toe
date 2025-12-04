// // goal: as little code as possible

// // IIFE module pattern

// // brainstorm a little, it'll make things easier
// // check for all winning 3-in-row ties.


// // gameboard object

// //

// // let gameboard = [
// //   [ 0, 0, 0 ],
// //   [ 0, 0, 0 ],
// //   [ 0, 0, 0 ]
// // ];

// // make an array with `rows` elements, and for each `row` element, create a
// const gameboard1 = Array.from(
//   { length: 3 },
//   () => new Array(3).fill(0)
// );

// console.log(gameboard)

// class gameboard() {
// // create gameboard
// }

// class gameManager() {
// // play round
// // check for winner
// // set open spaces [state]
// }

// class player() {
// // set token type
// // get open spaces
//   getOpenSpaces()
// // place token based on open spaces
//   placeToken()
// }

// gameboard.createGameboard()

// player.createTestPlayers()
//   // create player1
//   // set player1 token type to x
//   // create player2
//   // set player2 token type to o
// gameManager.playRound(player1, player2)

//   // calls these:
//   gameManager.checkForWinner()
//   // while gameManager.checkForWinner() = false:
//   gameManager.playNextTurn()
//   // whose turn is it?
//     gameManager.switchTurn()
//     gameManager.getPlayerChoice()
//       // whose turn is it?
//       gameManager.getPlayerTurn()
//       // returns CurrentPLayer
//       CurrentPlayer.placeToken()
