var k = require('../src/findPrimes')

describe('FindPrimes', function() {

  beforeEach( function() {
    n = new k.FindPrimes();
  });

  it('has a prime array', function() {
    expect(n.primeNumbers).toEqual([2]);
  });
    
  it('pushes 3 into the array when user wants 2 primes', function() {
    expect(n.collectPrimes(3)).toEqual([ 2, 3, 5 ]);
  });
});

