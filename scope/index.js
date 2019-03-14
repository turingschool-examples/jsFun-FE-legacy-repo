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
        // 1st Ben
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
          // 2nd CardiB
        }
      }

      personC = personA;
      // Log C: personB
      //3rd CardiB
    }

    changePerson();
    // Log D: personC
    //4th Paul

    const result = [
      {A: 'Ben'},
      {B: 'CardiB'},
      {C: 'CardiB'},
      {D: 'Paul'},
    ];

    return result;

    // Annotation:
//     In the first pass the declarations of personA, personB, and personC are all stored in global memory as well as changePerson and beautifyPerson and their definitions.
// personA  is assigned to ‘Paul’
// personB is assigned to ‘Ben’
// personC is assigned to ‘Tom’
// changePerson is invoked
// personA is Paul so it is reassigned to CardiB, changing its’ value on the current scope and global scope
// beautifyPerson is invoked
// personB is logged and its’ has not changed so it is still ‘Ben’
// personB includes a ‘B’ so personB is reassigned to person which was declared as CardiB in the parent scope
// personC is reassigned to personB which is now CardiB
// personC is logged as CardiB
// Still inside the function of changePerson, personC is reassigned to personA which is becomes Paul and is declared in the function scope and the global scope
// personB is logged still as CardiB
// The function is complete and the final log of personC is logged as Paul which was just reassigned in the function changePerson.
// The results are returned.
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number
      // 1st 75

      function newNumber() {
        number = 64;

        // Log B: number
        // 2nd 64
      }

      newNumber();

      // Log C: number
      //3rd 64
    }

    numberFunction();

    // Log D: number
    //4th 30

    const result = [
      {A: 75},
      {B: 64},
      {C: 64},
      {D: 30}
    ];
    return result;

    // Annotation:
    // In the first pass the declarations of number as well as numberFunction and newNumber and their declarations are stored in global memory.
    //number is assigned the value of 30
    // The numberFunction is invoked
    // number is assigned to 75 only in the function block
    // Since number is 75, it is assigned 25 only in the if statement block
    // number is logged as 75 for the first log since it is still in the function block
    // newNumber is invoked
    // In newNumber number is reassigned to 64 in the function scope and logged as 64
    // The function newNumber is complete and the third log logs number as the reassigned value of 64
    // The function numberFunction is complete and the fourth log logs greeting as at the global value of 30 since greeting inly had the value of 64 inside the function scope
    // The results are returned
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting
      // 1st Yo

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
        // 2nd Hey
      }

      newPhrase();

      // Log C: greeting
      // 3rd Hey
    }

    greetingFunction();

    // Log D: greeting
    // 4th Hello

    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'},
    ];
    return result;

    // Annotation:
    //     In the first pass the declaration of greeting and greetingFunction and newPhrase and its definitions are stored in global memory
    // greeting is assigned a value of ‘Hello’
    // The greetingFunction is invoked
    // greeting is reassigned to ‘Yo’ on the function and global scope using var
    // Since greeting has a value of ‘Yo’, it is reassigned to ‘Howdy’ in the if statement block
    // The first log logs ‘Yo’ since it is outside the if statement and the variable has been reassigned to the function and global scope
    // The function newPhase is invoked
    // greeting is reassigned to ‘Hey’ and logged as ‘Hey’
    // The function is complete
    // The third log return ‘Hey’ as well since the variable has been reassigned inside the function scope
    // The function is complete and greeting is logged as it’s global value of ‘Hello’
    // The results are returned
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting
      // 1st hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
        //2nd welcome
      };

      newGreeting();

      // Log C: greeting
      // 3rd welcome
    };

    greetingGenerator();

    // Log D: greeting
    //4th howdy

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'},
    ];
    return result;

    // Annotation:
    //In the first pass the declaration of greeting and greetingGenerator and newGreeting and its definitions are stored in global memory
   // greeting is defined as 'howdy'
   //greetingGenerator is invoked
   //greeting is assigned to 'hi' inside the function scope
   //greeting is 'hi' so it is reassigned to 'hello' inside the if statement block scope
   //The first log logs greeting as 'hi' since 'hello' only existed inside the if statment scope
   //newGreeting is invoked
   //greeting is reassigned to 'welcome' inside the function scope
   //The secind log logs greeting as 'welcome'
   //The third log logs greeting as 'welcome' since the thrid log is still inside the function scope
   //greetingGenerator is complete
   //The fourth log logs greeting as 'howdy', the global value since the other values of greeting were defined in block scope and only existed inside the function
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
        //2nd Nathaniel
      }

      // Log B: name
      //3rd Nathaniel
    }

    // Log C: name
    // 1st Brittany

    sayName();

    // Log D: name
    //4th Brittany

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'},
    ];
    return result;

    // Annotation:
    // In the first pass the declaration of name and sayName and its definitions are stored in global memory
    //name is defined as 'Brittany'
    //The first log (log C) logs name as its' global value of 'Brittany'
    //sayName is invoked
    //name is assigned to 'Pam' in the function scope
    //Since name is 'Pam' it is reassigned to 'Nathaniel'
    //The length of name is greater than 0 so it becomes 'Brittany' but only in the if statement block scope
    //The second log (log A) is 'Nathaniel' since the log is in the function
    //The third log (log B) is 'Nathaniel'since th log is also inside the function were name is reassigned to 'Nathaniel'
    //sayName is complete
    //The fourth log (log D) is outside the function and logs the global variable value of 'Brittany'
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog
      //1st Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog
        // 2nd Spot

        dog = 'Biscuit';

        // Log C: dog
        //3rd Biscuit

      }

      rollOver();

      // Log D: dog
      // 4th Biscuit
    }

    petDog();

    // Log E: dog
    //5th Biscuit

    const result = [
      {A: 'Spot'},
      {B: 'Spot'},
      {C: 'Biscuit'},
      {D: 'Biscuit'},
      {E: 'Biscuit'},
    ];
    return result;

    // Annotation:
    //In the first pass the declaration of dog and petDog and rollOver and their definitions are stored in global memory
    //dog is defined as 'Spot'
    //petDog is invoked
    //The first log (log A) logs the global value of 'Spot'
    //dog has the value of 'Spot' so it becomes 'Fluffy' in the if statement block scope
    //The rollOver function is invoked
    //dog has not been reassigned a value in the function scope so the second log (log B) is 'Spot'
    //dog is reassigned to 'Biscuit' inside the function scope and globally
    //The thrid log (log C) is 'Biscuit'
    //The fourth log (log D) is also 'Biscuit'
    //The function is complete
    //The fifth log (log E) is now 'Biscuit' becuase the global variable that was reassigned was declared with var so reassigning it in the function also reassigned it on the global scope
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          // 1st ref error
          const fruit = 'strawberry';
        }

        // Log B: fruit
        //2nd mango
      }

      // Log C: fruit
      // 3rd mango
    }

    eatFruit();

    // Log D: fruit
    // 4th apple

    const result = [
      {A: 'reference error'},
      {B: 'mango'},
      {C: 'mango'},
      {D: 'apple'},
    ];
    return result;

    // Annotation:
    //In the first pass the declaration of fruit and eatFruit and its' definitions are stored in global memory
    //eatFruit is invoked
    //The first if statement is true so fruit is assigned to 'mango' on a function scope
    //The first log (log A) logs fruit as a reference error because JS know there is a variable of fruit being defined in the if statement block, so it does not go up the scope chain and simply declares a reference error. This is called the temporal dead zone.
    //fruit is reassigned to 'strawberry' only in the if statement block scope
    //The second log (log B) logs fruit as 'mango' becuase it has been reassigned in function scope
    //The third log (log C) also logs 'mango'becuase it has been reassigned in function scope
    //The eatFruit function is complete
    //The fourth log (log D) logs fruit as 'apple' becuase it has not been reassigned on the global scope
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num
      //1st 4

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
        //4th 9
      }

      newNum = num;

      // Log C: newNum
      //5th 4
    };

    const fn2 = function(num){
      // Log D: num
      //2nd 9

      num = num + 1;

      // Log E: num
      //3rd 10
    };

    fn1();

    const result =  [
      {A: 4},
      {D: 9},
      {E: 10},
      {B: 9},
      {C: 4},
    ];
    return result;

    // Annotation:
    // In the first pass the declaration of num and fn1 and fn2 and their definitions are stored in global memory
    //num is defined as 6
    //The fn1 function is invoked
    //num is reassigned to 4 in the function scope
    //The first log (log A) is logged as 4
    // The if statement is true so num is assigned the value of 9 only inside the if statement block scope
    //The fn2 function is invoked
    //The second log (log D) logs num as 9 since num is passed through the function
    //num is reassigned to num plus 1 which becomes 10
    //The thrid log (log E) logs num as 10
    //The fn2 function is complete
    //Back inside the if statement in fn1, newNum is assigned the value of num which is 9 inside the if statement
    //The fourth log (log B) logs 9
    //newNum is reassigned to num outside the if statement block but inside the function so newNum takes on the value of 4
    //The fifth log (log C) logs 4 as the log is inside the function scope.
  }

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      //1st 75
      //5th 55
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
        //2nd 0
        //6th 0
      }

      // Log C: hunger
      //3rd 75
      //7th 55
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger
    //4th 80

    eatSnack();
    // Log E: hunger
    //8th 55

    const result = [
      {A: 75},
      {B: 0},
      {C: 75},
      {D: 80},
      {A: 55},
      {B: 0},
      {C: 55},
      {E: 55},
    ];
    return result;

    // Annotation:
    // In the first pass the declaration of hunger and eatSnack and gorgeYourself and their definitions are stored in global memory
    //hunger is defined as 100
    //The eatSnack function is invoked
    //hunger is reassigned the value of 100 - 25, 75
    //The first log (log A) logs 75
    //The gorgeYourself function is invoked
    //hunger is assigned to 0 in the function scope of gorgeYourself
    //The second log (log B) logs 0
    //The function gorgeYourself is complete
    //The third log (log C) logs 75 as hunger is defined in the function scope as 75
    //hunger is reassigned to 75 + 5, 80 on a global scope
    //The fourth log (log D) logs 80
    //The eatSnack function is invoked
    //hunger is 80 but becomes 55 in the function eatSnack
    //The fifth log (log A), logs 55
    //The gorgeYourself function is invoked
    //hunger is reassigned to 0
    //The sixth log (log B) logs 0
    //The seventh log (log C) logs 55, the value hunger was reassigned to in the function and global scope since it was originally declared using var
    //The eatSnack function is complete
    //The eigth log (log E) logs hunger as 55
    //The result is returned
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich
    //1st ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings
      //3rd undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') {
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
      //4th not a mediocre sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping
      //2nd gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    //5th not a mediocre sandwich
    // Log F: amandaBynes
    //6th national treasure


    const result =  [
      {A: 'ketchup sandwich'},
      {D: 'gouda'},
      {B: undefined},
      {C: 'not a mediocre sandwich'},
      {E: 'not a mediocre sandwich'},
      {F: 'National Treasure'},
    ];
    return result;

    // Annotation:
    // In the fist pass the declaration of sandwich and addCheese and addChipotle and their definitions are stored in global memory
    //sandwich is declared as 'ketchup sandwich' on global scope
    //The first log (log A) logs 'ketchup sandwich'
    //The addCheese function is invoked
    //cheeseTopping is assigned to 'gouda' inside the function scope
    //The second log (logD) logs 'gouda'
    //The shesTheManReference function is invoked
    //amandaBynes is assigned the value of 'National Treasure' inside the numberFunction
    //The addCheese function is complete
    //The addChipotle function is invoked
    //The third log (log B) logs undefined becuase toppings is defined below the console log, this it has not been defined yet
    //toppings is then defined as 'chipolte sauce'
    //the if statement is true so sandwich is reassigned to 'not a mediocre sandwich'
    //The fourth log (log C) logs 'not a mediocre sandwich'
    //The addChipotle function is finished
    //The fifth log (log E) logs 'not a mediocre sandwich' as the global value of sandwich was reassigned inside the numberFunction (when it was reassigned const nor let were used to declare the value, which would have created a block scope for the reassignment)
    //The sixth log (log F) logs the assigned value of amandaBynes, 'National Treasure'
    //The results are returned
  },


  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
      //1st 7
    }

    foo();

    // Log B: num
    //2nd 7

    const result = [
      {A: 7},
      {B: 7}
    ];
    return result;

    // Annotation:
    // In the fist pass the declaration of num and foo and its' definitions are stored in global memory
    //num is assigned the global value of 10
    //The function foo is invoked
    //The if statement is true so num is globally reassigned to 7
    //The first log (log A) logs 7
    //The foo function is comeplete
    //The second log (log B) logs 7, the new value of num on the global scope
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
        //1st 95
      }

      addPoints();

      // Log B: grade
      //2nd 90
    }

    losePoints();

    // Log C: grade
    // 3rd 90

    const result = [
      {A: 95},
      {B: 90},
      {C: 90}
    ];
    return result;

    // Annotation:
    // In the fist pass the declaration of grade and losePoints and addPoints and their definitions are stored in global memory
    //grade is assigned to 100
    //The function losePoints is invoked
    //grade is reasigned to 90 on the global scope
    //The addPoints function is invoked
    //grade is assigned to 95 in the function block scope
    //The if statement is true and grade is reassigned to 97 in the if statement scope
    //The first log (log A) logs 95 as the log is outisde the if statement block scope but inside the function scope
    //The addPoints function is comeplete
    //The second log (log B) logs 90 as that is still the function value of the losePoints numberFunction
    //The losePoints function is comeplete
    //The third log (log C) logs 90 as the global variable was reassigned to 90 via the function losePoints
    //The results are returned

  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      //1st 5
      num = 6;
      // Log B: num
      //2nd 6
    }

    function second() {
      // Log C: num
      //3rd ref error
      let num = 7;
    }

    first();
    second();

    // Log D: num
    //4th 6

    const result = [
      {A: 5},
      {B: 6},
      {C: 'reference error'},
      {D: 6}
    ];
    return result;

    // Annotation:
    // In the first pass the declaration of num and first and second and their definitions are stored in global memory
    //num is assigned the value of 5
    //The first function is invoked
    //The first log (log A) logs 5 since num has been defined on the global scope
    //num is reassigned on a global scope to 6
    //The second log (log B) logs num as 6
    //The first function in comeplete
    //The second function is invoked
    //The third log (log C) logs num and there is a reference error becuase it knows num is being defined below the log and so it cannot refer to it's value yet
    //num is assigned to 7 in the function scope
    //The second function is comeplete
    //The fourth log (log D) logs num as 6 as the global variable was reassigned to 6 in the first function
    //The results are returned
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor
      //2nd Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor
      //3rd Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
        //4th Louisa
      }

      rename();

      // Log D: instructor
      //5th Louisa

    }

    // Log E: instructor
    //1st Pam

    changeInstructor();

    // Log F: instructor
    //6th Louisa

    const result =  [
      {E: 'Pam'},
      {A: 'Pam'},
      {B: 'Pam'},
      {C: 'Louisa'},
      {D: 'Louisa'},
      {F: 'Louisa'},
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      //2nd undefined
      var shoe = 'boot';
    }

    // Log B: shoe
    //1st flipflop

    putOnShoe();
    // Log C: shoe
    //3rd flip flop

    const result = [
      {B: 'flipflop'},
      {A: undefined},
      {C: 'flipflop'}
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
        //1st dne
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
      // 2nd soup
    }

    orderLunch();

    // Log C: lunch
    //3rd soup

    const result = [
      // {A: undefined},
      {B: 'soup'},
      {C: 'soup'}
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
      //1st Pandora
      wildKids.push(kid);
      // Log B: wildKids
      //2nd ['Antigone','Pandora']

      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        //3rd Mandy
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        //4th Antigone
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      //5th Pandora
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
    // Log A: myNameB ng
    //1st Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName
      //2nd RodyToy

      let innerFunc = () => {
        let myName = 'Tesla';
        // Log C: myName
        //3rd Tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName
    //4th Tesla Daniels

    const result = [
      {A: 'Rody'},
      {B: 'RodyToy'},
      {C: 'Tesla'},
      {D: 'RodyToyDaniels'},
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;
