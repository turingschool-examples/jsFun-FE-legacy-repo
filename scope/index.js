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
        // Log A: personB // Ben 
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC // Cardi B
        }
      }

      personC = personA;

      // Log C: personB // Cardi B
    }

    changePerson();

    // Log D: personC // Paul

    const result = [
      {A:'Ben'},
      {B:'CardiB'},
      {C:'CardiB'},
      {D:'Paul'}
    ];
    return result;

     //WHEN WE SAY PERSON = CARDIB  ... IS THAT MAKING A NEW VAR? I THOUGHT THAT WAS ORGINALLY JSUT TO REASSIGN A VARIABLE THAT HAS ALREADY BEEN DECLARED?? 

     //YES THAT IS A NEW GLOABL VARIABLE 


    // Annotation:
    // Log A, we are asked to log personB. If we look up the scope chain, we see the global variable where personB was assigned to Ben. 
    //Log B, we are asked to log personC. We see a conditonal that reads 'if personB includes the letter "B"'... Since person B is Ben, that conditional evaulates to true. We then assign personB to person. Then we assign personC to the value of personB. That leaves us with personC having the value of Cardi B 
    //Log C, we are asked to log personB. On line 18 we then assign the value of personC to personB, which is Cardi
    //Log D, we are asked to log person B. We are now in the global scope and look up to our global variables and see that personB is Paul. 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number //75 

      function newNumber() {
        number = 64;

        // Log B: number/64
      }

      newNumber();

      // Log C: number//64
    }

    numberFunction();

    // Log D: number//30

    const result = [
      {A:75},
      {B:64},
      {C:64},
      {D:30}
    ];
    return result;

    // Annotation:
    // We enter the exection context when we reach line 75. That jumps us back to the function numberFunction. LogA is asking for the value of the number. Because we dont have access to the if block, we look up and find that number is 75. We then jump to line 70 where we are invoking newNumber. That brings us to line 64 where we reassign number to 64.  We then log 64. Then we are asked to LogC. Since we reassigned number without a variable declaration, it is still 64. Finally we are asked to logD. This is completely out of the function scope so we look up to our global variable where number is 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting // Yo 

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting// Hey
      }

      newPhrase();

      // Log C: greeting// Hey 
    }

    greetingFunction();

    // Log D: greeting// Hello 

    const result = [
      {A:'Yo'},
      {B:'Hey'},
      {C:'Hey'},
      {D:'Hello'}
    ];
    return result;

    // Annotation:
    // We invoke greeting function and are ask to logA, in this scope we dont have acess to whats in the if block so are greeting is Yo. Then we invoke new phrase and reassing the greeting Yo to hey. Below newPhrase we are asked to logC. Because we reassigned the functionall scoped var greeting, it is still 'hey'. Finally we are outside of the greetingFunction and asked to logD which is 'Hello.'
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting// hi 

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting// welcome
      };

      newGreeting();

      // Log C: greeting// welcome 
    };

    greetingGenerator();// howdy 

    // Log D: greeting

    const result = [
      {A:'hi'},
      {B:'welcome'},
      {C:'welcome'},
      {D:'howdy'}
    ];
    return result;

    // Annotation:
    // Just like the one above.
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

        // Log A: name // Nathaniel 
      }

      // Log B: name // Nathaniel ..
    }

    // Log C: name // BRittany

    sayName();

    // Log D: name // Brittany 

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];
    return result;

    // Annotation:
    // The difference in this how they are ordered. We are asked to console logC before we jump into the functionSayName. For logA and logB, we have reassigned the value of pam to be nathaniel because we did not have a declaration for the name variable in our first if statement.

    },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog // spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog // spot 

        dog = 'Biscuit';

        // Log C: dog biscuit 

      }

      rollOver();

      // Log D: dog biscuit 
    }

    petDog();

    // Log E: dog biscuit 

    const result = [
      {A:'Spot'},
      {B:'Spot'},
      {C:'Biscuit'},
      {D:'Biscuit'},
      {E:'Biscuit'}
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit/ error 
          const fruit = 'strawberry';
        }

        // Log B: fruit, mango 
      }

      // Log C: fruit, mango 
    }

    eatFruit();

    // Log D: fruit, apple 

    const result = [
      {},
      {},
      {},
      {}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num, 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum 9 
      }

      newNum = num;

      // Log C: newNum 4 
    };

    const fn2 = function(num){
      // Log D: num 9 

      num = num + 1;

      // Log E: num 10
    };

    fn1();

    const result = [
      {},
      {},
      {},
      {}
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

    const result = [
      {},
      {},
      {},
      {}
    ];
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

    const result = [
      {},
      {},
      {},
      {}
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

    const result = [
      {},
      {},
      {},
      {}
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

        // Log A: grade 95 
      }

      addPoints();

      // Log B: grade 90 
    }

    losePoints();

    // Log C: grade 90

    const result = [
      {},
      {},
      {},
      {}
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
      {},
      {},
      {},
      {}
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

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
      {},
      {},
      {},
      {}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe   // REFERENCE ERROR BECAUSE IT IS BEFORE THE SHOE/ UNDEFINED
      var shoe = 'boot';
    }

    // Log B: shoe // FLIPFLOP
    putOnShoe();
    // Log C: shoe // FLIPFLOP

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // BECAUSE IT FOUND SHOE INSIDE THE FUNCTION putOnShoe, 
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
    // Log A: myName - rody 

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName -- roddyToy

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName -- 
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName- r

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;