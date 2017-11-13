function MultiplyPrimes() {
  this.table = [];
};

MultiplyPrimes.prototype.createMultiples = function(primeNumbers) {
  var firstRow = [1].concat(primeNumbers); //arrays get merged
  this.table.push(firstRow);
  for(i = 1; i < firstRow.length; i++) {
  	var secondRow = new Array(firstRow.length); //secondRow array gets the same amount of "indexplaces" like firstRow array
    for(y = 0; y < firstRow.length; y++) {
      secondRow[y] = firstRow[i] * firstRow[y]; //we multiply arrays
    }
    this.table.push(secondRow)
  }
  this.table[0][0] = ' '; //first position of first array gets replaced by null
  return this.table;
};

module.exports.MultiplyPrimes = MultiplyPrimes;