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

  it('exerciseB', () => {
    const result = scope.exerciseB();
    expect(result).to.deep.equal([
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ]);
  });

  it('exerciseC', () => {
    const result = scope.exerciseC();
    expect(result).to.deep.equal([
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ]);
  });

  it('exerciseD', () => {
    const result = scope.exerciseD();
    expect(result).to.deep.equal([
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ]);
  });

  it('exerciseE', () => {
    const result = scope.exerciseE();
    expect(result).to.deep.equal([
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ]);
  });

  it('exerciseF', () => {
    const result = scope.exerciseF();
    expect(result).to.deep.equal([
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ]);
  });

  it('exerciseG', () => {
    const result = scope.exerciseG();
    expect(result).to.deep.equal([
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ]);
  });

  it('exerciseH', () => {
    const result = scope.exerciseH();
    expect(result).to.deep.equal([
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ]);
  });

  it('exerciseI', () => {
    const result = scope.exerciseI();
    expect(result).to.deep.equal([
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 },
      { 'A': 55 },
      { 'B': 0 },
      { 'C': 55 },
      { 'E': 55 }
    ]);
  });

  it('exerciseJ', () => {
    const result = scope.exerciseJ();
    expect(result).to.deep.equal([
      { 'A':  'ketchup sandwich' },
      { 'D':  'gouda' },
      { 'B':  undefined },
      { 'C':  'not a mediocre sandwich' },
      { 'E':  'not a mediocre sandwich' },
      { 'F':  'National Treasure' }
    ]);
  });

  it('exerciseK', () => {
    const result = scope.exerciseK();
    expect(result).to.deep.equal([
      { 'A': 7 },
      { 'B': 7 }
    ]);
  });

  it('exerciseL', () => {
    const result = scope.exerciseL();
    expect(result).to.deep.equal([
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ]);
  });

  it('exerciseM', () => {
    const result = scope.exerciseM();
    expect(result).to.deep.equal([
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ]);
  });

  it('exerciseN', () => {
    const result = scope.exerciseN();
    expect(result).to.deep.equal([
      { 'E':  'Pam' },
      { 'A':  'Pam' },
      { 'B':  'Pam' },
      { 'C':  'Louisa' },
      { 'D':  'Louisa' },
      { 'F':  'Louisa' }
    ]);
  });

  it('exerciseO', () => {
    const result = scope.exerciseO();
    expect(result).to.deep.equal([
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
      { 'C': 'flipflop' }
    ]);
  });
});