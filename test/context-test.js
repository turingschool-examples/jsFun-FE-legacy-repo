const chai = require("chai")
const expect = chai.expect;
const context = require("../context/index");

global.document = {
  getElementById: () => ({
    addEventListener: () => {}
  })
}

global.$ = (() => ({
  on: () => {}
}));

chai.use(function(e, t) {
  e.Assertion.addMethod("withMessage", function(e) {
    t.flag(this, "message", e)
  })
});

describe("CONTEXT", () => {
  it.skip("exerciseA", () => {
    const e = "global window object" == context.exerciseA();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseB", () => {
    const e = "global window object" == context.exerciseB();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseC", () => {
    const e = "el" == context.exerciseC();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseD", () => {
    const e = "global window object" == context.exerciseD();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseE", () => {
    const e = "global window object" == context.exerciseE();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseF", () => {
    const e = "instance of Hero" == context.exerciseF();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseG", () => {
    const e = "global window object" == context.exerciseG();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseH", () => {
    const e = "obj" == context.exerciseH();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseI", () => {
    const e = "poets" == context.exerciseI();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseJ", () => {
    const e = "el" == context.exerciseJ();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseK", () => {
    const e = "store" == context.exerciseK();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseL", () => {
    const e = "dog" == context.exerciseL();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseM", () => {
    const e = "robert" == context.exerciseM();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseN", () => {
    const e = "instance of Bird" == context.exerciseN();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseO", () => {
    const e = "global window object" == context.exerciseO();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  }), it.skip("exerciseP", () => {
    const e = "global window object" == context.exerciseP();
    expect(e).withMessage("Your result is not the correct context").to.be.true
  })
});