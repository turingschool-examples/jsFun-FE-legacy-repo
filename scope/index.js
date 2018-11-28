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
        // Log A: Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: CardiB
        }
      }

      personC = personA;

      // Log C: CardiB
    }

    changePerson();

    // Log D: Paul

    const result = [{A: 'Ben'}, {B: 'CardiB'}, {C: 'CardiB'},{D: 'Paul'},
    ];
    return result;

    // Annotation: 
    // In the creation phase, persons A, B, and C are declared globally on lines 3-5. Then the change Person function is stored in memory. Then execution phase starts. Person A is assigned the value of 'Paul. Person B is assigned the value of 'Ben'. Person C is assigned the value of 'Tom'. The interpreter does not execute the function decleration on lines 7-26. It then exectues changePerson() on line 28. This creates a new local execution context and a new creation phase begins. The function beautifyPerson is saved in memory. Then the interpreter goes to execution phase starting on line 8. The conditional is evaluated. THe interpreter looks for personA in changePerson()'s functional scope and does not find it, so it looks in the global scope. It finds that person B is strictly equal to 'Paul', so the execution goes inside the if block. On line 9, the interpreter attempts to reassign person and looks for it in the functional scope. Person is not there, so it looks for person in the global scope. person is still not there, so person is then declared as a new global variable assigned 'CardiB'. Then beautifyPerson is executed, and a new local execution context is created. Nothing happens in the creation phase. In the execution phase, the if looks for personB. Person B isn't found until; the global scope where it has the value of 'Ben'. 'Ben' includes 'B', so the conditional evaluates to true and execution goes into the if block. On line 17, the interpeter looks for personB in the block scope, beautifyPerson functional scope, changePerson functional scope, and lastly in the global scope where it is finally found. It assigns the global variable person B to the value of person which is also found in the global scope  with the value 'CardiB'. Then person C is found in the global scope as well and is assigned the value of person B which is in the global scope. So person C has the value of 'CardiB'. Then that local execution context is done, and removed from the call stack. And the changePerson local execution context is done and removed from the call stack. 
    // 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: 75

      function newNumber() {
        number = 64;

        // Log B: 64
      }

      newNumber();

      // Log C: 64
    }

    numberFunction();

    // Log D: 30

    const result = [{A: 75}, {B: 64}, {C: 64},{D: 30},
    ];
    return result;

    // Annotation:
    // number is declared and assigned to 30 globally. Inside numberFunction, number is declared and assigned to 75 in the functional scope. Inside the if block, number is declared and assigned to 28 in the block scope. At Log A, number is found in the functional scope with the value of 75. Inside newNumber, number (the variable inside numberFunction’s scope) is reassigned to 64 so at Log B, number is 64. At log C, number is looked for in numberFunction’s scope and is found to be 64. At Log D, number is looked for in the global scope and is found to be 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: Hey
      }

      newPhrase();

      // Log C: Hey
    }

    greetingFunction();

    // Log D: Hello

    const result = [{A: 'Yo'}, {B:'Hey'}, {C:'Hey'},{D:'Hello'}];
    return result;

    // Annotation:
    // In the global scope, greeting is declared and assigned to ‘Hello’. When greetingFunction is called, a new variable greeting is declared and assigned to ‘Yo’ in the functional scope. Inside the if block, a new let greeting is declared and assigned to ‘Howdy’ in the block scope. At Log A, greeting is found in the functional scope where it has the value of ‘Yo’. When newPhrase is called, greeting is reassigned. The greeting which is reassigned is the one in greetingFunction’s functional scope. It is reassigned to ‘Hey’,so at Log B, greeting is ‘Hey’. At Log C, greeting is found in the functional scope of greetingFunction where its value is ‘Hey’. At Log D, greeting is found in the global scope where its value is ‘Hello’.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: welcome
      };

      newGreeting();

      // Log C: welcome
    };

    greetingGenerator();

    // Log D: howdy

    const result = [{A: 'hi'}, {B:'welcome'}, {C:'welcome'},{D:'howdy'}];
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