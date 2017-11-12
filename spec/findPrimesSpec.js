var k = require('../src/findPrimes')

describe('FindPrimes', function() {

  beforeEach( function() {
    n = new k.FindPrimes();
  });

  it('has a prime array', function() {
    expect(n.primeNumbers).toEqual([2]);
  });

  describe('collectPrimes', function(){
    
    it('pushes 3 into the array when user wants 2 primes', function() {
      expect(n.collectPrimes(2)).toEqual([ 2, 3 ]);
    });

    it('creates an array of more than 1 prime if the user wants', function(){
      expect(n.collectPrimes(5)).toEqual([ 2, 3, 5, 7, 11 ])
    });

    it('returns unchanged primeNumbers arra if user enters 1', function(){
      expect(n.collectPrimes(1)).toEqual([2])
    });
  });
});
