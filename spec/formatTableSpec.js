var FormatTable = require('../src/formatTable').FormatTable;

describe('FormatTable', function() {
  
  var table = [[null,2,3],
               [2,4,6,10],
               [3,6,9,15]]
  
  beforeEach( function() {
    n = new FormatTable();
  });

  it('removes square brackets & commas & formats the table', function() {
    it('tests', function() {
      spyOn(console, 'dir');
      n.tableFormatter(table)
      expect(console.dir ).toEqual(" |  2|  3|  5|", "2|  4|  6|  10|", "3|  6|  9|  15|");
    });
  });
});
