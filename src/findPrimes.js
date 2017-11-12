function FindPrimes() {
  this.primeNumbers = [2];
};

//this function says if a number is a prime or not

FindPrimes.prototype.prime = function(number) {
  if(number === 2) {

    this.primeNumbers.push(3)

  } else if(number % 2 !== 0 && number % 3 !== 0 && number !== 3 ) {

    return(true)
  	// this.primeNumbers.push(number)
  } else {

  	return(false)

  };
};


//this number loops and finds prime numbers until the array is as long as the user requested

FindPrimes.prototype.collectPrimes = function(usernumber) {
  if(usernumber > 1) {
  	
  	var n = 5
  	
  	while(usernumber > this.primeNumbers.length){
      
      if(this.prime(n) === true)
      
      this.primeNumbers.push(n)
  	}
  	
  	n++

  } else {

    return this.primeNumbers

  }

  return this.primeNumbers

};





module.exports.FindPrimes = FindPrimes;