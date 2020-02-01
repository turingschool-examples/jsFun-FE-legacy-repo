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

    const ship = new SpaceProbe("voyager", "classy");

    // What is the value of `this` when we call ship.fly()?
    const result = "global window object";
    return result;

    // Annotation:
    // this will reference the global window object because ship has a property called fly that references a global es6 arrow function. The context of an arrow function is set upon declaration, not invocation, and therefore, even though we are invoking fly as a method on ship, ship's fly property holds reference to the fly function that was defined as a global es6 arrow function, and the this value that was assigned when fly was declared.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation:
    // The value of this is the global window object because fn is a global function. The default binding of this in non-strict mode is the global window object. fn was invoked in the global namespace and therefore its this value is by default the global window object.
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function() {
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = "el";
    return result;

    // Annotation:
    // When attaching a handler function to an element using addEventListener(), the value of this inside the handler is a reference to the element. Therefore, when I invoke the car object's getInfo method, the value of this is referencing the el object, which is an HTMLElement object.

    // TODO: Why is this? Due to implicit binding, I expected the most immediate member reference to the left of the dot to be the call site of the method. This must mean that the call-site is actually the el variable. This must mean that the reference to car.getInfo is simply just that, a reference to a function, and that function's call-site is the el object.
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function() {
        const innerFunction = function() {
          console.log(this.breed);
        };

        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = "global window object";
    return result;

    // Annotation:
    // this is referencing the global window object. The getBreed method of the dog object simply returns a function definition and it is stored in the variable result. As the result variable is global and it's context is the global window object, and the innerFunction is an es5 function, the call-site will determine the value of this. Therefore, if we were to invoke result(), the value of this would be the global window object, because the default this binding is being applied.

    // This is confusing because it appears that the call-site is dog however dog.getBreed only returns its inner function, it doesn't invoke the inner function, therefore it is not the call-site.
  },

  exerciseE() {
    const fn = () => {
      value = 21;
      return this.value;
    };

    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation:
    // The value of this is the global window object because fn is an arrow function and arrow functions lexically bind the value of this implicitly upon declaration. As fn was declared in the global namespace, it's this value references the globcal window object.
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

    const storm = new Hero("Ororo", "weather control", true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = "instance of Hero";
    return result;

    // Annotation:
    // the value of this is an instance of Hero, which is the object storm. When a function is called using the new operator, it is calling a constructor function. When a constructor function is called, the newly instantiated object is set as the this binding for that function call. Therefore, this inside the constructor function refers to the new instance, which in this case is the object storm.

    // storm is the value of this, it is an object, and also an instance of the Hero class
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log("Clearing the board and starting over");
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game("Monopoly");

    // What is the value of `this` when we call monopoly.restart()?
    const result = "global window object";
    return result;

    // Annotation:
    // the value of this is the global window object because setTimeout is a method of the WindowOrWorkerGlobalScope mixin (essentially, window object). Therefore, the call-site of the callback function passed to setTimeout, which in this case is an es5 function (whose context is set at invocation), is the global window object. So even though restart is a method of the instance of class Game, and I am invoking restart on my class instance, the actual call-site of this method's invocation is not the instance monopoly, but the global window object, because setTimeout is the call-site.
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
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    const poets = [
      {
        name: "Sappho"
      },
      {
        name: "Maya"
      },
      {
        name: "Emily"
      },
      {
        name: "Audre"
      }
    ];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    const el = $("#btn");
    el.on("click", function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment.
  },

  exerciseK() {
    var store = {
      fruit: "grapes",
      sellMe: function() {
        return this.fruit;
      }
    };

    // What is the value of `this` when we call store.sellMe()?
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment.
  },

  exerciseL() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function() {
        var _this = this;

        setTimeout(function() {
          console.log("Your dog is a " + _this.breed);
        });
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    const robert = {
      name: "Bobo",
      occupation: "instructor"
    };

    const william = {
      name: "will",
      occupation: "instructor"
    };

    function makeBirdNoise() {
      console.log("My name is " + this.name + " ... caw! caw!");
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000);
      }

      makeNoise() {
        console.log("caw, caw");
      }
    }

    var firstBird = new Bird("Calvin", "budgie");

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    const button = document.querySelector("#submit");

    button.addEventListener("click", () => {
      console.log(this);
      this.classList.toggle("on");
    });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?
    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    const child = {
      totalScreams: 4,
      scream: () => {
        this.totalScreams++;
      }
    };

    const result = "REPLACE WITH YOUR RESULT HERE";
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = context;
