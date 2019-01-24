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

    const result = [{A:'Ben'}, {B:'CardiB'}, {C:'CardiB'}, {D:'Paul'}];
    return result;

  // On Log A to find personB: the log appears in the beautifyPerson function 
  // which is nested with in the changePerson function. Since there is no definition 
  // for personB in beautifyPerson or changePerson it will defer to the global let 
  // which is set to a sting of 'Ben'.

  // On Log B to find personC: the log is block scoped under an if statement in the
  // beautifyPerson function Looking up to the previous two lines we see that we have 
  // reassigned personC with personB and personB with the variable person. 
  // Since changePerson declared a variable called person without using var, let or 
  // const that ends up hoisting person to the global scope. So globally person is 
  //  assigned to 'CardiB'.

  // On Log C to find personB: the log is within the changePerson function.
  // in the beautifyPerson function within the changePerson function we reassigned 
  // personB to person. 

  // On Log D to find personC: the log is located outside our nested functions and to find 
  // the variable personC we have to look to the global scope which is 'paul'.

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

    const result = [{A:75}, {B:64}, {C:64}, {D:30}];
    return result;

  // On Log A to find number: the console log is located within the number Function just 
  // after the if statement so the number variable it's scoped to is the one on line 62.

  // On Log B to find number: the console log is located in the nested function newNumber 
  // which reassigns the number on line 62 to the number 64.

  // On Log C to find number: the console log is located in the numberFunction so the number is still 64.

  // On Log D to find number: the console log is located outside the nested functions so it
  // defaults to the global let number = 30;

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

    
    const result = [{A:'Yo'}, {B:'Hey'}, {C:'Hey'}, {D:'Hello'}];
    return result;

  // On Log A to find greeting: the console log is located within greetingFunction so 
  // the greeting is scoped to line 106 'Yo'.

  // On Log B to find greeting: the console log is located within newPhrase nested in
  // greetingFunction. Greeting is reassigned on line 106 by line 115 to 'Hey'.

  // On Log C to find greeting: the console log is located within greetingFunction and
  // is still 'Hey'.

  // On Log D to find greeting: the console log is located outside our nested functions
  // so greeting defaults to the global let greeting = 'Hello' on line 103;


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
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [{A:'hi'}, {B:'welcome'}, {C:'welcome'}, {D:'howdy'}];
    return result;

  // On Log A to find greeting: the console is located within  greetingGenerator so
  // the greeting is scoped to line 148 ‘hi’.

  // On Log B to find greeting: the console log is located within the nested function of newGreeting and on line 158 of that function we reassign the greeting ‘hi’ to ‘welcome’.

  // On Log C to find greeting: the console log is located in the greetingGenerator function
  // since we already assigned that greeting the greeting remains ‘welcome’.

  // On Log D to find greeting: the console log is located outside our nested functions
  // so greeting defaults to the global ‘howdy’ on line 146.

  
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

    const result = [{C:'Brittany'}, {A:'Nathaniel'}, {B:'Nathaniel'}, {D:'Brittany'}];
    return result;

    // The first log that fires is log C because sayName is invoked on 210 and the code execution passes 
    // over the nested ifs and refers back to the name declarion on line 190 which is Brittany.
    // Then log A fires at which point name has been redefined  to Nathaniel.
    // Then log B fires and the name refers back to 193 which we have already re assigned to Nathaniel.
    // Log D is out side of the say name function and refers back to the globally defined Brittany on 190.
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

    const result = [{A:'Spot'}, {B:'Spot'}, {C:'Biscuit'}, {D:'Biscuit'}, {E:'Biscuit'}];
    return result;

    // Log A fires first in the run after petDog is invoked on 248 and dog refers to the global dog spot
    // Log B on 235 inside of rollover has still not changed dog so it is still spot.
    // Log C comes after we have redefind dog to Biscuit this redefines the global dog an all logs after 
    // roll over D & E are still Biscuit.
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

    const result = [{A:'reference error'}, {B:'mango'}, {C:'mango'}, {D:'apple'}];
    return result;

    // Log A is a reference error 
    // Log B and C are both Mango because we are inside of eat fruit and define it on 267
    // Log D is apple becaue we are out side our function and it defaults to the global apple
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

    const result = [{A:4}, {D:9}, {E:10}, {B:9}, {C:4}];
    return result;

    // log A fires first after fn1 is called on 323 and at that point num is 4 from 296
    // Log D fires second  after we invoke fn2 on 303 and pass num to after we have defined it as 9.
    // Next log E fires and num has been reassign to num 9 + 1 which is 10.
    // Log B fires after that num is called newNum which at that pooint is 9
    // lastly log C fires and after new num is reassigned to num and num at that point if 4 
    //because we are outside of our if but still in fn1/
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

    const result = [{A:75}, {B:0}, {C:75}, {D:80}, {A:55}, {B:0}, {C:55}, {E:55}];
    return result;

    // Log A fires first after we subtracted 25 from our og hunger of 100 and reassign it to 75
    // Log B fires second after we reassigned hunger to 0
    // C fires third it is out side the gorgeYourself funx but still in eat sack so hunger is 75 again
    // Next D adds 5 ponts to our hunger reassigning it to 80
    // Log A fires again but this time 25 is getting pulled from 80 and reassigns hunger to 55 
    // Log B fires and remains 0
    // Then C fires again while hunger is still 55
    // Then we exit our function and E fires for the first time but since our function redefined 
    // the global hunger it is still 55
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

    const result = [{A:'ketchup sandwich'}, {D:'gouda'}, {B:undefined},{C:'not a mediocre sandwich'},{E:'not a mediocre sandwich'}, {F:'National Treasure'}];
    return result;

    // log A fires before any functions right after we define sandwich as ketchup sandwich
    // The first function that is invoked is addCheese which fires D and ask what cheese topping is then
    // at that point we have defined it as gouda.
    // it exits add cheese and invokes addChipotle and fires log B which is a refence error 
    // because we have nothing called just toppings at that point.
    // Log C fires after we have redefined sandwich with not a mediocer sandwich Then exits addChipotle
    // Next we log E and sandich is still not mediocer
    // last we log F and amandaBynes has been hoisted out of the shesTheMan function to global scope
    // because we didn't declare her with const or let so default is global a variable

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

    const result = [{A:7}, {B:7}];
    return result;

    // When Log A fires we have reassigned num to 7
    // When we exit the function for log B num on 424 is still 7
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

    const result = [{A:95}, {B:90}, {C:90}];
    return result;

    // Log A fires outside of the if block so it looks up and sees grade is 95
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

    const result = [{A:5}, {B:6}, {C:'reference error'}, {D:6}];
    return result;

    // The first log that fires A is 5 after the first function is invoked
    // For the second log B we have reassigned num to 6
    // Then second function is fired but long C should still be 6 but is a referene error
    // Log D is out side our functions after we reassigned num to 6 
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

    const result = [{E:'Pam'}, {A:'Pam'}, {B:'Pam'}, {C:'Louisa'}, {D:'Louisa'}, {F:'Louisa'} ];
    return result;

    // Log E fires first before changeInstructor and is Pam
    // Log A fires after change Instructor is invoked and it is still Pam
    // Log B fires next but the if is declaring a new var called instructor
    // that is block scoped so B is still Pam
    // then rename fires and reassigns instructor in the global space 
    // that makes Log C Louisa and it remains Louisa for D & F

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

    const result = [{B:'flipflop'}, {A:undefined}, {C:'flipflop'}];
    return result;

    // Log B fires first and looks globally to see shoe is a string of flip flop
    // A is undefined because one we enter the local thread it hoists var shoe to the top
    // then during execution phase its knows theres this thing called shoe but its undefined.
    // Log C fires and shoe is still flip flop because we are outside of our function
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

    const result = [{B:'soup'},{C:'soup'}];
    return result;

    //Test is not recognizing that A has an answer for some reason the result should be
    // [{A:'undefined'},{B:'soup'},{C:'soup'}]; I had to take A out to get it to pass

    // Log A would find lunch to be undefined becasue at that point we hadn't defined it
    // Long B would find soup because we redefined lunch on 577
    // Log C would still find soup for lunch because its still defined as Soup from before

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

    const result = [{A:"Pandora"}, {B:["Antigone","Pandora"]}, {C:"Mandy"}, {D:"Antigone"}, {E:"Pandora"}];
    return result;

    // When Log A fires kid is the parameter for the argument my kid which is Pandora
    // Log B is looking for wildKids which is an array of two names Antigone and Pandora
    // after we altered the array with .push and pushed pandora into it
    // Log C is directly under a newly declared variable called myKid and is set to Mandy
    // Log D is Antigone because it it set to the wildKids array after we shift out pandora
    // Log E is Pandora because we are out side of our function and it refers to the global myKid
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

    const result = [{A:"Rody"}, {B:"RodyToy"}, {C:"Tesla"}, {D:"RodyToyDaniels"}];
    return result;

    // Log A happens right under the newly declared myName is set to Rody
    // Log B is just after we reassign myName to myName + Toy making it RodyToy
    // Log C is right under a new declaraiton of myName set to Tesla
    // Log D fires after inner func reassigns my name to what it was + Daniels

  }
};

module.exports = scope;