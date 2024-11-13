# jsFUNk

This repo contains practice exercises for solving data manipulation challenges using JS prototype methods. 

## Getting Started

- **Fork** this repo (do not clone),
- Clone your forked copy to your machine.
- `cd` into the directory for the project
- run `npm install`
  - When you run npm install you will see a message that mentions some vulnerabilities with options to fix those vulnerabilities.
  - 🛑 Do **NOT** fix those vulnerabilities.  Do NOT run `npm audit fix` or `npm audit fix --force`.  Using `--force` in a command is really forcing that command through in a way we want to avoid. Just ignore those vulnerabilities, they shouldn't impact your work. 

Check out [this video](https://youtu.be/-TTzFwsZX1c) for a walkthrough of how to work through these problem sets. *We recommend watching on 1.5 speed.*


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

Object.keys() will **not** be needed for your midmod or final assessments.

## Instructions

In the [prototypes folder](https://github.com/turingschool-examples/jsFUNk/prototypes), you'll see 3 subfolders.
* **prototypes/datasets**: 
  * Each dataset has already been imported into the files that need it.
* **prototypes/problem-sets**:  
  * These are the files where you will read each prompt and write your code.  
  * You'll use a node command to run your code in each file. The command is in each file. `node <each file path>`  
  * The function names are already exported/imported so that you can run the tests.  
* **prototypes/spicy-problem-sets**:  
  * More prompts that are advanced complexity. These are great for improving your ability to keep track of all the data points and do complex problem solving.  But they are more difficult than what you will see on assessments.  

In the [test folder](https://github.com/turingschool-examples/jsFUNk/test), you'll see the prototype-test.js file which holds the test suite for all problem-sets.

As you work on any given problem-set, you'll likely have 3 files open:  
* Prompt file where you will write the code.  
* Dataset file to see the data you're working with.  
* Test file to unskip and run the tests after you've worked through all the levels. *Note: The tests are written to be run after you've completed all the levels in each problem-set, some of which require refactoring. If you run the tests before you've completed the refactoring levels, they may not pass.*  

## Running the Tests

To run the tests use:

`npm test`

## Prototype Test Checklist
If you'd like to keep track of your progress, feel free to use the checklist below. You'll have to edit this README and change the `[ ]` to `[x]` in order to check off each item. 

### Single Data Sets
- [ ] kitties
- [ ] puppers
- [ ] club
- [ ] student
- [ ] task
- [ ] crafting
- [ ] plants
- [ ] sentence
- [ ] mods
- [ ] boardGames
- [ ] bosses
- [ ] cakes
- [ ] classrooms
- [ ] books
- [ ] weather
- [ ] nationalParks
- [ ] breweries

### Double/Triple Data Sets
- [ ] turing (instructors, cohorts)
- [ ] astronomy (constellations, stars)
- [ ] ultima (weapons, characters)
- [ ] dinosaurs (dinosaurs, humans, movies)


## Resources
* [MDN - Array Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)
* [MDN - Object Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)
* [Bracket and Dot Notation Lesson](https://curriculum.turing.edu/module2/lessons/dot_and_bracket_notation)

<br>

<details>
<summary>Pulling Down Repo Changes and Updates</summary>
<br>
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

Check out [this video](https://vimeo.com/turing/review/388550182/34823726eb) if you need help pulling down new changes!

</details>
