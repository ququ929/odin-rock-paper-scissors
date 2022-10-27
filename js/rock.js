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

// play the game 5 times, with user input.
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors? ")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}


// Adding eventListener to all buttons, and get user input from it
const buttons = document.querySelectorAll("button");

const resultDiv = document.querySelector(".resultDiv");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let winner = playRound(button.id, computerChoice);

        let p = document.createElement("p");
        p.textContent = 
        `Your choice is: ${button.id},
         Computer's choice is ${computerChoice},
         ${winner}`

        resultDiv.appendChild(p);
    });
});

