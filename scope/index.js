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
    ]

    'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // We are creating 3 global variables on lines 3-5. We then are creating a new function called changePerson on line 7. We will skip down until line 28 when the changePerson() function is called, at which point we go back to line 7 to enter the function. On line 8, since personA is assigned to Paul, we will enter the if block. On line 9, we are creating a new functionally scoped variable called person which is assigned to CardiB (this will leak to global scope). We then run the beautifyPerson function, which we enter on line 13. On line 14, wwe have the first log for personB, which at this point is still Ben since it hasn't been reassinged. We then enter the if block on line 16 since Ben starts with the letter B. On line 17, personB is being reassinged to 'CardiB' because the person variable we created on line 9 has leaked out to the functional scope. On line 18, personC is being reassigned to personB (which got reassigned to CardiB on line 17), so logB will indicate that personC is now also CardiB. We exit the if block and on line23 personC is reassinged to personA. LogC will be CardiB for person B since it still reassigned from line 18. We have now left the function and are back in the global scope. At this point, on line 30 person C will be Paul since all the reassignment to CardiB only happened in the changePerson function. 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number -

      function newNumber() {
        number = 64;

        // Log B: number - 
      }

      newNumber();

      // Log C: number - 
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A': 75 }, 
      { 'B': 64 }, 
      { 'C': 64 }, 
      { 'D': 30 }
    ];
    
    return result;

    // Annotation:
    // Creating a global variable on line 50 setting number to 30. Creating the numberFunction on line 49. On line 69 we enter the numberFunction on 49. Creating a FUNCTIONALLY SCOPED variable called number assigned to 75. This allows us to enter the if blcok on 52. Within the if block, creating a new variable number that is block scoped and assigned to 28. Since we exit th block, LogA will be 75 since it refers to the functioanlyl scoepd variable assigned to 75. Then we create the function newNumber in the local context and enter it after encountering the numberFunction on line 69. When we enter newNumber, it is creating a new variable (assigned to 64) which will leak out to the functioanl scope. For LogB, the number will be 64 since we are still in the functional block. Then, on LogC, number will be assigned to 64 since it bled out to the functional scope on the variable declaration. Finally, LogD will be 30 since are back in the global scope and number hasnt been reassigned.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting - 

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting - 
      }

      newPhrase();

      // Log C: greeting - 
    }

    greetingFunction();

    // Log D: greeting - 

    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ]    
    return result;

    // Annotation:
    // Enter the greetingFunction on line 89 after its called on 109. Creates new var assigned to Yo, allows us to enter the if bloock on 93. within if block, craetes new greeting as Howdy. This is block scoped so doesnt escape. LogA should be Yo since we are still in functional block. enter the new Phrase function (after its called 104) greeting creates a new var of greeting called Hey. LogB will be Hey since its within the functional scope. However, since we didnt use a variable declaration it will leak out to the greetingFunction() level and therefore LogC will also be Hey since it overwrites the origianl Yo. Finally, Log D will still remain Hello since it is within the global scope and nothing has impacted hte original global variable. 
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting - 'hi'

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
    ]    
    return result;

    // Annotation:
    // LogA is 'hi' since it refers to the functionally scoped greeting on line 129 (not hello, which is block scoped on 132). LogB is welcome as it is declared on line 138. LogC is also welcome since it leaks out of its functional scope on 138 to line 129 where it reassigns hi to welcone. LogD is welcome as it is globally scoped and doesnt get reassigned. 
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

        // Log A: name - nathaniel
      }

      // Log B: name - nathaniel - leaks out
    } 

    // Log C: name - 'Brittany' logged 1st

    sayName();

    // Log D: name - brittany

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ]      
    return result;

    // Annotation:
    // LogC is executed first and refers to Brittany as it is globally scoped. Next we enter the sayName function and logA is nathaniel as it is declared on 171. However, it leaks out and also is logged for LogB since it reassigns name on line 168. Finally, logC is Brittany since its globally scoped and never reassigned. 
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog - Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: Spot

        dog = 'Biscuit';

        // Log C: dog - biscuit

      }

      rollOver();

      // Log D: dog - buiscuit
    }

    petDog();

    // Log E: dog

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ]     
    return result;

    // Annotation:
    // LogA is spot as its globally scoped and no var declaration anywhere in the petDog function (looks up to global). LogB is still spot as it looks globally. LogC is biscuit as it reassigned. Log D is also biscuit as the var is leaked up to global scope and replaces Spot. LogE is also biscuit as it has been reassigned globally earlier.
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit - referenceError! 
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
      { 'D': 'apple' }
    ]         
    return result;

    // Annotation:
    // We get a reference error on LogA since the console log is called on line 251 before the fruit variable is declared on line 252 within the if block. It doesn't have a fruit to refer to in the if statement! LogB will log mango since it refers back to the functioanlly scoped fruit on 248. LogC is also mango as the var declaration on 248 leaks out to the functional scope. LogD is apple as it refers to the global scope!
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num - 

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum - 
      }

      newNum = num;

      // Log C: newNum - 
    };

    const fn2 = function(num){
      // Log D: num - 

      num = num + 1;

      // Log E: num -
    };

    fn1();

    const result = [
      { A: 4 }, 
      { D: 9 }, 
      { E: 10 }, 
      { B: 9 }, 
      { C: 4 }
    ]    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100; //

    function eatSnack() {
      hunger -= 25;
      // Log A: 
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger- 
      }

      // Log C: hunger -
    }

    eatSnack();
 
    hunger += 5 ;
    // Log D: hunger - 

    eatSnack();
    // Log E: hunger - 

    const result = [
      {A: 75},
      {B: 0},
      {C: 75},
      {D: 80},
      {A: 55},
      {B: 0},
      {C: 55},
      {E: 55}
    ];     
    return result;

    // Annotation:
    // Hunger delcared as 100 in line 325. Enter the eatSnack after it is invoke on line 340. The global hunger is reassigned as 75 on line 328 so logA will be 75. We then enter the gorgeYoureself function on 322 (invoked on 330) where we create a functionaly scoped hunger as 0 (doesnt impact global hunger). After exiting gorge, logC refers to the global hunger as 75. We exit the eatSnack function and global hunger is reassigned as 80. encounter another eatSnack and re-enter the function. LogA reassinged to 55 on line 328. LogB will remain 0. Log C is still 55 from reassignment. Log E is still 55 from reassignemnt. So correct final execution order is D, A, B, C, E. 
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
      { A: 'ketchup sandwich' },
      { D: 'gouda' },
      { B: undefined },
      { C: 'not a mediocre sandwich' },
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure'}
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
      { A: 7,},
      { B: 7}
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

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
      { A: 95 },
      { B: 90 },
      { C: 90 }
    ];    
    return result;
    // Annotation:
    // grade is declared on line 433 and value is set at 100. enter the losePoints function after it is called on 453. On 436, global grade (line 433) is reassigned to 90. addPoints is called on 448, so we enter that function scope on 438. On 439, we create a functionally scoped variable grade wiht value 95. this allows us to enter the if block on 441 where we create a block scoped grade of 97. We then exit that block, so LogA will be 95 sin it is within the addPoints function scope. LogB will refer to 90 since it is in the function scope of lose points. However, logC is also 90 since the grade variable on 436 didnt use a variable declaration so it leaks out to global scope and reassigns teh global grade to 90. 
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num - 5
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
      {A: 5},
      {B: 6},
      {C: 'reference error'},
      {D: 6}
    ];     
    return result;

    // Annotation:
    // We declare a global num on 468 with value of 5. The first() is called on 481 so we enter that functin. LogA will reference the global variable 5. on 472 we reassign the global num as 6. LogB references the reassignment so it will be 6. After win finish exectuting first(), we have second() called on 482. On the creation phase of this function, the variable let declaration gets hoisted above logC but the value hasn't been assigned yet. Since it is a let declaration, we cannot refer to that variable so it throws a reference error. 
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
      { E: 'Pam' },
      { A: 'Pam' },
      { B: 'Pam' },
      { C: 'Louisa' },
      { D: 'Louisa' },
      { F: 'Louisa' }
    ];     return result;

    // Annotation:
    // Declare global var instructor with value pam on line 498. Encounter LogE on 523 which references global var of Pam. change() is called on 525. LogA on 502 refers to global Pam sicne there is no function level declarations. The if logic on 504-508 doesnt do any functional scoped declarations. however, the rename() reassignes the global instructo to luisa (leaks out). LogC is Louisa. LogD will also be Louisa since it leaked out. LogF is also louisa as it leaked out to global scope and reassigned. 
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

    const result = [
      { B: 'flipflop' },
      { A: undefined },
      { C: 'flipflop' }
    ]    
      return result;

    // Annotation:
    // shoe declared globally on 543 and value is set to flip flop. encounter LogB first, which references the global flipflop. PutOn() called on 551. LogA will be undefined since it comes about the variable declaration. It recognizes the variable from teh local creation phase but it hasnt been assigned a value, so LogA will be undefined. LogC will be flipflop since the var declaration on 547 was functionally scoped. 
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
      { B: 'soup' },
      { C: 'soup' }
    ];
    return result;

    // Annotation:
    // Declare variable lunch on line 571 but no value is assigned (undefined). Call the orderLunch function  and enter function on 572. On 573, lunch is still not defined, so we never enter the if statement and cannot logA. On line 578, we will enter the if block since the global lunch is still undefined (which is a primitive), and on 574, lunch is reassigned globally as 'soup', therefore, logc will be soup.
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid - Pandora
      wildKids.push(kid);
      // Log B: wildKids ['Antigone', 'Pandora']
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid - Mandy
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid - 'Antigone'
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid - Pandora
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { A: 'Pandora' },
      { B: ['Antigone', 'Pandora'] },
      { C: 'Mandy' },
      { D: 'Antigone' },
      { E: 'Pandora' },
    ];
    return result;

    // Annotation:
    // The global myKid is passed as a parameter in the myCrazyKidAntics on 624, therefore, LogA (which is asking for the parameter kid) will be Pandora. On line 602, we are pushing the kid parameter into the global wildKids array, so LogB will now include [Antigone, Pandora]. We see drawOnTheWall called within the myCrazyKidAntics() on line 611. On 606, we are creating a block scoped variable of myKid assigned to Mandy. myAmazingKid is called on 619 and we enter fucntion on 613. We then set a block scoped var of myKid assigned to the first valeue of the wildKids array that is shifted out (in this case, Antigone); Finally, logE refers to the myKid from the parameter, which is still Pandora. 
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName - 'Rody'

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
    // On 643 declare myName globally as Rody. Enter the Parentfunc on 646, on 647 we are reassigning and concating on the global level so it is reassigned as RodyToy
  }
};

module.exports = scope;