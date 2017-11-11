const readline = require('readline');
const checkInput = require('./src/checkInput').checkInput;

const number = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var runApp = function() {
  number.question('How many prime numbers would you like to multiply? Please enter a positive integer.\n', (answer) => {
    if (new checkInput().isCorrect(answer)) {
      console.log('Thanks for the number')

      number.close();


    } else {
      console.log('This is not a positive integer my friend.')
      runApp();
    }
  });
};

runApp();



