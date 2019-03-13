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
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul' }
    ];     return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  /////////////////////////////////////////





  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }
      // Log A: number = //75
      function newNumber() {
        number = 64;
        // Log B: number//64
      }
      newNumber();
      // Log C: number//64
    }

    numberFunction();

    // Log D: number//30

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ]; 
    return result;

    // Annotation:
    // 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';      

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting--1st, Hello

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting--2nd, Hey
      }

      newPhrase();

      // Log C: greeting--3rd, Hey
    }

    greetingFunction();

    // Log D: greeting--4th, Hello

    const result = [
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey'},
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

      // Log A: greeting//1st, hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting//2nd, welcome
      };

      newGreeting();

      // Log C: greeting//3rd, welcome
    };

    greetingGenerator();

    // Log D: greeting//4th, howdy

    const result = [
      { A: 'hi' },
      { B: 'welcome' },
      { C: 'welcome'},
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

        // Log A: name// Nathaniel
      }

      // Log B: name // Nathaniel
    }

    // Log C: name// Brittany

    sayName();

    // Log D: name//Brittany

    const result = [
      { C: 'Brittany'},
      { A: 'Nathaniel' },
      { B: 'Nathaniel' },
      { D: 'Brittany' }
    ];    return result;
    // Annotation:
    // Write your annotation here as a comment
  },






  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog// 1. Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog// 2. Spot

        dog = 'Biscuit';

        // Log C: dog// 3. Biscuit

      }

      rollOver();

      // Log D: dog// 4. Biscuit
    }

    petDog();

    // Log E: dog// 5. Biscuit

    const result = [
      { A: 'Spot' },
      { B: 'Spot' },
      { C: 'Biscuit'},
      { D: 'Biscuit' },
      { E: 'Biscuit'}
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
          // Log A: fruit //1. 'reference error'

          const fruit = 'strawberry';
        }

        // Log B: fruit //2. mango
      }

      // Log C: fruit //3. mango
    }

    eatFruit();

    // Log D: fruit //4. apple

    const result = [
      { A: 'reference error' },
      { B: 'mango' },
      { C: 'mango'},
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

      // Log A: num //1. 4

      if (num < 5) {
        const num = 9;
        fn2(num);

        const newNum = num;

        // Log B: newNum//4. 9
      }

      newNum = num;
      // Log C: newNum//5. 4
    };

    const fn2 = function(num){
      // Log D: num //2. 9

      num = num + 1;
      // Log E: num//3. 10
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
      // Log A: hunger//1. 75, 5. 55


      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger//2. 0, 6. 0
      }

      // Log C: hunger// 3. 75, 7. 55

    }

    eatSnack();

    hunger += 5;
    // Log D: hunger//4. 80


    eatSnack();
    // Log E: hunger//8. 55

    const result = [
      { A: 75 },
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { A: 55 },
      { B: 0 },
      { C: 55 },
      { E: 55 },
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },





  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich//1. ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings//3. undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich//4. 'not a mediocre sandwich'
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping//2. gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich//5. 'not a mediocre sandwich'
    // Log F: amandaBynes

    const result = [
      { A: 'ketchup sandwich' },
      { D: 'gouda' },
      { B: undefined },
      { C: 'not a mediocre sandwich' },
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure' },
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