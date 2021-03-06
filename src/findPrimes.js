function FindPrimes() {
  this.primeNumbers = [2];
};

FindPrimes.prototype.prime = function(number) {
  for(i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number > 1;
};

FindPrimes.prototype.collectPrimes = function(usernumber) {
  if(usernumber > 1) {	
   	var n = 3
  	while(usernumber > this.primeNumbers.length){
      if(this.prime(n)){
      this.primeNumbers.push(n)
  }	
  	  n++;
    }
  } else {
  	return this.primeNumbers
  }
  return this.primeNumbers
};


module.exports.FindPrimes = FindPrimes;