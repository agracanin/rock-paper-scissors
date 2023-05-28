const buttons = document.querySelectorAll('#selection')
const playerDisplay = document.querySelector("#playerchoice");
const computerDisplay = document.querySelector("#computerchoice");
const pScoreDisplay = document.querySelector("#pscore");
const cScoreDisplay = document.querySelector("#cscore");
const roundResult = document.querySelector("h2");
const roundDetails = document.querySelector("h3");
const restartContainer = document.querySelector(".restart-container");
const restartButton = document.querySelector(".restartbtn")

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice())
    })
})

restartButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    restartContainer.style.display = "none";
    roundResult.textContent = "Select your weapon to start"
    roundDetails.textContent = "First to score 5 points wins!"
    playerDisplay.textContent = "?";
    computerDisplay.textContent = "?";
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;

    buttons.forEach(button => {
        button.disabled = false;
    });
})

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if ((player === "rock" && computer === "paper") || (player === "paper" && computer === "scissors") || (player === "scissors" && computer === "rock")) {
        computerScore += 1;
        roundResult.textContent = "You lost!";
        roundDetails.textContent = `${player.toUpperCase()} is beaten by ${computer.toUpperCase()}`;
        updateDisplay(player, computer);
        updateScores(playerScore, computerScore);
    } else if (player === computer) {
        updateDisplay(player, computer);
        roundResult.textContent = "It's a tie!"
        roundDetails.textContent = `${player.toUpperCase()} ties with ${computer.toUpperCase()}`;
    } else {
        playerScore += 1;
        roundResult.textContent = "You win!"
        roundDetails.textContent = `${player.toUpperCase()} beats ${computer.toUpperCase()}`;
        updateDisplay(player, computer);
        updateScores(playerScore, computerScore);
    }
}

function updateDisplay(player, computer) {
    switch (player) {
        case "rock":
            playerDisplay.textContent = "✊";
            break;
        case "scissors":
            playerDisplay.textContent = "✌";
            break;
        case "paper":
            playerDisplay.textContent = "✋";
    }
    switch (computer) {
        case "rock":
            computerDisplay.textContent = "✊";
            break;
        case "scissors":
            computerDisplay.textContent = "✌";
            break;
        case "paper":
            computerDisplay.textContent = "✋";
    }
}

function updateScores(pscore, cscore) {
    if (pscore >= 5 || cscore >= 5) {
        pScoreDisplay.textContent = pscore;
        cScoreDisplay.textContent = cscore;
        gameOver(pscore, cscore);
    } else {
        pScoreDisplay.textContent = pscore;
        cScoreDisplay.textContent = cscore;
    }
}

function gameOver(pscore, cscore) {
    if (pscore >= 5) {
        roundResult.textContent = "Congrats!";
        roundDetails.textContent = `You defeated the computer ${pscore} to ${cscore}`;
    } else {
        roundResult.textContent = "Oh no! You lost :("
        roundDetails.textContent = `The computer has outsmarted you and won ${cscore} to ${pscore}`;
    }

    restartContainer.style.display = "block";

    buttons.forEach(button => {
        button.disabled = true;
    });
}