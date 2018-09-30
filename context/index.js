const context = {
  exerciseA() {

    const fly = () => {
      console.log(this);
    }

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');

    ship.fly(); // What is logged?

    const result = {
      title: 'voyager',
      classification: 'classy',
      fly() { console.log(this); }
    };

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  exerciseB() {

    function fn () {
    const value = 2;
      return this.value;
    }
    
    const result = fn();

    return result;

  },
  exerciseC() {

    const car = {
      make: "Tesla",
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    const result = el.addEventListener("click", car.getInfo);

    // simulate button click in testing

    return result;

    // Annotation: 
    // Write your annotation here as a comment

  },
  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function(){
        const innerFunction = function(){
        console.log(this.breed);
      };
    
      return innerFunction();
      }
    };

    const result = dog.getBreed();

    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },
  exerciseE() {

    const fn = () => {
      value = 21;
      console.log(this);
    }

    const result = fn();

    return result;

    // Annotation: 
    // Write your annotation here as a comment
  },

  ExerciseF() {

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
    const result = storm.identifyHero();

    return result;

    // Annotation: 
    // Write your annotation here as a comment
  }

};

module.exports = context;