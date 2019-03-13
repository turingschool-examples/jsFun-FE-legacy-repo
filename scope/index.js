const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'CardiB';
    let personC = 'Paul';

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
      {'A': 'Ben'},
      {'B': 'CardiB'},
      {'C': 'CardiB'},
      {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // First we initialize the global variable PersonA with the string 'Paul'
    // Next, we initialize the global variable PersonB with the string 'Ben'
    // Next, we initialize the global variable PersonC with the string 'Tom'
    // Next, we declare a function called 'changePerson' and then skip down to line 26
    // Next, on line 28, we invoke the 'changePerson' function which brings us back up to line 8
    // On line 8 the if conditional is true so we execute the code inside the if block
    // Next, on line 9, because the var keyword isn't used a global variable is created called Person with the string 'CardiB'
    // Next, the beautifyPerson function is invoked which takes us to line 13
    // Next, on line 14, personB is currently 'Ben'
    // On line 16 the if conditional is true because personB includes the 'B' character
    // Next, inside the if statement personB is reassigned to the value of the person variable which is the string 'CardiB'
    // Next, still inside the if statement personC is reassigned to the value of personB which is the string 'CardiB'
    // On line 19 personC is currently 'CardiB'
    // Next, on line 23, personC is reassigned to the value of personA which is the string 'Paul'
    // On line 25, the value of personB is currently 'CardiB'
    // Lastly, on line 30, the value of personC is currently 'Paul'
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

    const result = [
      {'A': 75},
      {'B': 64},
      {'C': 64},
      {'D': 30}
    ];
    return result;

    // Annotation:
    // First, the global variable number is initialized with the number 30
    // On line 62, the numberFunction is declared
    // On line 82, the numberFunction is invoked so we go back up to line 62
    // On line 63, the function scoped variable number is initialized with the number 75
    // On line 65, the if conditional evaluates to true because number is currently equal to 75
    // Inside the if conditional code block the block scoped variable number is initialized with the number 20
    // Because number is declared with let inside the if block it is scoped inside of it and will not be available in the functional scope of numberFunction
    // On line 69, number is currently 75 because of functional scope
    // On line 71, the function newNumber is declared
    // On line 77, the function newNumber is invoked so we go back up to line 71
    // Inside the newNumber function, on line 72, the functionally scoped number variable inside numberFunction is reassigned to 64
    // On line 74, number is currently 64
    // We are now done invoking newNumber so we return to where we left off on line 77
    // On line 79, number is still 64
    // We are now done invoking numberFunction so we return to where we left off on line 82
    // On line 84, number is 30. This is because we left the functional scope of numberFunction and are now in the global scope where number is 30
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

    const result = [
      { A: 'Yo'},
      { B: 'Hey'},
      { C: 'Hey'},
      { D: 'Hello'}

    ];
    return result;

    // Annotation:
    // First, the global variable greeting is initialized with the string 'Hello'
    // On line 116, the function greetingFunction is declared
    // We then skip down to line 134
    // On line 136, the function greetingFunction is invoked
    // We then go back up to line 116
    // On line 117, the functionally scoped variable greeting is initialized with the sting 'Yo'
    // On line 119, the if condition evaluates to true because greeting equals 'Yo'
    // On line 120, the block scoped variable greeting is initialized with the string 'Howdy'
    // This blocked scoped variable is not available anywhere else and will not change the functionally scoped variable declared on line 117
    // On line 123, for log A greeting is currently 'Yo'
    // On line 125, the function newPhrase is declared
    // We then skip down to line 129
    // On line 131, the function newPhrase is invoked
    // The invocation of newPhrase causes us to go back up to line 125
    // On line 126, the functionally scoped variable greeting that was declared on line 117 is reassigned to the string of 'Hey'
    // On line 128, for log B greeting is currently 'Hey'
    // We are now done invoking newPhrase so we return to where we left off on line 131
    // On line 133, for log C greeting is 'Hey'
    // We are now done invoking greetingFunction so we return to line 136
    // On line 138, for log D greeting is 'Hello' because we are in the global scope
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting // hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting // welcome
      };

      newGreeting();

      // Log C: greeting // welcome
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      { A: 'hi'},
      { B: 'welcome'},
      { C: 'welcome'},
      { D: 'howdy'}
    ];
    return result;

    // Annotation:
    // First, the global variable greeting is initialized with the string 'howdy'
    // On line 175, the function expression greetingGenerator is declared
    // We then skip down to line 193
    // On line 195, the function greetingGenerator is invoked
    // We then go back up to line 175
    // On line 176, the functionally scoped variable greeting is initialized with the sting 'hi'
    // On line 178, the if condition evaluates to true because greeting equals 'hi'
    // On line 179, the block scoped variable greeting is initialized with the string 'hello'
    // This blocked scoped variable is not available anywhere else and will not change the functionally scoped variable declared on line 176
    // On line 182, for log A greeting is currently 'hi'
    // On line 184, the function expression newGreeting is declared
    // We then skip down to line 188
    // On line 190, the function newGreeting is invoked
    // The invocation of newGreeting causes us to go back up to line 184
    // On line 185, the functionally scoped variable greeting that was declared on line 176 is reassigned to the string of 'welcome'
    // On line 187, for log B greeting is currently 'welcome'
    // We are now done invoking newGreeting so we return to line 190
    // On line 192, for log C greeting is 'welcome'
    // We are now done invoking greetingGenerator so we return to line 195
    // On line 197, for log D greeting is 'howdy' because we are in the global scope
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

        // Log A: name // 2nd Nathaniel
      }

      // Log B: name // 3rd Nathaniel
    }

    // Log C: name // 1st Brittany

    sayName();

    // Log D: name // 4th Brittany

    const result = [
      { C: 'Brittany'},
      { A: 'Nathaniel'},
      { B: 'Nathaniel'},
      { D: 'Brittany'}
    ];
    return result;

    // Annotation:
    // On line 231, the global variable name is initialized with the string 'Brittany'
    // On line 233, the function sayName is declared
    // We then skip down to line 247
    // On line 249, log C name is currently 'Brittany'
    // On line 251, the function sayName is invoked
    // The invocation of sayName causes us to go back up to line 233
    // On line 234, the functionally scoped variable name is initialized with the sting 'Pam'
    // On line 236, the if condition evaluates to true because name equals 'Pam'
    // On line 237, the variable name is reassigned to the string 'Nathaniel'
    // On line 239, the if condition evaluates to true because name.length is greater than 0
    // On line 240, the block scoped variable name is initialized with the string 'Brittany'
    // but since this variable is blocked scoped it will not be accessible outside of the if block
    // On line 243, log A name is currently 'Nathaniel'
    // On line 246, log B name is still 'Nathaniel'
    // We are now done invoking sayName so we return to line 251
    // On line 253, log D name is 'Brittany' because we have left the functional scope of sayName and are back in global scope
  },

  exerciseF() {
    var dog = 'Spot'; // Biscuit

    function petDog() {
      // Log A: dog // 1st Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog // 2nd Spot

        dog = 'Biscuit';

        // Log C: dog // 3rd Biscuit

      }

      rollOver();

      // Log D: dog // 4th Biscuit
    }

    petDog();

    // Log E: dog // 5th Biscuit

    const result = [
      { A: 'Spot'},
      { B: 'Spot'},
      { C: 'Biscuit'},
      { D: 'Biscuit'},
      { E: 'Biscuit'}
    ];
    return result;

    // Annotation:
    // On line 283, the global variable dog is initialized with the string 'Spot'
    // On line 285, the function petDog is declared
    // We then skip down to line 304
    // On line 306, the function petDog is invoked
    // The invocation of petDog causes us to go back up to line 285
    // On line 286, log A dog is currently 'Spot'
    // On line 288, the if condition evaluates to true because dog equals 'Spot'
    // On line 289, the block scoped variable dog is initialized with the string 'Fluffy'
    // but since this variable is blocked scoped it will not be accessible outside of the if block
    // On line 292, the function rollOver is declared
    // We then skip down to line 299
    // On line 301, the function rollOver is invoked
    // The invocation of rollOver causes us to go back up to line 292
    // On line 293, log B dog is 'Spot'
    // On line 295, the global variable dog is reassigned to 'Biscuit'
    // On line 297, log C dog is 'Biscuit'
    // We are now done invoking rollOver so we return to line 301
    // On line 303, log D dog is 'Biscuit'
    // We are now done invoking petDog so we return to line 306
    // On line 308, log E dog is 'Biscuit'
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit // reference error
          const fruit = 'strawberry';
        }

        // Log B: fruit // mango
      }

      // Log C: fruit // mango
    }

    eatFruit();

    // Log D: fruit // apple

    const result = [
      { A: 'reference error'},
      { B: 'mango'},
      { C: 'mango'},
      { D: 'apple'}
    ];
    return result;

    // Annotation:
    // On line 343, the global variable fruit is initialized with the string 'apple'
    // On line 345, the function eatFruit is declared
    // We then skip down to line 359
    // On line 361, the function eatFruit is invoked
    // The invocation of eatFruit causes us to go back up to line 345
    // On line 347, the if condition evaluates to true because fruit does not equal 'kiwi' (fruit is currently undefined because the var fruit on line 348 is hoisted)
    // On line 348, the function scoped variable fruit is initialized with the string 'mango'
    // On line 350, the if condition evaluates to true because fruit is 'mango' which is a truthy value is Javascript
    // On line 351, log A fruit is a 'reference error'
    // The reference error is caused because on line 352 the block scoped variable fruit is declared with const
    // Since it was declared with const Javascript knows that there is a blocked scoped variable named fruit so it will not go outside of the block and grab the functionally scoped variable fruit from line 348
    // But since log A, on line 351, is above where const fruit is actually initialized, on line 352, this log resides in the temporal dead zone and we will get a reference error 
    // On line 355, log B fruit is 'mango'
    // On line 358, log C fruit is 'mango' because the var on 348 is functionally scoped
    // We are now done invoking eatFruit so we return to line 361
    // On line 363, log D fruit is 'apple' because we are back in the global scope
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

    const result = [
      { A: 4},
      { D: 9},
      { E: 10},
      { B: 9},
      { C: 4}
    ];
    return result;

    // Annotation:
    // On line 393, the global variable num is initialized with the number 6
    // On line 395, the function expression fn1 is declared
    // We then skip down to line 413
    // On line 415, the function expression fn2 is declared
    // We then skip down to line 421
    // On line 423, the function fn1 is invoked
    // The invocation of fn1 causes us to go back up to line 395
    // On line 396, the functionally scoped variable num is initialized with the number 4
    // On line 398, log A num is 4
    // On line 400, the if condition evaluates to true because num is 4 which is less than 5
    // On line 401, the block scoped variable num is initialized with the number 9
    // On line 403, the function fn2 is invoked with num as an argument
    // The invocation of fn2 causes us to go down to line 415
    // On line 416, log D num is 9
    // On line 418, the functionally scoped argument variable num is reassigned to itself plus 1 which in this case is 10
    // On line 420, log E num is 10
    // We are now done invoking fn2 so we return to line 403
    // On line 405, the block scoped variable newNum is initialized with the variable num from line 401
    // Because the num in fn2 is locally scoped to that function it did not change the num variable in fn1's if block (Also the num in fn1's if block can't be changed because it is a const)
    // Since num wasn't changed newNum is 9
    // On line 407, log B newNum is 9
    // On line 410, newNum is reassigned to the value of 4 from the functionally scoped num variable from line 396
    // It is important to note that the newNum variable is declared as a global variable
    // This happens because newNum has not been defined in either fn1's function scope or the global scope
    // So Javascript creates a new global variable called newNum
    // A better option would be to put var or let in front of newNum on line 410 to prevent this variable from polluting the global namespace
    // On line 412, log C newNum is 4
    // We are now done invoking fn1 so we return to line 423
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