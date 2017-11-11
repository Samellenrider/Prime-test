let checkInput = require('../src/checkInput').checkInput;

describe('checkInput', function() {

  beforeEach(function() {
    checkInput = new checkInput();
  });

  it('throws an error if input is zero', function() {
    expect(checkInput.isCorrect(0)).toEqual(false);
  });





});