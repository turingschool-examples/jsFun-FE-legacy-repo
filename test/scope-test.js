const { expect } = require('chai');
const scope = require('../scope/index');

describe('SCOPE', () => {
  it('exerciseA', () => {
    const result = scope.exerciseA();
    expect(result).to.deep.equal([
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ]);
  });
});