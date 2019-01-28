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

    let orangeKitties = kitties.filter(kitty => {
      return kitty.color === 'orange';
    });

    let kittyName = orangeKitties.map(names => {
      return names.name;
    });

    const result = kittyName;
  
    return result;

    // Annotation:
    // We need to filter through our data, but since filter would return an object, we also needed to map through our second array of orange kitties so we can return only the name of the kitties.
  },

  sortByAge() {
    // Sort the kitties by their age

    let newKitties = kitties.sort((a, b) => {return b.age - a.age;});

    const result = newKitties;
    return result;

    // Annotation:
    // sort is used here in order to allow us to sort by the kitty's age, the return is what allows us to put the list in descending order.
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

    let oldCats = kitties.map(kitty =>  {
      (kitty.age += 2);
      return kitty;
    });
    
    // console.log(cat.age);
    const result = oldCats;
    return result;
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


    const result = clubs.reduce((acc,club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [];
        }
        acc[member].push(club.club);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // We need to use the reduce method here because we are looking for an object when the clubs const is an array. We're then going to diver deeper into the members array within clubs and forEach within that we will go into our conditional of if the club member has not been added as a key, we will then make a key out of it and set it equal to an empty array. This works because it will ignore the conditional if there is alraeady a key for this member and will meet our next line of code outside our conditional, which pushes the member into our array, which has been set to the value of the club member.
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

    // for each object within the array, grab the keys and divide values of keys 2 & 3
    // return objects with original key 1 and value, with a new key of studentsPerInstructor in place of previous keys
    // map
    //

    const result = mods.map(mod => {
      return {
        mod: mod.mod,
        studentsPerInstructor: mod.students / mod.instructors
      };
    });
    return result;

    // Annotation:
    // here we are using map to iterate over our mods array, then we look at every mod that we pass through as an argument and return an object of mod and studentsPerInstructor.
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

    const result = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
    });
    return result;

    // Annotation:
    // Here we will map across our cakes array and look at each cake where we will return an object with the keys and values of flavor and inStock amounts.
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
      if (cake.inStock) {
        return cake;
      }
    });
    return result;

    // Annotation:
    // Here we look at cakes and we filter over each cake and check for a value in cakes inStock, and if so, we return the cake.
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    let result = 0;

    cakes.forEach(cake => {
      result += cake.inStock;
    });

    return result;

    // Annotation:
    // here we looks at the cakes array and for each cake we take it and add the inStock count to our result, which we have predetermnined to be 0.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // here we will look at the cakes array and reduce it to return a single array. We will then look at each cake and its toppings using cake.topping, and forEach of those we will check to see if it has been added to our acc, which in this case is an array. If it has not, we will push the topping into our array.
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
        if (!acc[topping]) {
          acc[topping] = 0;
        }
        acc[topping]++;
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Here we plan to return an object so we need to use the reduce method so we can change the datatype. We will reduce over each cakse and within that, look for at the toppings. ForEach topping we will check to see if it has been made a key yet. If it hasn't, we will make a key out it and set it equal to zero. Outside of our conditional we will accumulate our key, that way we are getting anything that has previously been made a key too.
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

    const result = classrooms.filter(room => {
      if (room.program === 'FE') {
        return room;
      }
    });
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

    const result = classrooms.reduce((acc, room) => {
      if (room.program === 'FE') {
        acc.feCapacity += room.capacity;
      }
      if (room.program === 'BE') {
        acc.beCapacity += room.capacity;
      }
      return acc;
    }, {
      feCapacity: 0,
      beCapacity: 0
    });
    return result;

    // Annotation:
    // Here we will reduce over our classrooms array, our acc is an object with the keys for what we want to return. We will then go into our conditionals which we check our program type and if it is what we are looking for we will add to our original amount of zero set in our acc object. 
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // here we will use sort to take the classroom capacity and compare it to the next classroom. It will return us with the sorted value.
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

    const result = breweries.reduce((acc, beer) => {
      beer.beers.forEach(name => {
        acc++;
      });
      return acc;
    }, 0);
    return result;

    // Annotation:
    // here we look at our breweries and reduce over them, with our acc being set to 0 so we can count the beers for each brewery. We will then look at each beer we're passing, dive into the beers array, and forEach object or name within it, we will add to our acc.
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brew => {
      return {
        name: brew.name,
        beerCount: brew.beers.length
      };
    });
    return result;

    // Annotation:
    // Here we will look at our breweries array and map over it. Because we plan to return an array of object that will be the same length, we know we need map. We will then iterate over each brewery and return an object with the key and values of name and beerCounts
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    
    const result = breweries.reduce((acc, pub) => {
      return pub.beers.reduce((acc, brew) => acc.abv > brew.abv ? acc : brew);
    });
    return result;

    // Annotation:
    // here we look at our breweries array and reduce over it so we can return a single beer. we have taken in our acc and pub, which is each brewery. we then reduce over each brewery again so we can look within their beers, here called brew. We then use a ternary to basically filter through the beers abvs.
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

    const result = instructors.map(teacher => {
      return {
        name: teacher.name,
        studentCount: cohorts.reduce((acc, cohort) => {
          if (teacher.module === cohort.module) {
            acc = cohort.studentCount;
          }
          return acc;
        }, 0)
      };
    });
    return result;

    // Annotation:
    // here we will look at our instructors array and map over it so we can return an array of the same length of objects. We will then return an object with the keys and values of name and studentCount
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      acc[`cohort${cohort.cohort}`] = (cohort.studentCount) / instructors.filter(teacher => {
        return cohort.module === teacher.module;
      }).length;
      return acc;
    }, {});
    return result;

    // Annotation:
    // here we want to take our cohorts array and reduce over it so we can return a single object. We will then make a key and using template literal create the key and make it dynamic. We will set the value assigned to the individucal cohort's studentCount divided by (modulo) the filter instructors array, where we filter over each teacher to find their module and therefore their studentCount
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

    const result = instructors.reduce((acc, teacher) => {
      acc[teacher.name] = teacher.teaches.reduce((acc, sub) => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(sub) && !acc.includes(cohort.module)) {
            acc.push(cohort.module);
          }
        });
        return acc;
      }, []);
      return acc;
    }, {});
    return result;

    // Annotation:
    // Here we will take our instructors array and use the reduce method over it to create an object. We will then create a key of the individual teacher's name and with the value we will take our inidividual teacher and reduce their teaches array to a number. We will take cohorts and forEach cohort we will check to see if the curriculum includes our subject (passed as an argument) taught by each instructor. If if is included, we will push that mod into our acc, which we have set to be an array.
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
      cohort.curriculum.forEach(sub => {
        acc[sub] = instructors.reduce((acc, teacher) => {
          if (teacher.teaches.includes(sub)) {
            acc.push(teacher.name)
          }
          return acc;
        }, []);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // Here we will reduce over our cohort array so we can return a single object with multiple keys. We will then dive into the curriculum of each cohort and forEach we will create a key using acc, which we have set to be an array here. then, for each teacher, if their taeches array includes the subject that we passed as a parameter for our forEach, we will push that teachers name into the array that is set to the value of the subject's key.
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

    const result = bosses.reduce((acc, boss) => {
      boss.boss.forEach(name => {
        return {
          name: sidekicks.reduce((acc, crony) => {
            let loyalty = sidekicks.loyaltyToBoss || 0;
            if (crony.boss === boss) {
              loyalty++;
            }
            return acc;
          }, {})
        };
      });
      return acc;
    }, []);
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

    [ { name: 'Justin Duncan', nationality: 'Alien', imdbStarMeterRating: 0 },
      { name: 'Tom Wilhoit', nationality: 'Kiwi', imdbStarMeterRating: 1 },
      { name: 'Jeo D', nationality: 'Martian', imdbStarMeterRating: 0 },
      { name: 'Karin Ohman', nationality: 'Swedish', imdbStarMeterRating: 0 } ]
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