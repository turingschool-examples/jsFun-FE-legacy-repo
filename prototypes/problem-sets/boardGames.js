const { boardGames } = require('../datasets/boardGames');

// To run the code you've written in this file, use node prototypes/problem-sets/boardGames.js

console.log('Running boardGames.js')

/* Board Games Prompts*/

/*
Level 1

Code: 
  Write a function called "listGames" that takes in a type as an argument and returns an array of just the names of the games within a specified type. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(listGames("strategy"))
    should print -->      
      ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

e.g.
  console.log(listGames("childrens"))
    should print -->      
      ["Candy Land", "Connect Four", "Operation", "Trouble"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2

Code: 
  Write a function called "findHighestRatedGamesByType" that takes in a type as an argument returns an object which is the highest rated game within the specified type.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestRatedGamesByType("strategy"))
    should print -->   
    { name: 'Azul', rating: 8.8, maxPlayers: 4 }

e.g.
  console.log(findHighestRatedGamesByType("party"))
    should print -->   
    { name: 'Codenames', rating: 7.4, maxPlayers: 8 }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3

Code: 
  Write a function called "averageScoreByType" that takes in a type as an argument and returns the average score for the specified type.  Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(averageScoreByType("strategy"))
    should print -->      
      7

e.g.
  console.log(averageScoreByType("childrens"))
    should print -->      
      4.25

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/



/*
Level 4

Code: 
  Write a function called "averageScoreByTypeAndPlayers" that takes in 2 arguments - a type and a maximum number of players. The function should return the average score of any games that match the specified type and maximum number of players.  Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(averageScoreByTypeAndPlayers("strategy", 2))
    should print -->      
      6.16666666667

e.g.
  console.log(averageScoreByTypeAndPlayers("childrens", 4))
    should print -->      
      3.8

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
  
/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the Board Games Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Board Games tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   listGames,
//   findHighestRatedGamesByType,
//   averageScoreByType,
//   averageScoreByTypeAndPlayers
// };
