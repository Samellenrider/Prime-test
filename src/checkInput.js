function CheckInput() {
	this.value = true
};

CheckInput.prototype.isCorrect = function(input) {
  if (input < 1 || input % 1 !== 0 || isNaN(input) || !isFinite(input)) this.value = false;
    return this.value;
};

module.exports.CheckInput = CheckInput;