const checkInput = require('../src/checkInput').checkInput;

describe('checkInput', function() {

  beforeEach( function() {
    n = new checkInput();
  });

  it('throws an error if input is zero', function() {
    expect(n.isCorrect(0)).toEqual(false);
  });

  it('throws an error if input is NaN', function() {
    expect(n.isCorrect('S')).toEqual(false);
  });

  it('throws an error if input is negative', function() {
    expect(n.isCorrect(-1)).toEqual(false);
  });

  it('throws an error if input is a decimal', function() {
    expect(n.isCorrect(1.5)).toEqual(false);
  });

  it('returns true if input is correct', function() {
    expect(n.isCorrect(1)).toEqual(true);
  });
});
