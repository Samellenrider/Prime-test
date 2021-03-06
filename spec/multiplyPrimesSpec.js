var multiplyPrimes = require('../src/multiplyPrimes')

describe('MultiplyPrimes', function() {

	ARRAY1 = [2,3,5]
  TABLE = [[' ',2,3,5],
          [2,4,6,10],
          [3,6,9,15],
          [5,10,15,25]]

  beforeEach( function() {
    n = new multiplyPrimes.MultiplyPrimes();
  });

  describe('createMultiples', function() {
    
    it('replaces array1(0) with null', function() {
      expect(n.createMultiples([2])).toEqual([[' ',2],[2,4]]);
    });

    it('creates a 2 dimensional array for every multiplied number', function() {
      expect(n.createMultiples(ARRAY1)).toEqual(TABLE);	
    });

  });
});