/* eslint-disable */

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
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
		const result = kitties.reduce((acc, kitty) => {
			if (kitty.color === 'orange') {
				acc.push(kitty.name);
			}
			return acc;
		}, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
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
		
		let growCat = kitties.map(cat => {
			cat.age += 2;
			return cat;
		})

    const result = growCat.sort((a, b) => b.age - a.age);
    return result;
  }
};

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

		const result = () => {
			return clubs.reduce((acc, club) => {
				club.members.forEach(member => {
					if (!acc[member]) {
						acc[member] = [];
						acc[member].push(club.club);
					} else {
						acc[member].push(club.club);
					}
				})
				return acc;
			}, {})
		}
    return result();

		// Annotation:
			// empty obj
			// key names = person name
			// key values = array of club memberships

    // Write your annotation here as a comment
  }
};

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
			return {
				'mod': mod.mod,
				'studentsPerInstructor': mod.students / mod.instructors
			}
		});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

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
				'flavor': cake.cakeFlavor,
				'inStock': cake.inStock
			}
		});
    return result;

    // Annotation:
    // .map, set new keys for each obj in the array
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
			return cake.inStock > 0
		});
    return result;

    // Annotation:
		// cycle thru cakes array
		// only return cake obj's w/ inStock key > 0
		// FILTER() !
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((total, number) => {
			total += number.inStock;
			return total;
		}, 0);
    return result;

    // Annotation:
		// cycle through cake array
		// count inStock value on each obj
		// return total value
		// REDUCE() !
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((accu, cake) => {
		    cake.toppings.forEach(topping => {
					if (!accu.includes(topping)) {
						accu.push(topping);
					}
				});
				return accu
			}, []);
    return result;

    // Annotation:
		// return 1 array of toppings in the cake obj's
		// no duplicates (if statement)
		// use REDUCE()
		// in each cake obj, check toppings array if accu array contains the same value

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

    const result = cakes.reduce((accu, cake) => {
			cake.toppings.forEach(topping => {
				if (!accu[topping]) {
					accu[topping] = 0;
				}
				accu[topping] += 1;
			});
			return accu
		}, {});
		return result;

    // Annotation:
		// REDUCE()
		// give 1 obj, key for each topping
		// value for quantity of each
  }
};

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

    const result = classrooms.filter(classroom => {
			return classroom.program === 'FE';
		});
    return result;

    // Annotation:
		// return array w/ only FE program's
		// FILTER()
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((accu, classroom) => {
			classroom.program === 'FE' ?
				accu.feCapacity += classroom.capacity :
				accu.beCapacity += classroom.capacity
			return accu;
		}, { 'feCapacity': 0, 'beCapacity': 0 });
    return result;

    // Annotation:
		// return 1 obj
		// key feCapacity = total capacity from all FE obj
		// key beCapacity = total capacity from all BE obj
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
		// .sort() will sort an array in ascending or descending order
		// sort by a specific property value by accessing it w/ . notation
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((accu, book) => {
			if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
				accu.push(book.title)
			}
			return accu;
		}, []);
    return result;

    // Annotation:
		// reduce() b/c returning array w/ certain qualities
		// return book.title of books !book.genre === 'Horror' || !book.genre === 'True Crime'

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((accu, book) => {
			if (book.published >= 1990) {
				accu.push({ 'title': book.title, 'year': book.published });
			}
			return accu;
		}, []);
    return result;

    // Annotation:
		// return array of obj
		// only if books published after 1990
		// include book.title && book.year
  }

};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.reduce((accu, location) => {
			let avg = (location.temperature.high + location.temperature.low) / 2;
			accu.push(avg);

			return accu;
		}, []);
    return result;

    // Annotation:
		// return array of avg temps
		// each element, location.temperature key
		// inside that key (location.temperature.high + location.temp.low) / 2
		// push that value into array
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((accu, location) => {
			if (location.type === 'sunny' || location.type === 'mostly sunny') {
				let sentence = `${location.location} is ${location.type}.`;
				accu.push(sentence);
			}
			return accu;
		}, []);
    return result;

    // Annotation:
		// if location.type === 'sunny' || 'mostly sunny', push into array
		// interpolate sentence using locationName & type
		// push ^^ sentence into array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const humiditySorted = weather.sort((a, b) => b.humidity - a.humidity);
    return humiditySorted[0];

    // Annotation:
		// return obj location w/ highest humidity (descending order)
		// .sort(), return first element

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((accu, park) => {
			(park.visited === false) ? 
				accu.parksToVisit.push(park.name) : 
				accu.parksVisited.push(park.name)
			return accu;
		}, { 'parksToVisit': [], 'parksVisited': [] });
    return result;

    // Annotation:
		// return 1 obj, 2 keys
		// key1 parksToVisit = if park.visited === false, push value = park.name --> array
		// key2 parksVisited = if park.visited === true, push value = park.name --> array
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = nationalParks.map(park => {
			return { [park.location]: park.name }
		});
    return result;

    // Annotation:
		// return same length of array
		// only return, each obj -- key= ST, value= park.name
		// map() will return same array, something done to the elements
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((accu, park) => {
			park.activities.forEach(activity => {
				if (!accu.includes(activity)) {
					accu.push(activity);
				}
			})
			return accu;
		}, []);
    return result;

    // Annotation:
		// return 1 array, with all the elements from park.activities arrays
		// reduce()
		// forEach() inside each park obj, to pick each element of the activities array
		// no duplicates, so make sure accu array does not include the activity in question
	}
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((accu,brewery) => {
			accu += brewery.beers.length;
			return accu;
		}, 0);
    return result;

    // Annotation:
		// return 1 single num, REDUCE()
		// each obj, beers.length added to accu
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
			return {
				['name']: brewery.name,
				['beerCount']: brewery.beers.length
			}
		});
    return result;

    // Annotation:
		// return same length array -- map()
		// each obj only have brewery.name key & key beerCount = brewer.beers.length
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const beerArray = breweries.reduce((accu,brewery) => {
			brewery.beers.forEach(beer => {
				accu.push(beer)
			})
			return accu;
		}, []);
		const sortedBeer = beerArray.sort((a, b) => b.abv - a.abv);
		return sortedBeer[0];

    // Annotation:
		// create array list of all beers -- .reduce()
		// .sort() in descending based on breweries.beers.abv
		// return first in array
  }
};

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
			let currentStudentCount = 0;
			cohorts.forEach(cohort => {
				if (cohort.module === instructor.module) {
					currentStudentCount = cohort.studentCount;
				}
			})
			return {
				name: instructor.name,
				studentCount: currentStudentCount
			}
		});
    return result;

    // Annotation:
		// return an array of instructors -- map() over instructors
		// key1 name: instructor name
		// key2 studentCount: studentCount from COHORT array
		// loop through each cohort of the array, if the .module matches the current instructor
		// assign a var to that cohort's cohort.studentCount
		// make key2 studentCount: created var
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((accu, cohort) => {
			let instructorCount = 0;
			instructors.forEach(instructor => {
				if (instructor.module === cohort.module) {
					instructorCount++;
				}
			})
			accu[`cohort${cohort.cohort}`] = cohort.studentCount / instructorCount;
			return accu;
		}, {});
    return result;

    // Annotation:
		// reduce()
		// find teacher # per cohort
		// return obj, keys: cohort #, values: studentCount / teachers
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

    const result = instructors.reduce((accu, instructor) => {
			accu[instructor.name] = [];

			cohorts.forEach(cohort => {
				cohort.curriculum.forEach(topic => {
					if (instructor.teaches.includes(topic) === true) {
						if (!accu[instructor.name].includes(cohort.module)) {
							accu[instructor.name].push(cohort.module)
						}
					}
				})
			})
			return accu;
		}, {});
    return result;
	},
    // Annotation:
		// return 1 obj -- reduce()
		// key: instructor.name, value: array modules able to teach
		// forEach over cohorts.curriculum,
		// if cohorts.curriculum === any instructor.teaches, add that cohort.module to key valu ^^  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((accu, cohort) => {
			cohort.curriculum.forEach(topic => {
				(!accu[topic])	? accu[topic] = [] : null;

				instructors.forEach(instructor => { instructor.teaches.forEach(taughtTopic => { //replace if's w/ a filter()
						if (taughtTopic === topic) {
							(!accu[topic].includes(instructor.name)) ? accu[topic].push(instructor.name) : null;
						}})
				})
			})
			return accu;
			}, {})
    	return result;
		}
		
		// Annotation:
		// return 1 obj -- reduce()
		// key: curriculum topic, value: teachers who teach it
	}

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

	const result = bossKeys.map(boss => {
		let newObj = {};
		newObj['bossName'] = bosses[boss].name;
		newObj['sidekickLoyalty'] = 0;

		sidekicks.forEach(sidekick => {
			if (sidekick.boss === bosses[boss].name) {
				newObj['sidekickLoyalty'] += sidekick.loyaltyToBoss;
			}
		})

		return newObj;
	})

  return result;

    // Annotation:
		// create array of obj's
		// key1= bossName, value= bossName
		// key2= sidekickLoyalty, value= sidekick #
		// map() ?
  }
};

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
		
		const constellKeys = Object.keys(constellations);

    const result = stars.reduce((accu, star) => {
			constellKeys.forEach(constellName => {
				if (constellations[constellName].stars.includes(star.name)) {
					accu.push(star);
				}
			})
			return accu;
		}, [])
		return result;

    // Annotation:
		// array of objects required
		// reduce over stars array
		// 3 conditions, if obj constellations includes current star name
		// push that star obj -> accu array

		// ANOTHER WAY?
		// Object.keys constellations ?
		// .map then .filter ?
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

    const result = stars.reduce((accu, star) => {
			if (!accu[star.color]) accu[star.color] = [];

			const accuKeys = Object.keys(accu);
			accuKeys.forEach(key => {
				if (key === star.color) accu[key].push(star)})
	
			return accu;
		}, {});
    return result;

    // Annotation:
		// doesn't need to touch constellation obj at all
		// reduce over stars array
		// Object.keys so you can compare if the star's prop name
		// is = to the key string name
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


    const result = stars.filter(star => star.constellation.length > 1);

		const resultSort = result.sort((a, b) => 
		a.visualMagnitude - b.visualMagnitude)
		.map(star => star.constellation);

		return resultSort;

    // Annotation:
		// iterate over array, return array
		// filter to get rid of the element w/ no characters in name
		// sort based on visualMagnitude
		// .map to only return the name of the constellation
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
		// Answer => 113
		
		const weaponKeys = Object.keys(weapons);
		const characterKeys = Object.keys(characters);

    const result = characterKeys.reduce((accu, character) => {
			characters[character].weapons.forEach(weapon => {
				const foundW = weaponKeys.find(weaponKey => weaponKey === weapon);

				accu += weapons[foundW].damage;
			})
			return accu;
		}, 0);

    return result; //then add for every time a user uses the weapon

    // Annotation:
		// 1 total num value returned, use reduce
		// make object.keys for both sets of objects
		// iterate over each character (key),
		// check each weapons property of the char
		// syntax: (object ->) characters[charKey].weapons
		// forEach over that
		// search the weaponKeys in the forEach, checking if the weapon ===
		// this char's weapon
		// if it does, add it to the accumulator counter
		// syntax (array ->) weapons[foundWeap].damage

		// w/ obj.keys make sure if you're using it to access that spot
		// in the original object, you must set up 
		// origArrayName[objKeysName].propertyName
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
}

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
}

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
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
