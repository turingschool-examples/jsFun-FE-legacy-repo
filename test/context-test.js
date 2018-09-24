const { expect } = require('chai');
const context = require('../context/index');

describe('Context Exercises', () => {
  it('should reference the appropriate object', () => {
    const result = context.exerciseA();

    expect(result).to.deep.equal({
      title: 'voyager',
      classification: 'classy',
      fly() { console.log(this); }
    });
  });
});