const { dinosaurs, humans, movies } = require('../datasets/dinosaurs');

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/dinosaurs.js

console.log('Running dinosaurs.js')

/* Dinosaurs Prompts - Spicy! (Advanced) */

/*
Level 1

Code: 
  Write a function called "countAwesomeDinosaurs" that returns an object where each key is a movie title and each value is the number of *awesome* dinosaurs in that movie.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(countAwesomeDinosaurs())
    should print -->  
    {
      'Jurassic Park': 5,
      'The Lost World: Jurassic Park': 8,
      'Jurassic Park III': 9,
      'Jurassic World': 11,
      'Jurassic World: Fallen Kingdom': 18
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/



/*
Level 2

Code: 
  Write a function called "averageAgePerMovie" that returns an object where each key is a movie director's name and each value is an object whose key is a movie's title and whose value is the average age of the cast on the release year of that movie.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(averageAgePerMovie())
    should print -->   
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

  
/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the dinosaurs prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all dinosaurs tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/


// module.exports = {
//   countAwesomeDinosaurs,
//   averageAgePerMovie
// };
