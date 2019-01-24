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
        // Log A: personB Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC Cardi B
        }
      }

      personC = personA;

      // Log C: personB Cardi B
    }

    changePerson();

    // Log D: personC Paul

    const result = [
      {'A': 'Ben'},
      {'B' : 'CardiB'},
      {'C' : 'CardiB'},
      {'D' : 'Paul'}];
    return result;

    // Annotation:
    // Log A is Ben because the person B variable is globally scoped as Ben and hasn't been changed. Log B is CardiB because personB was reassigned to person, which was assigned a value of 'CardiB'. Log C is 'CardiB' because personB was never reassigned. Log D is 'Paul' because personA was declared with a value of 'Paul' and has not been changed. 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number 75 

      function newNumber() {
        number = 64;

        // Log B: number 64
      }

      newNumber();

      // Log C: number 64
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A' : 75 },
      { 'B' : 64 },
      { 'C' : 64 },
      { 'D' : 30 }];

    return result;

    // Annotation:
    // Log A has a value of 75 because the number variable is functionally scoped inside numberFunction. Log B is 64 because the variable 'number' at line 50 has been reassigned to 64. Log C is also 64 because the variable 'number' at line 50 has been reassigned to 64. Log D is 30 because the variable 'number' is globally scoped. 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting Yo because the greeting variable at line 89 is block scoped

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting Hey because we're reassigning the greeting variable at line 86 to a value of Hey. 
      }

      newPhrase();

      // Log C: greeting Hey because we reassigned it
    }

    greetingFunction();

    // Log D: greeting is Hello because that's global 

    const result = [
      {'A' : 'Yo' },
      {'B' : 'Hey' },
      {'C' : 'Hey' },
      {'D' : 'Hello'}];
    return result;

    // Annotation:
    // Log A, the variable "greeting" has a value of "Yo" because the "greeting" variable at line 89 is block scoped, so the value of the variable greeting is functionally scoped at line 94 with a value of "Yo". Log B, the variable "greeting" has a value of "Hey" because the "greeting" variable at line 86 has been reassgined a valuye of "Hey" on line 95. Log C, the variable "greeting" has a value of "Hey" because it's been reassigned a value of "Hey" on line 95. Log D is "Hello" because the "greeting" variable on line 83 is globally scoped and has not been reassigned.
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
      {'A' : 'hi'},
      {'B' : 'welcome'},
      {'C' : 'welcome'},
      {'D' : 'howdy'}
    ];
    return result;

    // Annotation:
    // Log A is "hi" because the variable greeting is assigned a value of "hi" on line 124, is functionally scoped, and has not been reassigned. Log B is "welcome" because the variable "greeting" on line 124 has been reassigned a value of "welcome". Log C is "welcome" because the value of the variable "greeting" on line 124 was previously reassigned to "welcome". Log D is 'howdy' because the variable greeting on line 121 has a value of "howdy", is globally scoped, and has not been reassigned. 
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

        // Log A: name is Nathaniel because the if statement checking the value of "name" reassigns the value of "name" to Nathaniel. It does not reassign the value again in the second if statement even though the length of "name" is greater than zero because the second if statement declares a new variable "name", it doesn't reassign the value of the variable "name" on line 163. 
      }

      // Log B: name is still Nathaniel because the if statement on line 166 reassigns the value of "name" on line 163 to "Nathaniel".
    }

    // Log C: name Brittany because we are now out of the function, so the variable "name" we're referring to is the variable on line 163, which has been assigned a value of "Brittany".

    sayName();

    // Log D: name Brittany because we are now out of the function, so the variable "name" we're referring to is the variable on line 163, which has been assigned a value of "Brittany".

    const result = [
      {'C' : 'Brittany'},
      {'A' : 'Nathaniel'},
      {'B' : 'Nathaniel'},
      {'D' : 'Brittany'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = [
      {'A' : 'Spot'},
      {'B' : 'Spot'},
      {'C' : 'Biscuit'},
      {'D' : 'Biscuit'},
      {'E' : 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Log A: dog is 'Spot' because 'Spot' is globally scoped and has not been reassigned. Log B: dog is still 'Spot' because 'Spot' is globally scoped and has not been reassigned. Log C: dog is 'Biscuit' because the function rollOver reassigns the value of the variable 'dog' on line 197 to 'Biscuit'. Log D and Log E are also 'Biscuit' because the global variable 'dog' has been reassigned the value of 'Biscuit' by the function rollOver. 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit is still 'apple' because line 243 is not reassigning the value of 'fruit', it's creating a new variable 'fruit' with a value of 'mango'. 
          const fruit = 'strawberry';
        }

        // Log B: fruit still apple
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
      {'A' : 'apple'},
      {'B' : 'apple'},
      {'C' : 'apple'},
      {'D' : 'apple'}
    ];
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