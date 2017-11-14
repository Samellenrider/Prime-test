const readline = require('readline');
const CheckInput = require('./src/checkInput').CheckInput;
const FindPrimes = require('./src/findPrimes').FindPrimes;
const MultiplyPrimes = require('./src/multiplyPrimes').MultiplyPrimes;
const FormatTable = require('./src/formatTable').FormatTable;

const number = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runApp() {
  number.question('How many prime numbers would you like to multiply? Please enter a positive integer.\n', (answer) => {
    if (new CheckInput().isCorrect(answer)) {
      number.close();
      var findPrimes = new FindPrimes();
      var primes = findPrimes.collectPrimes(answer)
      var multiplyPrimes = new MultiplyPrimes();
      var table = multiplyPrimes.createMultiples(primes)
      var formatTable = new FormatTable();
      var formatter = formatTable.tableFormatter(table);
    } else {
      console.log('This is not a positive integer my friend. Give me a positive Integer please.\n')
      runApp();
    };
  });
};

runApp();



