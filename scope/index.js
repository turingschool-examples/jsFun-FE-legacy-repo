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
        console.log('A: ' + personB); 
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
          console.log('B: ' + personC); 
        }
      }

      personC = personA;

      // Log C: personB
      console.log('C: ' + personB);  
    }

    changePerson();

    // Log D: personC
    console.log('D: ' + personC); 

    const result = [
      { A: 'Ben' },
      { B: 'CardiB'},
      { C: 'CardiB'},
      { D: 'Paul'}
    ];
    return result;

    // Annotation:
    // The variables personA, personB, and personC are created at the global scope.  
    // Then, the changePerson function is run, and because personA is 'Paul', we first create another variable called person...
    // ...(which defaults to a global object because there's no var/let/const keyword) and assign a value of 'CardiB'.  
    // Then we run the beautifyPerson function.  Here's the first console log, which will show 'Ben' because personB hasn't changed since it was declared.
    // Then, cus 'Ben' includes 'B', personB's value is reassigned to person/'CardiB'.
    // Then, we also reassign the value of personC to 'CardiB' (cus that's B's value now).  Our next console log for personC will therefore be 'CardiB'.
    // After the beautify function ends, we reassign the value of personC to personA/'Paul'.  
    // The next console log of personB will show 'CardiB', because we reset this global variable in the function we just ran.
    // Now we return to the next line after the fn we just ran, and the console will log 'Paul' because at the end of the fn we just ran we reset personC to personA's value (never changed).
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      console.log('A: ' + number); 

      function newNumber() {
        number = 64;

        // Log B: number
        console.log('B: ' + number); 
      }

      newNumber();

      // Log C: number
      console.log('C: ' + number);  
    }

    numberFunction();

    // Log D: number
    console.log('D: ' + number); 

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ];
    return result;

    // Annotation:
    // First, we declare a global variable called number and assign a value of 30.
    // Then, we skim over the fn definition to the first fn call to numberFunction, where we declare a local variable also called number w/ value of 75.
    // The next conditional changes the value of that local variable for an instance, but doesn't persist after the if statement block.
    // The first console log shows the value of the local variable we set, 75.
    // We skim over the next function definition and it is called, so we jump in and see it's reassigned a value of 65 to the local number variable.
    // Therefore, this next console log will show the new reassigned value of 64.
    // We're back to the next line after the function call, but the next console will show a value of 30 since we're back outside the fn scope and have a global variable w/ 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      console.log('A: ' + greeting);

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        console.log('B: ' + greeting);
      }

      newPhrase();

      // Log C: greeting
      console.log('C: ' + greeting);
    }

    greetingFunction();

    // Log D: greeting
    console.log('D: ' + greeting);

    const result = [
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey' },
      { D: 'Hello' }
    ];
    return result;

    // Annotation:
    // We set one global variable called greeting with a value of 'Hello'.
    // Then, we skim over the next function definition to see it's been called, and jump back in.
    // We create a new local variable also called greeting with a value of 'Yo'.
    // In the conditional, a new block-scoped variable called greeting is created and promply discarded!
    // The first console log is the closest/local variable value of 'Yo'.
    // We skim over the next function definition newPhrase and see it's called after, so we jump back in.
    // newPhrase reassings the function scoped variable a value of 'Hey' and console logs that.
    // Finally, after the greetingFn has run, we run another console log in the global scope which shows the global variable value of hello.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      console.log('A: ' + greeting);

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        console.log('B: ' + greeting);
      };

      newGreeting();

      // Log C: greeting
      console.log('C: ' + greeting);
    };

    greetingGenerator();

    // Log D: greeting
    console.log('D: ' + greeting);

    const result = [
      { A: 'hi' },
      { B: 'welcome' },
      { C: 'welcome' },
      { D: 'howdy' } 
    ];
    return result;

    // Annotation:
    // We set one global variable called greeting with a value of 'howdy'.
    // Then, we skim over the next function definition to see it's been called, and jump back in.
    // Inside the function, we declare a new variable with the same name and a value of 'hi'.
    // In the conditional, a new block-scoped variable called greeting is created and promply discarded!
    // The first console log is the closest/local variable value of 'hi'.
    // We skim over the next function definition newGreeting and see it's called after, so we jump back in.
    // newGreeting reassings the function scoped variable a value of 'welcome' and console logs that.
    // The next console log after running newGreeting returns the same value we just reassigned to the fn scoped variable in that fn.
    // Finally, after the greetingGenerator has run, we run another console log in the global scope which shows the global variable value of 'howdy'.
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
        console.log('A: ' + name); //
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
      { C: 'Brittany' },
      { A: 'Nathaniel' },
      { B: 'Nathaniel' },
      { D: 'Brittany' }
    ];
    return result;

    // Annotation:
    // We first declare a global var called name and assign the value 'Brittany'.
    // Then we skim past a function definition and next see a console log of name, which will show the value we just set
    // Then the sayName function is run, so we jump in and a new local variable with the same name of name is declared with a value of 'Pam'
    // The condition of name being 'Pam' is true, since we're looking at the local var, so we reassign the value of our local var to 'Nathaniel'
    // Within that condition, there's another looking to see if the length of name is over 0, which it is, so it defines a new block scoped variable and discards it.
    // Then, we have another console log inside the original condition, which will display 'Nathaniel' that we just reassign the local var to.
    // Then, outside the conditional, we console log again, and it will still return 'Nathaniel' bcause that's our function scoped var's value.
    // After the function call, we have another console log at the global level, which will show the global var's value 'Brittany'.
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

      // Log D: dog
      console.log('D: ' + dog);
    }

    petDog();

    // Log E: dog
    console.log('E: ' + dog);

    const result = [
      { A: 'Spot' },
      { B: 'Spot' },
      { C: 'Biscuit' },
      { D: 'Biscuit' },
      { E: 'Biscuit' }
    ];
    return result;

    // Annotation:
    // We first declare a global var called dog and assign the value 'Spot'.
    // Then we skim past a function definition and see it is then called, so we jump back into the details and console log the current value, 'Spot'.
    // The condition of dog's value being 'Spot' is true, so we declare a new block scoped variable with the same name and discard it.
    // Then we define and call another function, which first logs the globa/only existing dog variable again ('Spot') and then reassigns it a value of 'Biscuit'.
    // We then log the value of dog again, which is now 'Biscuit'.
    // After the rollOver fn we console log the value again, which is still 'Biscuit', set at the global level.
    // Then, we have a final console log after the petDog function has run, which will also show 'Biscuit', same reason as above.
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

    eatFruit();

    // Log D: fruit
    // console.log('D: ' + fruit);

    const result = [
      { A: 'reference error' }, 
      { B: 'mango' },
      { C: 'mango' }, 
      { D: 'apple' }
    ];
    return result;

    // Annotation:
    // We first declare a global var called fruit and assign the value 'apple'.
    // Then we skim past a function definition and see it is then called, so we jump back into the details.
    // The condition of fruit's value not being 'kiwi' is true, so we declare a new block scoped variable with a value of 'mango'.
    // There's another inner conditional saying if fruit has value, we try to log it, but since there's a new variable declaration with the...
    // ...same name below that gets hoisted without the value, we get a reference error.  When a value is assigned, that var is discarded after the block ends.
    // We log fruit again after the inner conditional, which is the fn scoped variable value, 'mango'.
    // We then log the value of fruit again, and because var is function scoped, we still see 'mango' outside the block it was declared because it's in the fn.
    // We log fruit one last time outside the function, and it reflects the global variable's value of 'apple'.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num
      console.log('A: ' + num);

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
        console.log('B: ' + newNum);
      }

      newNum = num;

      // Log C: newNum
      console.log('C: ' + newNum);
    };

    const fn2 = function(num){
      // Log D: num
      console.log('D: ' + num);

      num = num + 1;

      // Log E: num
      console.log('E: ' + num);
    };

    fn1();

    const result = [
      { A: 4 }, 
      { D: 9 },
      { E: 10 }, 
      { B: 9 }, 
      { C: 4 }
    ];
    return result;

    // Annotation:
    // We first declare a global var called num, and assign a value of 6.
    // Then, we skim past two function definitions until we see the first one is called, and jump back into the details.
    // Inside fn1, we declare a new fn scoped variable num with a value of 4 and log it.
    // The condition that num is less than five is true, so we declare a new block scoped var called num and assign a value of 9.
    // We then run the fn2 function, passing in the block-scoped var we just created with a value of 9.
    // In fn2, we log the argument we passed in, which has a value of 9.
    // Then, we add one to the argument and log it, showing 10.
    // After the fn2 fn call, we declare a new block scoped variable called newNum and assign the value of num (variable, not argument), then log it.
    // Then outside the condition, a new newNum is declared (defaults global w/o keyword) and is assigned the fn scoped value of num (4), then logged.
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      console.log('A: ' + hunger);

      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
        console.log('B: ' + hunger);
      }

      // Log C: hunger
      console.log('C: ' + hunger);
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger
    console.log('D: ' + hunger);

    eatSnack();
    // Log E: hunger
    console.log('E: ' + hunger);

    const result = [
      { A: 75 }, 
      { B: 0 },
      { C: 75 }, 
      { D: 80 }, 
      { A: 55 }, 
      { B: 0 },
      { C: 55 },
      { E: 55 }
    ];
    return result;

    // Annotation:
    // We declare a global var called hunger and assign a value of 100.
    // Then we run a fn called eatSnack, and it reduces the global var by 25, to 75.
    // Then we run a fn called gorgeYourself, and it creates a new fn scoped variable called hunger w/ a value of 0 and discards it after the fn runs.
    // Then we log the global var value again, which is 75.
    // After the function call, we add five to hunger, making it 80 and we log that.
    // Then, we run eatSnack again, which performs the same adjustments as the last time to our new global var value of 80.
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich
    console.log('A: ' + sandwich);

    const addChipotle = () => {
      // Log B: toppings
      console.log('B: ' + toppings);

      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
      console.log('C: ' + sandwich);
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping
      console.log('D: ' + cheeseTopping);

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    console.log('E: ' + sandwich);
    // Log F: amandaBynes
    console.log('F: ' + amandaBynes);

    const result = [
      { A: 'ketchup sandwich' }, 
      { D: 'gouda' },
      { B: undefined },
      { C: 'not a mediocre sandwich' },  
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure' }
    ];
    return result;

    // Annotation:
    // We declare a global variable called sandwich with a value of 'ketchup sandwich', and then log it.
    // We declare a global variable (no keyword) called cheeseTopping and set the value to craft, then run a function called addCheese.
    // In that fn, we declare a new local variable called cheeseTopping with a value of gouda and log it.
    // Then we run shesTheManRef fn, which sets a new global var (no keyword) called amandaBynes with a value of 'National Treasure';
    // Then, we run a fn called addChipotle, and try to log a toppings var which hasn't been assigned a value yet (though declaration is hoisted)
    // Then, we declare the toppings var with a value of 'Chipotle Sauce', and based on that condition we reassign the value of sandwich to "not a med...etc"
    // We log the new value of sandwich in the fn (same as what we just set, as it's global), and then again globally after the fn call.
    // Finally, we log the value of amandaBynes we set globally in the addCheese function.
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
      console.log('A: ' + num);
    }

    foo();

    // Log B: num
    console.log('B: ' + num);

    const result = [
      { A: 7 }, 
      { B: 7 }
    ];
    return result;

    // Annotation:
    // We declare a global var called num and assign a value of 10
    // We then call a function that reassigns that global var a value of 7 if it had been over 5, and then log it.
    // We log it again in the global scope after that fn has run and altered the value of the global var.
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
        console.log('A: ' + grade);
      }

      addPoints();

      // Log B: grade
      console.log('B: ' + grade);
    }

    losePoints();

    // Log C: grade
    console.log('C: ' + grade);

    const result = [
      { A: 95 }, 
      { B: 90 }, 
      { C: 90 }
    ];
    return result;

    // Annotation:
    // We declare a global variable called grade and assign a value of 100.
    // When the losePoints fn then runs, it reassigns the global var a value of 90
    // Another inner fn declares a new local var with a value of 95 and sets and discards another block scoped var in a conditional
    // We then log the 95 value we set on the local var within its scope.
    // After the inner fn, we log the global var value of 90 that we reassigned.
    // After the outer fn, we log the global var value again.
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      console.log('A: ' + num);
      num = 6;
      // Log B: num
      console.log('B: ' + num);
    }

    function second() {
      // Log C: num
      // console.log('C: ' + num);
      let num = 7;
    }

    first();
    second();

    // Log D: num
    console.log('D: ' + num);

    const result = [
      { A: 5 }, 
      { B: 6 }, 
      { C: 'reference error' },
      { D: 6 }
    ];
    return result;

    // Annotation:
    // We declare a global variable called num with a value of 5.
    // We then run a function called first, which logs that value of 5 and then reassigns the var a value of 6 and logs again.
    // Then, we run a function called second, which tries to log num but throws an error because there is a new fn-scoped var below whose decl was hoisted.
    // Then that variable is declared and discarded as the fn ends, and we log the global var value of 6 again.
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor
      console.log('A: ' + instructor);

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor
      console.log('B: ' + instructor);

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
        console.log('C: ' + instructor);
      }

      rename();

      // Log D: instructor
      console.log('D: ' + instructor);

    }

    // Log E: instructor
    console.log('E: ' + instructor);

    changeInstructor();

    // Log F: instructor
    console.log('F: ' + instructor);

    const result = [
      { E: 'Pam' }, 
      { A: 'Pam' },
      { B: 'Pam' },
      { C: 'Louisa' },  
      { D: 'Louisa' },
      { F: 'Louisa' }
    ];
    return result;

    // Annotation:
    // First, we create a global variable called instructor, assign a value of 'Pam', skim over a fn definition, and log instructor.  
    // Then we call the changeInst fn, and inside we log 'Pam' again (global value).  The condition does nothing, since it has block scoped vars that get discarded.
    // We log 'Pam' again after the conditional has no effect.  Then, within the fn we run the rename fn which changes the global var value to Louisa and logs it.
    // After the rename fn runs, we log the global var with the new 'Louisa' value again.
    // Finally, once the changeInstructor fn ends, we log the same global var one more time.
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      console.log('A: ' + shoe);
      var shoe = 'boot';
    }

    // Log B: shoe
    console.log('B: ' + shoe);
    putOnShoe();
    // Log C: shoe
    console.log('C: ' + shoe);

    const result = [
      { B:  'flipflop'}, 
      { A:  undefined}, 
      { C:  'flipflop'}
    ];
    return result;

    // Annotation:
    // We first declare a global variable called shoe with a value of 'flipflop'.
    // Then we skim over a function definition and log shoe/'flipflip'.
    // Then the function is called, and within it we try to log show but get undefined because the reassignment of the global var gets hoisted without the new value yet.
    // Then we assign the value to that new local var of 'boot, but it is discarded after the function.
    // The last log shows our global value of 'flipflop' again.
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        console.log('A: ' + lunch);
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
      console.log('B: ' + lunch);
    }

    orderLunch();

    // Log C: lunch
    console.log('C: ' + lunch);

    const result = [
      { B:  'soup'}, 
      { C:  'soup'}
      // { A:  ''}
    ];
    return result;

    // Annotation:
    // We first declare a global var called lunch but do not assign a value yet.  
    // Then, we run a function when the value is undefined, which hits that condition and reassigns that global var a value of 'soup.
    // We then log the var w/ the reassigned value of 'soup' within the function, and again once the function is done.
    // NOTE: A was never logged because we did not hit the condition of lunch having a value at the time it was run.
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      console.log('A: ' + kid); 
      wildKids.push(kid);
      // Log B: wildKids
      console.log('B: ' + wildKids); 
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        console.log('C: ' + myKid);  
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        console.log('D: ' + myKid); 
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      console.log('E: ' + myKid); 
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { A: 'Pandora' }, 
      { B: ['Antigone', 'Pandora'] },
      { C: 'Mandy' },
      { D: 'Antigone' },  
      { E: 'Pandora' }
    ];
    return result;

    // Annotation:
    // First, we declare a global var called myKid with a value of 'Pandora', and another called wildKids with a value of an array with one string, 'Antigone'.
    // We then skim over a fn definition to see it's called, and jump back into the details where we start by logging kid/'Pandora', push it to wildKids, and log wildKids.
    // Then we skim over and run another fn called drawOn... where we create a new local variable and log it ('Mandy'), discarded after the fn ends.
    // Then we run one more inner function called myAmazing... where we create and log a new variable which is the shifted value of the first array item 'Antigone'
    // Finally, at the end of our outer function, we log the global value of myKid again of 'Pandora'.
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName
    console.log('A: ' + myName);  

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName
      console.log('B: ' + myName); 

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
        console.log('C: ' + myName);
      };

      innerFunc();
      myName += 'Daniels'; 
    };

    parentFunc();
    // Log D: myName
    console.log('D: ' + myName); 

    const result = [
      { A: 'Rody' }, 
      { B: 'RodyToy' },
      { C: 'Tesla' },
      { D: 'RodyToyDaniels' }
    ];
    return result;

    // Annotation:
    // First, we declare a global var called myName with a value of 'Rody' and log it.
    // Then we skim over a fn def and then call it and jump in, where we first add 'Toy' to the end of our global var value and log it.
    // Then we define and run another inner fn that sets a new local var of myName ('Tesla') and logs it.
    // After the inner fn runs, we add 'Daniels' to the end of the same global var value.  
    // After the outer fn runs, we log the current value of the global var that has all those additions now.
  }
};

module.exports = scope;