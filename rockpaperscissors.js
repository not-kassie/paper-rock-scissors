console.log("Hello world!");

//create variables 
let userScore = 0;
let computerScore = 0;
let round = 1; 

//function for computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1); 
    switch (randomNumber) {
        case 1: 
            return "rock";
        case 2: 
            return "paper";
        case 3: 
            return "scissors";
    }
}

//function for player choice 
function getHumanChoice() {
    let answer = prompt("Type your choice: Paper, rock, scissors: ");
    return answer.toLowerCase();
}


//function to play a round 
function playRound(computerChoice, humanChoice) {
    let tie = " It's a tie!";
    let win = "You win!";
    let lose = "You lose!";

    if (humanChoice === computerChoice) {
        console.log(tie);
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(lose + " paper beats rock!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log(win + " rock beats scissors!");
            userScore++;
        }
    } else if (humanChoice ==="scissors") {
        if (computerChoice === "rock") {
            console.log(lose + " rock beats scissors!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log(win + " scissors beat paper!");
            userScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(win + " paper beats rock!");
            userScore++;
        }
        else if (computerChoice === "scissors") {
            console.log(lose + " scissors beat paper!");
            computerScore++;
        }
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 

    playRound(computerSelection, humanSelection);
}

while (round <= 5) {
    playGame();
    round++;
}

//declare winner 
if (userScore < computerScore) {
    console.log("Computer wins! They scored " + computerScore + " and you scored " + userScore);
} else if (userScore > computerScore) {
    console.log("You win! You scored " + userScore + " and they scored " + computerScore);
} else {
    console.log("It's a tie! You scored the same!");
}


