function checkInput() {
	this.value = true
};

checkInput.prototype.isCorrect = function(input) {
  if (input < 1 || input % 1 !== 0 || isNaN(input) || !isFinite(input)) this.value = false;
    return this.value;
};

module.exports.checkInput = checkInput;