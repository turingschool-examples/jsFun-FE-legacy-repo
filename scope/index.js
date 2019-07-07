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
          personB = person; //global B becomes CardiB
          personC = personB; //global C becomes CardiB too
          // Log B: personC
        }
      }

      personC = personA; //global C becomes Paul

      // Log C: personB 
    }

    changePerson();

    // Log D: personC

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' }, 
      { 'C': 'CardiB'},
      { 'D': 'Paul'}
    ]; 
    return result;

    // Annotation:
    // The undeclared person variable either becomes a function or global variable
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75; //new block scoped number

      if (number === 75) { // sees line 48, is true
        let number = 28; // new block scoped number that quickly clears
      }

      // Log A: number

      function newNumber() {
        number = 64; //reassigns line 48

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
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo'; //new function scoped greeting

      if (greeting === 'Yo') { //true
        let greeting = 'Howdy'; //new block scoped greeting
      }

      // Log A: greeting //can see line 87, 'yo'

      function newPhrase() {
        greeting = 'Hey'; //reassigns 87 to 'HEY"

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
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi'; // new block scope greeting

      if (greeting === 'hi') { // true
        let greeting = 'hello'; //another new block scope greeting
      }

      // Log A: greeting, sees 126

      const newGreeting = () => {
        greeting = 'welcome'; //reassigns 126 to 'welcome'

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting, sees 126 'welcome'
    };

    greetingGenerator();

    // Log D: greeting, sees 123 'howdy'

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam'; //new block scope Pam

      if (name === 'Pam') {//true
        name = 'Nathaniel'; //reassigns 165

        if (name.length > 0) { //true
          let name = 'Brittany'; //new block scoped Brittany, immediately cleared EC
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name //This is outside the function, fires 1st

    sayName();

    // Log D: name

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];
    return result;

    // Annotation:
    // C executes before the function is invoked
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog //Spot

      if (dog === 'Spot') { //True
        let dog = 'Fluffy'; //new block scoped Fluffy, but its EC is immediately gone
      }

      function rollOver() {
        // Log B: dog //Spot

        dog = 'Biscuit'; //reassigns 199 to Biscuit

        // Log C: dog //Now Biscuit
 
      }

      rollOver(); //Come here after line 205

      // Log D: dog //Here after 213
    }

    petDog(); //Executes first

    // Log E: dog

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit'},
      { 'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {
      //"mango" from 245
      if (fruit !== 'kiwi') { //True
        var fruit = 'mango';  //New function scope 

        if (fruit) { //string variables are truthy
          // Log A: fruit 
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit(); //First thing that executes

    // Log D: fruit

    const result = [
      { 'A': 1 },
      { 'B': 1 },
      { 'C': 1 },
      { 'D': 1 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6; //Now 10

    const fn1 = function () {
      let num = 4; //new block scoped num

      // Log A: num //4

      if (num < 5) { //true
        const num = 9; //new if block scoped num

        fn2(num); //passes 9 from 283, go to line 297

        const newNum = num; //new block (282 - 290), and it sees num from 283 (9)

        // Log B: newNum
      }

      newNum = num; //attempts to reassign, makes new global = 4

      // Log C: newNum
    };

    const fn2 = function (num) {
      // Log D: num //9

      num = num + 1; //Tries to reassign, finds line 275 and makes it 10

      // Log E: num //Doesn't log the incoming arg, looks to the num on 278 (10)
      // Go back into fn1
    };

    fn1(); //first thing that happens

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseI() {
    var hunger = 100; //global, now 75, now 80, now 55

    function eatSnack() { 
      hunger -= 25; //322 is now 75, later 55
      // Log A: hunger
      gorgeYourself(); //Go to 329 inner function

      function gorgeYourself() { 
        const hunger = 0; //new block scoped 0
        // Log B: hunger //0, then immediately gone
      }

      // Log C: hunger //Sees 322, 75
    }

    eatSnack(); //First thing that executes, go to line 324

    hunger += 5; //global is now 80
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
      { 'A': 75 },
      { 'B': 0 },
      { 'C': 75 },
      { 'D': 80 }, 
      { 'A': 55 },
      { 'B': 0 },
      { 'C': 55 }, 
      { 'E': 55}
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich'; //"global" block scoped

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings //name was hoisted, but not initialized
      var toppings = 'chipotle sauce'; //function scoped

      if (toppings === 'chipotle sauce') { //true
        sandwich = 'not a mediocre sandwich'; // reassigns 362
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda'; //block scoped
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure'; // global
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft'; //new 'global' variable
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
    // 
  },

  exerciseK() {
    let num = 10; //block scoped to the function, 'global', now 7

    function foo() {
      if (num > 5) { //true
        num = 7; //reassigns 410
      }
      // Log A: num
    }

    foo(); //execute, go to 412

    // Log B: num

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100; //Now 90

    function losePoints() { 
      grade = 90; //Reassigns 434

      function addPoints() {
        const grade = 95; //Creates new block scoped

        if (grade === 95) { //true
          let grade = 97; //New block scoped, immediately EC is gone
        }

        // Log A: grade //Sees 440
      }

      addPoints(); 

      // Log B: grade //Sees 434
    }

    losePoints(); //first thing to execute

    // Log C: grade

    const result = [
      { 'A': 95 },
      { 'B': 90 },
      { 'C': 90 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5; //Global //Now 6

    function first() {
      // Log A: num //5
      num = 6; //Reassigns 470 to 6
      // Log B: num //6
    }

    function second() {
      // Log C: num //Sees 470, 6
      let num = 7; //New block scoped, EC immediately cleared
    }

    first();
    second();

    // Log D: num 6

    const result = [
      { 'A': 5 },
      { 'B': 6 },
      { 'C': 6 },
      { 'D': 6 }
    ];
    return result;

    // Annotation:
    // 'Reference error' on 479?
  },

  exerciseN() {
    var instructor = 'Pam'; //Now Louisa, from 516

    function changeInstructor() {

      // Log A: instructor //Sees 501

      if (instructor === 'Brittany') { //Falsey
        const instructor = 'Nathaniel'; //Skip
      } else {
        let instructor = 'Brittany'; //New block scoped, then immediately EC clears
      }

      // Log B: instructor //Sees 501

      function rename() {
        instructor = 'Louisa'; //Reassigns 501
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor //First line that executes

    changeInstructor(); //Go to 503

    // Log F: instructor

    const result = [
      { 'E': 'Pam' },
      { 'A': 'Pam' },
      { 'B': 'Pam' },
      { 'C': 'Louisa' },
      { 'D': 'Louisa'}, 
      { 'F': 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe 
      var shoe = 'boot'; //Hoisted as undefined to top of function scope upon invocation, then function scoped and gone
    }

    // Log B: shoe //First thing to execute
    putOnShoe(); //Go to 549
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
    let lunch; // Uninitialized/reference error during creation phase
    function orderLunch() {
      if (lunch) { 
        // Log A: lunch //Never enter this block
        let lunch = 'sandwich'; //Never executes
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup'; //Tries to reassign, but finally initializes 570
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

  exerciseQ() {
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