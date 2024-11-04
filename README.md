# jsFun

This repo contains practice exercises for solving data manipulation challenges using JS prototype methods. 

## Getting Started

- **Fork** this repo (do not clone),
- Clone your forked copy to your machine.
- `cd` into the directory for the project
- run `npm install`
  - When you run npm install you will see a message that mentions some vulnerabilities with options to fix those vulnerabilities.
  - 🛑 Do **NOT** fix those vulnerabilities.  Do NOT run `npm audit fix` or `npm audit fix --force`.  Using `--force` in a command is really forcing that command through in a way we want to avoid. Just ignore those vulnerabilities, they shouldn't impact your work. 

Check out [this video](https://vimeo.com/691112332/2a9ef1221c) for a walkthrough of the set up and first test!

## Running the Tests

To run the tests use:

`npm test`



## Understanding Prototype Methods

Understanding how to use prototype methods is an important step in learning how to work with application data. As you build more complex applications, you'll find yourself working with very large datasets. These datasets might need to be massaged into new formats or connect to other sources of data. A solid problem solving process and fluency using prototype methods will allow you to accomplish these tasks.

In order to be successful when working with prototype methods, you'll need to have a solid understanding of the following concepts:

* dot vs. bracket notation - when, why, and how to use each
* mutator vs. accessor vs. iterator methods
* the main characteristics of each prototype method:
  * what it does
  * what arguments it takes in
  * what it returns
* iteration - how do iterator methods let us look at each element one at a time and take neccesary action iteratively
* scope - how JS runs each line of code, in what order, where to place returns and console.logs, etc

## Assessment Prep Focus

🚨 You should expect to need the following methods on your midmod and final assessments:
- forEach
- filter
- reduce
- map
- sort
- includes
- split 
- join

Object.keys() **will not** be needed for your midmod or final assessments.

## Solidifying a Problem Solving Process

A benefit of this type of practice is that it can help you build a solid problem solving process that you can apply to any code challenge you encounter whether its ruby, JavaScript, familiar or unfamiliar.  Often, the biggest challenge in this type of work is not that you don't understand the prototype methods, but rather your problem solving process isn't polished enough for you to break down complex data and problems into small solvable steps.

### Problem Solving Process
1. Restate the goal in your own words. Take note of EXACTLY what the final output(s) should be.
1. Consider the data that you’re working with. What data types are you working with? Are there any parameters/arguments? What data in particular do you need access to?
1. Ask clarifying questions that you have about the goal and/or the data. Is there anything that still unclear? It is critical that you have a complete and accurate idea of the goal and data before you move on.
1. Pseudocode the steps needed to get to the goal. Write out your plan, with specific steps, in plain English. What will you need to do first? Then what?… Note: You may only be able to pseudocode out the first couple of steps - that’s okay! Plan out as much as possible now.
1. Research what you don’t know. Is there something you’ve noted in your pseudocode that you don’t know how to do? Take note of that and google.
Start coding by referencing the pseudocode you’ve written.
1. Stuck? Go back to step 4 and repeat steps 4-6 until you’ve reached your goal.
1. Refactor your code, if necessary. You should not be worried about writing the “best” code possible while solving the problem. Get it to work, then you can work on improving the code.
1. Make note of your approach and key learning you encountered

## Instructions

In the [prototypes/index.js](https://github.com/turingschool-examples/jsFUNk/prototypes/index.js) file, you'll see several objects named after a collection of prompts that need to be solved. Each prompt is represented by a separate method on that object. 

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

## Prototype Test Checklist
If you'd like to keep track of your progress, feel free to use the checklist below. Change the `[ ]` to `[x]` in order to check off each item.

#### Single Data Sets
- [ ] kitties
- [ ] puppers
- [ ] club
- [ ] mods
- [ ] cakes
- [ ] classrooms
- [ ] books
- [ ] weather
- [ ] nationalParks
- [ ] breweries
- [ ] boardGames

### Double Data Sets
- [ ] turing (instructors, cohorts)
- [ ] astronomy (constellations, stars)
- [ ] ultima (weapons, characters)

#### Triple Data Sets
- [ ] dinosaurs (dinosaurs, humans, movies)

### Object.keys Challenges (optional, not needed for assessment prep)
- [ ] bosses (bosses, sidekicks)
- [ ] astronomy II (constellations, stars)
- [ ] dinosaurs II (dinosaurs, humans, movies)


# More Practice
For more practice and assessment prep, check out [this extra-practice-se2-assessment-style repo](https://github.com/turingschool-examples/extra-practice-se2-assessment-style)


# Resources
* [MDN - Array Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)
* [MDN - Object Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)
<!-- * [Bracket and Dot Notation](<link needs added once SE version created>) -->


<!-- ## Pulling Down Repo Changes

You have now cloned your forked version of JSFun to your machine. As instructors make changes to the repo (adding exercises, fixing tests, changing problems, etc.) you'll need to pull down those changes. In order to do so, we must link your copy of JSFun on your machine to the Turing github version by adding a new remote repository.

In your terminal, from within the root of your JSFun project directory, run:

`git remote add turing https://github.com/turingschool-examples/jsFun.git`

If this command was successful, you should be able to run `git remote -v` and see something like the following:

```
origin  https://github.com/yourGithubUsername/jsFun.git (fetch)
origin  https://github.com/yourGithubUsername/jsFun.git (push)
turing  https://github.com/turingschool-examples/jsFun.git (fetch)
turing  https://github.com/turingschool-examples/jsFun.git (push)
```

Now, whenever instructors tell you to pull down changes, there are two steps:

1. Make sure you commit and push any changes you have currently made
2. Run `git pull turing main`

Check out [this video](https://vimeo.com/turing/review/388550182/34823726eb) if you need help pulling down new changes! -->

