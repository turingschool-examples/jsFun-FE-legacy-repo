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
      console.log (this.value)
    }
    
    const result = fn();

    return result;

  },
  exerciseC() {

    const car = {
      make: "Tesla",
      getMake: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    const result = el.addEventListener("click", car.getMake);

    // simulate button click in testing

    return result;

    // Annotation: 
    // Write your annotation here as a comment

  },
  exerciseD() {

    const dog = {
      breed: "Chihuahua",
      getBreed: function() {
        const innerFunction = function(){
          console.log(this.breed);
      };
        return getBreed;
      }
    };

    const result = dog.getBreed();

    return result;

    // Annotation: 
    // Write your annotation here as a comment
  }

};

module.exports = context;