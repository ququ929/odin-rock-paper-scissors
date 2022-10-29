// rock, paper or scissors, return one of these randomly.
function getComputerChoice() {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomResult = rockPaperScissors[randomIndex];
    return randomResult;
}

// play one game of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie game!";
    }

    else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
            return "You win!";
        }

    else {
        return "You lose!";
    }
}


// print winner of the game depend on button click
function printWinner(e) {
    playerChoice = e.path[0].id;
    computerChoice = getComputerChoice();
    winner = playRound(playerChoice, computerChoice);
    
    const whoWinPara = document.createElement("p");
    whoWinPara.textContent = 
    `${winner} your choice is ${playerChoice},
        computer choice is ${computerChoice}`;
    
        resultDiv.appendChild(whoWinPara);
}


// Adding eventListener to all buttons, and get user input from it
const buttons = document.querySelectorAll("button");

const resultDiv = document.querySelector(".resultDiv");

buttons.forEach((button) => {
    button.addEventListener("click", printWinner);
});
