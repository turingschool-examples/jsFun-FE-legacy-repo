const { weather } = require('../datasets/weather');

// To run the code you've written in this file, use node prototypes/problem-sets/weather.js

console.log('Running weather.js')

/* Weather Prompts*/

/*
Level 1

Code: 
  Write a function called "getAverageTemps" that returns an array of all the average temperatures.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTemps())
    should print -->  [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2

Code: 
  Write a function called "findSunnySpots" that returns an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findSunnySpots())
    should print -->   
      [ 'Atlanta, Georgia is sunny.',
        'New Orleans, Louisiana is sunny.',
        'Raleigh, North Carolina is mostly sunny.' 
      ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3

Code: 
  Write a function called "findHighestHumidity" that returns the location with the highest humidity.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestHumidity())
    should print -->      
    {
      location: 'Portland, Oregon',
      type: 'cloudy',
      humidity: 84,
      temperature: { high: 49, low: 38 }
    }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


  
/*
Level 4

Code: 
  Write a function called "findByType" that takes in two arguments - the array of weather data and a specified weather type ("sunny", "cloudy", etc).  The function should return an array with a sentence for each spot that has any degree of the specified weather type. (Note: "sunny" should return locations that are sunny and mostly sunny)

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findByType(weather, "sunny"))
    should print --> 
      [ 
        'Atlanta, Georgia is sunny.',
        'New Orleans, Louisiana is sunny.',
        'Raleigh, North Carolina is mostly sunny.' 
      ]

e.g.
  console.log(findByType(weather, "cloudy"))
    should print --> 
      [
        'New York, New York is cloudy',
        'Portland, Oregon is cloudy',
        'Boston, Massachusetts is cloudy',
        'Miami, Florida is partly cloudy',
        'Phoenix, Arizona is cloudy',
        'Anchorage, Alaska is cloudy'
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 5

Code: 
  Write a function called "getAverageTempByType" that takes in 2 arguments - a specified weather type ("sunny", "cloudy", etc) and a specific temp type ("high" or "low").  The function should return the average temperature (either average high temp or average low temp depending on what is passed through as an argument) across all locations of the specific weather type. (Note: This time, the function should return only locations that are exact matches to the weather type.  For example, "sunny" should not return "mostly sunny" locations)

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTempByType("sunny", "high"))
    should print --> 58

e.g.
  console.log(getAverageTempByType("sunny", "low"))
    should print --> 43.5

e.g.
  console.log(getAverageTempByType("cloudy", "low"))
    should print --> 33.4

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

/*
Level 6

Code: 
  Refactor your "getAverageTempByType" function so that instead of returning the average as a number, it returns a string with more information.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTempByType("sunny", "high"))
    should print --> 
      "The average high for sunny locations is 58 degrees."

e.g.
  console.log(getAverageTempByType("sunny", "low"))
    should print --> 
      "The average low for sunny locations is 43.5 degrees."


e.g.
  console.log(getAverageTempByType("cloudy", "low"))
    should print --> 
      "The average low for cloudy locations is 33.4 degrees."


Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 7

Test:
  * Uncomment the module.exports below.
  * Unskip the Weather Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Weather tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   getAverageTemps,
//   findSunnySpots,
//   findHighestHumidity,
//   findByType,
//   getAverageTempByType
// };
