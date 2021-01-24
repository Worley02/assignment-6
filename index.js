const battleship = () => {
// Step 1: Create Players
let winner;
let player1 = {

  name: '',
  shipCount: 4, 
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}

let player2 = {
   name: '',
   shipCount: 4,
   board: [
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0]
   ]
}


player1.name = prompt("Player 1, please enter your name.");
player2.name = prompt("Player 2, please enter your name. ");
console.log("Player 1 is", player1.name);
console.log("Player 2 is", player2.name);    

//Step 2: Randomly Add Ships to each Board
 placeShips = (player) => {
for (i=0; i < 4; i++) {
  let xPos = Math.floor(Math.random() * 4);
  let yPos = Math.floor(Math.random() * 4);
  
if(player.board[xPos][yPos] == 1) {
  i--;
} else {
  player.board[xPos][yPos] = 1;
}
}  
 }
placeShips(player1);
placeShips(player2);
console.log("Player 1 board:", player1.board[0], player1.board[1], player1.board[2], player1.board[3]);
console.log("Player 2 board:", player2.board[0], player2.board[1], player2.board[2], player2.board[3]);

//Step 3- Start the Game Play

gamePlay = (player) => {

  // Step 3a- Ask Player to Choose Strike Coordinates

  play1Game = () => {
    alert (`${player1.name}'s turn`);
    let guessX = parseInt(prompt(`guess an x coordinate 0-4`));
    let guessY = parseInt(prompt(`guess a y coordinate 0-4`));
    console.log (player2.board[guessX][guessY])
    if (player2.board[guessX][guessY] == 1) {
      alert (`Hit!`)
      player2.shipCount--;
      player2.board[guessX][guessY] = 0;
    if (player2.shipCount == 0) {
      alert (`${player1.name} is the winner!`)
      player2.board[guessX][guessY] = 0;
      return(winner = player1.name)
    }
      else if (player2.shipCount > 0) {
        play1Game()
     }
    }
    else {
      alert(`Miss!`)
      play1Game()
    }
     
  }

  play2Game = () => {
    alert (`${player2.name}'s turn`);
    let guessX = parseInt(prompt(`guess an x coordinate 0-4`));
    let guessY= parseInt(prompt(`guess a y coordinate 0-4 `));
    console.log (player1.board[guessX][guessY])
    if (player1.board[guessX][guessY] == 1) {
      alert(`Hit!`)
      player1.shipCount--;
      player1.board[guessX][guessY] = 0 
    if (player1.shipCount == 0) {
      alert (`${player2.name} is the winner!`)
      player1.board [guessX][guessY] = 0;
      return ( winner = player2.name)
    }
      else if (player1.shipCount > 0) {
        play2Game()
    }
  }
    else {
      alert(`Miss`)
      play2Game()
    }
    //play1Game()
    //play2Game()
  }
  play1Game();
  play2Game()

  gamePlay()
  console.log( 'The winner is...?', winner)
  return (`Congratulations, ${winner} won the game!`)
}
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
