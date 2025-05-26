let humanScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}