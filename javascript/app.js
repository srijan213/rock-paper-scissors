// CONSTANTS

const userScore_span = document.getElementById("user--score");
const compScore_span = document.getElementById("computer--score");
const rock_img = document.getElementById("rock--icon");
const paper_img = document.getElementById("paper--icon");
const scissors_img = document.getElementById("scissors--icon");
const outputMessage_div = document.getElementById("output--message");

// EVENTLISTENERS

rock_img.addEventListener("click", function() {
  console.log("rock");
});

paper_img.addEventListener("click", function() {
  console.log("paper");
});

scissors_img.addEventListener("click", function() {
  console.log("scissors");
});
