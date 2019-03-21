// CONSTANTS

const userScore_span = document.getElementById("user--score");
const compScore_span = document.getElementById("computer--score");
const rock_img = document.getElementById("rock--icon");
const paper_img = document.getElementById("paper--icon");
const scissors_img = document.getElementById("scissors--icon");
const outputMessage_div = document.getElementById("output--message");

// VARIABLES
let userScore = 0;
let computerScore = 0;
let userInput = "";
let computerInput = "";
let choices = ["rock", "paper", "scissors"];

function computerInputGenerator() {
  computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 0) computerInput = choices[0];
  else if (computerInput === 1) computerInput = choices[1];
  else computerInput = choices[2];
  return computerInput;
}

function resultCalculator(userInput, computerInput) {
  if (userInput === computerInput) output(`ITS A DRAW`);
  else if (userInput == choices[0] && computerInput == choices[1])
    output(`YOU LOST! PAPER BEATS ROCK`);
  else if (userInput == choices[0] && computerInput == choices[2])
    output(`YOU WON! ROCK BEATS SCISSORS`);
  else if (userInput == choices[1] && computerInput == choices[2])
    output(`YOU LOST! SCISSORS BEATS PAPER`);
  else if (userInput == choices[1] && computerInput == choices[0])
    output("YOU WON! PAPER BEATS ROCK");
  else if (userInput == choices[2] && computerInput == choices[0])
    output("YOU LOST! ROCK BEATS SCISSORS");
  else if (userInput == choices[2] && computerInput == choices[1])
    output("YOU WON! SCISSORS BEATS PAPER");
}

function output(outputMessage) {
  outputMessage_div.innerHTML = outputMessage;
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
