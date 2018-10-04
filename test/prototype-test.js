const { expect } = require('chai');
const { turingPrompts, piePrompts, clubPrompts,
        bossPrompts, classPrompts, modPrompts,
        kittyPrompts, astronomyPrompts, cakePrompts } = require('../prototypes/index');

describe('PROTOTYPES', () => {


  describe('Turing Prompts', () => {
    it('studentsForEachInstructor', () => {
      const result = turingPrompts.studentsForEachInstructor();
      expect(result).to.deep.equal([{"name":"Pam","studentCount":21},{"name":"Brittany","studentCount":21},{"name":"Nathaniel","studentCount":21},{"name":"Robbie","studentCount":18},{"name":"Leta","studentCount":18},{"name":"Travis","studentCount":30},{"name":"Louisa","studentCount":30},{"name":"Christie","studentCount":20},{"name":"Will","studentCount":20}]);
    });

    it('studentsPerInstructor', () => {
      const result = turingPrompts.studentsPerInstructor();
      expect(result).to.deep.equal();
    });

    it('modulesPerInstructor', () => {
      const result = turingPrompts.modulesPerInstructor();
      expect(result).to.deep.equal();
    });

    it('curriculumPerInstructor', () => {
      const result = turingPrompts.curriculumPerInstructor();
      expect(result).to.deep.equal();
    });
  });


  describe('Club Prompts', () => {
    it('membersBelongingToClubs', () => {
      const result = clubPrompts.membersBelongingToClubs();
      expect(result).to.deep.equal();
    });
  });


  describe('Boss Prompts', () => {
    it('bossLoyalty', () => {
      const result = bossPrompts.bossLoyalty();
      expect(result).to.deep.equal();
    });
  });


  describe('Class Prompts', () => {
    it('feClassrooms', () => {
      const result = classPrompts.feClassrooms();
      expect(result).to.deep.equal();
    });

    it('totalCapacities', () => {
      const result = classPrompts.totalCapacities();
      expect(result).to.deep.equal();
    });

    it('sortByCapacity', () => {
      const result = classPrompts.sortByCapacity();
      expect(result).to.deep.equal();
    });

  });


  describe('Mod Prompts', () => {
    it('studentsPerMod', () => {
      const result = modPrompts.studentsPerMod();
      expect(result).to.deep.equal();
    });
  });


  describe('Kitty Prompts', () => {
    it('orangeKittyNames', () => {
      const result = kittyPrompts.orangeKittyNames();
      expect(result).to.deep.equal();
    });

    it('sortByAge', () => {
      const result = kittyPrompts.sortByAge();
      expect(result).to.deep.equal();
    });

    it('growUp', () => {
      const result = kittyPrompts.growUp();
      expect(result).to.deep.equal();
    });
  });


  describe('Pie Prompts', () => {
  });


  describe('Astronomy Prompts', () => {
    it('starsInConstellations', () => {
      const result = astronomyPrompts.starsInConstellations();
      expect(result).to.deep.equal();
    });

    it('starsByColor', () => {
      const result = astronomyPrompts.starsByColor();
      expect(result).to.deep.equal();
    });

    it('constellationsStarsExistIn', () => {
      const result = astronomyPrompts.constellationsStarsExistIn();
      expect(result).to.deep.equal();
    });
  });


  describe('Cake Prompts', () => {
    it('allToppings', () => {
      const result = cakePrompts.allToppings();
      expect(result).to.deep.equal();
    });

    it('groceryList', () => {
      const result = cakePrompts.groceryList();
      expect(result).to.deep.equal();
    });

    it('stockPerCake', () => {
      const result = cakePrompts.stockPerCake();
      expect(result).to.deep.equal();
    });

    it('totalInventory', () => {
      const result = cakePrompts.totalInventory();
      expect(result).to.deep.equal();
    });

    it('onlyInStock', () => {
      const result = cakePrompts.onlyInStock();
      expect(result).to.deep.equal();
    });
  });


});