let score = 0
let scoreComputer = 0

// Creates Computer's turn
function computerPlay() {
    let computerResult
    let rng = randomNumber(1,4)
    if (rng === 1) {
        computerResult = "rock"
    } else if (rng === 2) {
        computerResult = "paper"
    } else {
        computerResult = "scissors"
    }
    return computerResult
}
// Play a round of RPS
function rpsRound(playerSelection) {
    let result
    let computerSelection
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        result = "draw"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "loss"
        } else {
            result = "win"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "win"
        } else {
            result = "loss"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "loss"
        } else {
            result = "win"
        }
    }
    if (result === "win") {
        roundResult.textContent = `${playerSelection} beats ${computerSelection}, you win!`;
        score++
        playerScore.textContent = score;
        scoreEvaluation();

    } else if (result === "loss") {
        roundResult.textContent = `${computerSelection} beats ${playerSelection}, you lose!`
        scoreComputer++
        computerScore.textContent = scoreComputer
        scoreEvaluation();

    } else if (result === "draw") {
        roundResult.textContent = "Whoops, that's a draw!"

    } else {
        roundResult.textContent = "Error, looks like something went wrong."

    }

function scoreEvaluation() {
    if (score === 5 || scoreComputer === 5) {
        btnRock.classList.toggle("hidden");
        btnScissors.classList.toggle("hidden");
        btnPaper.classList.toggle("hidden");
        btnRestart.classList.toggle("hidden");
        if (playerScore === 5) {
            roundResult.textContent = `You've got five points. You win!`
        } else {
            roundResult.textContent = `The computer got five points. You lose!`
        }

        
    }
}

}
// Generate random number within specified range (min inclusive, max exclusive)
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max-min)) +min;
}

// Check user input, input is expected to be lowercase
function checkInput(userInput) {
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return true
    } else {
        console.log("Whoops, looks like you mistyped, try again.")
        return false
    }
}
let playerSelection;
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    rpsRound("rock")
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    rpsRound("paper")
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    rpsRound("scissors")
});

const btnRestart = document.querySelector("#restart");
btnRestart.addEventListener("click", () => {
    window.location.reload()
});

const resultDisplay = document.querySelector("#resultDisplay");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundResult = document.querySelector("#roundResult");