    // npm run testScope

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
        // Log A: personB 1st, Ben
        console.log('a: ', personB, 'ben');
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC 2nd, CardiB
          console.log('b: ', personC, 'cardib');
        }
      }

      personC = personA;

      // Log C: personB 3rd, CardiB
      console.log('c: ', personB, 'cardib');
    }

    changePerson();

    // Log D: personC
    console.log('d: ', personC, 'paul')

    const result = [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul'}
    ];
    return result;

    // Annotation:
    // A logs 'Ben' because personB references the global variable
    // B logs 'CardiB' because the if statement reassigns personB to person, which was reassigned to 'CardiB' in the function changePerson().
    // C logs 'CardiB' because the if statement reassigns personC to personB, which was previously resassigned to 'CardiB' in the function changePerson().
    // D logs 'Paul' because personC is reassigned to the global variable personA on line 27. 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number - what is the value of the number variable here? // 75
      console.log('a: ', number, 75);

      function newNumber() {
        number = 64;

        // Log B: number
        console.log('b: ', number, 64);
      }

      newNumber();

      // Log C: number
      console.log('c: ', number, 64);
    }

    numberFunction();

    // Log D: number
    console.log('d: ', number, 30);

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ];
    return result;

    // Annotation:
    // step through the code as it would execute
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      console.log('a: ', greeting, 'yo');

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        console.log('b: ', greeting, 'hey');
      }

      newPhrase();

      // Log C: greeting
      console.log('c: ', greeting, 'hey');
    }

    greetingFunction();

    // Log D: greeting
    console.log('d: ', greeting, 'hello');

    const result = [
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey' },
      { D: 'Hello' }
    ];
    return result;

    // Annotation:
    // A logs 'Yo' because greeting is declared functionally scoped within greetingFunction()
    // B logs 'Hey' because greeting is reassigned within the function newPhrase()
    // C logs 'Hey' because it references the most recent declaration of greeting (within newPhrase)
    // D logs 'Hello' because it references the global scope
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      console.log('a: ', greeting, 'hi');

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        console.log('b: ', greeting, 'welcome');
      };

      newGreeting();

      // Log C: greeting
      console.log('c: ', greeting, 'welcome');
    };

    greetingGenerator();

    // Log D: greeting
    console.log('d: ', greeting, 'howdy');

    const result = [
      { A: 'hi' },
      { B: 'welcome' },
      { C: 'welcome' },
      { D: 'howdy'}
    ];
    return result;

    // Annotation:
    // A console.logs 'hi' because it's functionally scoped to object function greetingGenerator, which declares greeting = 'hi'
    // B logs 'welcome' because greeting is reassigned to 'welcome' within newGreeting
    // C logs 'welcome' because the reassignment within newGreeting bleeds out into parent scope for function greetingGenerator
    // D logs 'howdy' because the console.log lies outside of the function and is globally scoped
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
        console.log('2a: ', name, 'Nathaniel');
      }

      // Log B: name
      console.log('3b: ', name, 'Nathaniel');
    }

    // Log C: name
    console.log('1c: ', name, 'Brittany');

    sayName();

    // Log D: name
    console.log('4d: ', name, 'Brittany');

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // A console.logs
    // B logs
    // C logs
    // D logs
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