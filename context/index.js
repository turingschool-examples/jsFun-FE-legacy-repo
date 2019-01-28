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
    // due to the arrow function on line 3 this refers to the global window so pretty much this is rules 3.
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
    // this refers to the object because the function is in the window and thats the parent of it 
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
    // 
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
    // because the function is not in the object but in another function it goes to rule three where it refers to the global window
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
    // because of the arrow function before its even invoke the this is already refer to the global window object
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
    // due to rule one the function will refer to the object that its in.
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
    // i dont know how this is the global window i thought this is suppose to be part of the object
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
    // due to this being in the a object the arrow function will refer to the whatever object is outside of it first
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
    // this is rule one because the method is within the object so yeah. 
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
    // Write your annotation here as a comment.
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
    // Write your annotation here as a comment.
  }

};

module.exports = context;