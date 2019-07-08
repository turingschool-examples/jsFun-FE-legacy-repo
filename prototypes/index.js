const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const filtered = kitties.filter(cat => cat.color === 'orange');
    const result = filtered.map(cat => cat.name);
    return result;

    // Annotation:
    // Filter based on color prop, then map to create array for each filtered's name
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // Sort (in place) based on age prop, the test want oldest first
    // Using implicit return of one liner
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(cat => {
      cat.age = cat.age + 2;
      return cat;
    });
    return result;
  }

  // Annotation:
  // Map through to create an array of same length, and return entire changed cat. Implicit return does not work.
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        !acc[member] ? acc[member] = [club.club] : acc[member].push(club.club);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Two nested layers of data, so two iteration methods are needed
    // Reduce over clubs array because we can set it to the desired object outcome
    // forEach over the club.members array because that uses a push, so a return isn't necessary
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
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      return {mod: mod.mod, studentsPerInstructor: mod.students / mod.instructors};
    });
    return result;

    // Annotation:
    // Starting with array with length of 4, and goal is array of objects with length of 4
    // Map can return array with objects, same length
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
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => ({flavor: cake.cakeFlavor, inStock: cake.inStock}));
    return result;

    // Annotation:
    // Starting with array of objects, goal is an array of objects of same length
    // utilize implicit return by wrapping object literal in parens
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => {
      if (cake.inStock > 0) {
        return cake;
      }
    });
    return result;

    // Annotation:
    // Starting with array of objects, goal is an array of objects
    // Use filter() to sort for conditional matches, tell the callback function what to return
    // Need to return entire cake object into result array
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      acc += cake.inStock;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Start with an array of objects, goal is a single number/count
    // Remember to set initial value to 0 and return acc
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        !acc.includes(topping) ? acc.push(topping) : false;
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // Start with an array of objects, goal is an array of just the toppings (no repeats)
    // Use reduce with initial array acc, so the cur can check if it is already in the acc
    // also need a second prototype method to iterate over the nested toppings array and decide what to push
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        !acc[topping] ? acc[topping] = 1 : acc[topping]++;
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Starting with an array of objects, goal is an object
    // Will need a second iterator method to go over toppings array
    // Reduce can have an initial value of an object, and we'll set keys: values inside
    // Each new key will be set to 1 to begin counting, then incremented when they're seen again
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

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    // Annotation:
    // Start with an array of objects, end with a shorter array of objects
    // One liner/implicit return is okay because we want to return the entire room object
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, room) => {
      room.program === 'FE' ? acc.feCapacity += room.capacity : acc.beCapacity += room.capacity;
      return acc;
    }, {feCapacity : 0, beCapacity : 0});
    return result;

    // Annotation:
    // Start with an array of objects, goal is an object
    // Going to be adding numbers to a sum
    // Reduce can begin with initial object and do the counting
    // Ternary is helpful since we only have to paths: fe and be
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Starting with an array of objects, goal is an array of all classrooms
    // Goal array should be same length, but we don't need to map to make any changes
    // Sort is mutator, but there's nothing said against that
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

    const result = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Starting with an array of objects, goal is counter/total of all the beers
    // will need to iterate over breweries, then use beers.length
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
      return {name: brewery.name, beerCount: brewery.beers.length};
    });
    return result;

    // Annotation:
    // Starting with an array of objects, goal is an array of objects
    // Set name key with the brewery.name, set beerCount value with brewery.beers.length;
    // Array will be same number of objects/length, so we can map()
    // Two liner requires the return keyword
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const allBeers = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => acc.push(beer));
      return acc;
    }, []);
    const result = allBeers.sort((a,b) => a.abv - b.abv)[allBeers.length - 1];
    return result;

    // Annotation:
    // Starting with an array of objects, and goal is one beer object
    // Can either sort and return [0] or use reduce() to check against and reassign the acc
    // Alternate solution:

    // breweries.reduce((acc, brewery) => {
    //   brewery.beers.forEach(beer => {
    //     if (beer.abv > acc.abv) {
    //       acc = beer;
    //     }
    //   })
    //   return acc;
    // }, { abv: 0 })
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






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
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      let cohort = cohorts.find(cohort => cohort.module === instructor.module);
      return {name: instructor.name, studentCount: cohort.studentCount};
    }) ;
    return result;

    // Annotation:
    // Start with two datasets, both arrays of objects
    // Common threads are the module numbers and topics
    // Goal is an array of objects, same length as the instructors array
    // Map over instructors, get studentCount from cohorts array
    // Not one liner w/implicit return
    // return objedts from the callback function
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      let count = cohort.studentCount;
      let teachers = instructors.filter(teacher => teacher.module === cohort.module).length;

      acc[`cohort${cohort.cohort}`] = count / teachers;
      return acc;
    }, {});
    return result;

    // Annotation:
    // Start with two datasets, both array of objects
    // Common threads are the instructor.module and cohort.module nums
    // Goal is a new, lone object
    // cohort key will come from the cohorts array, with ${} to create key name
    // value will be studentCount from cohorts array / total number of teachers for that mod
    // use .length to count the matching filtered teachers
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      cohorts.forEach(mod => {
        instructor.teaches.forEach(topic => {
          if (mod.curriculum.includes(topic) && !acc[instructor.name].includes(mod.module)) {
            acc[instructor.name].push(mod.module);
          }
        });
      });
      return acc;
    }, {});

    return result;

    // Annotation:
    // Start with two datasets, both array of objects
    // Common threads are the instructor[teacher].teaches array topics and the cohort[mod].curriculum array topics
    // Iterate over instructors to set up the reduce and set the name keys, assigned to []
    // Iterate over each mod in the cohort to look at the topics in the currriculum, then iterate over each teacher in the instructors to look at the topics in their teaches []
    // When there is a match, and the module # doesn't already exist in the acc, push the mod.module # into the acc[instructor.name] array
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

    const result = instructors.reduce((acc, instructor) => {
      instructor.teaches.forEach(topic => {
        !acc[topic] ? acc[topic] = [instructor.name] : acc[topic].push(instructor.name);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Start with two datasets, both arrays of objects
    // Goal is an object
    // Common thread is the instructor[name].teaches topic array and the cohorts[mod].curriculum topic array
    // Iterate over instructors, then each of their .teaches[], to set up the reduce and set the keys with the topics
    // First iteration will also put the first teacher.name into the array
    // Additional iterations will push more names
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

    const result = function bossObj() {
      let bossNames = Object.values(bosses).map(boss => boss.name);
      return bossNames.map(boss => {
        let points = sidekicks.reduce((acc, sidekick) => {
          if (sidekick.boss === boss) {
            acc += sidekick.loyaltyToBoss;
          }
          return acc;
        }, 0);
        return { bossName: boss, sidekickLoyalty: points };
      });
    };
    return result();

    // Annotation:
    //Have two datasets, an obj of objs AND an array of objs
    //Common thread is the bosses[each boss].name and the sidekicks[each sidekick].boss
    //use Object.values to get an array of the bosses, than can be mapped for their names
    //Iterate over the bames array with either Map or Reduce to make array of objs
    //When looking at each boss, iterate over all the sidekicks to see if their .boss prop is === to the cur boss
    //If so, add points to the acc
    //Use the acc in the larger map's sidekickLoyalty points
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

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


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






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
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
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.
    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
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
  ultimaPrompts,
  dinosaurPrompts
};