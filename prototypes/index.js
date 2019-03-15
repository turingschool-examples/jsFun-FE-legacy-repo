/* eslint-disable */
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
    /* reduce */
    /* Create an array of the objects that have the color orange*/
    let orangeCats = kitties.filter(kitty => kitty.color == 'orange');

    /* Iterate through the array and return only the names of */
    orangeCats = orangeCats.map(function(kitty){
      return kitty.name;
    });
    const result = orangeCats;
    return result;
    /* Annotation:
        1. We need to return an array of just the names of kitties who are orange
        2. We will use the `filter` method to return a new array of the kitties that have the property orange.
        3. We will then use the `map` method to iterate through our new array and return  only the `name` property
    */
  },

  sortByAge() {
    let sortedKitties = kitties.sort(function(a, b){
      return b.age - a.age;
    });
    const result = sortedKitties;
    return result;

    /* Annotation:

    
    */
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

    kitties.forEach(function(kitty){
      kitty.age += 2;
    });

    /* Annotation:

    
    */

    const result = kitties;
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

    let obj = clubs.reduce((acc, club) => {
        club.members.forEach((member)=>{
            if(acc[member]){
                acc[member].push(club.club);
            }
            else{
                acc[member] = [club.club];
            }
        });
        return acc;
    }, {} )
    /* what would be a good way to do this? */
    const result = obj;
    return result;
    /* reduce */

    // Annotation:
    // Write your annotation here as a comment
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
    /* 1 */
    let obj = mods.reduce((acc, item)=>{
        acc.push({mod: item.mod, studentsPerInstructor : item.students / item.instructors})
        return acc;
    },[]);

    /* 2 */
    // mods.forEach(function(obj){
    //  /* can i access key value pairs from one object then copy them into antoher */
    //   obj.studentsPerInstructor = obj.students/ obj.instructors;
    //   delete obj.students;
    //   delete obj.instructors;
    // });

    const result = obj;
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






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    /* use reduce */
    let obj = cakes.reduce((acc, item) => {
        acc.push({flavor: item.cakeFlavor, inStock: item.inStock})
        return acc;
    }, []);
    // let newArr = [];
    // cakes.forEach(function(item){
    //     /* is there a better way to do this */
    //   newArr.push({flavor: item.cakeFlavor, inStock: item.inStock});
    // });
    const result = obj;
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    let newArr = cakes.filter(item => item.inStock > 0);
    const result = newArr;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    /* reduce */
    let obj = cakes.reduce((acc, item) => {
         acc += item.inStock;
         return acc;
    }, 0);
    // let totalCakes = 0;
    // cakes.map((item) => {
    //  let numberOfCakes = item.inStock;
    //  totalCakes = numberOfCakes += totalCakes;
    // });
    const result = obj;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    /* reduce  or filter*/
    let arr = cakes.reduce((acc, item)=> {
        item.toppings.forEach(topping => {
            if(!acc.includes(topping)){
                acc.push(topping);
            }
        })
        return acc;
    }, []);

    // let toppings = [];
    // toppings = cakes.map((item) => { 
    //   if(!toppings.includes(item.toppings)){
    //     return item.toppings;
    //   }
    // });
    // toppings = toppings.flat();
    // let uniqueToppings = toppings.filter(function(item, index){
    //   return toppings.indexOf(item) >= index;
    // });

    const result = arr;
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    /* reduce */
    // let obj = cakes.reduce((acc, item) => {
    //     item.toppings.forEach((topping) => {  
    //         if (acc[topping]){
    //             console.log('in if')
    //         }
    //         else {
    //             console.log('in else')
    //             acc[topping] = 0;
    //         }
    //     })
    //     return acc;
    // }, {})
    // console.log(obj);
    let groceries = {
        'dutch process cocoa': 0,
        'toasted sugar': 0,
        'smoked sea salt': 0,
        'berries' : 0,
        'crystallized ginger': 0,
        'edible flowers' : 0,
        'cranberry' : 0,
        'mint' : 0
    }

    /* best way to do this */
    cakes.map((item) => {
        item.toppings.forEach(function(item){
            groceries[item]++;
        });
    })
    const result = groceries;
    return result;
    }
};
    // Annotation:
    // Write your annotation here as a comment






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
    let frontEndRooms = classrooms.filter(item => item.program == 'FE');
    const result = frontEndRooms;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    /* reduce */
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    return classrooms.reduce((acc, item) => {
        if(item.program == 'FE'){
            acc.feCapacity += item.capacity;
        }
        else {
            acc.beCapacity += item.capacity
        }
        return acc;
    }, {feCapacity: 0,
        beCapacity: 0})

    const result = totalCapacities();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    return classrooms.sort(function(a,b) {
        return a.capacity-b.capacity;
    });
    const result = sortByCapacity();
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
    return breweries.reduce((acc, item) => {
        acc += item.beers.length;
        return acc;
    },0)
    const result = getBeerCount();
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
    return breweries.reduce((acc, item) => {
        acc.push({ name: item.name, beerCount: item.beers.length})
        return acc;

    },[])
    const result = getBreweryBeerCount();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    return breweries.reduce((acc, item) => {
        item.beers.forEach((beer) => {
            if(beer.abv > acc.abv || acc.abv == undefined){
                acc = beer;
            }
        })
        return acc;
    }, {} )

    // Annotation:
    // Write your annotation here as a comment
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
    return instructors.reduce((acc, instructor) => {
        acc.push({ name: instructor.name, studentCount: cohorts[instructor.module-1].studentCount})
        return acc;
    }, [])
    const result = studentsForEachInstructor();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    return cohorts.reduce((acc, cohort, index)=> {
        let teachers = []
        instructors.forEach((item)=>{
            if (cohort.module == item.module){
                teachers.push(item.module);
            }
        })
        {acc['cohort' + cohort.cohort] = Math.floor(cohort.studentCount / teachers.length)};
        return acc;
    }, {})
    const result = studentsPerInstructor();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [4, 2],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    return instructors.reduce((acc, instructor, index)=> {
        acc[instructor.name] = [];
        let teachMods = cohorts.map((cohort)=>{
            for( let i = 0; i < cohort.curriculum.length; i++){
                if(instructor.teaches.includes(cohort.curriculum[i]) && !acc[instructor.name].includes(cohort.module)){
                    acc[instructor.name].push(cohort.module);
                }
            }
        })
        return acc;
    }, {})
 

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

    return cohorts.reduce((acc, cohort)=>{
        cohort.curriculum.forEach((language)=>{
            acc[language] = [];
        })
        instructors.map((instructor)=>{
            for(key in acc){
                if(instructor.teaches.includes(key) && !acc[key].includes(instructor.name)){
                    acc[key].push(instructor.name)
                }
            }
        })
        return acc;
    },{})
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
    //use reduce top create keys with boss names
    return bosses.reduce((acc, boss)=>{
        console.log(boss);
        return acc;
    }, [])
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