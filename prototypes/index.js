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






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((kitty) => {
      return kitty.color === 'orange';
    }).map((kitty) => {
      return kitty.name;
    });
    return result;

    // Annotation:
    // First filter the array to only show kitties with color === orange, then map that filtered array to only get an array of the kitties' names
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((kitty1, kitty2) => {
      return kitty2.age - kitty1.age;
    });
    return result;

    // Annotation:
    // I'm not sure how compare functions work with the sort array prototype method, but in the docs it shows the example of (a, b) => a - b. That will sort numbers in increasing order, so I reversed it so that it was the second parameter minus the first parameter. This sorts the array in decreasing order by age which is what the test wants. Also I needed to clone the kitties array because the sort method changes the array in place, so the next test was not working.
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

    kitties.forEach((kitty) => kitty.age += 2);
    const result = kitties;
    return result;

    // Annotation:
    // I used the forEach prototype method to add 2 to the age of each kitty, but since forEach does not return, I had to call it before assigning result.
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
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach((member) => {
        if (!acc[member]) {
          acc[member] = [club.club];
        } else {
          acc[member].push(club.club);
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // clubs is reduced to a single object. In each iteration, the members array is iterated through and if the member is not a property of the accumulator, the member is added as a property and given a value of the club property's value. If the member is already a property of the accumulator, the club property's value is pushed to the member's array.
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

    
    const result = mods.map((mod) => {
      let studentsPerInstructor = mod.students / mod.instructors;
      return {mod: mod.mod, studentsPerInstructor: studentsPerInstructor};
    });
    return result;

    // Annotation:
    // Map the mods array to a new array of objects in which the objects only have the original mod property and value, and a new property called studentsPerInstructor with the value equal to the quotient of the values of the original properties students and instructors.
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

    const result = cakes.map((cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // Map the cakes array to a new array of objects in which the objects only have the original inStock property and value, and a new property called flavor with the same value as the original cakeFlavor property.
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

    const result = cakes.filter((cake) => cake.inStock !== 0);
    return result;

    // Annotation:
    // Filter the cakes array to a new array with only the objects which have an inStock property that is not 0.
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.map((cake) => {
      return cake.inStock;
    }).reduce((total, stock) => {
      total += stock;
      return total;
    }, 0);
    return result;

    // Annotation:
    // Map the cakes array to a new array of numbers where the numbers are the value of each object's inStock property. Then reduce that array down to the sum of all the numbers in it.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // cakes is reduced to a single array. In each iteration, for each topping, if the topping is not already in the accumulator array, the topping is pushed in.
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
      cake.toppings.forEach((topping) => {
        if (!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping] += 1;
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // The reduce method is called on the cakes array starting with an empty object as the accumulator. In each iteration, for each topping in toppings, if it's not a key in acc, add it as a key with the value of 1. If it is a key, increment its value.
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

    const result = classrooms.filter((room) => {
      return room.program === 'FE';
    });
    return result;

    // Annotation:
    // Filter the classrooms array to a new array with only the object which have a program property with the value of 'FE'.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, room) => {
      if (room.program === 'FE') {
        acc.feCapacity += room.capacity;
      } else {
        acc.beCapacity += room.capacity;
      }
      return acc;
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // classrooms is reduced to a single object with keys of feCapacity and beCapacity. In each iteration, if the room.program is 'feCapacity', acc.feCapacity is increased by room.capacity. Otherwise it does the same thing for beCapacity.
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((room1, room2) => {
      return room1.capacity - room2.capacity;
    });
    return result;

    // Annotation:
    // classroom is sorted in order by each element's capacity.
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
      return acc += brewery.beers.length;
    }, 0);
    return result;

    // Annotation:
    // In each iteration of the reduce, acc is increased by the length of beers array.
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((brewery) => {
      return {name: brewery.name, beerCount: brewery.beers.length};
    });
    return result;

    // Annotation:
    // breweries is mapped to a new array with a key of name equal to the brewery's name, and a key of beerCount equal to the length of the brewery's beer array.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      return acc.concat(brewery.beers);
    }, []).find((beer) => {
      return beer.name === 'Barrel Aged Nature\'s Sweater';
    });
    return result;

    // Annotation:
    // The reduce method is invoked on the breweries array starting with an empty array, and on each iteration, that array is concatenated with the current brewery's beer array. The find method is called on this reduced array to return the beer with the name 'Barrel Aged Nature\'s Sweater'.
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

    const result = instructors.map((instructor) => {
      const studentCount = cohorts.find((cohort) => {
        return cohort.module === instructor.module;
      }).studentCount;
      return {name: instructor.name, studentCount: studentCount};
    });
    return result;

    // Annotation:
    // instructors is mapped to an array of objects whose keys are name and studentCount. studentCount is calculated by getting the studentCount property after running the find method on cohorts and finding the element in which the module value of the current instructor matches module value of the current cohort.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      const numInstructors = instructors.filter((instructor) => {
        return cohort.module === instructor.module;
      }).length;
      acc[`cohort${cohort.cohort}`] = cohort.studentCount / numInstructors;
      return acc;
    }, {});
    return result;

    // Annotation:
    // The reduce method is called on cohorts, starting with an empty object as the accumulator. In each iteration numInstructors is defined as the length of the filtered instructors array with the filter condition of equivalent module values for the current cohort and instructor. Then the a key is created in the accumulator with the name 'cohort' + the value of the cohort property, and the value is the studentCount / numInstructors.
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

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      instructor.teaches.forEach((subject) => {
        const teachableMods = cohorts.filter((cohort) => {
          return cohort.curriculum.includes(subject);
        }).map((teachableCohort) => {
          return teachableCohort.module;
        });
        teachableMods.forEach((mod) => {
          if (!acc[instructor.name].includes(mod)) {
            acc[instructor.name].push(mod);
          }
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // The reduce method is called on instructors with an accumulator named acc which is an empty object. In each iteration, the current element is named instructor, and instructor.name is created as a key in acc with an initial value of an empty array. For each subject in instructor.teaches, a const teachableMods is declared. Its value is calculated by first filtering cohorts into a new array that only includes a cohort whose curriculum array includes the subject the instructor teaches. The array returned by the filter is then mapped to a new array which mutates each element to be just the number value of element's module property. After assigning this array to teachableMods, the forEach method is called on it, and for each mod, if the key (which is the instructor's name) in acc does include the mod in its array, that mod is pushed to the array.
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

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach((subject) => {
        if (!acc[subject]) {
          acc[subject] = [];
          instructors.forEach((instructor) => {
            if (instructor.teaches.includes(subject)) {
              acc[subject].push(instructor.name);
            }
          });
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // The reduce method is called on cohorts with an accumulator named acc whose initial value is an empty object. In each iteration of the reduce method, the current element is named cohort, and the forEach method is called on cohort.curriculum. In each iteration of the forEach, the current element is named subject if acc[subject] does not exist, acc[subject] is assigned to be an empty array. Then the forEach method is called on instructors, and in each iteration the current element is named instructor. If subject is an element of the instructor.teaches array, instructor.name is pushed into acc[subject].
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

    const result = Object.keys(bosses).map((bossKey) => {
      const bossName = bosses[bossKey].name;
      const sidekickLoyalty = sidekicks.filter((sidekick) => {
        return sidekick.boss === bossName;
      }).reduce((totalLoyalty, sidekick) => {
        totalLoyalty += sidekick.loyaltyToBoss;
        return totalLoyalty;
      }, 0);
      return {bossName: bossName, sidekickLoyalty: sidekickLoyalty};
    });
    return result;

    // Annotation:
    // The keys method is called on bosses, and on that array the map method is called. In each iteration, the current element is named bossKey. A const bossName is declared and assigned bosses[bossKey].name, a const sidekickLoyalty is declared. Its value is calculated by first filtering sidekicks to an array containing only elements whose boss property matches bossName. This array is reduced with an accumulator name totalLoyalty which has an initial value of 0. In each iteration of the reduce, totalLoyalty is increased by the value of sidekick.loyaltyToBoss. The number returned by the reduce method is assigned to sidekickLoyalty. The map returns an object literal with keys bossName and sidekickLoyalty and their respective values.
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

    const result = stars.filter((star) => {
      let passFilter = false;
      Object.keys(constellations).forEach((constellationKey) => {
        if (constellations[constellationKey].stars.includes(star.name)) {
          passFilter = true;
        }
      });
      return passFilter;
    });
    return result;

    // Annotation:
    // stars is filtered into a new array with the current element of each iteration named star. In each iteration of the filter, the keys method is called on constellations, and the forEach method is called on it. In each iteration of the forEach, if the stars property of the current constellation includes star.name, that star passes the filter.
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

    const result = stars.reduce((acc, star) => {
      if (!acc[star.color]) {
        acc[star.color] = [star];
      } else {
        acc[star.color].push(star);
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // The reduce method is called on stars with an accumlator named acc which has an initial value of an empty object. In each iteration of reduce the current element is named star, and if acc[star.color] is not already a key, it is created as a key with the value of an array with star as its only element. If acc[star.color] is a key, star is pushed into its array.
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

    const result = stars.map((star) => {
      return star.constellation;
    });
    return result;

    // Annotation:
    // Map stars to a new array where each element is modified to only be the star's constellation value.
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

    const result = characters.reduce((sum, character) => {
      character.weapons.forEach((weapon) => {
        sum += weapons[weapon].damage;
      });
      return sum;
    }, 0);
    return result;

    // Annotation:
    // Run the reduce method on characters using sum = 0 as the accumulator, and character as the name for the current element. In each iteration of reduce, run the forEach method on character.weapons where the current element is named weapon. Add to sum weapons[weapon].damage
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.map((character) => {
      const newCharObj = {};
      newCharObj[character.name] = character.weapons.reduce((sumObj, weapon) => {
        sumObj.damage += weapons[weapon].damage;
        sumObj.range += weapons[weapon].range;
        return sumObj;
      }, {damage: 0, range: 0});
      return newCharObj;
    });
    return result;

    // Annotation:
    // Map characters to a new array that modifies each element in characters to be a new object named newCharObj. In each iteration of the map, the current element is named character, and a const newCharObj is declared and assigned as an empty object. the newCharObj[character.name] property is created. It is assigned the object returned by calling the reduce method on character.weapons where the accumulator is named sumObj with the initial value of {damage: 0, range: 0} and the current element is named weapon. In each iteration of reduce, weapons[weapon].damage is added to sumObj.damage, and similarly weapons[weapon].range is added to sumObj.range.
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