/*eslint-disable*/

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

    const result = kitties
        .filter(kitty => kitty.color === 'orange')
        .map(kitty => kitty.name);

    // const result = kitties.reduce((a, kitty) => {
    //     if (kitty.color === 'orange') {
    //         a.push(kitty.name);
    //     }
    //     return a;
    // }, []);

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // First we want to filter out the kitties in the array that have a color property with the value of orange. Then we want to return a new array with only the names of the kitty which we can achieve using the map method.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties
        .sort((a, b) => b.age - a.age);

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // First we want to use the .sort() method. We do not want to compare just the current element with the next element as a whole, we want to compare an element's specific property value with the next. So we add a callback function as an argument to compare the first el.age to the next el.age. We then need to reverse the result in order to have the ages sorted from oldest to youngest.
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
    // let grownKitties = kitties.map(kitty => kitty.age += 2)

    // const result = [];

    // kitties.forEach(kitty => {
    //     kitty.age += 2;
    //     result.push(kitty);
    // });

    kitties.forEach(kitty => kitty.age += 2);

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

    let clubMembers = {};

    clubs.forEach(obj => {
        obj.members.forEach(member => {
            if (!clubMembers[member]) {
                clubMembers[member] = [obj.club];
            } else {
                clubMembers[member].push(obj.club);
            }
        });
    });

    // const clubMembers = clubs.reduce((array, obj) => {
    //    obj.members.find(member => {
    //      if(!array[member]) {
    //        array[member] = [obj.club];
    //      } else {
    //        array[member].push(obj.club);
    //      }
    //    });
    //    return array;
    //  }, {});

    const result = clubMembers;

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We want to start with an empty object that we can manipulate. Then, for each object within the clubs array we want to dive into that objects members property. Within the members array, we want to look at each member and compare each value in the array with the keys in our empty object. If the key does not yet exist, we want to add that member name as a key to our clubMembers object and go ahead and assign it a array of an element with the value of the club value that we can find within the original object that we found club and members. If the member name has already been added to the clubMembers object, then we only want to push the additional club name as an additional value to the array belonging to that member.
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

    // new array modules
    // for each object in mods, 
    // // create a new obj
    // // add mod and mod value as a key value to new obj
    // // add new key of studentsPerInstructor to new obj
    // // divide students by instructors, return to studentsPerInstructor
    // // push new obj into modules array

    // let modules = [];

    // mods.forEach(obj => {
    //     let newObj = {};
    //     newObj.mod = obj.mod;
    //     newObj.studentsPerInstructor = obj.students / obj.instructors;
    //     modules.push(newObj);
    // });

    let modules = mods.map(obj => {
        return {
        mod: obj.mod, 
        studentsPerInstructor: obj.students / obj.instructors
        };
    });

    // let modules = Object.assign([], mods);

    // modules.forEach(obj => {
    //     obj.studentsPerInstructor = obj.students / obj.instructors;
    //     delete obj.students;
    //     delete obj.instructors;
    // });

    const result = modules;

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We must first create a new array called modules that will hold all our new objects. Then for each oject in the mods array we want to pull each objects mod key and its value and add it as a key value pair into a new object. We then add a new key of studentsPerInstructor and use the current object's students value divided by the instructrors value to get our studentsPerInstructor value. After we have both our new key value pairs set we can then push the new object into our new modules array.
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

    // let cakeFlavorsAndStock = [];

    // cakes.forEach(cake => {
    //     let newCake = {};
    //     newCake.flavor = cake.cakeFlavor;
    //     newCake.inStock = cake.inStock;
    //     cakeFlavorsAndStock.push(newCake);
    // });

    let flavorsInStock = cakes.map(cake => {
        return {flavor: cake.cakeFlavor, inStock: cake.inStock};
    });

    const result = flavorsInStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We need to create a new array to hold our new objects. We then need to iterate through each object in the cakes array and assign the value of each objects cakeFlavor to a new key called flavor to add to our new object. Then we assign the current objects inStock value to a new key called inStock to add to our new obj. We then push eash new obj into the new array.
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

    let cakesInStock = cakes.filter(cake => cake.inStock > 0);

    const result = cakesInStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // I filtered out the cakes with an inStock property value greater than 0.
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((a, cake) => 
        a + cake.inStock, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We can use the reduce method to pull out the values of all the cakes instock property and add them all together
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // let toppings = cakes.flatMap(cake => cake.toppings);

    let uniqueToppings = cakes
        .flatMap(cake => cake.toppings)
        .filter((topping, i, array) => 
        array.indexOf(topping) === i);

    // let toppings = [];

    // cakes.forEach(obj => {
    //     obj.toppings.forEach(topping => {
    //         if (!toppings.includes(topping)) {
    //             toppings.push(topping)
    //         }
    //     });
    // });

    const result = uniqueToppings;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We need to use the reduce method to access all of the cakes and their toppings and combine them into one array. The reduce method compares each item and does not add duplicates
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

    let toppings = cakes.flatMap(obj => obj.toppings)

    let groceryList = {};

    toppings.forEach(topping => {
      !groceryList[topping] ? groceryList[topping] = 1
      : groceryList[topping] ++;
    });

    const result = groceryList;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We know we want an array of all of the toppings but map will return an array of arrays so we want to use flat to get a single array. We then want to create a new object that we can manipulate. We iterate through all of the toppings and if the a property does not exist yet in the groceryList object we want to add it as a property and assign it with a starting value of 1 and if that property already exists then we want to increment that value by 1.
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

    const result = classrooms.filter(obj => obj.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We simply need to filter each object from the classrooms array that matches the condition of obj.program = FE into a new array.
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // let feRooms = [];
    // let beRooms = [];

    // const roomCapacities = classrooms.forEach(classroom => {
    //   if (classroom.program === 'FE') {
    //     feRooms.push(classroom.capacity);
    //   } else {
    //     beRooms.push(classroom.capacity);
    //   }
    // });

    // const capacity = {
    //   feCapacity: feRooms.reduce((a, current) =>
    //   a + current),
    //   beCapacity: beRooms.reduce((a, current) =>
    //   a + current)
    // }

    // const capacity = {
    //     feCapacity: classrooms.filter(classroom => classroom.program === 'FE')
    //       .reduce((a, classroom) => a + classroom.capacity, 0),
    //     beCapacity: classrooms.filter(classroom => classroom.program === 'BE')
    //       .reduce((a, classroom) => a + classroom.capacity, 0)
    // }

    const capacity = {
        feCapacity: classrooms.reduce((a, classroom) => 
        classroom.program === 'FE' ? a + classroom.capacity : a, 0),
        beCapacity: classrooms.reduce((a, classroom) => 
        classroom.program === 'BE' ? a + classroom.capacity : a, 0)
    }

    const result = capacity;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We need to create a new object with new keys of feCapacity and beCapacity. To get the value for each of those keys we need to first filter and return a new array of just the fe or be classrooms and then reduce all of the classroom capacity values into one value
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) =>
        a.capacity - b.capacity);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We use the sort method to compare the classrooms using their property of capacity. The method sorts the objects in place.
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

    // let numOfBeers = [];

    // breweries.forEach(obj => numOfBeers.push(obj.beers.length));

    // let numOfBeers = breweries.map(obj => obj.beers.length);

    const result = breweries.reduce((a, obj) => a + obj.beers.length, 0)

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We can use reduce to iterate through every object in breweries and access each object's properties. We then set our accumulator to 0 and add the length of the beers array in each object together to get a total count
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // let breweryNames = [];

    // breweries.forEach(obj => {
    //   let newObj = {};
    //   newObj.name = obj.name;
    //   newObj.beerCount = obj.beers.length;
    //   breweryNames.push(newObj);
    // })

    const result = breweries.map(obj => {
        return {name: obj.name, beerCount: obj.beers.length}
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // We can use map to iterate through every object and access that object's properties. For each object we will return a new object with the current object's name being passed in for the new objects name and the current object's beers.length for the new object's beer count.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // breweries.forEach(obj => {
    //  obj.beers.forEach(beer => {
    //    beers.push(beer);
    //    beersabv.push(beer.abv);
    //  })
    // })

    let beers = breweries.flatMap(obj => obj.beers);

    let beersabv = beers.map(beer => beer.abv);

    let highestBeerAbv = beers.find(obj => obj.abv === Math.max(...beersabv));

    const result = highestBeerAbv;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // First we need to creat an array of just the beers from all of the breweries. And then we need to create an array of all of the beer's abv so that we can find the highest number in that array. Then once we have both lists we can find the beer that satisfies the condition of that beer's abv matching the highest number in the beersabv list.
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
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