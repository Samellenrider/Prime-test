function FormatTable() {

};

FormatTable.prototype.tableFormatter = function(twoDArray) {
  twoDArray.forEach(function(singleArray) {
  	table = []
  	l = singleArray.length
  	for(i = l; i > 0; i--) {
      singleArray.splice(i, 0, '| ');
    };
    table.push(singleArray.join(""));
    t = table.toString();
    console.log(t);
  });
};

module.exports.FormatTable = FormatTable;