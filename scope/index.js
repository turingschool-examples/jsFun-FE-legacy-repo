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
        // Log A: personB | 'A':'Ben'
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC | 'B': 'CardiB'
        }
      }

      personC = personA;

      // Log C: personB 'B': 'Ben'
    }

    changePerson();

    // Log D: personC

    const result = [{'A': 'Ben'}, {'B': 'CardiB'}, {'C': 'CardiB'}, {'D': 'Paul'}];
    return result;

    // Annotation:
    // In the execution phase of exerciseA() method we hoist personA, personB, personC, and the changePerson() function
    // We invoke changePerson() on line 28 and go into the function
    // In the first 'if' block since personA equal 'Paul' we go into it and set person to 'CardiB plus invoke beatifyPerson()
    // We next go into beautifyPerson() and LOG 'Ben'
    // In the 'if' condition since personB('Ben') includes a 'B' we go into the block and reassign personB to person which is 'CardiB', this works because 'person' is a global variable
    // 'personC' is reassigned to the vaule of 'personB' which happens to be 'CardiB'
    // We then LOG 'CardiB' and exit the 'if' block and the beautifyPerson function
    // Then on line 23 we reassign 'personC' to 'personA's vaule which our function has to go up the scope chain to see that it's 'Paul'
    // Then we LOG personB which has to go up the scope chain and see that personB is 'Ben' and log it
    // We leave the exerciseA function then lastly LOG personC which is now 'Paul'
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number | 75

      function newNumber() {
        number = 64;

        // Log B: number | 64
      }

      newNumber();

      // Log C: number | 64
    }

    numberFunction();

    // Log D: number | 64

    const result = [{'A': 75}, {'B': 64}, {'C': 64}, {'D': 30}];
    return result;

    // Annotation:
    // We set number to 30, pass the numberFunction(), then invoke the function on line 71 and enter it
    // We have a new variable called number and set it to 75, we enter the if block since number equals 75, we then change number to 28 but it stays there since it's block scoped.
    // We then LOG 75, pass the newNumber function, invoke it, then enter it
    // In here we set number to 64, and since it's a global variable it follows it after we escape it
    // We then LOG 64 and exit the numberFunction()
    // We then log 30 since it's grabbing the value of number from the top.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting | yo 

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting | hey 
      }

      newPhrase();

      // Log C: greeting | hey
    }

    greetingFunction();

    // Log D: greeting | hello

    const result = [{'A': 'Yo'}, {'B': 'Hey'}, {'C': 'Hey'}, {'D': 'Hello'}];
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

      // Log A: greeting | 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting 'welcome'
      };

      newGreeting();

      // Log C: greeting 'welcome'
    };

    greetingGenerator();

    // Log D: greeting | Howdy

    const result = [{'A': 'hi'}, {'B': 'welcome'}, {'C': 'welcome'}, {'D': 'howdy'}];
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

        // Log A: name | 2 'Nathaniel'
      }

      // Log B: name | 3 'Pam' NOPE but 'Nathaniel'
    }

    // Log C: name | 1 'Brittany'

    sayName();

    // Log D: name | 'Brittany'

    const result = [{C: 'Brittany'}, {A: 'Nathaniel'}, {B: 'Nathaniel'}, {D: 'Brittany'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog |1 spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog | 2 Spot

        dog = 'Biscuit';

        // Log C: dog | 3 Biscuit

      }

      rollOver();

      // Log D: dog | Biscuit
    }

    petDog();

    // Log E: dog | 4 Spot

    const result = [{A: 'Spot'}, {B: 'Spot'}, {C: 'Biscuit'}, {D: 'Biscuit'}, {E: 'Biscuit'}];
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
          // Log A: fruit | 1 Mango
          const fruit = 'strawberry';
        }

        // Log B: fruit | 2 Mango
      }

      // Log C: fruit | 3 Mango
    }

    eatFruit();

    // Log D: fruit | 

    const result = [{A: 'mango'}, {B: 'mango'}, {C: 'mango'}, {D: 'apple'}];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num | 1 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum 4 | 9
      }

      newNum = num;

      // Log C: newNum 5 | 4
    };

    const fn2 = function(num){
      // Log D: num | 2 9 

      num = num + 1;

      // Log E: num | 3 10
    };

    fn1();

    const result = [{A: 4}, {D: 9}, {E: 10}, {B: 9}, {C: 4}];
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