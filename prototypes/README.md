# Understanding Prototype Methods

Understanding how to use prototype methods is an important step in learning how to work with application data. As you build more complex applications, you'll find yourself working with very large datasets. These datasets might need to be massaged into new formats or connect to other sources of data. Prototype methods will give you the tools to accomplish these tasks.

In order to be successful when working with prototype methods, you'll need to have a solid understanding of the following concepts:

* dot vs. bracket notation - when, why, and how to use each
* mutator vs. accessor vs. iterator methods
* the main characteristics of each prototype method:
  * what it does
  * what arguments it takes in
  * what it returns

# Instructions

In the [prototypes/index.js](https://github.com/turingschool-examples/jsFun/prototypes/index.js) file, you'll see several objects named after a collection of prompts that need to be solved. Each prompt is represented by a separate method on that object. 

For example, the first object of prompts is called `kittyPrompts` and coincides with the dataset at `prototypes/datasets/kitties.js`. As you work through the methods on this object, it will help to switch your text editor layout to display 2 files at once - one for the dataset you're working with, and one for the prompts to be solved.

Each prompt has an explanation of how the dataset should be manipulated, and what the final output should look like. 

For example, given the following dataset and prompt:

```js
// dataset/farm.js

const animals = [
  { name: 'cow', sound: 'moo', count: 30 },
  { name: 'chicken', sound: 'cluck', count: 10 },
  { name: 'sheep', sound: 'baah', count: 20 }
];

module.exports = {
  animals
};


// prototypes/index.js
const { animals } = require('./datasets/farm');

const farmPrompts = {
  totalFarmAnimals() {
    // Return a single number that represents the
    // total amount of animals on the farm. e.g.
    // 50

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
}


```


Your solution should look something like the following:

```js
// prototypes/index.js
const { animals } = require('./datasets/farm');

const farmPrompts = {
  totalFarmAnimals() {
    // Return a single number that represents the
    // total amount of animals on the farm. e.g.
    // 50

    const totalAnimals = animals.reduce((total, animal) => {
      return total += animal.count;
    }, 0);

    return totalAnimals;

    // Annotation:
    // Because we are given an array, and want a single number back,
    // we will reach for the `reduce` method since it is the only one
    // that allows us to return a value of any data type. On each iteration
    // of reduce, we will add our current animal's `count` value to the 
    // accumulator which will be returned when the iteration is complete.
  }
}
```
You will then check that your solution is correct by running the corresponding test in `test/prototype-test.js`.

If you'd like to keep track of your progress, feel free to use the checklist below"
## Prototype Test Checklist

#### Single Data Sets
- [ ] kitties [][][]
- [ ] puppers [][][]
- [ ] club []
- [ ] mods []
- [ ] cakes [][][][][]
- [ ] classrooms [][][]
- [ ] books [][]
- [ ] weather [][][]
- [ ] nationalParks [][][]
- [ ] breweries [][][]

### Double Data Sets
- [ ] turing (instructors, cohorts) [][][][]
- [ ] bosses (bosses, sidekicks) []
- [ ] astronomy (constellations, stars) [][][]
- [ ] ultima (weapons, characters) [][]

#### Triple Data Sets
- [ ] dinosaurs (dinosaurs, humans, movies) [][][][]


# Resources
* [MDN - Array Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)
* [MDN - Object Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)
* [Turing Prototype Methods Lesson Plan](http://frontend.turing.io/lessons/module-2/arrays-objects/index.html)
