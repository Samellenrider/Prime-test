const FindPrimes = require('../src/findPrimes').FindPrimes;

describe('FindPrimes', function() {

	beforeEach( function() {
      n = new FindPrimes();
    });

    it('has a prime array', function() {
      expect(n.primeNumbers).toEqual([2])
    })
  

  });
