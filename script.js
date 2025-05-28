let humanScore = 0;
let computerScore = 0;
let totalGames = 0;
let repeatGame = false;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.trim();
  let computer = computerChoice;
  if (
    (human === "rock" && computer === "paper") ||
    (human === "paper" && computer === "scissors") ||
    (human === "scissors" && computer === "rock")
  ) {
    alert(`You lose! ${computer} beats ${human}`);
    computerScore++;
    totalGames++;
  } else if (human === computer) {
    alert(`It's a tie!`);
  } else if (
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper") ||
    (human === "rock" && computer === "scissors")
  ) {
    alert(`You won! ${human} beats ${computer}`);
    humanScore++;
    totalGames++;
  } else {
    alert("Invalid choice, please try again.");
  }
  playGame();
}

function playGame() {
  if (totalGames < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  } else {
    alert(`Final result: You ${humanScore} - ${computerScore} Computer`);
    const repeatGame = confirm("Do you want to play again?");
    if (repeatGame) {
      humanScore = 0;
      computerScore = 0;
      totalGames = 0;
      playGame();
    }
  }
}

playGame();
