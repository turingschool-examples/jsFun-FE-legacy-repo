const { expect } = require('chai');
const context = require('../context/index');

describe('CONTEXT', () => {
  it('exerciseA', () => {
    const result = context.exerciseA();
    expect(result).to.equal('global window object');
  });

  it('exerciseB', () => {
    const result = context.exerciseB();
    expect(result).to.equal('global window object');
  });

  it.skip('exerciseC', () => {
    const result = context.exerciseC();
    expect(result).to.equal('el');
  });

  it('exerciseD', () => {
    const result = context.exerciseD();
    expect(result).to.equal('global window object');
  });

  it('exerciseE', () => {
    const result = context.exerciseE();
    expect(result).to.equal('global window object');
  });

  it('exerciseF', () => {
    const result = context.exerciseF();
    expect(result).to.equal('instance of Hero');  
  });

  it('exerciseG', () => {
    const result = context.exerciseG();
    expect(result).to.equal('global window object');
  });

  it('exerciseH', () => {
    const result = context.exerciseH();
    expect(result).to.equal('obj');
  });

  it('exerciseI', () => {
    const result = context.exerciseI();
    expect(result).to.equal('poets');
  });

  it.skip('exerciseJ', () => {
    const result = context.exerciseJ();
    expect(result).to.equal('#btn');
  });
});