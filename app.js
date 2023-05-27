const buttons = document.querySelectorAll('#selection')
const playerDisplay = document.querySelector("#playerchoice");
const computerDisplay = document.querySelector("#computerchoice");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice())
    })
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
        updateDisplay(player, computer);
        return console.log(`You lose! ${computer} beats your ${player}`);
    } else if (player === computer) {
        return "Tie game!"
    } else {
        playerScore += 1;
        return `You win! Your ${player} beat ${computer}`;
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