function MultiplyPrimes() {
  
};

MultiplyPrimes.prototype.createMultiples = function(primeNumbers) {
  let table = [];
  let firstRow = [1].concat(primeNumbers); //arrays get merged
  table.push(firstRow);
  for(var i = 1; i < firstRow.lenght; i++) {
    let l = firstRow.lenght;
    let secondRow = new Array(l); //secondRow array gets the same amount of "indexplaces" like firstRow array
    for(var y = 0; y < l; y++) {
      secondRow[y] = firstRow[i] * firstRow[y]; // we multiply arrays
    }
    table.push(secondRow);
  }
  table[0][0] = ''; //first of multidimensional arrays position gets replaced by ''
  return table;
};

module.exports.MultiplyPrimes = MultiplyPrimes;