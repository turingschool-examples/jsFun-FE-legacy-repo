const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        console.log('A: 'personB);
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
          console.log('B: 'personC)
        }
      }

      personC = personA;
      console.log('C: 'personB);
      // Log C: personB
    }

    changePerson();

    // Log D: personC
    console.log('D: 'personC)

    const result = [
    {'A': 'Ben'},
    {'B': 'CardiB'},
    {'C': 'CardiB'},
    {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // On line 3-5 we declare 3 variables and assign them names are strings. we declare a funciton
    //changePerson on line 7, then invoke the function on line 30. When changePerson is run, we run
    //enter the if statement and since Person A is paul, a global variable person is created and assigned
    //'CardiB'. Then beautifyPerson function is run, which logs  'A': 'Ben', then moves to the if statement.
    //In lines 18 and 19 personB and personC and are reassigned to person, which is equal to 'CardiB'.
    //Then we log 'B': 'CardiB' line 21.  Then personC is reassigned to equal personA, which is equal to 'Paul'.
    //

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
     {‘A’: 75},
     {‘B’: 64},
     {‘C’: 64},
     {‘D’: 30}
   ];
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

    const result = [
     {‘A’: ‘Yo’},
     {‘B’: ‘Hey’},
     {‘C’: ‘Hey’},
     {‘D’: ‘Hello’}
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

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = [
     {‘A’: ‘hi’},
     {‘B’: ‘welcome’},
     {‘C’: ‘welcome’},
     {‘D’: ‘howdy’}
   ];;
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
        console.log('A: ' + dog);
      }

      // Log B: name
      console.log('B: ' + name);
    }

    // Log C: name
    console.log('C: ' + name);

    sayName();

    // Log D: name
    console.log('D: ' + name);

    const result = [
     {‘C’: ‘Brittany’},
     {‘A’: ‘Nathaniel’},
     {‘B’: ‘Nathaniel’},
     {‘D’: ‘Brittany’}
   ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog
      console.log('A: ' + dog);

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog
        console.log('B: ' + dog);

        dog = 'Biscuit';

        // Log C: dog
        console.log('C: ' + dog);

      }

      rollOver();

      console.log('D: ' + dog);
      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Line 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          console.log('A: ' + fruit);
          const fruit = 'strawberry';
        }

        // Log B: fruit
        console.log('B: ' + fruit);
      }

      // Log C: fruit
      console.log('C: ' + fruit);
    }

    eatFruit()

    // Log D: fruit
    console.log('D: ' + fruit);

    const result = [
    {'A': 'undefined'},
    {'B': 'mango'},
    {'C': 'mango'},
    {'D': 'apple'}];
    return result;

    // Annotation:
    // Line 244 is declaring a global variable fruit and assigning it to the string 'apple'. Line 246 is declaring a function eatFruit, which is invoked on line 262. When this function is run, it evaluates the conditional fruit does not equal kiwi which is true, so variable is declared fruit with block scope which is equal to 'mango'. Another if statement evaluates to true at line 251, this log actually results in a reference area since there is a temporal dead zone since const is not hoisted. ?? Line 253 declares a const fruit and assigns it to strawberry. On line 256, fruit will log as mango since it will refer back to line 49 where var is declared. Line 259 also logs fruit as mango since it is still inside the function eatFruit, and var is not block scoped so it is hoisted to the top of the function. On line 264 fruit is logged as apple, since we are now in global scope.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = [
     {‘A’: 4},
     {‘D’: 9},
     {‘E’: 10},
     {‘B’: 9},
     {‘C’: 4}
   ];
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
    };

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
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

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
      console.log('A: ' shoe);
      var shoe = 'boot';
    }

    console.log('B: 'shoe);
    putOnShoe();
    console.log('C: 'shoe);

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
    // On line 469 declare a global variable names shoe and assign it equal to flipflop. Then we 
    //declare a global function named putOnShoe, but we skip down to line 473 because it hasnt 
    //been invoked yet. On line 469 we log the value of shoe, which is 'flipflop' at this point 
    //in time. then we go ahead and invoke our putOnShoe function, and when we try to log shoe
    //within our function, we get undefined because oru shoe delcartion on line 473
    //is hoisted to the top of that function scope. Once weve finished executing putOnShoe
    //we go back down to line 478 and log shoe again which will give us flipflop.
  }
}

module.exports = scope;