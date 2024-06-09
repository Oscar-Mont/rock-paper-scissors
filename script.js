//Make a function that randomly chooses rock paper or scissors
function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

// //function that asks the user for their choice
// function getPlayerChoice() {
//     let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
//     return playerChoice.toLowerCase();
// }

//function to play a round
function playRound(playSelect) {
    let playerSelection = playSelect;
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                console.log("It's a tie! You both picked Rock");
                break;
            case "paper":
                console.log("You loose! Paper beats Rock.");
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors.");
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock.");
                break;
            case "paper":
                console.log("It's a tie! You both picked Paper.");
                break;
            case "scissors":
                console.log("You loose! Scissors beats Paper.");
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                console.log("You loose! Rock beats Scissors!");
                break;
            case "scissors":
                console.log("It's a tie! You both picked Scissors.");
                break;
            case "paper":
                console.log("You win! Scissors beats Paper.");
                break;
            default:
                console.log("There was a problem");
                break;
        }
    } else {
        console.log("Invalid choice, try again");
    }

}


//Event Listeners to play the game
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");



rockBtn.addEventListener("click", () => {
    playSelect = "rock";
    playRound(playSelect);
})

paperBtn.addEventListener("click", () => {
    playSelect = "paper";
    playRound(playSelect);
})

scissorsBtn.addEventListener("click", () => {
    playSelect = "scissors";
    playRound(playSelect);
})




