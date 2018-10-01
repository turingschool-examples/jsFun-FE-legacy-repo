const { expect } = require('chai');
const context = require('../context/index');

describe('CONTEXT', () => {
  it('exerciseA', () => {
    const result = context.exerciseA();

    expect(true).to.equal(true);
  });
});