var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


var wins = 0;
var losses = 0;
var guessesSoFar = "";
var guessLeft = 9;
var guess = "";
var tries = 0;
var won = false;

// player guess
document.onkeyup = function (event) {

var guess = event.key;

  // computer guess  
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if (guess === computerRandom) {
  wins++;
  won = true;
  tries=9;
}
if (guessesSoFar == []) {
  guessesSoFar = guess;
} 
else {
  guessesSoFar = guessesSoFar + "," + guess;
}
tries++;
guessLeft--;


if (tries > 8) {
 guessLeft = 9;
 guessesSoFar = "";
 tries = 0;
    
 if (won === false) {
   losses++;
 } 
 else {
   won = false;
 }
}

var htmlGame =
  "<p>Wins " + wins + "</p>" + 
  "<p>Losses " + losses + "</p>" +
  "<p>Guesses Left " + guessLeft + "</p>" +
  "<p>Your guesses so far " + guessesSoFar + "</p>";

document.querySelector("#gameID").innerHTML = htmlGame;
}