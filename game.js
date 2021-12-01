// let secretNumber = 3; - hard coded for convenience
let secretNumber = Math.floor(Math.random()* 10 + 1);
// let guessCounter = 0; - used to record number of guesses
let guessesRemaining = 3;

let guessBtns = document.querySelectorAll("section button");
let resetBtn = document.querySelector(".reset-btn");
let numOfGuesses = document.querySelector(".num-of-guesses");
let messageDiv = document.querySelector('.message-div');

// This function is called a game loop
function handleUserGuess(event) {
    let guessBtn = event.target;
    // let userGuess = Number(guessBtn.textContent); - used to get number values before using dataset property
    let userGuess = Number(guessBtn.dataset.number);
    if (userGuess === secretNumber) {
        userGuessCorrect();
    } else {
        guessBtn.disabled = true;
        guessesRemaining--;
        numOfGuesses.textContent = guessesRemaining;
        if (guessesRemaining === 0) {
            userLoses();
        } 
    } 
}

function userGuessCorrect() {
    guessBtns.forEach(function(button) {
        button.disabled = true;
    });
    messageDiv.textContent = `You guessed the secret number (number ${secretNumber})!`;    
}

function userLoses() {
    guessBtns.forEach(function(button) {
        button.disabled = true;
    });
    messageDiv.textContent = "You ran out of guesses! Now you'll never know the secret number!";
}

function handleReset() {
    secretNumber = Math.floor(Math.random()* 10 + 1);
    guessBtns.forEach(function(button) {
        button.disabled = false;
    });
    guessesRemaining = 3;
    numOfGuesses.textContent = guessesRemaining;
    messageDiv.textContent = "";
}

guessBtns.forEach(function(button) {
    button.addEventListener("click", handleUserGuess);
});

resetBtn.addEventListener("click", handleReset);