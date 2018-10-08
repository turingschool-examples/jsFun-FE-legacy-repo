const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

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
        let newInstructor = { name: instructor.name };
        let matchingCohort = cohorts.find((cohort) => {
        return cohort.module === instructor.module;
      })
      newInstructor.studentCount = matchingCohort.studentCount;
         return newInstructor;
    });

    // Annotation:
    //find the cohort that matches the instructors cohort --> cohorts.find()
    //grab the studentcount value from that cohort --> matchingCohort.studentCount
    //add studentCount property to my newInstructor --> newInstructor.studentCount = studentCount;

  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    //USE TWO REDUCE PROTOS


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = mods.map((modules) => {
      const studentsPer = modules.students / modules.instructors;
      const modData = {mod: modules.mod, studentsPerInstructor: studentsPer};
      return modData;
    });

    return result;

    //I needed to create a new array of the same size as the mods array
    //so used the proto .map(). I created a new object modData that had two key-value pairs, passing in the mod number and students per instructor variable 

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

    const result = classrooms.filter((classroom) => {
     return classroom.program === 'FE';
     });
    return result;


    //I need to filter through the given array and find the objects that have the key value pair of program: 'FE'. Then I will assign this to an array, result.
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
    const result = classrooms.reduce((obj, classroom) => {

    if ( classroom.program === 'FE') {
        obj.feCapacity += classroom.capacity;
    } else {
        obj.beCapacity += classroom.capacity;
    }
  
    return obj;
    }, {feCapacity:0, beCapacity: 0});

return result;

    // Annotation:
    // Write your annotation here as a comment
    //II need to go through each 
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






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    

    const result = cakes.reduce( (cakesArr, cake) => {
    cake.toppings.forEach((topping) => {
    if (!cakesArr.includes(topping)) { 
      cakesArr.push(topping)
    }
  })
  return cakesArr;
}, [])


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
        const result = cakes.reduce((acc, currentCake) => {
  //go through each cake and grab the toppings array & iterate over each toppings array
        currentCake.toppings.forEach((currentTopping) => {
    //Create an oject key for each toppings - if it doesnt already exist
        if (!acc[currentTopping]) {
      acc[currentTopping] = 1;
        }
    //if it does exist, add 1 to the value of that key
        else {
      acc[currentTopping]++;
            }
        })
    return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
      let cakeObj = {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      }
      return cakeObj;
    })

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    cakes.reduce((acc, cakeObj) => {
        acc += cakeObj.inStock
        return acc;
    }, 0)

    const result = 'REPLACE WITH YOUR RESULT HERE';
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

    const result = cakes.filter((currentCake) => {
        return currentCake.inStock;
    });

    return result;

    //Im recieving an array of cake, I want a subset of that array 
    //to be returned so I'm going to reach for filter. My filter callback
    //will return only the cakes who have an inStock value
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }
   
    const piesToBeMade = pie.desiredInventoryCount - pie.inventoryCount;
    const ingredientsOfPie = pie.ingredients;
    const ingredientsKeys = Object.keys(ingredientsOfPie);
    const groceryList = Object.assign({}, pie.ingredients);

    ingredientsKeys.forEach((ingredient) => {
    groceryList[ingredient] = groceryList[ingredient] * piesToBeMade;
  })

    const result = groceryList;
    return result;

    // Annotation:
    // Write your annotation here as a comment

    //We are given an object, and we need to access the value of the key ingredients. 
    //which is an object with 2 properties. We want to return this object with each values multiplied by the amount of pies needed. We reached for the object.keys prototype to grab the keys of the ingredients value object, and used forEach to iterate through this object and update the values of each key in our new assigned object. }
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

    const clubbers = clubs.reduce((acc, currentClub) => {
    currentClub.members.forEach((member) => {
        let memberName = member;
        let clubArray = [];
        acc[memberName] = clubArray;
        clubArray = clubs.reduce((acc, currentClub) => {
      if (currentClub.members.includes(member)) {
        clubArray.push(currentClub.club);
      };
    }, [])
  })
  return acc;
}, {})




    const result = clubbers;
    return result;

    // Annotation:
    // We are given a dataset of one array (clubs) 
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

    
    const bossKeys = Object.keys(bosses);
    bossKeys.map((boss) => {
    let loyalty = sidekicks.reduce((loyaltySum, sidekick) => {
    if (sidekick.boss === bosses[boss].name) {
      loyaltySum += sidekick.loyaltyToBoss;
        }
    return loyaltySum;
    }, 0)
    return {bossName: bosses[boss].name, sidekickLoyalty: loyalty};
    })
    
    const result = bossKeys;
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






// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitten => kitten.color === 'orange')
    result.map((kitten) => {
        return kitten.name;
        })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((kitten1,kitten2) => {
    return kitten1.age - kitten2.age
        });
    return result;

    // Annotation:
    // Write your annotation here as a comment
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


    const result = kitties.map((kitten) => {
    kitten.age = kitten.age + 2;
    return kitten;
    })
    return result;

  }

};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
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



const newConst = Object.assign(constellations);
const constArray = Object.keys(newConst);
constArray;
//grab names from constellation object
constArray.forEach((constellation) => {
  //grab the stars array for each constellation object
  // (constellations.constellation);
  const starsArray = constellations[constellation].stars;
  console.log(starsArray);
  starsArray.forEach((star) => {
    stars.filter((currentStar) => {
      return star.includes(currentStar);
        // console.log(stars);
    })
    stars;
  })
})



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

    const result = stars.reduce((retObj, star) => {
        if (star.color in retObj) {
          retObj[star.color].push(star);
        }
        else {
          retObj[star.color] = [star];
        }
      return retObj;
    }, {});

    console.log('result' , result);

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



module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts
};