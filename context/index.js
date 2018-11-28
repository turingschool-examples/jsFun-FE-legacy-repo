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
    // The value of this is the global window object because when using arrow functions, the value of this is set when the function is created. In this example, the arrow function is created and this is set when the variable fly is declared, which happens before the object instance ship is created.
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
    // This refers to the global window object because the function fn is called on the window object. There is no other object that contains the function.
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
    // This refers to the HTML button element el because the getInfo method of the car object is an anonymous function, which means that this is not identified until the function is invoked. The function is invoked later, within the event listener. Since el is the owner function car.getInfo in the click event listener, this refers to that object el.
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
    // This refers to the global window object because the method getBreed of object dog uses anonymous functions. Therefore this is not defined until the method getBreed is called outside of the object dog, where the window is the context.
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
    // This refers to the global window object because the arrow function fn is not a method of another object. Therefore the function fn is a method of the window object by default.
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
    // This refers to the object instance storm of the class Hero. When the new keyword is used to call the constructor function, this is assigned to the new object storm.
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
    // This refers to the global window object even though the function restart is a method of the class Game because this is used within an anonymous function. Within an anonymous function, this is not set until the function is invoked, which occurs later when the context is now the window.
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
    // This refers to the object obj. Since this is referenced inside of an arrow function, this is set when the arrow function is created, which is within the object obj. When obj.method() is called, the anonymous function is run that assigns an arrow function to the property arrowFunction which allows us to call this using obj.arrowFunction() and returns the object obj because this was set at the creation of the arrow function to the method arrowFunction.
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
    // This refers to the object poets on each iteration because poets is passed as an additonal thisArg argument in the forEach prototype of poets. So even though a callback function is used, this is given a new reference in prototype that the function can use to assign this.
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
    // This refers to the HTML button element el because this is used within a click event listener in which the owner of the event listener is el. Since an anonymous function is used, the reference for this is not assigned until the function is called on the click event.
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // This refers to the global window object because it is within an arrow function. Therefore, this is set when the arrow function is created, not when the event is triggered, and there is set to the window object.
  }

};

module.exports = context;