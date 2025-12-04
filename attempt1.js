const gameboard = function () {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
}

class player {
  constructor(name, choiceToken) {
    this.name = name;
    this.choiceToken = choiceToken;
  }

  chooseMove(rowChoice , colChoice) {
    // player makes choice
    return {
      choiceToken: this.choiceToken,
      rowChoice: rowChoice,
      colChoice: colChoice
    }
  }
}

class game {
  constructor(board) {
    this.board = board;

  }

  // recordMove(board, move) {
  //   const token = move.choiceToken;
  //   const row = move.rowChoice;
  //   const col = move.colChoice;

  //   board[row][col] = token;
  // }
}


// simulates a game:

const board = gameboard();
const game1 = new game(board);
console.log("this is the game with the board: ", game1);


const player1 = new player("Autumn", 'X');
const player2 = new player("Steve", 'O');
console.log(player1, player2);


const move1 = player1.chooseMove(1, 1);
console.log(move1)
const move2 = player2.chooseMove(2, 2);
console.log(move2)


function recordMove(move) {
  const token = move.choiceToken;
  const row = move.rowChoice;
  const col = move.colChoice;

  board[row][col] = token;
}

recordMove(move1);
recordMove
