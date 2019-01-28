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

    const result = kitties.filter((cat) => {return cat.color === "orange"}).map((cat) => {return cat.name});
    return result;

    // Annotation:
    // i want to filter to get only the cats who are orange\
    // after filtering ill want to map to change the current value to the name only
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort(function(ageA, ageB){return ageB.age - ageA.age;});
    return result;

    // Annotation:
    // sort to change the array by its age
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

    const result = kitties.map(function(cat){return {name: cat.name, age: cat.age + 2, color: cat.color }});
    return result;

    // Annotation:
    //  ill want to map because the array is the same length but one thing is changing in ti which is just adding two to the age.
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

    const result = clubs.reduce((acc, club)=> {
      club.members.forEach((member) => {
        if(!acc[member]){
          acc[member] = [];
        }
        acc[member].push(club.club)
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // first ill want to reduce because it wants me to change a array to an object
    //then i want to get into the array inside the object to create the new keys 
    // ill use a foreach to go thru the array with a if statement to make sure i dont create duplicates
    // and after the if statement ill want to push the club to the member
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
      return { mod: mod.mod, studentsPerInstructor: mod.students / mod.instructors }
    });
    return result;

    // Annotation:
    // this one is map because i want the same length array and im just doing math inside it 
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
      return { flavor: cake.cakeFlavor, inStock: cake.inStock}
    });
    return result;

    // Annotation:
    // ill want to map because the array is the same length 
    // ill just want the object inside this array have the same as the other but with less info
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

    const result = cakes.filter((cake) => {
      return cake.inStock > 0;
    })
    return result;

    // Annotation:
    // filter to only return cakes that are still in stock
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      return acc += cake.inStock;
    }, 0);
    return result;

    // Annotation:
    // reduce because i want a different data type then want i was orignally given 
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach((topping) => {
        if(!acc.includes(topping)){
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // this is reduce because i have to return array larger then the first array 
    // i need to go thru all the toppings array
    // when going thru the topping arrays ill have to make sure i have no duplicates
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
        if(!acc[topping]){
          acc[topping] = 0;
        }
        acc[topping]++;
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // this is reduce because i want a object from an array
    // ill have to go thru the current element array so ill have to foreach within
    // create a new key value pair if it doesnt exist in the object
    // and add one everytime the topping is listed
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

    const result = classrooms.filter((fe) => {
      return fe.program === 'FE';
    });
    return result;

    // Annotation:
    // filter to only return the fe
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, room) => {
      if(!acc[`${room.program.toLowerCase()}Capacity`]){
        acc[`${room.program.toLowerCase()}Capacity`] = 0;
      }
      acc[`${room.program.toLowerCase()}Capacity`] += room.capacity;
      return acc;
    }, {});
    return result;

    // Annotation:
    // reduce because i want a object from an array
    // ill have to check if the key value pair doesnt exist so i can create it
    //after creating it ill want to add up the students
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // its in the descriptions ill just want to sort
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

    const result = breweries.reduce((acc, el) => {
      acc += el.beers.length;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // reduce because i want a different datatype other then an array
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((beer) => {
      return { name: beer.name, beerCount: beer.beers.length };
    });
    return result;

    // Annotation:
    // map because its the same length its just the object inside the array is modified
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery, i, arr) => {
      acc = arr.reduce((acc, beer) => {
        acc = acc.concat(beer.beers);
        return acc;
      }, []).sort((numa, numb) => {
        return numb.abv - numa.abv;
      }).shift();
      return acc;
    }, {});
    return result;

    // Annotation:
    // it wants a object from an array so ill have to reduce
    // i have to compare all the beer so ill want to concat them
    // after concating them ill want to sort them
    // after sorting them ill just want to shift the highest abv out of the array
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
      return { name: instructor.name, studentCount: cohorts.reduce((acc, count) => {
        instructor.module === count.module ? acc += count.studentCount : acc;
        return acc;
      }, 0) };
    });
    return result;

    // Annotation:
    // due to the array being the same length ill want to map 
    // with the map ill want to do math between two dataset so ill reduce the second dataset
    // the reduce will return a number due to the value for the key being a number
  },


  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, curr) => {
      acc[`cohort${curr.cohort}`] = curr.studentCount / instructors.filter((module) => {
        return module.module === curr.module;
      }).length;
      return acc; 
    }, {} );
    return result;

    // Annotation:
    // reduce due to the end result being an object
    // i filter the instructor to get the class they belong in so i can get the length of the array to use it to divide it by the students 
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
      instructor.teaches.forEach((teach) => {
        cohorts.forEach((cohort) => {
          if(cohort.curriculum.includes(teach) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        });
      })
      return acc;
    }, {});


    return result;

    // Annotation:
    // reduce because it wants an object
    // create a new key value pair with the instructors name
    // ill want to go inside the instructors array to compare it with the array of cohorts.
    // if the instructors skill match any of the cohorts class ill push the mod into the instructors array.
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
      instructor.teaches.forEach((teach) => {
        if(!acc[teach]) {
          acc[teach] = [];
        }
        acc[teach].push(instructor.name);
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // this is the same as how clubs work 
    // reduce because i want an object
    // go inside the instructors array to pull the skills to make them to keys
    // then ill push the instructors names to the array of the skills 
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



    const result =  Object.keys(bosses).reduce((acc, boss) => {
      acc.push({bossName: bosses[boss].name , sidekickLoyalty: sidekicks.reduce((acc, side) => {
        if(side.boss.toLowerCase() === boss) {
          acc += side.loyaltyToBoss;
        }
        return acc;
      }, 0)});
      return acc;
    }, []);

    return result;

    // Annotation:
    // ill want the boss object to be an array so ill use the key method to make the names to a array
    //ill reduce to create the end result
    // and want to push into the array 
    // and for the numbers ill want to reduce the sidekicks to add up all the loyalt to the boss
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
      return star.constellation
       === Object.keys(constellations).reduce((acc, constellation) => {
        if( constellation === star.constellation.toLowerCase()){
          acc = star.constellation;
        }
        return acc;
      }, ' ');
    });

    return result;

    // Annotation:
    // ill want to filter because im return a smaller length array
    // withen the filter ill want to reduce the constellations so i can compare it to the star to only return stars in constellations
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
      if(!acc[star.color]) {
        acc[star.color] = [];
      }
      acc[star.color].push(star);
      return acc
    }, {});

    return result;

    // Annotation:
    // this is the same as clubs
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

    const result = characters.reduce((acc, character) => {
      Object.keys(weapons).forEach((stats) => {
        if(character.weapons.includes(stats)){
          acc += weapons[stats].damage;
        }
      });
      return acc; 
    }, 0);
    return result;

    // Annotation:
    // ill want to reduce because the end result is a number
    // withen the reduce ill have to make weapons to an array 
    // then ill want to compare the weapons to the characters
    // if match add the weapons damage to the acc
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.map((character) => {
      return Object.keys(weapons).reduce((acc, char) => {
        if(!acc[character.name]){
          acc[character.name] = { damage: 0, range: 0}
        }
        if(character.weapons.includes(char)){
          acc[character.name].damage += weapons[char].damage;
          acc[character.name].range +=  weapons[char].range;
        }
        return acc;
      }, {});
    });
    return result;

    // Annotation:
    // map because the array is the same length
    // ill going to reduce becuase i want the current element to be an object and im using an array to get the info
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

    const result = movies.reduce((acc, movie) => {
      acc[movie.title] = 0;
      Object.keys(dinosaurs).forEach((dino) => {
        if( movie.dinos.includes(dino) && dinosaurs[dino].isAwesome ) {
          acc[movie.title]++;
        }
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // ill want to reduce because im returning an object 
    // i need dino to be an array so i use the keys method for object
    // ill go through dinosuar to make sure is the movie includes it and the dino is also awesome to add it the the value
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

    const result = movies.reduce((acc, movie) => {
      if(!acc[movie.director]){
        acc[movie.director] = {};
      }
      acc[movie.director][movie.title] = 0;
      movie.cast.forEach((human) => {
        if(Object.keys(humans).includes(human)) {
          acc[movie.director][movie.title] += movie.yearReleased - humans[human].yearBorn;
        }
      });
      acc[movie.director][movie.title] = Math.floor(acc[movie.director][movie.title] / movie.cast.length);
      return acc; 
    }, {});
    return result;

    // Annotation:
    // reduce because i want an object of the dierectors
    // then i want to go thru the array within the movies 
    // then ill have to compare the object humans name to the array in the movies
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

    const result = Object.keys(humans).reduce((acc, human) => {
      let wholeCast = movies.reduce((acc, movie) => {
        acc = acc.concat(movie.cast)
        return acc;
      }, [])
      if(!wholeCast.includes(human)) {
        acc.push({name: human, nationality: humans[human].nationality, imdbStarMeterRating: humans[human].imdbStarMeterRating})
      }
      return acc; 
    }, []).sort((numa, numb) => {
      if (numa.nationality < numb.nationality){
        return -1;
      }
      if (numa.nationality  > numb.nationality){
        return 1;
      }else{
        return 0;
      }
    });
    return result;

    // Annotation:
    // ill want to make the cast to a array and reduce it because im making a completely different array
    // i need to go through the cast array to compare it to the human array to only return me the difference
    // and at the end ill want to sort it by nationality
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

    const result = Object.keys(humans).reduce((acc, human) => {
      if(humans[human].imdbStarMeterRating > 1){
        acc.push( { name: human, ages: movies.reduce((acc, movie) => {
          if(movie.cast.includes(human)){
            acc.push(movie.yearReleased - humans[human].yearBorn);
          }
          return acc;
        }, [])});
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

const cooking = {
  groceryList() {
    /*
    Return an object of ingredients missing from the fridge array for each recipe. the ingredient as the key and the amount missing as the value.
    */
  

    const result = "";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  costPerMeal() {
    /*
    Return an objects with the food name as the key and the cost to make the recipe by the ingredients.
    */
  

    const result = "";
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  costOfMissingItems() {
    /*
    Return an object with the key being the recipe and the value an object with keys value pair of an array of missing ingredients and the price to buy the missing ingredients
    */
  

    const result = "";
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
  ultimaPrompts,
  dinosaurPrompts
};