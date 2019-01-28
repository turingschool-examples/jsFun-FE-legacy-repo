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
          // Log B: personC CardiB
        }
      }

      personC = personA;

      // Log C: personB Cardi B
    }

    changePerson();

    // Log D: personC Paul

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];
    return result;

    // Annotation:
    // log A is going to be Ben because it is looking up in the scope to grab its context
    // log B is going to be CardiB because it is getting re-assign personC to to personB which was re-assigned to CardiB
    // log C is going to be CardiB because it is keeping its re-assigned value at line 17
    // log D is going to be Paul because it is locally globaly to grab its context
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

        // Log B: 64
      }

      newNumber();

      // Log C: number 64
    }

    numberFunction();

    // Log D: number 30

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];
    return result;

    // Annotation:
    // logA is going to be 75 because it is looking up the context of number that is functionally scoped
    // logB is going to be 64 because we re-assign the value at line 60
    // logC is going to be 64 because the re-asignment carries out out of its scope
    // logD is going to be 30 because it is going to look globaly in the scope
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting YO

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting Hey
      }

      newPhrase();

      // Log C: greeting Hey
    }

    greetingFunction();

    // Log D: greeting Hello

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];
    return result;

    // Annotation:
    // logA is going to be Yo because it is going to look at its function scoped variable
    // logB is going to be Hey because it is going to look at the re-assign value at line 102
    // logC is going to be Hey as well because the re-assigned value persist through the function
    // logD is going to be hello because it is going to look out in the global scope
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting welcome
      };

      newGreeting();

      // Log C: greeting welcome
    };

    greetingGenerator();

    // Log D: greeting howdy

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];
    return result;

    // Annotation:
    // logA is going to be hi because it is referring to the function scope varible of greetingGenerator
    // logB is going to be welcome because we re-assignng the value at linke 144
    // logC is also going tobe welcome because the changes persist
    // logD is going to be howdy because it is going to refer its global scope
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

        // Log A: name Nathaniel
      }

      // Log B: name Nathaniel
    }

    // Log C: name Brittany

    sayName();

    // Log D: name Brittany

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];
    return result;

    // Annotation:
    // logC is going to Brittany because it is referring to its global scope variable of name
    // logA is going to be Nathaniel because we are re-assign the value on line 180
    // LogB is going to be also Nathaniel because the changes persist through
    // logD is going to be Brittany because it is referring to its global scope variable of name
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog Spot

        dog = 'Biscuit';

        // Log C: dog Biscuit

      }

      rollOver();

      // Log D: dog Biscuit
    }

    petDog();

    // Log E: dog Biscuit

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];
    return result;

    // Annotation:
    // logA is going to be Spot as it is looking outside of its scope for its context
    // logB is also goin to be Spot as it is looking outside of its scope for its context
    // logC is going to be Biscuit because we re-asigning the global varible in linen 226
    // logD is going to be Biscuit as it persist the changes 
    // logE is also going to be Biscuit for again persisting the changes
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit reference
          const fruit = 'strawberry';
        }

        // Log B: fruit mango
      }

      // Log C: fruit mango
    }

    eatFruit();

    // Log D: fruit apple

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }
    ];
    return result;

    // Annotation:
    // logA is going to be a reference error because there is a temporary deadzone when looking for the variable of fruit
    // logB is going to be mango because it looks in its block scope variable
    // logC is going to be mango as weel because the var declaration tends to leak its context
    // logD is going to be apple as it looks up globally
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num 4 

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum 9
      }

      newNum = num;

      // Log C: newNum 4
    };

    const fn2 = function(num){
      // Log D: num 9

      num = num + 1;

      // Log E: num 10
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
    // logA is going to be 4 because it is referencing the function scope variable
    // logD is going to be 9 because it is going to refer to block scope vairable
    // logE is going to be 10 because it is going to refer the same num passed as an arguement plus 1
    // logB is going to be 9 because it is going to refer to its block scope vairable
    // logC is going to refer to 4 because iot is going to refer to its function scope variable
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger 75 
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger 0 
      }

      // Log C: hunger 75 
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger 80

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
      { 'E': 55 }
    ];
    return result;

    // Annotation:
    // LogA is going to be 75 because we are taking the global variable and re-asigning it subtratced by 25
    // logB is going to be 0 because we are in a block scope using that variable 
    // logC is going to be 75 because the changes we created on line 350 persisted through
    // logD is going to be 80 because we re-assign variable plus 5 at line 365
    // logA is going to be 55 beacuse we took the varible of 80 and subtracted by 25
    // logB is going to be 0 again for the same reason the first log b was
    // logC is going to be 55 again because those changes persisted
    // logE is going to be 55 for peristing every change we created in our functions
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich not a mediocre sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich not a mediocre sandwich
    // Log F: amandaBynes National Treasure

    const result = [
      { 'A': 'ketchup sandwich' },
      { 'D': 'gouda' },
      { 'B': undefined },
      { 'C': 'not a mediocre sandwich' },
      { 'E': 'not a mediocre sandwich' },
      { 'F': 'National Treasure' }
    ];
    return result;

    // Annotation:
    // logA is going to be ketchup because it is referring to the global variable
    // logD is going to be guoda becasue it is referring to the function scope variable
    // logB is going to be undefined because al though there is a variable under the log it hasnt been defined yet
    // logC is going to be mediocre sandwich because because we re-assign the values in our if block 
    // logE is going to be the same as logC as the changes persist
    // logF is going to be going to be national as we created a global variable in the function shesTheManReference
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num 7
    }

    foo();

    // Log B: num 7

    const result = [
      { 'A': 7 },
      { 'B': 7 }
    ];
    return result;

    // Annotation:
    // logA is going to be 7 because re-asign the value on line 451
    // logB is going be the same reason logA is 7 because the changes persist
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

        // Log A: grade 95
      }

      addPoints();

      // Log B: grade 90
    }

    losePoints();

    // Log C: grade 90

    const result = [
      {'A': 95 },
      {'B': 90 },
      {'C': 90 }
    ];
    return result;

    // Annotation:
    // logA is going to be 95 because we are looking at the function scope variable
    // logB is going to be 90 because we are looking at the re-asigned variable done at 475
    // logC is the same reason logB because our changes peristed globally
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num 5
      num = 6;
      // Log B: num 6
    }

    function second() {
      // Log C: num 6
      let num = 7;
    }

    first();
    second();

    // Log D: num 6

    const result = [
      {'A': 5 },
      {'B': 6 },
      {'C': 'reference error' },
      {'D': 6 }
    ];
    return result;

    // Annotation:
    // logA is going to be 5 because it is going to refer to the global variable 
    // logB is going to be 6 because it is going to refer to re-assignment on line 514
    // logC is going to be a reference error because it there is a variable declared strictly below it
    // logD is going to be 6 because of the same reason as logB because our changes persist globally
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor louisa
      }

      rename();

      // Log D: instructor louisa

    }

    // Log E: instructor Pam

    changeInstructor();

    // Log F: instructor louisa

    const result = [
      {'E': 'Pam' },
      {'A': 'Pam' },
      {'B': 'Pam' },
      {'C': 'Louisa' },
      {'D': 'Louisa' },
      {'F': 'Louisa' }
    ];
    return result;

    // Annotation:
    // logE is going to be Pam because it is going to refer to the global variable
    // logA is going to be Pam as well for the same reason logE does
    // logB is going to be Pam as well for the same reason logE does
    // logC is going to be Louisa becasue we re-assigned the global variable
    // logD is going to be Louisa as well because the changes persist
    // logF is going to be Louisa as well because the changes persist
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe undefined
      var shoe = 'boot';
    }

    // Log B: shoe flipflop
    putOnShoe();
    // Log C: shoe flipflop

    const result = [
      {'B': 'flipflop' },
      {'A': undefined },
      {'C': 'flipflop' }
    ];
    return result;

    // Annotation:
    // logB is going to be flipflop because it is referencing the global variable
    // logA is going to be undefined because it is being called before the function scope variable has been given its value
    // logC is going to be flipflop as well because the same reason as logB
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch NEVER!
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch soup
    }

    orderLunch();

    // Log C: lunch soup

    const result = [
      {'B': 'soup' },
      {'C': 'soup' }
    ];
    return result;

    // Annotation:
    // logB is going to be soup because we re-assign the global value in our if block
    // logC is the same reason of logB
    // logA never gets hit
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid Pandora
      wildKids.push(kid);
      // Log B: wildKids ['Antigone','Pandora']
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid Mandy
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid Antigone
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid Pandora
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {'A': 'Pandora' },
      {'B': ['Antigone','Pandora'] },
      {'C': 'Mandy' },
      {'D': 'Antigone' },
      {'E': 'Pandora' }
    ];
    return result;

    // Annotation:
    // logA is going to be Pandora because it is going to refer to the global variable 
    // logB is going to be array of Antigone and Pandora because we pushed the string in line 656
    // logC is going to be Mandy because were referencing the function scope variable
    // logD is going to be Antigone
    // logE is going to be Pandora because of the same reason logA
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName RodyToy

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName Telsa
      };

      innerFunc();
      myName += 'Daniels'; 
    };

    parentFunc();
    // Log D: myName RodyToyDaniels

    const result = [
      {'A': 'Rody' },
      {'B': 'RodyToy' },
      {'C': 'Tesla' },
      {'D': 'RodyToyDaniels' },
    ];
    return result;

    // Annotation:
    // logA is going to be Rody as it refers to the global scope myName
    // logB is going to be RodyToy as we re-assigned the value and combined the strings
    // logC is going to be Tesla becasue it is referring to the block scope variable 
    // logD is going to be RodyToyTelsa as we take the global variable and combine the strings again
  }
};

module.exports = scope;