const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' will reference the global window object because 'this' is first created using an arrow function, in this case, with the fly function. Since arrow functions are a part of ES6, 'this' is set when the function is created.  Since the fly function is not a method on an object and is used AFTER the initialization of fly on the SpaceProbe class, 'this' will refer to the global window object. 

  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // 'this' will reference  the global window object because exerciseB creates a new function using ES5 that references 'this', however, since it is written using ES5 - 'this' won't be set until the function is called. In exerciseB, the function fn() hasn't been called yet, which is why 'this' refers to the global window object.
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // 'this' is in reference to the constant el. For this example, 'this' refers to the object that the method addEventListener function is applied to. This example uses ES5, whereby 'this' is set when the function is EXECUTED on line 50. 
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    }; 


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' will reference the global window object. In this example, 'this' is set using ES5 when the function is called on line 68 - since the innerFunction has parens at the end. Since this is called before we have a chance to apply the getBreed method on the dog object, 'this' refers to the global window object. ** Functions within functions lose reference to this without any type of binding (adding this at the end with a comma), so it defaults to the global window object
    
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' refers to the global window object because it lives in the global space. It isn't a function as a method on an object, and it is not used with new operator. 
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
  //  This refers to the instance of Hero (which is storm) as this follows rule 3 - this in function code invoked using the new operator (on line 111) refers to the newly created object  
  
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' refers to the global window object because it is called within another function within the restart method. Since this is not a method on the Game object, it lives within its execution context, so this defaults to the global object window. 
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // 'this' refers to obj because it utilizes ES6 syntax when it reassigns the arrowFunction property (line 152) to an actual arrow function. In ES6, once the arrow function is declared, 'this' is set, and in this example, 'this' will refer to the obj object.
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // 'this' refers to the poets object because poets is used as the thisArg as the second argument in the map prototype. The thisArg is the value to use as 'this' when executing the callback (which is on line 181). 
    
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // 'this' refers to el as outlined by rule two. It is part of the .on method which is associated with el, which is an object on the dom. 
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    }); 

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }

};

module.exports = context;