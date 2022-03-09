const computerDisplay = document.getElementById("computer-choice");
const userDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const computerScoreDisplay = document.getElementById("computer-score");
const userScoreDisplay = document.getElementById("user-score");

let computerChoice,userChoice,result,computerScore,userScore;
let userCount = 0;
let computerCount = 0;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    setTimeout(() => {
        userDisplay.innerHTML = "";
    },2000);
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if(randomNumber === 1) {
        computerChoice = "rock"
    };

    if(randomNumber === 2) {
        computerChoice = "scissors"
    }

    if(randomNumber === 3) {
        computerChoice = "paper"
    };

    computerDisplay.innerHTML = computerChoice;
    setTimeout(() => {
        computerDisplay.innerHTML = "";
    },2000)
};

resultDisplay.style.color = "indigo"
computerDisplay.style.color = "blue";
userDisplay.style.color = "blue";
userScore = 0;
computerScore = 0;
function getResult() {
    if(computerChoice === userChoice) {
        result = "IT'S A DRAW!"
        computerScore = 0;
        userScore = 0;
    }

    if(computerChoice === "rock" && userChoice === "paper") {
        result = "YOU WIN!";
        userScore = userCount += 1;
        // computerScore = count;
    }

    if(computerChoice === "rock" && userChoice === "scissors") {
        result = "YOU LOSE!"
        computerScore = computerCount += 1;
        // userScore = count;
    }

    if(computerChoice === "paper" && userChoice === "scissors") {
        result = "YOU WIN!"
        userScore = userCount += 1;
        // computerScore = count;
    }

    if(computerChoice === "paper" && userChoice === "rock") {
        result = "YOU LOSE!"
        computerScore = computerCount += 1;
        // userScore = count;
    }

    if(computerChoice === "scissors" && userChoice === "rock") {
        result = "YOU WIN!"
        userScore = userCount += 1;
        // computerScore = count;
    }

    if(computerChoice === "scissors" && userChoice === "paper") {
        result = "YOU LOSE!"
        computerScore = userCount += 1;
        // userScore = count;
    };
    computerScoreDisplay.innerHTML = computerScore;
    userScoreDisplay.innerHTML = userScore;
    resultDisplay.innerHTML = result;
    setTimeout(() => {
        resultDisplay.innerHTML = "";
    },2000);
}