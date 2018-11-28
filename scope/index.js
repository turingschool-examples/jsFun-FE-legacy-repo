const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // First we declare three let variables personA, personB, and personC and assign them names as strings.
    // Then we declare a function changePerson. Then we invoke that function on line 28.
    // When we move into the local execution context of changePerson, we first run an if statement to check if personA === 'Paul', which is true.
    // Therefore we move into the if statement and assign a new variable person to 'CardiB'. Since there is no declaration of this variable, it automatically goes into global scope.
    // Then we invoke the function beautifyPerson which is declared later in the changePerson function but is available to us because of hoisting.
    // Then we Log A: personB which is equal to 'Ben' because it was declared in the global scope and has not been re-assigned.
    // Next we run the if statement, which is true and enter that block statement. In this block, personB is re-assigned to person which is equal to 'CardiB'. Then personC is re-assigned to personB which is now equal to 'CardiB'.
    // When we Log B: personC we get 'CardiB'. Once we leave the if block statement, personC is re-assigned to personA which is equal to 'Paul'.
    // Next, we Log C: personB which is 'CardiB'. Then we leave the changePerson function and go back to the global scope.
    // Finally, we Log D: personC which is 'Paul' because it was re-assigned globally within the function.
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

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];
    return result;

    // Annotation:
    // First we assign a new variable number and set it to 30. Then we declare a function numberFunction and invoke it on line 76.
    // Within numberFunction, we assign a let called number equal to 75. Then we run an if statement that is true and assign a let called number to 28 that is block scoped.
    // Next we leave the block scope and Log A: number is equal to 75 from the function scope.
    // Tnen a new function newNumber is declared and invoked on line 71. Within the function newNumber, the variable number in the function scope is re-assigned to 64. Then we Log B: number which is equal to 64 from the local scope.
    // Next we go out in scope and Log C: number which is still equal to 64 because the re-assignment of number in the newNumber function went out in scope.
    // Lastly, we exit the function numberFunction and return to global scope. Log D: number is equal to 30 because number was never re-assigned in the global scope.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo'; //'Hey'

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

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];
    return result;

    // Annotation:
    // Declare variable greeting and assign it to 'Yo'.
    // Run if statement, which is true, and declare let greeting to 'Howdy'. This variable is block scoped.
    // Log A: greeting = 'Yo' referring to global variable assignment.
    // Declare function newPhrase and invoke it on line 115.
    // Within newPhrase, re-assign the global variable greeting to 'Hey'
    // Log B: greeting = 'Hey' due to re-assignment of outer function scoped variable.
    // Log C: greeting = 'Hey' due to re-assignment of outer scope variable.
    // Return out of greetingFunction function.
    // Log D: greeting = 'Hello' in ther global scope because the global variable has not been re-assigned.
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

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // Declaration of let greeting assigned to 'howdy'
    // Declaration of arrow function greetingGenerator which is invoked on line 167.
    // Within that function, declaration of let greeting assigned to 'hi', this variable is function scoped.
    // If statement, which is true, with the declaration of let greeting assigned to 'hellow'. This variable is block scoped.
    // Outside if statement, log A: 'hi' from the function scoped variable.
    // Declaration of new arrow function newGreeting which is invoked on line 162.
    // Within newGreeting, outer function scoped greeting is re-assigned to 'welcome'.
    // Log B: greeting = 'welcome' from above re-assignment.
    // Return out of newGreeting, Log C: greeting = 'welcome' because re-assignment was outer function scoped.
    // Return out of function to global scope.
    // Log D: greeting = 'howdy' because global scoped variable was not re-assigned.
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

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel'},
      { 'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot'; //Biscuit

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

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];
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

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ];
    return result;

    // Annotation:
    // A is a reference error because of the block const assignment of fruit within that block scope. Due to TDZ.
    // The block statement knows fruit is declared as something else but does not hoist the variable (not set as undefined).
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

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100; //55

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

    const result = [
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 },
      { 'A': 55 },
      { 'B': 0},
      { 'C': 55 },
      { 'E': 55 }
    ];
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

    const result = [
      { 'A': 'ketchup sandwich' },
      { 'D': 'gouda' },
      { 'B': undefined },
      { 'C': 'not a mediocre sandwich' },
      { 'E': 'not a mediocre sandwich'},
      { 'F': 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Assign global let sandwich to ketchup sandwich.
    // Log A: sandwich is ketchup sandwich from global assignment above.
    // Declare functions addChipotle and addCheese.
    // Assign global variable cheeseTopping as kraft.
    // Invoke function addCheese. Within function, declare function scope variable cheeseTopping as gouda.
    // Log D: cheeseTopping = gouda from above assignment.
    // Declare arrow function shesTheManReference and invoke it below.
    // Within shesTheManReference, global variable amandaBynes is assigned to 'National Treasure'.
    // Return out of function, then out of outer function back to global scope.
    // addChipotle function is invoked next. Within that function, Log B: toppings = undefined because it is declared using var so it's is hoisted.
    // Assign toppings as chipotle sauce. If statement is true, so sandwich at the global scope is assigned to 'not a mediocre sandwich'.
    // Log C: sandwich outside if statement is 'not a mediocre sandwich' because it was re-assigned at the global scope.
    // Return out of function back to global scope.
    // Log E: sandwich = 'not a mediocre sandwich' because global scope variable was re-assigned.
    // Log F: amandaBynes = 'National Treasure' because the variable was declared without a keyword and therefore is globally scoped.
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

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];
    return result;

    // Annotation:
    // Global declaration of let num assigned to 10.
    // Declaration of function foo, invoked below.
    // Within foo, if num > 5, which is true from global declaration, re-assign num to 7 (at global scope).
    // Log A: num = 7 from above re-assignment, return out of foo.
    // In global scope, Log B: num is also 7 because num was re-assigned at the global scope.
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

    const result = [
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ];
    return result;

    // Annotation:
    // Declare global let grade and assign it to 100.
    // Declare function losePoints and invoke it.
    // Within losePoints, global re-assignment of grade to 90.
    // Declare function addPoints and invoke it.
    // Within addPoints, declare function scope constant grade and assign it to 95.
    // Check if statement, which is true, withing if statement, declare block scoped let grade and assign it to 97.
    // Outside if statment, Log A: grade = 95 from function scope re-assignment.
    // Return out of addPoints.
    // Log B: grade = 90 from global re-assignment in losePoints.
    // Return out of losePoints. Log C: grade = 90 from global re-assignment in losePoints.
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

    const result = [
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 'reference error' },
      { 'D': 6 }
    ];
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

    const result = [
      { 'E': 'Pam' },
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa' },
      { 'F': 'Louisa' }
    ];
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

    const result = [
      { 'B': 'flipflop' },
      { 'A': undefined },
      { 'C': 'flipflop' }
    ];
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

    const result = [
      { 'B': 'soup' },
      { 'C': 'soup' }
    ];
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

    const result = [
      { 'A': 'Pandora' },
      { 'B': ['Antigone', 'Pandora'] },
      { 'C': 'Mandy' },
      { 'D': 'Antigone' },
      { 'E': 'Pandora' }
    ];
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