const { expect } = require('chai');
const scope = require('../scope/index');

describe('Returns from scope exercises', () => {
  it('should return the proper values in the correct order', () => {
    const result = scope.exerciseA();

    expect(result).to.deep.equal([
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ]);
  });
});