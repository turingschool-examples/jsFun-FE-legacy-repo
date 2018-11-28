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

    const result = [{A: 'Ben'}, {B: 'CardiB'}, {C: 'CardiB'}, {D: 'Paul'}];
    return result;

    // Annotation:
    // In the creation phase personA, personB, and personC are declared globally on lines 3-5. Then the changePerson function is stored in memory. Then execution phase starts. personA is assigned the value of 'Paul'. personB is assigned the value of 'Ben'. personC is assigned the value of 'Tom'. The interpreter does not execute the function declaration on line 7-26. It then executes changePerson() on line 28. This creates a new local execution context, and a new creation phase begins. The function beautifyPerson is saved in memory. Then the interpreter goes to execution phase starting on line 8. The conditional is evaluated. The interpreter looks for personA in changePerson()'s functional scope and does not find it, so it looks in the global scope. It finds that personA is strictly equal to 'Paul', so the execution goes inside the if block. On line 9, the interpreter attempts to reassign person and looks for it in the functional scope. person is not there, so it looks for person in the global scope. person is still not there, so person is then declared as a new global variable and assigned 'CardiB'. Then beautifyPerson is executed, and a new local execution context is created. Nothing happens in the creation phase. In the execution phase, the if statement looks for personB. personB isn't found until the global scope where it has the value of 'Ben'. 'Ben' includes 'B', so the conditional evaluates to true and execution goes into the if block. On line 17, the interpreter looks for personB in the block scope, beautifyPerson functional scope, changePerson functional scope, and lastly in the global scope where it is finally found. It assigns the global variable personB to the value of person which is also found in the global scope with the value 'CardiB'. Then personC is found in the global scope as well and is assigned the value of personB which is in the global scope. So personC has the value of 'CardiB'. Then that local execution context is done and removed from the call stack. And the changePerson local execution context is done and removed from the call stack. And that's it. Eazy peezy.
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

    const result = [{A: 75}, {B: 64}, {C: 64}, {D: 30}];
    return result;

    // Annotation:
    // number is declared and assigned to 30 globally. Inside numberFunction, number is declared and assigned to 75 in the functional scope. Inside the if block, number is declared and assigned to 28 in the block scope. At Log A, number is found in the functional scope with the value of 75. Inside newNumber, number (the variable inside numberFunction's scope) is reassigned to 64, so at Log B, number is 64. At log C, number is looked for in numberFunction's scope and is found to be 64. At Log D, number is looked for in the global scope and is found to be 30.
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

    const result = [{A: 'Yo'}, {B: 'Hey'}, {C: 'Hey'}, {D: 'Hello'}];
    return result;

    // Annotation:
    // In the global scope, greeting is declared and assigned to 'Hello'. When greetingFunction is called, a new variable greeting is declared and assigned to 'Yo' in the functional scope. Inside the if block, a new let greeting is declared and assigned to 'Howdy' in the block scope. At Log A, greeting is found in the functional scope where it has the value of 'Yo'. When newPhrase is called, greeting is reassigned. The greeting which is reassigned is the one in greetingFunction's functional scope. It is reassigned to 'Hey', so at Log B, greeting is 'Hey'. At Log C, greeting is found in the functional scope of greetingFunction where its value is 'Hey'. At Log D, greeting is found in the global scope where its value is 'Hello'.
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

    const result = [{A: 'hi'}, {B: 'welcome'}, {C: 'welcome'}, {D: 'howdy'}];
    return result;

    // Annotation:
    // In the global scope, a let variable of greeting is declared and assigned to 'howdy'. When greetingGenerator is called, a new let variable of greeting is declared and assigned to 'hi'. In the if block, a new let of greeting is declared and assigned to 'hello'. At Log A, greeting is found in greetingGenerator's functional scope with the value of 'hi'. When newGreeting is called, a greeting is reassigned to welcome. The greeting which is being reassigned is the one in greetingGenerator's functional scope. It is reassigned to 'welcome'. At Log B, greeting is found in greetingGenerator's functional scope where it has the value of 'welcome'. At Log C, greeting is found in greetingGenerator's functional scope where it has the value of 'welcome'. At Log D, greeting is found in the global scope with the value of 'howdy'.
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

        // Log A: nameNathaniel
      }

      // Log B: nameNathaniel
    }

    // Log C: nameBrittany

    sayName();

    // Log D: nameBrittany

    const result = [{C: 'Brittany'}, {A: 'Nathaniel'}, {B: 'Nathaniel'}, {D: 'Brittany'}];
    return result;

    // Annotation:
    // A let variable name will be declared and assigned to 'Brittany' in the global scope. At Log C, name is found in the global scope with the value of 'Brittany'. When sayName() is called, a new let variable will be declared and assigned to 'Pam' in the functional scope. In the first if block, name in the functional scope will be reassigned to 'Nathaniel'. In the next if block, a new let variable will be declared and assigned to 'Brittany' in the block scope. At Log A, name is found in the functional scope with the value 'Nathaniel'. At Log B, name is found in the functional scope with the value 'Nathaniel'. At Log D, name is found in the global scope with the value of 'Brittany'.
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

    const result = [{A: 'Spot'}, {B: 'Spot'}, {C: 'Biscuit'}, {D: 'Biscuit'}, {E: 'Biscuit'}];
    return result;

    // Annotation:
    // dog is declared globally with the value of 'Spot'. When petDog() is called, there is no functionally scoped variable dog, so at Log A, dog is found in the global scope where its value is 'Spot'. When rollOver() is called, there is no functionally scoped variable dog, so at Log B, dog is found in the global scope where its value is 'Spot'. Then the global dog is reassigned to 'Biscuit', so at Log C, dog is found globally with the value of 'Biscuit'. At Log D, there is no dog in petDog's functional scope, so dog is found globally where it is 'Biscuit'. At Log E, the execution is in the global context, so the interpreter looks for dog in the global scope where it is 'Biscuit'.
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

    const result = [{A: 'reference error'}, {B: 'mango'}, {C: 'mango'}, {D: 'apple'}];
    return result;

    // Annotation:
    // fruit is declared globally with the value 'apple'. Then eatFruit() is called. In eatFruit, the label fruit is hoisted to the functional scope with a value of undefined. In the first if statement, fruit (which is scoped in eatFruit's functional scope) is reassigned to 'mango'. Inside the nested if statement, during the creation phase, a const fruit is put into the temporal dead zone. At Log A, fruit is in the temporal dead zone so it the interpreter does not look for fruit in a higher scope, but because fruit is in the TDZ, the interpreter throws a reference error. At Log B, fruit is not found in the first if statement's block scope since the keyword var caused fruit to be hoisted to eatFruit's functional scope, so fruit is found there where its value is 'mango'. Log C is within eatFruit's execution context so it looks in that functional scope and finds fruit with the value of 'mango'. At Log D, the interpreter is in the global execution context so it looks for fruit in the global scope and finds it with the value of 'apple'.  
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

    const result = [{A: 4}, {D: 9}, {E: 10}, {B: 9}, {C: 4}];
    return result;

    // Annotation:
    // num is declared globally with the value of 6. fn1() is called. Inside fn1's functional scope, num is declared with the value of 4, so at Log A num is 4. Within the if block, a const num is declared in block scope with the value of 9. fn2() is called and passed 9 as an argument. At Log D, num is found in fn2's functional scope with the value of 9 because that is what was passed in. That num within fn2's scope is then incremented, and at Log E, num's value is 10. The interpreter then goes back to the if block where the const newNum is assigned num. In that context, num is found in block scope where its value is 9, so at Log B, newNum is 9. After the if block, the interpreter attempts to reassign newNum. It looks in the functional scope and global scope and cannot find newNum, so it creates a new global newNum variable. That global newNum is then assigned num. The value of num in this context is found in fn1's functional scope where its value is 4.
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