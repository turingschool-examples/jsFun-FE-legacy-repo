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
        // console.log('A: 'personB)
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
          // console.log('B: 'personC)
        }
      }

      personC = personA;
      // console.log('C: 'personB);
      // Log C: personB
    }

    changePerson();

    // Log D: personC
    // console.log('D: 'personC)

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
     {'A': 75},
     {'B': 64},
     {'C': 64},
     {'D': 30}
   ];
    return result;

    // Annotation:
    // First we are declaring a global variable number ans assigning it equal to number 30. Then we are creating a function numberFunction()  and creating a function scoped variable and assignging it to number 75. We are running a conditional checking if number is equal to 75, then creating a block variable number and assigning it to 28. Then we are logging number which is equal to 75 since we are inside the function but not the block. Then we are declaring a function newNumber() on line 66, once invoked it is  reassigning number to equal 64. Then when we log number it is equal to 64. Logging number outside the function logs 64. Last we are logging number which is equal to 30 since it is globally scoped. 
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
     {'A': 'Yo'},
     {'B': 'Hey'},
     {'C': 'Hey'},
     {'D': 'Hello'}
   ];
    return result;

    // Annotation:
    //first we are declaring a variable greeting and assigning it to a string Hello, then declaring and running the function greetingFunction(). This declares a function scoped variable and assigning it to 'Yo'. The conditional on line 99 checks if greeting is equal to 'Yo', then creates a block variabel and assignings it to Howdy. When we log greeting after it is equal to 'Yo' since we are outside o the block but inside the function. Then we create function newPhrase() and reassign greeting to equal string 'Hey'. Then we log greeting which is equal to 'Hey'. Then we log greeting which is still equal to hey since we reassigned the variable. Last we log greeting once again, qhich is equal to 'Hello' since it is globally scoped.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      // console.log('A: ' + greeting);

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        // console.log('B: ' + greeting);
      }

      newGreeting();

      // Log C: greeting
      // console.log('C: ' + greeting);
    }

    greetingGenerator();

    // Log D: greeting
    // console.log('D: ' + greeting);

    const result = [
     {'A': 'hi'},
     {'B': 'welcome'},
     {'C': 'welcome'},
     {'D': 'howdy'}
   ];;
    return result;

    // Annotation:
    // On line 133 we are creating a variable greeting and assigning it to 'Hi'. function greetGenerator is run, and we declare a function scoped variable greeting = 'hi'. The conditional on line 139 evaluates to true, and a new block scoped variable greeting is assigned to 'hello'. When we log greeting on line 143, it is equal to 'hi'. When newGreeting() is invoked, greeting is reassigned to 'welcome' and then we log greeting as 'welcome'. Outside of this function we log greeting again, which is equal to 'welcome' since it was reassigned. Last we log greeting which is equal to 'howdy' since it as a globally scoped variable.
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
        // console.log('A: ' + dog);
      }

      // Log B: name
      // console.log('B: ' + name);
    }

    // Log C: name
    // console.log('C: ' + name);

    sayName();

    // Log D: name
    // console.log('D: ' + name);

    const result = [
     {'C': 'Brittany'},
     {'A': 'Nathaniel'},
     {'B': 'Nathaniel'},
     {'D': 'Brittany'}
   ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog
      // console.log('A: ' + dog);

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog
        // console.log('B: ' + dog);

        dog = 'Biscuit';

        // Log C: dog
        // console.log('C: ' + dog);

      }

      rollOver();

      // console.log('D: ' + dog);
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
          // console.log('A: ' + fruit);
          const fruit = 'strawberry';
        }

        // Log B: fruit
        // console.log('B: ' + fruit);
      }

      // Log C: fruit
      // console.log('C: ' + fruit);
    }

    eatFruit()

    // Log D: fruit
    // console.log('D: ' + fruit);

    const result = [
    {'A': 'reference error'},
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
      // console.log('A:' num);

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
        // console.log('B:' num);
      }

      newNum = num;

      // Log C: newNum
      // console.log('C:' num);
    }

    const fn2 = function(num){
      // Log D: num
      // console.log('D:' num);

      num = num + 1;

      // Log E: num
      // console.log('E:' num);
    }

    fn1();

    const result = [
     {'A': 4},
     {'D': 9},
     {'E': 10},
     {'B': 9},
     {'C': 4}
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
      // console.log('A: ' + hunger);
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
        // console.log('B: ' + hunger);
      }

      // Log C: hunger
      // console.log('C: ' + hunger);
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger
    // console.log('D: ' + hunger);

    eatSnack();
    // Log E: hunger
    // console.log('E: ' + hunger);

    const result = [
    {'A': 75},
    {'B': 0},
    {'C': 75},
    {'D': 80},
    {'A': 55},
    {'B': 0},
    {'C': 55},
    {'E': 55}

    ];
    return result;

    // Annotation:
    // On line 341 we are declaring a global variable named hunger and assigning it to number 100. Then we are creating a function eatSnack() which is invoked on 359. This function reassigns hunger to equal hunger - 25, which is 75. This console log of A is equal to 75. Then we invoke the function gorgeYourself which creates a constant hunger equal to number 0. When we log hunger on this line, B logs as 0. On line 356 console.log() of C logs 75. Then we reassign hunger to hunger + 5, and logging hunger results in 80. We then run the function eatSnack() again, which increments the global variable hunger down by 25 again, so logging hunger for A results in 55. running gorge yourself declares const 0, so hunger logs as B: 0. Hunger on line 356 for C: will log as 55 again. On line 367, we log E: 55 since it is referencing the global variable that has been changed.
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
        // console.log('A: ' + num);
    }

    foo();

    // Log B: num
    // console.log('B: ' + num);

    const result = [
    {'A': 7},
    {'B': 7}
    ];
    return result;

    // Annotation:
    // Line 433 we declare a global variable named num and assign it to number 10, then we invoke the foo() function. The conditional evaluates as true, so global variable num is reassigned to equal number 7. Therefore, both console.logs will result in 7 since they are both referencing the global variable. 
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
      // console.log('A: ' + num);
      num = 6;
      // Log B: num
      // console.log('B: ' + num);
    }

    function second() {
      // Log C: num
      // console.log('C: ' + num);
      let num = 7;
    }

    first();
    second();

    // Log D: num
    // console.log('D: ' + num);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor
      // console.log('A: ' + instructor);

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor
      // console.log('B: ' + instructor);
      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
        // console.log('C: ' + instructor);
      }

      rename();
      // console.log('D: ' + instructor);
      // Log D: instructor

    }

    // Log E: instructor
    // console.log('E: ' + instructor);

    changeInstructor();

    // Log F: instructor
    // console.log('F: ' + instructor);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // console.log('A: ' shoe);
      var shoe = 'boot';
    }

    // console.log('B: 'shoe);
    putOnShoe();
    // console.log('C: 'shoe);

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 6a0a839e129d359cc5dcdf0ca43a28a018507528
    // On line 469 declare a global variable names shoe and assign it equal to flipflop. Then we 
    //declare a global function named putOnShoe, but we skip down to line 473 because it hasnt 
    //been invoked yet. On line 469 we log the value of shoe, which is 'flipflop' at this point 
    //in time. then we go ahead and invoke our putOnShoe function, and when we try to log shoe
    //within our function, we get undefined because oru shoe delcartion on line 473
    //is hoisted to the top of that function scope. Once weve finished executing putOnShoe
    //we go back down to line 478 and log shoe again which will give us flipflop.
<<<<<<< HEAD
=======
=======
>>>>>>> 6a0a839e129d359cc5dcdf0ca43a28a018507528
    // Write your annotation here as a comment
  },

  exerciseP() {
    function orderLunch() {
      if (typeof lunch === 'undefined') {
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
<<<<<<< HEAD
>>>>>>> 568db0ab5b43ec3388877948b5afc1039e9a1cc4
=======
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone']

    let myCrazyKidAntics = kid => {
    // Log A: kid
    wildKids.push(kid);
    // Log B: wildKids
  
    let drawOnTheWall = () => {
      let myKid = 'Mandy';
      // Log C: myKid
      return `That wild kid ${myKid}, drew on the wall!`;
    }

    drawOnTheWall();

    let myAmazingKid = () => {
      let myKid = wildKids.shift();
      // Log D: myKid
      return `That kid ${myKid}, is AMAZING!`;
    }

    myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`
    }

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
      }

      innerFunc();
      myName += 'Daniels';
    }

    parentFunc();
    // Log D: myName
<<<<<<< HEAD
>>>>>>> b1f9d6644068d5f07dba923d0238febec599abe7
=======
>>>>>>> 6a0a839e129d359cc5dcdf0ca43a28a018507528
  }
}

module.exports = scope;