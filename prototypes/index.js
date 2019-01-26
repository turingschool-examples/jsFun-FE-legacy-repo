const { kitties } = require('./datasets/kitties'); const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');

// SINGLE DATASETS
// =================================================================
// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  // Return an array of just the names of kitties who are orange ['Tiger', 'Snickers']
  orangeKittyNames() {
    const result = kitties.filter((kitty) => {
      return kitty.color === 'orange';
    }).map((kitty) => {
      return kitty.name;
    });
      return result;
      // I first did a filter method to sort the kitties by color, 
      // then I used a map to return just the cat's names.
    },
  
  sortByAge() {
    const result = kitties.sort((kitty1, kitty2) => {
      return kitty2.age - kitty1.age;
    });
      return result;
      // I used the sort filter over the kitties array and
      // I returned the kitties in deccending age by specifying b - a
    },
    
  growUp() {
    const result = kitties.map((kitty) => {
      kitty.age += 2;
      return kitty;
    });
      return result;
      //map over kitties array increase age property by 2 years
      //return an array of kitties grown up
    }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    const result = clubs.reduce((accObj, club) => {
      club.members.forEach((member) => {
        if(!accObj[member]) {
          accObj[member] = []
        }
      accObj[member].push(club.club)
      })
      return accObj
    }, {});
    return result;
  //reduce over clubs aray
  //for each club push the member as a key on the accumulate object 
  //add conditional logic to avoid repeats
  //push the member's clubs into the accumulated object as values
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {

  studentsPerMod() {
    const result = mods.map((mod) => {
      return{ mod: mod.mod, 
             studentsPerInstructor: mod.students/mod.instructors }
    });
    return result;
    //map over the mods array 
    //return an array of objects with the same inital key value pair
    // and a second keyvalue pair studentsPerInstructor : students/instructors
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {

  stockPerCake() {
    const result = cakes.map((cake) => {
      return { flavor: cake.cakeFlavor, inStock: cake.inStock }
      });
    return result;
    // mapped over the cake array and used an object literal
    // to return an array of objects
  },

  onlyInStock() {
   const result = cakes.filter((cake) => {
        return cake.inStock > 0;
    })
    return result;
    // filtered over the cake array to return 
    // cakes with an inStock value of greater then 0
  },
  
  totalInventory() {
  const result = cakes.reduce((acc, cake) => {
    acc += cake.inStock;
    return acc;
    },0);
    return result;
  // Reduce over the cake array to gather the total number of cakes
  },

  allToppings() {
    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        if(acc.indexOf(topping) === -1) {
          acc.push(topping)
        }
      })
      return acc
    },[]);
    return result;
    //I reduced over the cakes array
    //for each cake i asked the accumulated array if it had that topping at index of -1
    // if it didn't exist it got pushed in to my accumulator.
  },

  groceryList() {
    const result = cakes.reduce((listObj, cake) => {
      cake.toppings.forEach((topping) => {
        if(!listObj[topping]) {
          listObj[topping] = 0;
        }  
        listObj[topping]++
    })
    return listObj
  },{})  
  return result
  //reduce over the cakes array
  //for each topping if the topping is not a key
  //in my list object make it a key
  //else increment the value in the object
  //return the object
  }
  
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {

  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {

  studentsForEachInstructor() {
    const result = instructors.map((instructor) => {
      let matchingCohort = cohorts.find((cohort) => {
        return instructor.module === cohort.module
      })
    })
      return result
    // map over the instructorsArray
    // find the matching cohort for our current instructor
    // grab the student count value from the matching cohort
    // return an object with the instructor's name and studentCount
  },

  studentsPerInstructor() {
    const result = cohorts.reduce((accuObj, cohort) => {
      let matchModArray = instructors.filter((instructor) => {
        return instructor.module === cohort.module;
      });
      accuObj['cohort' + cohort.cohort] =
      cohort.studentCount / matchModArray.length
      return accuObj;
    }, {});
      return result
    // reduce over the cohorts array then filter over instructors
    // return an array objects with the cohort numbers as keys 
    // and the students per instructors as values
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};
