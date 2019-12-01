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
        // Log A: personB = 'Ben'

        if (personB.includes('B')) {
          personB = person; //CardiB
          personC = personB; //CardiB
          // Log B: personC //CardiB
        }
      }

      personC = personA; //Paul

      // Log C: personB //CardiB
    }

    changePerson();

    // Log D: personC

    const result = [
      {A: 'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'}
    ];
    return result;


    // Annotation:
    //First we declare 3 variables person A, B, & C; and assign them the strings
    //of 'Paul', 'Ben', and 'Tom' respectively.
    //When we call the function changePerson () on 28 we move to line 7,
    //change person has a conditional if personA strictly equals 'Paul', which it
    //does, so we go into our conditional and declare the variable person to
    //be assigned to the string 'CardiB'. Then we call a second function beautifyPerson
    //and move to line 13. The second function has a conditional which states
    //if personB includes the string 'B' which it does, so we move into our conditional
    //and reassign personB to the value of person or the string of 'CardiB' and
    //we reassign the value of personC to equal the value of personB or the string of
    //'CardiB'. Lastly the variable of personC is reassigned to the value of personA
    //which is still the string of 'Paul'.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
        //28 only within this function - let
      }

      // Log A: number = 75

      function newNumber() {
        number = 64;

        // Log B: number = 64
      }

      newNumber();

      // Log C: number = 64
    }

    numberFunction();

    // Log D: number = 30
    //outside the funcitons again - up to 30

    const result = [
      {A: 75},
      {B: 64},
      {C: 64},
      {D: 30}
    ];
    return result;

    // Annotation:
    //The first time we log our number at line 67 the value of number is
    //75 because the keyword let assigns the number to a value of 75 on line
    //60, and when we log we are still within that first inner function numberFunciton()
    //but not within the third function newNumber so let is scoped to the function were in.
    //When we log B at line 72 we are within the third function newNumber, where the value of
    //number is assigned to 64. When we log C at line 77 we've run the funciton which reassigns
    //our variable number to the integer of 64. The last log at line 82 is only within the main largest
    //function and the value of number is 30. Let is not global and is declared within the function.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting = 'yo'

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting = 'hey'
      }

      newPhrase();

      // Log C: greeting = 'hey'
    }

    greetingFunction();

    // Log D: greeting = 'hello'

    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'}
    ];
    return result;

    // Annotation:
    //Log A is after we declare and run the function greetingFunction() which declares a variable and
    //assigns it to the string of 'yo', and declares another funciton with a local let key and value.
    //Log B is within the function newPhrase() which re assigns the value of greeting to 'Hey'.
    //Log C is after we call the function newPhrase() and because we reassigned the value and the variable is global greeting is still 'Hey'.
    //Log D is at the end of the exercise outside of all the functions but the big one, so we look up to our variable decleration
    //and see that greeting is assigned the value of 'Hello' at line 105.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting = 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting = 'welcome'
      };

      newGreeting();

      // Log C: greeting = 'welcome'
    };

    greetingGenerator();

    // Log D: greeting = 'howdy'

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'}
    ];
    return result;

    // Annotation:
    //Log A is after our conditional that locally declares greeting to equal 'welcome', so when we call
    //log A greeting the interprter looks up to the next global decleration where greeting is assigned to 'hi'.
    //Log B is within the function newGreeting where greeting is reassigned a value of 'welcome'.
    //Log c is after we invoke the function newGreeting, so the global variable is given a new value of 'welcome' and can be referenced.
    //Log D is only inside the main exercise function so the interprter looks to the closest global variable where greeting is declared to 'howdy'.
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

        // Log A: name = nathaniel
      }

      // Log B: name = Nathaniel
    }

    // Log C: name = Brittany

    sayName();

    // Log D: name = Brittany

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];
    return result;

    // Annotation:
    //Log A we go into the function sayname() where name is declared a value of 'Pam', and then gets into our conditional and reassigns the value to 'Nathaniel'.
    //Log B we hop out after our conditional that reassigns the value, and because let allows us to reassign, the value of name is still 'Nathaniel'.
    //Log C is outside the function sayName where we declare our person to have the value of 'Pam', so the interpreter looks to the next global variable,
    //and on line 192 we assign the value of 'Brittany' to name.
    //Log D is outside the sayName function, so even though we change the value of name in the sayName funciton, its a local change, and once we're out of it
    //the value of name becomes 'Brittany'.
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
