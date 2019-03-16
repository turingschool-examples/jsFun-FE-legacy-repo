/*eslint-disable*/

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
      {A: 'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // When we invoke changePerson, we are "reassigning" person to CardiB within the if block (if personA is Paul). However, since there is no person variable declared within the if block, the interpretor looks outside the block into the parent function but still does not find a person variable so then it looks outside the function into the global scope but still does not find a person variable so it then creates the person variable within the global scope. We then invoke beautifyPerson within changePerson. We log personB and get Ben because that is the value assigned to personB in the global scope. We then move into an if block and reassign personB to person, which we earlier defined as CardiB. We then reassign personC to personB which had just become CardiB. So now we log personC and get CardiB. We then move out of the block and out of it's parent function and back into changePerson. We are reassigning personC as personA. We are then logging personB and getting CardiB because of the reassignment that happened in the if block. We then move out of the function and log personC and get Paul since we are back in the global scope and only have access to global variables.
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
      {A: 75},
      {B: 64},
      {C: 64},
      {D: 30}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Log A is 75 because we are logging within numberFunction() and we declared let number at the top of the function as 75. Log B is 64 because we are logging within newNumber() which is nested within numberFunction() and has reassigned number to 64. Log C is 64 becuase we are still in the functional scope of the let that we have reassigned. Log D is 30 because we are back to the global scope and only have access to the global variables.
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
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Log A is Yo becuase we are defining a new variable named greeting within the greetingFunction with a value of Yo. Log B is Hey becuase we are logging within the function that reassigned the value of greeting. Log C is Hey because we are still within the scope of the greeting var that we reassigned. Log D is Hello because we are logging within the global scope and only have access to the global greeting variable.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = () => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Log A is hi. Since we do not have access to the let greeting within the if block, we have to look within the functional scope where we find a let greeting with a value of hi. Log B is welcome because we are logging within a function that reassigns the parent function's let greeting to welcome. Log C is still welcome. We are no longer in the nested function that reassigned let greeting but we are in its parent function where the reassigned greeting is declared. Log D is howdy because we are back into the global scope and only have access to global let greeting.
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

        // Log A: name 2nd
      }

      // Log B: name 3rd
    }

    // Log C: name 1st

    sayName();

    // Log D: name 4th

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We first execute Log C because it is being invoked before we invoke our sayName function. Log C is Brittany because we are logging within the global scope and only have access to the global let name. We then invoke sayName() and have a new let name of Pam. We reassign let name to Nathaniel within the nested if block. Which then makes Log A return Nathaniel. It is not Brittany because we are declaring a new let name within that nested if block and do not have access inside of that block. We move out of the if blocks and back into the nayName function where Log B still returns Nathaniel becuase we are within the environment where the let name we reassigned is declared. However, when we move back out of sayName() and into the global scope, Log D will again log Brittany because we only have access to the global let name.
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

    const result = [
    {A: 'Spot'},
    {B: 'Spot'},
    {C: 'Biscuit'},
    {D: 'Biscuit'},
    {E: 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We start with dog being Spot declared as a global variable. We then invoke petDog and before we hit any statements within petDog dog is still Spot from our global scope. In our if statement dog becomes 'Fluffy' but then as soon as we leave our if block, and invoke rollOver, dog goes back to being 'Spot' because 'Fluffy' only existed in our if block and our outside function does not have access to it. In rollOVer we reassign dog to 'Biscuit' so dog logs as 'Biscuit' both in the rollOver function and outside to the petDog function and again outside in the global scope.
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

    const result = [
    {A: 'reference error'},
    {B: 'mango'},
    {C: 'mango'},
    {D: 'apple'}
    ];
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

    const result = [
    {A: 4},
    {D: 9},
    {E: 10},
    {B: 9},
    {C: 4}
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

    const result = [
   { E: 'Pam'},
   { A: 'Pam'},
   { B: 'Pam'},
   { C: 'Louisa'},
   { D: 'Louisa'},
   { F: 'Louisa'}
   ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe // 
      var shoe = 'boot';
    }

    // Log B: shoe // 
    putOnShoe();
    // Log C: shoe

    const result = [
    { B: 'flipflop'},
    { A: undefined },
    { C: 'flipflop'},
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


    const result = [
    { B: 'soup'},
    { C: 'soup'}
    ];
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

    const result = [
    {A: 'Pandora'},
    {B: ['Antigone', 'Pandora']},
    {C: 'Mandy'},
    {D: 'Antigone'},
    {E: 'Pandora'}
    ];
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

    const result = [
    {A: 'Rody'}, 
    {B: 'RodyToy'}, 
    {C: 'Tesla'}, 
    {D: 'RodyToyDaniels'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;