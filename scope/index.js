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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

    const result = [{A: 75}, {B: 0}, {C: 75}, {D: 80}, {A: 55}, {B: 0}, {C: 55}, {E: 55}];
    return result;

    // Annotation:
    // hunger is declared globally and assigned 100. When eatSnack() is invoked, the global hunger is decreased by 25 so it has the value of 75. At Log A, hunger is 75. When gorgeYourself() is invoked, a new const hunger is declared in the functional scope and assigned 0. At Log B, hunger is 0. At Log C, hunger is found globally and it is 75. After eatSnack() is done executing, the global hunger is increased by 5. At Log D, hunger is found globally, and its value is 80. When eatSnack is called the second time, the global hunger is decreased by 25, so at Log A again, hunger is found globally with the value of 55. At Log B again, hunger is found in the functional scope with the value of 0. At Log C again, hunger is found globally, and its 55. At Log E, hunger is found globally, and its 55.
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

    const result = [{A: 'ketchup sandwich'}, {D: 'gouda'}, {B: undefined}, {C: 'not a mediocre sandwich'}, {E: 'not a mediocre sandwich'}, {F: 'National Treasure'}];
    return result;

    // Annotation:
    // sandwich is declared globally and assigned 'ketchup sandwich'. At Log A, sandwich is 'ketchup sandwich'. cheeseTopping is reassigned to 'kraft', but it does not exist anywhere so it is created as a global variable. addCheese() is invoked. cheeseTopping is declared in the functional scope and assigned 'gouda', so at Log D, cheeseTopping is 'gouda'. shesTheManReference() is invoked, and amandaBynes is reassigned to 'National Treasure'. However, amandaBynes in not a found in any scope so it is created as a global variable.. addChipotle() is invoked. At Log B, toppings has not yet been assigned a value, so it is undefined. In the if block, the global sandwich is reassigned to 'not a mediocre sandwich', so that is what it is at Log C when it is found in the global scope. At Log E, sandwich is still found in the global scope with the same value of 'not a mediocre sandwich'. At Log F, amandaBynes does not exist in the global scope, so there is a reference error.
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

    const result = [{A: 7}, {B: 7}];
    return result;

    // Annotation:
    // num is declared globally with the value 10. foo() is invoked. The global num is reassigned to 7. At Log A, num is found in the global scope where it is 7. At Log B, num is found in the global scope where it is 7.
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

    const result = [{A: 95}, {B: 90}, {C: 90}];
    return result;

    // Annotation:
    // grade is declared globally and assigned 100. losePoints() is invoked. The global grade is reassigned to 90. addPoints() is invoked. In the functional scope, grade is declared and assigned 95. In the if block, grade is declared in the block scope and assigned 97. At Log A, grade is found in addPoints()'s functional scope where its value is 95. At Log B, grade is found in the global scope with the value of 90. At Log C, grade is found in the global scope with the value of 90.
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

    const result = [{A: 5}, {B: 6}, {C: 'reference error'}, {D: 6}];
    return result;

    // Annotation:
    // num is declared globally and assigned 5. first() is invoked. At Log A, num is found in the global scope with the value of 5. The global num is reassigned to 6, and that is what it is at Log B. second() is invoked. At Log C, num is in a temporal dead zone because it is declared with the let keyword in the functional scope after the log. At Log D, num is found in the global scope with the value of 6.
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

    const result = [{E: 'Pam'}, {A: 'Pam'}, {B: 'Pam'}, {C: 'Louisa'}, {D: 'Louisa'}, {F: 'Louisa'}];
    return result;

    // Annotation:
    // instructor is declared globally and assigned to 'Pam'. At Log E, instructor is found globally, and its value is 'Pam'. changeInstructor() is invoked. At Log A, instructor is found globally, and its value is 'Pam'. At Log B, instructor is found globally, and its value is 'Pam'. rename() is invoked. The global instructor is reassigned to 'Louisa'. At Log C, instructor is found globally, and its value is 'Louisa'. At Log D, instructor is found globally, and its value is 'Louisa'. At Log F, instructor is found globally, and its value is 'Louisa'.
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

    const result = [{B: 'flipflop'}, {A: 'undefined'}, {C: 'flipflop'}];
    return result;

    // Annotation:
    // shoe is declared globally with the value 'flipflop'. At Log B, shoe is found globally, and its value is 'flipflop'. putOnShow() is invoked. At Log A, shoe is found in the function scope, and since it has not yet been assigned a value, it is undefined. At Log C, shoe is found globally, and its value is 'flipflop'.
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

    const result = [{A: 'reference error'}, {B: 'soup'}, {C: 'soup'}];
    return result;

    // Annotation:
    // orderLunch() is invoked. At Log A, lunch is in a temporal dead zone, so there is a reference error. In the second if block, lunch is reassigned to 'soup', but since lunch does not exist in any scope, lunch is created as a global variable. At Log B, lunch is found in the global scope where its value is 'soup'. At Log C, lunch is found in the global scope where its value is 'soup'.
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