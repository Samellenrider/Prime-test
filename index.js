const readline = require('readline');
const checkInput = require('./src/checkInput').checkInput;
const FindPrimes = require('./src/findPrimes').FindPrimes;
const MultiplyPrimes= require('./src/multiplyPrimes').MultiplyPrimes

const number = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var runApp = function() {
  number.question('How many prime numbers would you like to multiply? Please enter a positive integer.\n', (answer) => {
    //note for later: extract this part into different file
    if (new checkInput().isCorrect(answer)) {
      var findPrimes = new FindPrimes()
      var primes = findPrimes.collectPrimes(answer)
      var multiplyPrimes = new MultiplyPrimes
      var table = multiplyPrimes.createMultiples(primes)
      console.log(table)
      

      number.close();
    } else {
      console.log('This is not a positive integer my friend. Give me a positive Integer please.\n')
      runApp();
    }
  });
};

runApp();



