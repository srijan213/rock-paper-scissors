// CONSTANTS

const userScore_span = document.getElementById("user--score");
const compScore_span = document.getElementById("computer--score");
const rock_img = document.getElementById("rock--icon");
const paper_img = document.getElementById("paper--icon");
const scissors_img = document.getElementById("scissors--icon");
const outputMessage_div = document.getElementById("output--message");
const choices_div = document.getElementById("choices");
const reset_button = document.getElementById("reset--button");

// VARIABLES
let userScore = 0;
let computerScore = 0;
let userInput = "";
let computerInput = "";
let choices = ["Rock", "Paper", "Scissors"];

function computerInputGenerator() {
  computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 0) computerInput = choices[0];
  else if (computerInput === 1) computerInput = choices[1];
  else computerInput = choices[2];
  return computerInput;
}

//choices[0] = ROCK, choices[1] = PAPER,  choices[2] = SCISSORS

function resultCalculator(userInput, computerInput) {
  let userWon = false;
  if (userInput === computerInput) output(`ITS A DRAW`);
  else {
    if (userInput == choices[0] && computerInput == choices[1])
      output(`YOU LOST! PAPER BEATS ROCK`);
    else if (userInput == choices[1] && computerInput == choices[2])
      output(`YOU LOST! SCISSORS BEATS PAPER`);
    else if (userInput == choices[2] && computerInput == choices[0])
      output("YOU LOST! ROCK BEATS SCISSORS");
    else if (userInput == choices[0] && computerInput == choices[2]) {
      output(`YOU WON! ROCK BEATS SCISSORS`);
      userWon = true;
    } else if (userInput == choices[1] && computerInput == choices[0]) {
      output("YOU WON! PAPER BEATS ROCK");
      userWon = true;
    } else if (userInput == choices[2] && computerInput == choices[1]) {
      output("YOU WON! SCISSORS BEATS PAPER");
      userWon = true;
    }
    scoreHandler(userWon);
    outputScore();
  }
  outputChoices(`USER: ${userInput} -|- COMPUTER: ${computerInput}`);
}

function scoreHandler(userWon) {
  userWon ? (userScore += 1) : (computerScore += 1);
}

function outputScore() {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
}

function outputChoices(message) {
  choices_div.innerHTML = message;
}

function output(outputMessage) {
  outputMessage_div.innerHTML = outputMessage;
}

function reset() {
  if (confirm("Are you sure you want to reset")) {
    userScore = 0;
    computerScore = 0;
    outputScore();
  }
}
// EVENTLISTENERS

rock_img.addEventListener("click", function() {
  userInput = choices[0];
  resultCalculator(userInput, computerInputGenerator());
});

paper_img.addEventListener("click", function() {
  userInput = choices[1];
  resultCalculator(userInput, computerInputGenerator());
});

scissors_img.addEventListener("click", function() {
  userInput = choices[2];
  resultCalculator(userInput, computerInputGenerator());
});

reset_button.addEventListener("click", reset);
