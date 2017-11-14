function MultiplyPrimes() {
  this.table = [];
};

MultiplyPrimes.prototype.createMultiples = function(primeNumbers) {
  var firstRow = [1].concat(primeNumbers);
  this.table.push(firstRow);
  for(i = 1; i < firstRow.length; i++) {
  	var secondRow = new Array(firstRow.length);
    for(y = 0; y < firstRow.length; y++) {
      secondRow[y] = firstRow[i] * firstRow[y]; 
    }
    this.table.push(secondRow)
  }
  this.table[0][0] = ' '; 
  return this.table;
};

module.exports.MultiplyPrimes = MultiplyPrimes;