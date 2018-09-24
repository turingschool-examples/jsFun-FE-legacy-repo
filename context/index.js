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
  }
};

module.exports = context;