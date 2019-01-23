const chai=require("chai"),expect=chai.expect,context=require("../context/index");global.document={getElementById:()=>({addEventListener:()=>{}})},global.$=(()=>({on:()=>{}})),chai.use(function(e,t){e.Assertion.addMethod("withMessage",function(e){t.flag(this,"message",e)})}),describe("CONTEXT",()=>{it("exerciseA",()=>{const e="global window object"==context.exerciseA();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseB",()=>{const e="global window object"==context.exerciseB();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseC",()=>{const e="el"==context.exerciseC();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseD",()=>{const e="global window object"==context.exerciseD();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseE",()=>{const e="global window object"==context.exerciseE();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseF",()=>{const e="instance of Hero"==context.exerciseF();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseG",()=>{const e="global window object"==context.exerciseG();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseH",()=>{const e="obj"==context.exerciseH();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseI",()=>{const e="poets"==context.exerciseI();expect(e).withMessage("Your result is not the correct context").to.be.true}),it("exerciseJ",()=>{const e="el"==context.exerciseJ();expect(e).withMessage("Your result is not the correct context").to.be.true})});

// npm run testContext 

