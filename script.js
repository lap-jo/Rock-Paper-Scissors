//function gives the computer a choice from (Rock, Paper, or Scissors) and lets
//it choose one and return a random one.
function getComputerChoice(computerOptions) {
    computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function getPlayerChoice() {
    let input = prompt("rock, paper, or scissors", "");
    return input.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;
// Function plays a single round of the game.
// Prompt the player for input once thats done the computer plays
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie`;
    } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors"
    ) {
        playerScore++;
        return "You Win this round";
    } else if (
        playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "paper"
    ) {
        playerScore++;
        return "You Win this round";
    } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection === "rock"
    ) {
        playerScore++;
        return "You Win this round";
    }
    computerScore++;
    return "You Lose";
}

function winner() {
    if (playerScore > computerScore) {
        return "You WIN!!!: great game";
    } else if (computerScore > playerScore) {
        return "Sigh! Computer Wins:Better luck next time";
    }
    return "Stalemate";
}

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore} Computer:  ${computerScore}`);
    }
    console.log(winner());
}

game();
