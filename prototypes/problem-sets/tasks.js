const { tasks } = require('../datasets/tasks');

// To run the code you've written in this file, use node prototypes/problem-sets/tasks.js

console.log('Running tasks.js')

/* Tasks Prompts*/

/*
Level 1

Code: 
  Write a function called "getAverageTime" that determines the average time for all tasks.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime())
    should print -->      
      'The average time for all tasks is 100 minutes.'

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2

Code: 
  Write a function called "getTasksByPerson" that takes in an argument of a person's name and outputs a list of their assigned tasks.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getTasksByPerson("Leta"))
    should print -->  ['write README', 'refactor']

e.g.
  console.log(getTasksByPerson("Travis"))
    should print -->  [ 'debug issue #14', 'add feature #38' ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3

Code: 
  Write a function called "getStatusTimes" that returns an object with the total minutes for each status.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStatusTimes())
    should print --> 
    { 
      inProgress: 180, 
      complete: 350, 
      inTriage: 170 
    }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 4

Code: 
  Refactor your "getAverageTime" function so that it takes in a status and returns the average time for tasks with that status.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime("complete"))
    should print -->      
      'The average time for all complete tasks is 87.5 minutes.'

e.g.
  console.log(getAverageTime("inProgress"))
    should print -->      
      'The average time for all inProgress tasks is 90 minutes.'

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the tasks prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all tasks tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/


// module.exports = {
//   getAverageTime,
//   getTasksByPerson,
//   getStatusTimes
// };
