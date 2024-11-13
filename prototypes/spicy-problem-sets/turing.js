const { instructors, cohorts } = require('../datasets/turing');

// To run the code you've written in this file, use node prototypes/spicy-problem-sets/turing.js

console.log('Running turing.js')

/* Turing Prompts - Spicy! (Advanced) */

/*
Level 1

Code: 
  Write a function called "studentsForEachInstructor" that returns an array of instructors where each instructor is an object with a name and the count of students in their module.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(studentsForEachInstructor())
    should print -->      
      [
        { name: 'Pam', studentCount: 21 },
        { name: 'Brittany', studentCount: 21 },
        ...etc
        { name: 'Christie', studentCount: 20 },
        { name: 'Will', studentCount: 20 }
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 2

Code: 
  Write a function called "studentsPerInstructor" that returns an object of how many students per teacher there are in each cohort .

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(studentsPerInstructor())
    should print -->   
      {
        cohort1806: 15,
        cohort1804: 7,
        cohort1803: 10,
        cohort1801: 9
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


/*
Level 3

Code: 
  Write a function called "modulesPerTeacher" that returns an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(modulesPerTeacher())
    should print -->      
      {
        Pam: [2, 4],
        Brittany: [2, 4],
        Nathaniel: [2, 4],
        Robbie: [4],
        Leta: [2, 4],
        Travis: [1, 2, 3, 4],
        Louisa: [1, 2, 3, 4],
        Christie: [1, 2, 3, 4],
        Will: [1, 2, 3, 4]
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/



/*
Level 4

Code: 
  Write a function called "curriculumPerTeacher" that returns an object where each key is a curriculum topic and each value is an array of instructors who teach that topic.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(curriculumPerTeacher(\))
    should print -->      
      {
        html: ["Travis", "Louisa"],
        css: ["Travis", "Louisa"],
        javascript: ["Travis", "Louisa", "Christie", "Will"],
        recursion: ["Pam", "Leta"],
        scope: ["Pam", "Nathaniel", "Will"],
        oop: ["Brittany", "Nathaniel", "Will"],
        react: ["Christie", "Will"],
        redux: ["Will"],
        pwas: ["Brittany", "Robbie", "Leta", "Louisa"],
        mobile: ["Nathaniel"],
        node: ["Pam", "Robbie", "Leta", "Louisa", "Christie"]
      }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
  
/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the Turing Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Turing tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   studentsForEachInstructor,
//   studentsPerInstructor,
//   modulesPerTeacher,
//   curriculumPerTeacher
// };
