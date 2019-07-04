const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB'; //person = 'CardiB' has become globally scoped
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB  //A: 'Ben'
        
        if (personB.includes('B')) {
          personB = person; //globally scoped - personB (reassigned as) = 'CardiB'
          personC = personB; //globally scoped - personC (reassigned as) = 'CardiB'
          // Log B: personC
        }
      }

      personC = personA; //globally scoped - personC = 'Paul' (reassigned)

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { A : 'Ben' },
      { B : 'CardiB'},
      { C : 'CardiB' },
      { D : 'Paul' }
    ];
    return result;

    // Annotation:
    // Three variables are assigned to the global scope as personA, personB, and personC with the let keyword
    //On line 7 there is the changePerson function declared with a nested function inside, but we skip over functions until they are invoked
    //That takes us to line 28 where the function changePerson is invoked which takes us back up to line 7
    //In the function, there is a conditional met by the globally scoped personA. We go inside the conditional where a new variable is declared without a keyword throwing it into the global scope.
    //Our global variables are as follows:
    //let personA = 'Paul';
    // let personB = 'Ben';
    // let personC = 'Tom';
    // person = 'CardiB';
    //The nested function beautifyPerson is invoked in the conditional
    //We move to line 13 where the function is declared and log personB, 'Ben'
    //There is a conditional that personB fulfills and we go into the conditional to globally reassign (without a keyword) personB to person and personC to personB(now same as person):
    //let personA = 'Paul';
    // let personB = 'CardiB';
    // let personC = 'CardiB';
    // person = 'CardiB';
    //Now we log personC, 'CardiB'
    //On line 23 (still in the function, but outside the nested function), we reassign personC = 'Paul' and now:
    //let personA = 'Paul';
    // let personB = 'CardiB';
    // let personC = 'Paul';
    // person = 'CardiB';
    //We log personB, 'CardiB' on the last line of the function and hop to line 30 after the function invocation and log personC, 'Paul'
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result =  [{
      A: 75 
    }, {
      B: 64
    }, {
      C: 64
    }, {
      D: 30
    }];
    return result;

    // Annotation:
    //We start at line 67 where number is assigned to 30, we skip over numberFunction and the nested newNumber toline 89 where numberFunction is invoked which brings us back to line 69.
    //On line 70 number is reassigned to 75
    //There is a a conditional that reassigns with let but it is block scoped and the first console.log is outside that block and so Log A: 75
    //We pass over newNumber, but line 84 invokes it and takes us back up to line 78
    //In newNumber number is reassigned to 64 without var, let, or const and so it moves up the scope chain to line 70 where it is reassigned in the numberFunction's functional scope so both Log B:64 and Log C:64
    //We pop out of that function and are back in the global scope where number = 30, so the last Log D:30
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [{
      A: 'Yo' 
    }, {
      B: 'Hey'
    }, {
      C: 'Hey'
    }, {
      D: 'Hello'
    }];
    return result;

    // Annotation:

//greeting is declared globally with let; the greeting Function is declared with a nested newPhrase Function
//Both are passed over until greetingFunction is invoked at which time a new variable with the same name of greeting is declared with var in the functional scop of greetingFunction.
//There is a conditional that assigns another variable of greeting with let to 'Howdy' but there it is block scoped and the first console log is outside the block scope, but still in the functional scope and so A: "Yo"
//we pass over the newPhrase function until it is invoke later in the greetingFunction at which time we dive into the newPhrase Function where greeting is immediately reassigned to 'Hey' and console logged B: 'Hey'
//We exit that functional scope, but since it was reassigned without a let, var, or const the value travels up the scope chain ad finds the parent variable to reassign and that is within the greeting Function.
//The next console log is still in the greeting function and so C: 'Hey'
//Then we are done with the functions and back in the global scope where greeting is assigned to 'Hello' so the last console log is D: 'Hello'
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [{
        A: 'hi' 
      }, {
        B: 'welcome'
      }, {
        C: 'welcome'
      }, {
        D: 'howdy'
      }];
    return result;

    // Annotation:
    //A: 'hi'
    //B: 'welcome'
    //C: 'welcome'
    //D: 'howdy'
    //greeting assigned to 'Howdy'in global scope
    //Pass grettingGenerator until invoked and then go into greetingGenerator where gretting is assigned to in the functional scope to 'hi'
    //A conditional reassigns in the block of conditional but does not log until back in the functional scope where A: 'hi'
    //newGreeting is passed, invoked and then entered where greeting is reassigned without var, let or const and so it traverses up the scope chain and attaches to the functional scope as 'welcome'; it is also logged immediately so B: 'welcome' 
    //We leave the nested function newGreeting and are back in the parent function where greeting is assigned to C: 'welcome' due to the first line of newGreeting
    //Then we pop back into the global scope where D: 'howdy'
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

      const result = [{
        C: 'Brittany' 
      }, {
        A: 'Nathaniel'
      }, {
        B: 'Nathaniel'
      }, {
        D: 'Brittany'
      }];
    return result;

    // Annotation:
    //name is assigned to 'Brittany'
    //We pass over the sayName function
    //but log C is called C: 'Brittany'
    //invoke sayName function.In function name is assigned to 'Pam' in the functional scope. There is a conditional where if name is equal to 'Pam' (which it is) then name is reassigned without let, var, or const to 'Nathaniel' so it traverses up the scope chain to the next assignment of name which is in the functional scope of sayName.
    //There is another conditional that reassigns it to 'Brittany' but just inside that block scope where no console logis called
    //the next console log is A inside the sayName function where name is assigned to 'Nathaniel' so A: 'Nathaniel'
    //We exit the outer conditional and are back in the functional scope where name is still 'Nathanial' so B: 'Nathanial'
    //Then we exit the functional scope and are in the global scope where D: 'Brittany'
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;