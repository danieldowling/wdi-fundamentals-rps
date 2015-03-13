function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   move = move || getInput();
   return move;
    
}

function getComputerMove(move) {
   move = move || randomPlay();
   return move;
}

function getWinner(playerMove,computerMove) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    var winner;
    
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    
   
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock") {

        if (computerMove === "paper") {
            winner = "computer";
            return winner;
        } else {
            winner = "player";
            return winner;
        }
    } else if (playerMove === "paper") {

        if (computerMove === "rock") {
            winner = "player";
            return winner;
        } else {
            winner = "computer";
            return winner;
        }
    } else if (playerMove === "scissors") {

        if (computerMove === "rock") {
            winner = "computer";
            return winner;
        } else {
            winner = "player";
            return winner;
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
 
while (playerWins < 5 && computerWins < 5) {
    var winner = getWinner();
      if (winner === "player") {
          playerWins += 1;
      } else if (winner === "computer") {
          computerWins += 1;
      } else {
          null;
      }
      console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
        return [playerWins, computerWins];
}



