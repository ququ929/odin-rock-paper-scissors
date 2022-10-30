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


// print score and winner of single game depend on button click
function printWinner(e) {
    playerChoice = e.composedPath()[0].id;
    computerChoice = getComputerChoice();
    winner = playRound(playerChoice, computerChoice);
    
    const whoWinPara = document.createElement("p");
    whoWinPara.textContent = 
    `${winner} your choice is ${playerChoice},
        computer choice is ${computerChoice}`;
    
    resultDiv.appendChild(whoWinPara);
}

// +1 score in winner's div
function printScore () {
    if (winner === "You win!") {
        playerScore = +playerScore + 1;
        playerScoreDiv.textContent = playerScore;
        console.log(playerScore, winner);
    }

    else if (winner === "You lose!") {
        computerScore = +computerScore + 1;
        computerScoreDiv.textContent = computerScore;
    }
}
    
// when one of which reach score 5, stop the game




// Adding eventListener to all buttons, and get user input from it
const buttons = document.querySelectorAll("button");

const resultDiv = document.querySelector(".resultDiv");

const playerScoreDiv = document.querySelector(".userBottom");
let playerScore = playerScoreDiv.textContent;

const computerScoreDiv = document.querySelector(".computerBottom")
let computerScore = computerScoreDiv.textContent;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        printWinner(e);
        printScore();
    });
});

if (playerScore === 5) {
    console.log("Game over");
}