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
        // Log A: personB - Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC - CardiB
        }
      }

      personC = personA;

      // Log C: personB - CardiB
    }

    changePerson();

    // Log D: personC - Paul

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];

    return result;

    // Annotation:
    // 3 global variables are declared. The function changePerson() is invoked. The conditional checks if the variable personA is strictly equal to the string 'Paul'.
    // Because personA was globally declared as the string 'Paul', the conditional block will execute. A new variable is declared with the value 'CardiB', 
    // which is accessible globally. The beautifyPerson() function is then invoked, which logs personB and executes the conditional that checks if the personB 
    // variable includes the character 'B' in its value. Because this is true, the conditional block executes and the variable personB is set to the value of the variable 
    // person, which is now 'CardiB'. PersonC is logged and the conditional is exited. Finally, personC is reassigned to the value of personA , which is also CardiB.
    // PersonB is logged, the function exits, and personC is logged, ???
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number - 75

      function newNumber() {
        number = 64;
        // Log B: number - 64
      }

      newNumber();

      // Log C: number - 64
    }

    numberFunction();

    // Log D: number - 30

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];

    return result;

    // Annotation:
    // Number is defined as a global variable with a value of 30. The function numberFunction() is invoked.
    // A new variable number is assigned to 75, which is function scoped. The if conditional is then exectuted 
    // because the value of number is strictly equal to 75. Another new variable called number is created and set to 28. Number is logged and is still 75 because
    // the newly created number variable within the conditional was block scoped and is inaccessible outside of that conditional. The function newNumber() 
    // is invoked, which reassigns the global variable value to 64 and then logs it. Number is logged outside of newNumber, which is 64 due to the function
    // scoped value being reassigned in that function. Finally, number is logged again outside of the function, which references the global variable number
    // which remains unchanged at the value of 30. 

  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting - Yo

      function newPhrase() {
        greeting = 'Hey';
        // Log B: greeting - Hey
      }

      newPhrase();
      // Log C: greeting - Hey
    }

    greetingFunction();

    // Log D: greeting - Hello

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];

    return result;

    // Annotation:
    // A global variable, greeting, is set to 'Hello'. The function greetingFunction() is invoked. Within the function, a new local variable is declared 
    // with the label greeting and the value 'Yo'. The conditional checks this new locally scoped variable to see if its value is strictly equal to 'Yo' which is 
    // true, executing the block and creating a new, third greeting variable with the value 'Howdy'. The variable greeting is logged outside of the
    // conditional inside the greetingFunction() function, which is still functionally scoped to 'Yo'. The function newPhrase() is invoked, which will look up the
    // scope chain and reassigns the function scoped greeting variable on line 100 to 'Hey'. Outside of the function newPhrase, greeting is logged again,
    // and is still set to 'Hey' since the that variable was just previously reassigned in the scope of the function greetingFunction. Outside of greetingFunction,
    // greeting is logged, but it unchanged from the value 'Hello' since this global variable was never reassigned. 
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi'; // welcome

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting - hi 

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting - welcome
      };

      newGreeting();

      // Log C: greeting - welcome
    };

    greetingGenerator();

    // Log D: greeting - howdy

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];

    return result;

    // Annotation:
    // A global variable is declared with the value 'Howdy'. The function greetingGenerator() is invoked. A new function scoped variable inside of 
    // greetingGenerator() with the label greeting and the value 'hi' is declared. The conditional checks to see if this variable's value is strictly equal
    // to 'hi', which is true, and the conditional block executes. A new block scoped variable named greeting is declared to the string 'hello'. 
    // However, this variable is only block scoped, so the log outside of the conditional will still log the function scoped variable with the value of 'hi'.  
    // The function newGreeting() is invoked. The variable greeting is reassigned to 'welcome', by looking up the scope chain to the function
    // scoped variable on line 144. Outside of the newGreeting() function, greeting is logged, which is the same variable that was previously 
    // assigned to 'welcome' on line 144. The function greetingGenerator() is exited and the global variable greeting with the value 'howdy'
    // is logged, which was never reassigned within that global scope. 
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

        // Log A: name - Nathaniel
      }

      // Log B: name - Nathaniel
    }

    // Log C: name - Brittany

    sayName();

    // Log D: name - Brittany

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];

    return result;

    // Annotation:
   // The global variable with the label of name is assigned to the value 'Brittany'. This globally scoped variable is then logged.
   // The function sayName() is invoked, and creates a new function scoped variable with the value 'Pam'. The conditional goes up the scope chain
   // to check if this new variable on line 191 has a value strictly equal to 'Pam'. Since this is true, the value of the variable on line 191 is reassigned to 
   // 'Nathaniel'. The nested conditional is executed since the string 'Nathaniel' has a character length greater than 0. A new variable is created with 
   // the label name and the value 'Brittany' which is block scoped. Within the first conditional statement, name is logged, which is now Nathaniel. This 
   // is because it was variable that was scoped to the function and reassigned from 'Pam' on line 191. This still holds true outside of the conditional 
   // when logged again still inside of that function on line 203. Finally, the global variable name is logged, which is still 'Brittany', on line 188 
   // (not referencing line 197 since that is block scoped and nested).
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog - Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog - Spot

        dog = 'Biscuit';

        // Log C: dog - Biscuit

      }

      rollOver();

      // Log D: dog - Biscuit
    }

    petDog();

    // Log E: dog - Biscuit

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];

    return result;

    // Annotation:
    // The global variable dog is assigned the value of 'Spot'. The function petDog() is invoked. The variable dog is logged, which will look up
    // the scope chain and find the global variable declared on line 233. A conditional checks whether the value of that same global variable has
    // a value of 'Spot', and since it does, the code executes. A new block scoped variable is declared with the value 'Fluffy'. The function
    // rollOver() is invoked. The variable dog is logged, and the interpreter looks up the scope chain to the global variable dog on line 233. 
    // The variable dog is then reassigned to the string 'Biscuit', and is logged. The function exits and dog is logged again, which looks up the scope
    // chain to the global variable on line 233. Finally, dog is logged again at the global level, which still has a value of 'Biscuit'. 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit - reference error
          const fruit = 'strawberry';
        }

        // Log B: fruit - mango
      }

      // Log C: fruit - mango
    }

    eatFruit();

    // Log D: fruit - apple

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' },
    ];

    return result;

    // Annotation:
    // A global variable fruit is declared with the value 'apple'. The function eatFruit() is invoked. A conditional checks whether the 
    // variable fruit is not equal to the value 'kiwi'. Since this is true, the conditional executes. A new block-scoped variable is declared with 
    // the value 'mango'. A conditional is executed within this conditional. It executes after checking if fruit exists, which it finds in the block
    // scoped conditional it is in nested within. A log is performed, but it displays a reference error. This is because the new const declaration of 
    // fruit below the log has resulted in a temporal dead zone, and the variable below it is unable to be accessed before it is declared. A new
    // variable is created with the label fruit and the value 'strawberry'. The nested conditional exits and fruit is logged, so the interpreter travels 
    // up the scope chain to find the block scoped variable fruit on line 280 which is set to 'mango'. The conditional exits and fruit is logged, which 
    // is again referencing the block scoped 'mango' variable. The function exits and fruit is logged again, which now references the global 'apple' 
    // variable.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num - 4 

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum - 9 
      }

      newNum = num;

      // Log C: newNum - 4
    };

    const fn2 = function(num){
      // Log D: num - 9

      num = num + 1;

      // Log E: num - 10
    };

    fn1();

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10},
      { 'B': 9 },
      { 'C': 4 }
    ];

    return result;

    // Annotation:
    // A global variable num is decared with the value 6. The function fn1() is invoked. 
    //
    //
    //
    //
    //

