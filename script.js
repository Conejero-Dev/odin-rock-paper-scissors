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

function playRound(humanChoice, computerChoice) {
    let human = humanChoice;
    let computer = computerChoice;
    if (
        (human === "rock" && computer === "paper") ||
        (human === "paper" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")
    ) {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    } else {
        console.log(`You won! ${human} beats ${computer}`);
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);