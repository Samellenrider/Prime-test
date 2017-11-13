var formatTable = require('./src/formatTable')

describe('FormatTable', function() {
  
  table = [[null,2,3,5],
           [2,4,6,10],
           [3,6,9,15],
           [5,10,15,25]]

  formatted = " |  2|  3|  5|"  
              "2|  4|  6|  10|"  
              "3|  6|  9|  15|"  
              "5|  10|  15|  25|"

    
  
  beforeEach( function() {
    n = new formatTable.FormatTable();
  });

  describe('tableFormatter', function() {

    it('removes square brackets & commas & formats the table' function() {
      expect(n.tableFormatter(table)).toEqual(formatted);
    });
  });
});