//     A function scoped variable num is declared with the value 4. A log confirms the 
// value 4 for the variable num. A conditional checks whether the variable num is 
// less than 5, which is true since it references the function scoped variable declared 
// up the scope chain. A new variable num is assigned to 9 and fn2() is invoked with 
// the parameter num. num is logged, which travels up the scope chain and finds
// the previously declared num variable in the conditional, which has the value 9. 
// The variable's value is added 1 to, and a console log displays the new value 10. 
// The function exits and, within the condition, a new variable newNum is set to 
// the value of num, which is still 9. The conditional exits and newNum is logged. 
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger - 75
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger - 0 
      }

      // Log C: hunger - 75
    }

    eatSnack();

    hunger += 5; 
    // Log D: hunger - 80

    eatSnack();
    // Log E: hunger - 

    const result = [
      { 'A': 75 },
      { 'B': 9 },
      { 'C': 10},
      { 'D': 9 },
      { 'E': 4 }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich - ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings - undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich - not a mediocre sandwich
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
    // Log E: sandwich - not a mediocre sandwich
    // Log F: amandaBynes - National Treasure

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
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num - 7
    }

    foo();

    // Log B: num - 7

    const result = [
      { 'A': 7 },
      { 'B': 7 }
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

        // Log A: 95
      }

      addPoints();

      // Log B: 90
    }

    losePoints();

    // Log C: 90

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
      { 'A': ''  },
      { 'B':  '' },
      { 'C': 'reference error' }
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

      // Log D: instructor - Louisa

    }

    // Log E: instructor - Pam

    changeInstructor();

    // Log F: instructor - Louisa

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
      // Log A: shoe - flipflop
      var shoe = 'boot';
    }

    // Log B: shoe - flipflop
    putOnShoe();
    // Log C: shoe

    const result = [
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
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