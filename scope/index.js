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

    // Annotation:
    // LogA, at this point, is Ben because we have not manipulated personB at this point within the function.
    // LogB is CardiB because we have overridden personB with the if block beginning on line 16.
    // LogC is still CardiB because overriding personC to personA doesn't change the value of personB
    // LogD is now Paul because we overrode the value of personC with personA on line 23.
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

    // Annotation:
    // LogA is 75 because we are reassigning the value on 46 within our function
    // LogB is 64 because we have reassigned the value on line 55
    // LoC is 64 because we are still within out numberFunction function
    // LogD is 30 because we haven't maniupulated the globally scoped variable.
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

    // Annotation:
    // LogA is Yo because we have reassigned our greeting on line 83
    // LogB is Hey because we reassign the value with our newPhrase function
    // LogC is Hey because we are still within our newPhrase function
    // LogD is Hello because we are referring to the globally scoped variable
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
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name
 
    const result = [{C:'Brittany'}, {A:'Nathaniel'}, {B:'Nathaniel'}, {D:'Brittany'}];
    return result;

    // Annotation:
    // LogA is Brittany because we haven't dived into our function yet and is still referring to our global variable.
    // LogB is Nathaniel because we are still within our sayName function and have reassigned our variable on line 156
    // LogC is Nathaniel because we are still within our sayName function and have reassigned our variable on line 156
    // LogD is Brittany because we are calling it after our function and is still referring to our global variable.
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

    // Annotation:
    // Write your annotation here as a comment
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

    const result = [{A:4}, {D:9}, {E:10}, {B:9}, {C:4}];
    return result;

    // Annotation:
    // LogA
    // LogD
    // LogE
    // LogB
    // LogC
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

    // Annotation:
    // LogA is initially 75 because after we define the function eatSnack, we have taken 25 off our original number
    // LogB is 0 because we have reset the value of hunger to 0 within out eatSnack function.
    // LogC is 75 because we are still inside our eatSnack function but it hasn't looped or reran so the value is the same as when we evaluated the value of LogA, so it is 75.
    // LogD is 80 because we have added 5 to our hunger after running eatSnack for the first time.
    // LogA is called again before LogE because we are calling the eatSnack function a second time. in this instance, LogA is now 55 because we have taken 25 off 80 (because we have added 5 to our hunger of 75).
    // LogB is called again and is again 0 because we have reset the value of hunger to 0 within our eatSnack function.
    // LogC is called a second time and has the value of 55 for the same reason that C matched the value of A in the first loop--we are still within the same function that hasn't looped.
    // LogE is finally called and it has the value of 55 because we reassigned the value of hunger within our function, therefore changing it on a global level.
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

    const result = [{A:'ketchup sandwich'}, {D:'gouda'}, {B:undefined}, {C:'not a mediocre sandwich'}, {E:'not a mediocre sandwich'}, {F:'National Treasure'}];
    return result;

    // Annotation:
    // LogA is ketchup sandwich because we have defined the variable immediately within our exerciseJ
    // LogD is called next because we run the addCheese function next, we have created a new variable of cheeseTopping and it logs gouda because we have defined it to do so
    // LogB is next and evaluated to undefined because we have yet to define the toppings variable and it has not been seen up to this log
    // LogC evaluates to not a mediocre sandwich as we have just redefined the variable of sandwich to do so within our conditional. We are reassigning the value here rather than creating a new variable, indicated by the lack of var, const, or let
    // LogE logs not a mediocre sandwich because the addChipotle function has just finished and reassigned the value according to the log above
    // LogF evaluates to national treasure because we have defined the variable amandaBynes to do so within our shesTheManReference which is wihtin our addCheese function, which has just completed running.
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

    // Annotation:
    // LogA is 7 because we have reassigned our vairable to 7 within our foo function. 
    // LogB is also 7 because we reassigned the variable above and never manipulated it further.
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

    // Annotation:
    // LogA is 95 because we are creating a variable that is only accesiable within the conditional above, therefore the log of A is looking for the value we have assigned right under addPoints, not in the conditional following.
    // LogB is 90 because we have ran our addPoints funciton and because we created a different variable with the use of const, our log is looking for the variable that was reassigned in losePoints()
    // LogC is 90 because we have ran our losePoints function and when the addPoints function ran, we created wholly new variables, so our variable reassingment withint our losePoints function will stay after it's been ran 
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

    // Annotation:
    // LogA is 5 because we know we are simply reassigning the value of num on the line below, we didn't create a new variable with a potentially different value. If we had used let, const, or var it would become a reference error as show in LogC.
    // LogB is 6 because we are reassigning the value of num above the log
    // LogC is reference error because when we get to our execution phase and try to log the value of num, we're looking for our new variable that was declared with let but because we only take the label and not the value during our creation, and we haven't defined it yet during our execution, so, it's a reference error.
    // LogD is 6 because we reassigned the value of num during our first function and created a different variable during our second function, not manipulating the value from first().
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

    const result = [{E:'Pam'}, {A:'Pam'}, {B:'Pam'}, {C:'Louisa'}, {D:'Louisa'}, {F:'Louisa'}];
    return result;

    // Annotation:
    // LogE is first because we look for that before invoking the changeInstructor function. It evaluates to Pam because it looks at our "global" variable's value within our exerciseN()
    //LogA is next and evalutes to Pam because we haven't maniupated or taken in a new value for instructor since delcaring our variable initaially
    //LogB is Pam again because the conditional will never run
    //LogC is Louisa because we have just declared a new value for instructor with our rename function. Since we don't use let, const, or var, we are reassigning the value rather than creating a new one
    //LogD is Louisa because our rename function just ran and we reassigned the value rather than having a functionally scoped variable by having used let, const, or var.
    //Log F is Louisa again because our rename function is called at the end of our changeInstuctor function, and we reassigned the value, therefore the value would ideally be Louisa from now until it was reassigned or manipulated
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

    // Annotation:
    // LogB is flipflop because we are looking for the value of flipflop before calling the putOnShoe function, so we are looking at our variable that has a "global" value within exercsieO.
    //LogA is undefined because we have declared a different variable within our putOnShoe function and took the label in during our creation phase. We are now looking for the value but because we have yet to define it, we are returning undefined
    // LogC is flipflop because are looking at our global variable's value
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

    const result = [{B:'soup'}, {C:'soup'}];
    return result;

    // Annotation:
    // we only log B and C here because we never originally set a value to lunch, therefore when we get to the function orderLunch and try to dive into our first conditional, we can't because the value of lunch is false or null at this point.
    // we can then log B and C as soup because we get into the second conditional and redefine lunch as soup.
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

    const result = [{A:'Pandora'}, {B:['Antigone', 'Pandora']}, {C:'Mandy'}, {D:'Antigone'}, {E:'Pandora'}];
    return result;

    // Annotation:
    // LogA is Pandora because we are passing Pandora through as a parameter for our myCrazyKidAntics function.
    // LogB is an array of Pandora and Antigone because we have pushed Pandora into our myKids array.
    // LogC is Mandy because we have a new variable of myKid and assigned it to Mandy
    // LogD is Antigone because when we shift an item out of an array we can set it to the variable, which is what we have done here.
    // LogE is Pandora because we are referring to the original myKid variable set right within the function.
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

    const result = [{A:'Rody'}, {B:'RodyToy'}, {C:'Tesla'}, {D:'RodyToyDaniels'}];
    return result;

    // Annotation:
    // LogA is Rody because we have defined myName right above that.
    // LogB is RodyToy because we are using a "+=" rather than simply reassigning the value
    // LogC is Tesla because we are reassigning the value of myName to Tesla within our innerFunc function
    // LogD is RodyToyDaniels because of the same logic as LogB, the += right below inner func adds Daniels. We are reassigning the value within exerciseR because we don't use a different variable name
  }
};

module.exports = scope;