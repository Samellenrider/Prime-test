function checkInput() {
	this.value = true
}

checkInput.prototype.isCorrect = function(integer) {
  if (integer < 1 || integer % 1 !== 0 || isNaN(integer) || !isFinite(integer)) this.value = false;
    return this.value;
};

module.exports.checkInput = checkInput;