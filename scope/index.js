/* object template
const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ];
*/


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
        // Log A: 'Ben'
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: 'CardiB'
        }
      }

      personC = personA;

      // Log C: 'CardiB'
    }

    changePerson();

    // Log D: 'Paul'

    const result = [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul' }
    ];
    return result;

    // A: Inhereted from global
    // B: Reassigned at line 27

    /* Annotation: First, we declare our global variables `personA`, `personB`, `personC` and assign them to the respective strings 'Paul', 'Ben', 'Tom'.
    Second, we invoke the function `changePerson`, within `changePerson` we declare a global variable `person` and assign it to the string `cardiB` then invoke the function `beautifyPerson` which gives our first console log of 'A' where we will log `personB` which will log 'Ben' from our global scope. We will then enter the conditional in `beautifyPerson` where we will reach our second console log of `B` where we console log `personC` after it has been assigned to `personC` which has been assigned to the global variable of `person` which will log 'cardiB'. We will then log 'C' within the functional scope of `changePerson` Outside of the functional scope, the last thing we will
    */
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: 1st, 75
      // console.log('A: ', number);

      function newNumber() {
        number = 64;

        // Log B: 2nd, 64
        // console.log('B: ', number);
      }

      newNumber();

      // Log C: 3rd, 64
      // console.log('C: ', number);
    }

    numberFunction();

    // Log D: 4th, 30
    // console.log('D: ', number);

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ];
    return result;

    /* Annotation:
      First we declare a global variable called `number` and assign it to the number 30.
      Next we declare a function called `numberFunction`, this function is not invoked yet, so we continue.
      Next we invoke `numberFunction` which brings us back up to line 42. Within this function we reassign `number` to 75 within the functional scope. We then go back into the functional scope and we skip down to our first log `A`. `A` will be assigned to 75 because it is within the functional scope. We then invoke `newNumber()` where we reassign the number to 64 and then log `B` which will be 64 as it is defined within the functional scope. Next we log C, within the functional scope of `newNumber` where it has been reassigned to 64. 

    */
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: 'Yo', 1

      function newPhrase() {
        greeting = 'Hey';

        // Log B: 'Hey', 2
      }

      newPhrase();

      // Log C: 'Hey', 3
    }

    greetingFunction();

    // Log D: 'Hello', 4

    const result = [
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey' },
      { D: 'Hello' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting = 'hi', 1

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting = 'welcome', 2
      };

      newGreeting();

      // Log C: greeting = 'welcome', 3
    };

    greetingGenerator();

    // Log D: greeting = 'howdy', 4

    const result = [
      { A: 'hi' },
      { B: 'welcome' },
      { C: 'welcome' },
      { D: 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

        // Log A: name = Nathaniel, 2
      }

      // Log B: name = Nathaniel, 3
    }

    // Log C: name = Brittany, 1

    sayName();

    // Log D: name = Nathaniel, 4


    const result = [
      { C: 'Brittany' },
      { A: 'Nathaniel' },
      { B: 'Nathaniel' },
      { D: 'Brittany' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog = Spot, 1

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog = Spot, 2

        dog = 'Biscuit';

        // Log C: dog = Biscuit, 3

      }

      rollOver();

      // Log D: dog = Biscuit, 4
    }

    petDog();

    // Log E: dog = Biscuit, 5

    const result = [
      { A: 'Spot' },
      { B: 'Spot' },
      { C: 'Biscuit' },
      { D: 'Biscuit' },
      { E: 'Biscuit' }
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
          // Log A: fruit = reference error, 1
          // fruit is not true so we wouldn't reach this console log
          const fruit = 'strawberry';
        }

        // Log B: fruit = mango, 2
      }

      // Log C: fruit = mango, 3
    }

    eatFruit();

    // Log D: fruit = apple, 4

    const result = [
      { A: 'reference error' },
      { B: 'mango' },
      { C: 'mango' },
      { D: 'apple' }
    ];    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num = 4, 1

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum = 10, 4
      }

      newNum = num;

      // Log C: newNum = 4, 5
    };

    const fn2 = function(num){
      // Log D: num = 9, 2

      num = num + 1;

      // Log E: num = 10, 3
    };

    fn1();

    const result = [
      { A: 4 },
      { D: 9 },
      { E: 10 },
      { B: 9 },
      { C: 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger = 75, 1
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger 0, 2
      }

      // Log C: hunger = 75, 3; 
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger = 80, 4

    eatSnack();
    // Log E: hunger = 55, 5

    const result = [
      { A: 75 },
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { A: 55 },
      { B: 0 },
      { C: 55 },
      { E: 55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich = ketchup sandwich, 1

    const addChipotle = () => {
      // Log B: toppings = undefined, 3
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich = not a mediocre sandwich, 4
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping = gouda, 2

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich = not a mediocre sandwich, 5
    // Log F: amandaBynes = National Treasure, 6

    const result = [
      { A: 'ketchup sandwich' },
      { D: 'gouda' },
      { B: undefined },
      { C: 'not a mediocre sandwich' },
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure'}
    ];
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
      // Log A: num = 7, 1
    }

    foo();

    // Log B: num = 7, 2

    const result = [
      { A: 7 },
      { B: 7 }
    ];
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

        // Log A = 95, 1
      }

      addPoints();

      // Log B: grade = 90, 2
    }

    losePoints();

    // Log C: grade = 90;

    const result = [
      { A: 95 },
      { B: 90 },
      { C: 90 }
    ];
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