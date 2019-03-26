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

    //sliding score counter 
    if(userScore > $("#user--score").html())
      $("#user--score").hide().html(userScore).slideDown();
    if(computerScore > $("#user--score").html())
      $("#computer--score").hide().html(computerScore).slideDown();
  }

  function resultCalculator(userChoice, computerChoice) {
    let userWon = false, outputMessage = "";
    if (userChoice === computerChoice)
      outputMessage = "IT'S A DRAW"
    else {
      if (
        (userChoice === choices[0] && computerChoice === choices[1]) ||
        (userChoice === choices[1] && computerChoice === choices[2]) ||
        (userChoice === choices[2] && computerChoice === choices[0])
      )
      outputMessage = `YOU LOST !!! ${computerChoice} beats ${userChoice}`;
      else {
        outputMessage = `YOU WIN !!! ${userChoice} beats ${computerChoice}`;
        userWon = true;
      }
      $("#choices").html(`USER: ${userChoice} -|- COMPUTER: ${computerChoice}`);
      scoreHandler(userWon);
    }
    // touch #output-message element just once with us of variables
    $("#output--message").html(outputMessage);
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
