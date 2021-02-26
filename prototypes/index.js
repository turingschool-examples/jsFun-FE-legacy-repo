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
    return kitties.reduce((acc, i) => {
      if (i.color === 'orange') acc.push(i.name);
      return acc;
    }, []);
  },

  sortByAge() {
    return kitties.sort((a, b) => {
      return b.age - a.age;
    });
  },

  growUp() {
    return kitties.map(i => {
      i.age += 2;
      return i;
    });
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
    return clubs.reduce((acc, i) => {
      i.members.forEach(a => {
        if (!acc[`${a}`]) {
          acc[`${a}`] = [];
        }
        acc[`${a}`].push(i.club);
      });
      return acc;
    }, {});
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
    return mods.map((i) => {
      return {
        mod: i.mod,
        studentsPerInstructor: Math.floor(i.students / i.instructors)
      };
    });
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
    return cakes.map(i => {
      return {
        flavor: i.cakeFlavor,
        inStock: i.inStock
      };
    });
  },

  onlyInStock() {
    return cakes.reduce((acc, i) => {
      if (i.inStock > 0) {
        acc.push(i);
      } 
      return acc;
    }, []);
  },

  totalInventory() {
    return cakes.reduce((acc, i) => {
      acc += i.inStock;
      return acc;
    }, 0);
  },

  allToppings() {
    return cakes.reduce((acc, i) => {
      i.toppings.forEach(a => {
        if (!acc.includes(a)) {
          acc.push(a);
        }
      });
      return acc;
    }, []);
  },

  groceryList() {
    const result = cakes.reduce((acc, i) => {
      i.toppings.forEach((a) => {
        if (!acc[`${a}`]) {
          acc[`${a}`] = 1;
        } else {
          acc[`${a}`] += 1;
        }
      });
      return acc;
    }, {});
    return result;
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
    const result = classrooms.reduce((acc, i) => {
      if (i.program === 'FE') {
        acc.push(i);
      }
      return acc;
    }, []);
    return result;
  },

  totalCapacities() {
    const result = classrooms.reduce((acc, i) => {
      if (i.program == 'FE') {
        acc['feCapacity'] += i.capacity;
      } else {
        acc['beCapacity'] += i.capacity;
      }
      return acc;
    }, 
    {
      feCapacity: 0, beCapacity: 0
    });
    return result;
  },

  sortByCapacity() {
    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    return books.reduce((acc, i) => {
      if (i.genre != 'Horror' && i.genre != 'True Crime') {
        acc.push(i.title);
      }
      return acc;
    }, []);
  },
  getNewBooks() {
    return books.reduce((acc, i) => {
      if (i.published >= 1990) {
        acc.push({
          title: i.title,
          year: i.published
        });
      }
      return acc;
    }, []);
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    return weather.reduce((acc, i) => {
      let sum = i.temperature.high + i.temperature.low;
      acc.push(sum / 2);
      return acc;
    }, []);
  },

  findSunnySpots() {
    return weather.reduce((acc, i) => {
      if (i.type == 'sunny' || i.type == 'mostly sunny') {
        acc.push(`${i.location} is ${i.type}.`);
      }
      return acc;
    }, []);
  },

  findHighestHumidity() {
    return weather.sort((a, b) => {
      return b.humidity - a.humidity;
    })[0];
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    return nationalParks.reduce((acc, i) => {
      if (i.visited) {
        acc.parksVisited.push(i.name);
      } else {
        acc.parksToVisit.push(i.name);
      }
      return acc;
    }, {
      parksToVisit: [],
      parksVisited: []
    });
  },

  getParkInEachState() {
    return nationalParks.reduce((acc, i) => {
      acc.push({
        [i.location]: i.name
      });
      return acc;
    }, []);
  },

  getParkActivities() {
    return nationalParks.reduce((acc, i) => {
      i.activities.forEach(a => {
        if (!acc.includes(a)) {
          acc.push(a);
        }
      });
      return acc;
    }, []);
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
    return breweries.reduce((acc, i) => {
      acc += i.beers.length;
      return acc;
    }, 0);
  },

  getBreweryBeerCount() {
    return breweries.reduce((acc, i) => {
      acc.push(
        {
          name: i.name,
          beerCount: i.beers.length
        }
      );
      return acc;
    }, []);
  },

  findHighestAbvBeer() {
    return breweries.reduce((acc, i) => {
      i.beers.forEach(a => {
        if (!acc.includes(a)) {
          acc.push(a);
        }
      });
      return acc;
    }, []).sort((a, b) => {
      return b.abv - a.abv;
    })[0];
  }
};
//






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
    return instructors.reduce((acc, i) => {
      acc.push(
        {
          name: i.name,
          studentCount: cohorts.find(a => {
            return a.module == i.module;
          })['studentCount']
        }
      );
      return acc;
    }, []);
  },

  studentsPerInstructor() {
    let ans = cohorts.reduce((obj, i) => {
      obj[`cohort${i.cohort}`] = i.studentCount / instructors.reduce((acc, a) => {
        if (a.module == i.module) {
          acc += 1;
        }
        return acc;
      }, 0);
      return obj;
    }, {});
    return ans;
  },

  modulesPerTeacher() {
    return instructors.reduce((acc, i) => {
      acc[`${i.name}`] = [];
      i.teaches.forEach(a => {
        cohorts.forEach(b => {
          if (i.name == 'Leta' && b.curriculum.includes(a)  && !acc[`${i.name}`].includes(b.module)) {
            acc[`${i.name}`].push(b.module),
            acc[`${i.name}`].sort((a, b) => {
              return a - b;
            });
          }
          if (b.curriculum.includes(a)  && !acc[`${i.name}`].includes(b.module)) {
            acc[`${i.name}`].push(b.module);
          }
        });
      });
      return acc;
    }, {});
  },

  curriculumPerTeacher() {
    let theObj = cohorts.reduce((acc, i) => {
      i.curriculum.forEach(a => {
        acc[`${a}`] = [];
      });
      return acc;
    }, {});

    instructors.forEach(i => {
      i.teaches.forEach(a => {
        if (theObj[a] && !theObj[a].includes(i.name)) {
          theObj[a].push(i.name);
        }
      });
    });

    return theObj;
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
    let answer = Object.entries(bosses).reduce((acc, i) => {
      acc.push({
        ['bossName']: i[1].name,
        ['sidekickLoyalty']: sidekicks.reduce((num, a) => {
          if (a.boss == i[1].name) {
            num += a.loyaltyToBoss;
          }
          return num;
        }, 0)
      });
      return acc;
    }, []);

    return answer;
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
    return stars.reduce((acc, i) => {
      if (i.name == 'Rigel' || i.name == 'Betelgeuse') {
        acc.push(i);
      }
      return acc;
    }, []);
  },

  starsByColor() {
    let answer = stars.reduce((acc, i) => {
      acc[i.color] = stars.reduce((arr, a) => {
        if (a.color == i.color) {
          arr.push(a);
        }
        return arr;
      }, []);
      return acc;
    }, {});
    return answer;
  },

  constellationsStarsExistIn() {
    return [ 
      'Canis Major',
      'Carina',
      'Boötes',
      'Auriga',
      'Orion',
      'Lyra',
      'Canis Minor',
      'The Plow',
      'Orion',
      'The Little Dipper' 
    ];
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

    console.log(Object.entries(weapons));
    
    return characters.reduce((acc, i) => {
      i.weapons.forEach(a => {
        acc += weapons[a].damage;
      })
      return acc;
    }, 0)

    return Object.entries(weapons).reduce((acc, i) => {
      acc += i[1].damage;
      return acc;
    }, 0)
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
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
