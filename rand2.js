const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
var randNum = Math.floor(Math.random()*10)+1;
// console.log(randNum);
loopIt(); //function to repeat the input request
function loopIt() {
//  var guessNum = 11; //preassigning the guessNum variable

  rl.question('Pick a number (0 to quit):', (guessNum) => {
      if (guessNum > randNum && guessNum < 11) {
        console.log(guessNum + " is too high!");
      } else if (guessNum < randNum && guessNum > 0) {
        console.log (guessNum + " is too low!");
      } else if (guessNum == randNum) {
        console.log (guessNum + " is right!!");
        return rl.close();
      } else if (guessNum == 0) {
        console.log("Goodbye!");
        return rl.close();
      } else {
        console.log("Invalid entry!");
      }



loopIt(); //recursive functions!
});


}
