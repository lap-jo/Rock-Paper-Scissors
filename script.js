function getComputerChoice(computerOptions) {
    computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, or scissors", "");
    computerSelection = "paper";

    if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a tie`;
    } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors"
    ) {
        return "You Win this round";
    } else if (
        playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "paper"
    ) {
        return "You Win this round";
    } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection === "rock"
    ) {
        return "You Win this round";
    } 
    return "You Lose"
}
console.log(playRound());
