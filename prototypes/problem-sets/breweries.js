const { breweries } = require('../datasets/breweries');

// To run the code you've written in this file, use node prototypes/problem-sets/breweries.js

console.log('Running breweries.js')

/* Breweries Prompts*/
NOT FINISHED OR STARTED REALLY 
/*
Level 1

Code: 
  Write a function called "getClassrooms" that returns an array of just the front-end classrooms.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getClassrooms())
    should print --> 
      [
        { roomLetter: 'A', program: 'FE', capacity: 32 },
        { roomLetter: 'C', program: 'FE', capacity: 27 },
        { roomLetter: 'E', program: 'FE', capacity: 22 },
        { roomLetter: 'G', program: 'FE', capacity: 29 }
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2

Code: 
  Write a function called "getCapacities" that returns an object where the keys are 'feCapacity' and 'beCapacity', and the values are the total capacity for all classrooms in each program.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getCapacities())
    should print -->   
      {
        feCapacity: 110,
        beCapacity: 96
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3

Code: 
  Write a function called "sortByCapacity" that returns an array of classrooms sorted by their capacity (least capacity to greatest)

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByCapacity())
    should print -->  
      [
        {
          roomLetter: "H",
          program: "BE",
          capacity: 18
        }, {
          roomLetter: "F",
          program: "BE",
          capacity: 19
        }, {
          roomLetter: "E",
          program: "FE",
          capacity: 22
        }, {
          roomLetter: "C",
          program: "FE",
          capacity: 27
        },
        ...etc
      ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


  
/*
Level 4

Code: 
  Refactor your "getClassrooms" function from Level 1 so that it takes in an argument of either 'FE' or 'BE' and returns an array of just those classrooms.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getClassrooms("FE"))
    should print --> 
      [
        { roomLetter: 'A', program: 'FE', capacity: 32 },
        { roomLetter: 'C', program: 'FE', capacity: 27 },
        { roomLetter: 'E', program: 'FE', capacity: 22 },
        { roomLetter: 'G', program: 'FE', capacity: 29 }
      ]
e.g.
  console.log(getClassrooms("BE"))
    should print --> 
      [
        { roomLetter: 'B', program: 'BE', capacity: 29 },
        { roomLetter: 'D', program: 'BE', capacity: 30 },
        { roomLetter: 'F', program: 'BE', capacity: 19 },
        { roomLetter: 'H', program: 'BE', capacity: 18 }
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5

Code: 
  Refactor your "sortByCapacity" function from Level 3 so that it takes in the array to be sorted as an argument. It should still return an array of the classrooms sorted by their capacity (least capacity to greatest)

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByCapacity(classrooms))
    should print --> 
      [
        {
          roomLetter: "H",
          program: "BE",
          capacity: 18
        }, {
          roomLetter: "F",
          program: "BE",
          capacity: 19
        }, {
          roomLetter: "E",
          program: "FE",
          capacity: 22
        }, {
          roomLetter: "C",
          program: "FE",
          capacity: 27
        },
        ...etc
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

/*
Level 6

Code: 
  Write a function called "filterAndSortClassrooms".  This function should take in an argument of "FE" or "BE".  The function should return an array of only BE or FE classrooms, sorted by capacity (least to greatest).

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(filterAndSortClassrooms("BE"))
    should print --> 
      [
        {
          roomLetter: "H",
          program: "BE",
          capacity: 18
        }, {
          roomLetter: "F",
          program: "BE",
          capacity: 19
        }, 
        ...etc
      ]

e.g.
  console.log(filterAndSortClassrooms("FE"))
    should print --> 
      [
        {
          roomLetter: "E",
          program: "FE",
          capacity: 22
        }, {
          roomLetter: "C",
          program: "FE",
          capacity: 27
        },
        ...etc
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 7

Code: 
  Did you write out logic and iteration for Level 6's "filterAndSortClassrooms" function?  
  If so, refactor that function so that it simply uses the logic you've already written in your "getClassrooms" and "sortByCapacity" functions.

Hint:
  Your "filterAndSortClassrooms" function should take in the classroom type of "FE" or "BE", then simply:
  - Invoke getClassrooms, passing in the classroom type
  - Invoke sortByCapacity, passing in the filtered array you get from getClassrooms
  - Return the sorted, filted array

Invoke: 
  After refactoring, invoke your function again to ensure you're getting the expected results.
e.g.
  console.log(filterAndSortClassrooms("BE"))
    should print --> 
      [
        {
          roomLetter: "H",
          program: "BE",
          capacity: 18
        }, {
          roomLetter: "F",
          program: "BE",
          capacity: 19
        }, 
        ...etc
      ]

e.g.
  console.log(filterAndSortClassrooms("FE"))
    should print --> 
      [
        {
          roomLetter: "E",
          program: "FE",
          capacity: 22
        }, {
          roomLetter: "C",
          program: "FE",
          capacity: 27
        },
        ...etc
      ]

*/



/*
Level 8

Test:
  * Uncomment the module.exports below.
  * Unskip the Classroom Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Classroom tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/





// module.exports = {
//   getClassrooms,
//   getCapacities,
//   sortByCapacity,
//   filterAndSortClassrooms
// };
