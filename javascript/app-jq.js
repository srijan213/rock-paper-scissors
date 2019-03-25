$(document).ready(function() {
  //Variables
  let userScore = 0;
  let computerScore = 0;
  let computerChoice = "";
  let choices = ["Rock", "Paper", "Scissors"];

  function computerChoiceGenerator() {
    computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
  }

  function scoreHandler(userWon) {
    if (userWon) userScore += 1;
    else computerScore += 1;
    $("#user--score").html(userScore);
    $("#computer--score").html(computerScore);
  }

  function resultCalculator(userChoice, computerChoice) {
    let userWon = false;
    if (userChoice === computerChoice)
      $("#output--message").html(`IT'S A DRAW`);
    else {
      if (
        (userChoice === choices[0] && computerChoice === choices[1]) ||
        (userChoice === choices[1] && computerChoice === choices[2]) ||
        (userChoice === choices[2] && computerChoice === choices[0])
      )
        $("#output--message").html(
          `YOU LOST !!! ${computerChoice} beats ${userChoice}`
        );
      else {
        $("#output--message").html(
          `YOU WIN !!! ${userChoice} beats ${computerChoice}`
        );
        userWon = true;
      }
      $("#choices").html(`USER: ${userChoice} -|- COMPUTER: ${computerChoice}`);
      scoreHandler(userWon);
    }
  }

  function reset() {
    if (confirm("Are you sure you want to reset")) {
      userScore = 0;
      computerScore = 0;
      $("#user--score").html(userScore);
      $("#computer--score").html(computerScore);
    }
  }

  //EVENT HANDLERS
  $("#rock--icon").click(function() {
    resultCalculator(choices[0], computerChoiceGenerator());
  });
  $("#paper--icon").click(function() {
    resultCalculator(choices[1], computerChoiceGenerator());
  });
  $("#scissors--icon").click(function() {
    resultCalculator(choices[2], computerChoiceGenerator());
  });

  $("#reset--button").click(reset);
});
