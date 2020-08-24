var randNum = Math.floor(Math.random() * 10) + 1;

var guessNum = prompt("Guess");

if (randNum > guessNum) {
  window.alert("Too Low!");

} else if (randNum < guessNum) {
  window.alert("Too high!");
} else {
  window.alert("Got it!");
}
