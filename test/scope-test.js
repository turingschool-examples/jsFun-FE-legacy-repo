const chai = require("chai");
const expect = chai.expect;
const scope = require("../scope/index");

chai.use(function(e, t) {
  e.Assertion.addMethod("withMessage", function(e) {
    t.flag(this, "message", e)
  })
})

describe("SCOPE", () => {
  it.only("exerciseA", () => {
    const e = JSON.stringify(scope.exerciseA()) == JSON.stringify([{
      A: "Ben"
    }, {
      B: "CardiB"
    }, {
      C: "CardiB"
    }, {
      D: "Paul"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseB", () => {
    const e = JSON.stringify(scope.exerciseB()) == JSON.stringify([{
      A: 75
    }, {
      B: 64
    }, {
      C: 64
    }, {
      D: 30
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseC", () => {
    const e = JSON.stringify(scope.exerciseC()) == JSON.stringify([{
      A: "Yo"
    }, {
      B: "Hey"
    }, {
      C: "Hey"
    }, {
      D: "Hello"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseD", () => {
    const e = JSON.stringify(scope.exerciseD()) == JSON.stringify([{
      A: "hi"
    }, {
      B: "welcome"
    }, {
      C: "welcome"
    }, {
      D: "howdy"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseE", () => {
    const e = JSON.stringify(scope.exerciseE()) == JSON.stringify([{
      C: "Brittany"
    }, {
      A: "Nathaniel"
    }, {
      B: "Nathaniel"
    }, {
      D: "Brittany"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseF", () => {
    const e = JSON.stringify(scope.exerciseF()) == JSON.stringify([{
      A: "Spot"
    }, {
      B: "Spot"
    }, {
      C: "Biscuit"
    }, {
      D: "Biscuit"
    }, {
      E: "Biscuit"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseG", () => {
    const e = JSON.stringify(scope.exerciseG()) == JSON.stringify([{
      A: "reference error"
    }, {
      B: "mango"
    }, {
      C: "mango"
    }, {
      D: "apple"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseH", () => {
    const e = JSON.stringify(scope.exerciseH()) == JSON.stringify([{
      A: 4
    }, {
      D: 9
    }, {
      E: 10
    }, {
      B: 9
    }, {
      C: 4
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseI", () => {
    const e = JSON.stringify(scope.exerciseI()) == JSON.stringify([{
      A: 75
    }, {
      B: 0
    }, {
      C: 75
    }, {
      D: 80
    }, {
      A: 55
    }, {
      B: 0
    }, {
      C: 55
    }, {
      E: 55
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseJ", () => {
    const e = JSON.stringify(scope.exerciseJ()) == JSON.stringify([{
      A: "ketchup sandwich"
    }, {
      D: "gouda"
    }, {
      B: undefined
    }, {
      C: "not a mediocre sandwich"
    }, {
      E: "not a mediocre sandwich"
    }, {
      F: "National Treasure"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseK", () => {
    const e = JSON.stringify(scope.exerciseK()) == JSON.stringify([{
      A: 7
    }, {
      B: 7
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseL", () => {
    const e = JSON.stringify(scope.exerciseL()) == JSON.stringify([{
      A: 95
    }, {
      B: 90
    }, {
      C: 90
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseM", () => {
    const e = JSON.stringify(scope.exerciseM()) == JSON.stringify([{
      A: 5
    }, {
      B: 6
    }, {
      C: "reference error"
    }, {
      D: 6
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseN", () => {
    const e = JSON.stringify(scope.exerciseN()) == JSON.stringify([{
      E: "Pam"
    }, {
      A: "Pam"
    }, {
      B: "Pam"
    }, {
      C: "Louisa"
    }, {
      D: "Louisa"
    }, {
      F: "Louisa"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseO", () => {
    const e = JSON.stringify(scope.exerciseO()) == JSON.stringify([{
      B: "flipflop"
    }, {
      A: undefined
    }, {
      C: "flipflop"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseP", () => {
    const e = JSON.stringify(scope.exerciseP()) == JSON.stringify([{
      B: "soup"
    }, {
      C: "soup"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseQ", () => {
    const e = JSON.stringify(scope.exerciseQ()) == JSON.stringify([{
      A: "Pandora"
    }, {
      B: ["Antigone", "Pandora"]
    }, {
      C: "Mandy"
    }, {
      D: "Antigone"
    }, {
      E: "Pandora"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  }), it("exerciseR", () => {
    const e = JSON.stringify(scope.exerciseR()) == JSON.stringify([{
      A: "Rody"
    }, {
      B: "RodyToy"
    }, {
      C: "Tesla"
    }, {
      D: "RodyToyDaniels"
    }]);
    expect(e).withMessage("Your order of execution and/or values for variables in your result object are incorrect").to.be.true
  })
})
