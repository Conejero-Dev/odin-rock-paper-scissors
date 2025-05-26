const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}