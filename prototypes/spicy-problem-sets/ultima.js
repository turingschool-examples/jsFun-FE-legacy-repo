const { characters, weapons } = require('../datasets/ultima');

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/ultima.js

console.log('Running ultima.js')

/* Ultima Prompts - Spicy! (Advanced) */

/*
Level 1

Code: 
  Write a function called "getTotalDamage" that returns the sum of the amount of damage for all the weapons that our characters can use.  Even though the same weapon might be used by multiple characters, count each weapon only once.

  HINT: Solve this *without* using Object.keys().  Iterate over the characters array, then iterate through each character's weapons array. Find a way to make sure you only count each weapon once. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getTotalDamage())
    should print -->  59

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/



/*
Level 2

Code: 
  Write a function called "charactersByTotal" that returns the sum damage and total range for each character as an object.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(charactersByTotal())
    should print -->   
      [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

  
/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the ultima prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all ultima tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   getTotalDamage,
//   charactersByTotal
// };
