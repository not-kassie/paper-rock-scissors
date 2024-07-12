console.log("Hello world!");

//create variables 
let userScore = 0;
document.getElementById("userScoreDisplay").innerText = userScore;
let computerScore = 0;
document.getElementById("computerScoreDisplay").innerText = computerScore;
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

function increaseComputerScore(){
    computerScore++;
    document.getElementById("computerScoreDisplay").innerText = computerScore;
}

function increaseUserScore(){
    userScore++;
    document.getElementById("userScoreDisplay").innerText = userScore;
}

//function to play a round 
function playRound(computerChoice, humanChoice) {
    let tie = " It's a tie!";
    let win = "You win!";
    let lose = "You lose!";

    if (humanChoice === computerChoice) {
        console.log(tie);
        round++;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(lose + " paper beats rock!");
            increaseComputerScore();
            round++;
        } else if (computerChoice === "scissors") {
            console.log(win + " rock beats scissors!");
            increaseUserScore();
            round++;
        }
    } else if (humanChoice ==="scissors") {
        if (computerChoice === "rock") {
            console.log(lose + " rock beats scissors!");
            increaseComputerScore();
            round++;
        } else if (computerChoice === "paper") {
            console.log(win + " scissors beat paper!");
            increaseUserScore();
            round++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(win + " paper beats rock!");
            increaseUserScore();
            round++;
        }
        else if (computerChoice === "scissors") {
            console.log(lose + " scissors beat paper!");
            increaseComputerScore();
            round++;
        }
    }

    if (round > 5) {
        if (userScore < computerScore) {
            let compWin = `Computer wins! They scored ${computerScore} and you scored ${userScore} Choose an option to play again`;
            console.log(compWin);
            document.getElementById("result").innerHTML = compWin;
        } else if (userScore > computerScore) {
            let userWin = `You win! You scored ${userScore} and they scored ${computerScore} Choose an option to play again`;
            document.getElementById("result").innerHTML = userWin;
            console.log(userWin);
        } else {
            let tie = "It's a tie! You scored the same! Choose an option to play again";
            document.getElementById("result").innerHTML = tie;
        }

        round = 0; 
        userScore = 0; 
        computerScore = 0; 
        document.getElementById("userScoreDisplay").innerText = userScore;
        document.getElementById("computerScoreDisplay").innerText = computerScore;
    }
}

//acquiring player choice from buttons 
const btnP = document.querySelector("#paper");
btnP.addEventListener("click", function() {
    let humanChoice = "paper";
    console.log(humanChoice);
    playRound(getComputerChoice(), humanChoice);
});

const btnR = document.querySelector("#rock");
btnR.addEventListener("click", function() {
    let humanChoice = "rock";
    console.log(humanChoice);
    playRound(getComputerChoice(), humanChoice);
});

const btnS = document.querySelector("#scissors");
btnS.addEventListener("click", function() {
    let humanChoice = "scissors";
    console.log(humanChoice);
    playRound(getComputerChoice(), humanChoice);
});

