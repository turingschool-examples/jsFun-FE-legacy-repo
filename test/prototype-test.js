const { expect } = require('chai');
const { turingPrompts } = require('../prototypes/index');

describe('Prototype Exercises', () => {
  describe('Turing Prompts', () => {
    it('studentsForEachInstructor', () => {
      const result = turingPrompts.studentsForEachInstructor();

      expect(result).to.deep.equal([{"name":"Pam","studentCount":21},{"name":"Brittany","studentCount":21},{"name":"Nathaniel","studentCount":21},{"name":"Robbie","studentCount":18},{"name":"Leta","studentCount":18},{"name":"Travis","studentCount":30},{"name":"Louisa","studentCount":30},{"name":"Christie","studentCount":20},{"name":"Will","studentCount":20}]);
    });

    it('studentsPerInstructor', () => {

    });
  });
});