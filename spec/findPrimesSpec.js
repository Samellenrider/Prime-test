var findPrimes = require('../src/findPrimes')

describe('FindPrimes', function() {

  beforeEach( function() {
    n = new findPrimes.FindPrimes();
  });

  it('has a prime array', function() {
    expect(n.primeNumbers).toEqual([2]);
  });

  describe('prime', function(){

    it('returns true if number is prime', function() { 
      expect(n.prime(7)).toEqual(true);
    });

    it('returns false if number is not prime', function() {
      expect(n.prime(6)).toEqual(false)
    })
  });

  describe('collectPrimes', function() {
    
    it('returns unchanged primeNumbers arra if user enters 1', function() {
      expect(n.collectPrimes(1)).toEqual([2])
    });

    it('pushes 3 into the array when user wants 2 primes', function() {
      expect(n.collectPrimes(2)).toEqual([ 2, 3 ]);
    });

    it('creates an array of more than 1 prime if the user wants', function() {
      expect(n.collectPrimes(5)).toEqual([ 2, 3, 5, 7, 11 ])
    });
  });
});
