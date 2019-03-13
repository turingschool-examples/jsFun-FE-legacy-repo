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
        // Log A: personB = Ben
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC  = CardiB
        }
      }

      personC = personA;

      // Log C: personB = CardiB
    }

    changePerson();

    // Log D: personC = Paul

    const result = [
      {A: 'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'}
    ]
    return result;

    // Annotation:
    // Log A is Ben because Ben is globally scoped 
    //Log B is CardiB because personB is Ben so, it includes the letter 'B' and then personB is reassigned to person which is cardiB and then personC is then reassigned to personB
    //Log C is CardiB because while going through the execution phase, it is still CardiB at this point
    //Log D is Paul because personC was reassigned to personA which was Paul
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      console.log('A: ', number) // 75

      function newNumber() {
        number = 64;

        // Log B: number
        console.log('B: ', number) // 64
      }

      newNumber();

      // Log C: number
      console.log('C: ', number) // 64
    }

    numberFunction();

    // Log D: number
    console.log('D: ', number) // 30

    const result = [
      {A: 75}, 
      {B: 64}, 
      {C: 64}, 
      {D: 30}
    ];
    return result;

    // Annotation:
    // Log A is 75 because let is block scoped and we have no access to it
    // Log B is 64 because we have reassigned 75 to be 64 at that time
    // Log C is 64 because we are inside of the newNumber function so it is still 64
    // Log D is 30 because it is back in the global scope and so we will look at the global value of 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting = Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting = Hey
      }

      newPhrase();

      // Log C: greeting = Hey
    }

    greetingFunction();

    // Log D: greeting = Hello

    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'}
    ];
    return result;

    // Annotation:
    // Log A is Yo because it is functionally scoped and let is block scoped so we never get to 'howdy'
    // Log B is Hey because it is reassigned to Hey and functionally scoped
    // Log C is Hey because we never reassigned it again after it was reassigned in newPhrase
    // Log D is Hello because of the global scope of hello because it is being logged globally
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting = hi

      const newGreeting = ()  => {
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
    // Log A is hi because it is functionally scoped and we aren't able to go into the if block statement because let is block scoped
    // Log B is welcome because it is takiing our functionally scoped 'hi' and reassigning it to become welcome
    // Log C is welcome because it is still welcome from being reassigned inside of newGreeting at this point in time
    // Log D is howdy because it is in the global scope
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

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ]
    return result;

    // Annotation:
    // LogC is Brittany because we are in the global scope to start at this time
    //LogA is Nathaniel because the name variable is assigned to Pam and our conditional says that if the name is Pam then reassign it to Nathaniel
    //LogB is still Nathaniel at this point in the execution phase
    //LogD is Brittany because we are in the global scope
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
    // LogA is spot because it was spot in the global scope and eveything has access to globally scoped variables and we have not reassigned is re-declared the variable at this point in time
    // LogB is still spot because let it block scoped and so it will continue to be spot at this point in time
    // LogC is biscuit because it is being reassigned inside of the rollOver function
    // LogD is still biscuit because rollOver has been invoked and reassigned the variable to biscuit at this point in time
    //LogE is biscuit because it is still biscuit at this point in time 
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
    // Log A: myName = Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName = RodyToy

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName = Tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName = RodyToyDaniels

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