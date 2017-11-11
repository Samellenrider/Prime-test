const readline = require('readline');

const number = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var userInput = function() {
  number.question('How many prime numbers would you like to multiply ?', (answer) => {

  console.log('Thanks for the number')

  number.close();
  });
};

userInput();