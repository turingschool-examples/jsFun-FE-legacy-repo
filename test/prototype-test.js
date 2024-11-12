const chai = require("chai");
const expect = chai.expect;
const { puppers } = require('../prototypes/datasets/puppers')
const { kitties } = require('../prototypes/datasets/kitties')
const { clubs } = require('../prototypes/datasets/clubs')
const { classrooms } = require('../prototypes/datasets/classrooms')
const { books } = require('../prototypes/datasets/books')
const { weather } = require('../prototypes/datasets/weather')

const {
  findOrangeNames,
  sortByAge,
  growUp
} = require("../prototypes/problem-sets/kitties");

const {
  findClubMembers
} = require("../prototypes/problem-sets/clubs");

const {
  getStats
} = require("../prototypes/problem-sets/mods");

const {
  getStockCounts,
  getInStock,
  doInventory,
  getToppings,
  makeGroceryList
} = require("../prototypes/problem-sets/cakes");

const {
  getClassrooms,
  getCapacities,
  sortByCapacity,
  filterAndSortClassrooms
} = require("../prototypes/problem-sets/classrooms");

const {
  removeViolence,
  getByGenre,
  getNewBooks,
} = require("../prototypes/problem-sets/books")

const {
    getBeerCount,
    getBreweryBeerCount,
    getSingleBreweryBeerCount,
    findHighestAbvBeer,
    findHighestAbvAll
} = require("../prototypes/problem-sets/breweries")

const {
  getAverageTemps,
  findSunnySpots,
  findHighestHumidity,
  findByType,
  getAverageTempByType
} = require("../prototypes/problem-sets/weather")

const {
  getParkVisitList,
  getParkInEachState,
  getParkActivities
} = require("../prototypes/problem-sets/nationalParks")

const {
  listGames,
  findHighestRatedGamesByType,
  averageScoreByType,
  averageScoreByTypeAndPlayers
} = require("../prototypes/problem-sets/boardGames")

const {
  studentsForEachInstructor,
  studentsPerInstructor,
  modulesPerTeacher,
  curriculumPerTeacher
} = require("../prototypes/spicy-problem-sets/turing")

const {
  getStarsByColor
} = require("../prototypes/spicy-problem-sets/astronomy")

const {
  getTotalDamage,
  charactersByTotal
} = require("../prototypes/spicy-problem-sets/ultima")

const {
  countAwesomeDinosaurs,
  averageAgePerMovie
} = require("../prototypes/spicy-problem-sets/dinosaurs")

// const {

// } = require("../prototypes/spicy-problem-sets/nationalParks")

// const {

// } = require("../prototypes/spicy-problem-sets/nationalParks")

// const {

// } = require("../prototypes/spicy-problem-sets/nationalParks")

describe("PROTOTYPES", () => {
  describe("Kitty Prompts", () => {
    it.skip("orangeKittyNames", () => {
      const e = findOrangeNames(kitties);

      expect(e).to.deep.equal(["Tiger", "Snickers"])
    });

    it.skip("sortByAge", () => {
      const e = sortByAge(kitties);

      expect(e).to.deep.equal([{
        name: "Snickers",
        age: 8,
        color: "orange"
      }, {
        name: "Tiger",
        age: 5,
        color: "orange"
      }, {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, {
        name: "Max",
        age: 1,
        color: "tuxedo"
      }])
    });

    it.skip("growUp", () => {
      const e = growUp(kitties);

      expect(e).to.deep.equal([{
        name: "Snickers",
        age: 10,
        color: "orange"
      }, {
        name: "Tiger",
        age: 7,
        color: "orange"
      }, {
        name: "Felicia",
        age: 4,
        color: "grey"
      }, {
        name: "Max",
        age: 3,
        color: "tuxedo"
      }])
    })
    describe('Kitty Prompts Refactor', () => {
      it.skip('should be able to handle orange puppers', () => {
        const e = findOrangeNames(puppers);

        expect(e).to.deep.equal(["Hatchet", "Butter"])
      })

      it.skip('should sort pups too', () => {
        const e = sortByAge(puppers);

        expect(e).to.deep.equal([{
          name: 'Scout',
          age: 12,
          color: 'grey'
        }, {
          name: 'Stick',
          age: 6,
          color: 'brown'
        }, {
          name: 'Hatchet',
          age: 3,
          color: 'orange'
        }, {
          name: 'Butter',
          age: 1,
          color: 'orange'
        }])
      })

      it.skip('should age puppers too', () => {
        const e = growUp(puppers);

        expect(e).to.deep.equal([{
          name: 'Scout',
          age: 14,
          color: 'grey'
        }, {
          name: 'Stick',
          age: 8,
          color: 'brown'
        }, {
          name: 'Hatchet',
          age: 5,
          color: 'orange'
        }, {
          name: 'Butter',
          age: 3,
          color: 'orange'
        }])
      })
    })
  });

  describe("Club Prompts", () => {
    it.skip("membersBelongingToClubs", () => {
      const e = findClubMembers(clubs);

      expect(e).to.deep.equal({
        Louisa: ['Drama', 'Art'],
        Pam: ['Drama', 'Chess', 'Newspaper'],
        Nathaniel: ['Drama', 'Astronomy'],
        Leta: ['Band', 'Newspaper', 'Astronomy'],
        Robbie: ['Band', 'Chess', 'FBLA'],
        Jhun: ['Band', 'Art'],
        Will: ['Band'],
        David: ['Chess', 'Newspaper', 'FBLA'],
        Brittany: ['Chess', 'Newspaper'],
        Christie: ['Newspaper', 'FBLA']
      })
    })
  });

  describe("Mod Prompts", () => {
    it.skip("studentsPerMod", () => {
      const e = getStats();

      expect(e).to.deep.equal([{
        mod: 1,
        studentsPerInstructor: 9
      }, {
        mod: 2,
        studentsPerInstructor: 11
      }, {
        mod: 3,
        studentsPerInstructor: 10
      }, {
        mod: 4,
        studentsPerInstructor: 8
      }])
    })
  });

  describe("Cake Prompts", () => {
    it.skip("stockPerCake", () => {
      const e = getStockCounts();

      expect(e).to.deep.equal([{
        flavor: "dark chocolate",
        inStock: 15
      }, {
        flavor: "yellow",
        inStock: 14
      }, {
        flavor: "white chiffon",
        inStock: 0
      }, {
        flavor: "butter rum",
        inStock: 9
      }, {
        flavor: "vanilla",
        inStock: 21
      }, {
        flavor: "honey",
        inStock: 0
      }])
    });

    it.skip("onlyInStock", () => {
      const e = getInStock();

      expect(e).to.deep.equal([{
        cakeFlavor: "dark chocolate",
        filling: null,
        frosting: "dark chocolate ganache",
        toppings: ["dutch process cocoa", "toasted sugar", "smoked sea salt"],
        inStock: 15
      }, {
        cakeFlavor: "yellow",
        filling: "citrus glaze",
        frosting: "chantilly cream",
        toppings: ["berries", "edible flowers"],
        inStock: 14
      }, {
        cakeFlavor: "butter rum",
        filling: "ginger cardamom swirl",
        frosting: "spiced rum glaze",
        toppings: ["crystallized ginger", "toasted sugar"],
        inStock: 9
      }, {
        cakeFlavor: "vanilla",
        filling: "St Germaine",
        frosting: "whipped cream",
        toppings: ["smoked sea salt", "crystallized ginger", "berries"],
        inStock: 21
      }])
    });

    it.skip("totalInventory", () => {
      const e = doInventory();

      expect(e).to.deep.equal(59)
    });

    it.skip("allToppings", () => {
      const e = getToppings();

      expect(e).to.deep.equal(["dutch process cocoa", "toasted sugar", "smoked sea salt", "berries", "edible flowers", "mint", "cranberry", "crystallized ginger"])
    });

    it.skip("groceryList", () => {
      const e = makeGroceryList();

      expect(e).to.deep.equal({
        "dutch process cocoa": 1,
        "toasted sugar": 3,
        "smoked sea salt": 3,
        berries: 2,
        "edible flowers": 2,
        mint: 1,
        cranberry: 1,
        "crystallized ginger": 2
      })
    })
  });

  describe("Class Prompts", () => {
    it.skip("getClassrooms", () => {
      const e = getClassrooms("FE");

      expect(e).to.deep.equal([{
        roomLetter: "A",
        program: "FE",
        capacity: 32
      }, {
        roomLetter: "C",
        program: "FE",
        capacity: 27
      }, {
        roomLetter: "E",
        program: "FE",
        capacity: 22
      }, {
        roomLetter: "G",
        program: "FE",
        capacity: 29
      }])
    });

    it.skip("totalCapacities", () => {
      const e = getCapacities();

      expect(e).to.deep.equal({
        feCapacity: 110,
        beCapacity: 96
      })
    });

    it.skip("sortByCapacity", () => {
      const e = sortByCapacity(classrooms);

      expect(e).to.deep.equal([{
        roomLetter: "H",
        program: "BE",
        capacity: 18
      }, {
        roomLetter: "F",
        program: "BE",
        capacity: 19
      }, {
        roomLetter: "E",
        program: "FE",
        capacity: 22
      }, {
        roomLetter: "C",
        program: "FE",
        capacity: 27
      }, {
        roomLetter: "B",
        program: "BE",
        capacity: 29
      }, {
        roomLetter: "G",
        program: "FE",
        capacity: 29
      }, {
        roomLetter: "D",
        program: "BE",
        capacity: 30
      }, {
        roomLetter: "A",
        program: "FE",
        capacity: 32
      }])
    })

    it.skip("filter and sort BE", () => {
      const e = filterAndSortClassrooms("BE");

      expect(e).to.deep.equal([{
        roomLetter: "H",
        program: "BE",
        capacity: 18
      }, {
        roomLetter: "F",
        program: "BE",
        capacity: 19
      }, {
        roomLetter: "B",
        program: "BE",
        capacity: 29
      }, {
        roomLetter: "D",
        program: "BE",
        capacity: 30
      }])
    })

    it.skip("filter and sort FE", () => {
      const e = filterAndSortClassrooms("FE");

      expect(e).to.deep.equal([{
        roomLetter: "E",
        program: "FE",
        capacity: 22
      }, {
        roomLetter: "C",
        program: "FE",
        capacity: 27
      }, {
        roomLetter: "G",
        program: "FE",
        capacity: 29
      }, {
        roomLetter: "A",
        program: "FE",
        capacity: 32
      }])
    })
  });

  describe("Book prompts", () => {
    it.skip("removeViolence", () => {
      const e = removeViolence(books);

      expect(e).to.deep.equal(['1984',
        'The Great Gatsby',
        'Lord of the Flies',
        'Harry Potter and the Sorcerer\'s Stone',
        'The Hitchhiker\'s Guide to the Galaxy',
        'Flowers for Algernon',
        'Slaughterhouse-Five',
        'The Handmaid\'s Tale',
        'The Metamorphosis', 'Brave New World',
        'Life of Pi',
        'The Curious Incident of the Dog in the Night-Time',
        'The Bell Jar',
        'Catch-22',
        'Treasure Island'])
    });

    it.skip("getNewBooks", () => {
      const e = getNewBooks(books);

      expect(e).to.deep.equal([{
        title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997
      },
      { title: 'Life of Pi', year: 2001 },
      {
        title: 'The Curious Incident of the Dog in the Night-Time', year: 2003
      }])
    });

    it.skip("getByGenre", () => {
      const e = getByGenre(books, "Fiction", 1954);

      expect(e).to.deep.equal([ 'Life of Pi', 'The Bell Jar' ])

      const e2 = getByGenre(books, "Science Fiction", 1950);

      expect(e2).to.deep.equal([
        "The Hitchhiker's Guide to the Galaxy",
        'Flowers for Algernon',
        'Slaughterhouse-Five',
        "The Handmaid's Tale"
      ]);
    });
  });

  describe("Weather prompts", () => {
    it.skip("getAverageTemps", () => {
      const e = getAverageTemps();

      expect(e).to.deep.equal([
        40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5
      ])
    }),
      it.skip("findSunnySpots", () => {
        const e = findSunnySpots();

        expect(e).to.deep.equal(['Atlanta, Georgia is sunny.', 'New Orleans, Louisiana is sunny.', 'Raleigh, North Carolina is mostly sunny.']
        )
      }),
      it.skip("findHighestHumidity", () => {
        const e = findHighestHumidity();

        expect(e).to.deep.equal({
          location: 'Portland, Oregon',
          type: 'cloudy',
          humidity: 84,
          temperature: { high: 49, low: 38 }
        })
      }),
      it.skip("findByType sunny", () => {
        const e = findByType(weather, "sunny");

        expect(e).to.deep.equal([ 
          'Atlanta, Georgia is sunny.',
          'New Orleans, Louisiana is sunny.',
          'Raleigh, North Carolina is mostly sunny.' 
        ]
        )
      }),
      it.skip("findByType cloudy", () => {
        const e = findByType(weather, "cloudy");

        expect(e).to.deep.equal([
          'New York, New York is cloudy',
          'Portland, Oregon is cloudy',
          'Boston, Massachusetts is cloudy',
          'Miami, Florida is partly cloudy',
          'Phoenix, Arizona is cloudy',
          'Anchorage, Alaska is cloudy'
        ]
        )
      }),
      it.skip("getAverageTempByType sunny high", () => {
        const e = getAverageTempByType("sunny", "high");

        expect(e).to.deep.equal("The average high for sunny locations is 58 degrees.")
      }),
      it.skip("getAverageTempByType sunny low", () => {
        const e = getAverageTempByType("sunny", "low");
        console.log('e', e)

        expect(e).to.deep.equal("The average low for sunny locations is 43.5 degrees.")
      }),
      it.skip("getAverageTempByType cloudy low", () => {
        const e = getAverageTempByType("cloudy", "low");

        expect(e).to.deep.equal("The average low for cloudy locations is 33.4 degrees.")
      })
  });

  describe("National Park Prompts", () => {
    it.skip("getParkVisitList", () => {
      const e = getParkVisitList();

      expect(e).to.deep.equal({
        parksToVisit: ['Yellowstone', 'Glacier', 'Everglades'],
        parksVisited: ['Rocky Mountain', 'Acadia', 'Zion']
      })
    }),
      it.skip("getParkActivities", () => {
        const e = getParkActivities();

        expect(e).to.deep.equal(
          ['hiking',
            'shoeshoing',
            'camping',
            'fishing',
            'boating',
            'watching wildlife',
            'cross-country skiing',
            'swimming',
            'bird watching',
            'canyoneering',
            'backpacking',
            'rock climbing'
          ])
      }),
      it.skip("getParkInEachState", () => {
        const e = getParkInEachState();

        expect(e).to.deep.equal(
          [
            { Colorado: 'Rocky Mountain' },
            { Wyoming: 'Yellowstone' },
            { Montana: 'Glacier' },
            { Maine: 'Acadia' },
            { Utah: 'Zion' },
            { Florida: 'Everglades' }
          ])
      })
  });

  describe("Brewery Prompts", () => {
    it.skip("getBeerCount", () => {
      const e = getBeerCount();

      expect(e).to.deep.equal(40)
    });

    it.skip("getBreweryBeerCount", () => {
      const e = getBreweryBeerCount();

      expect(e).to.deep.equal([{
        name: "Little Machine Brew",
        beerCount: 12
      }, {
        name: "Ratio Beerworks",
        beerCount: 5
      }, {
        name: "Spangalang Brewery",
        beerCount: 9
      }, {
        name: "Beryl's Beer Co.",
        beerCount: 7
      }, {
        name: "Platt Park Brewing Co.",
        beerCount: 7
      }])
    });

    it.skip("getSingleBreweryBeerCount", () => {
      const ratioCount = getSingleBreweryBeerCount('Ratio Beerworks');
      const plattCount = getSingleBreweryBeerCount('Platt Park Brewing Co.');

      expect(ratioCount).to.equal(5);
      expect(plattCount).to.equal(7);
    });

    it.skip("findHighestAbvBeer", () => {
      const e = findHighestAbvBeer("Ratio Beerworks");

      expect(e).to.deep.equal({ name: 'Hold Steady', type: 'Chocolate Rye Scotch Ale', abv: 7.5, ibu: 27, })

      const e2 = findHighestAbvBeer("Little Machine Brew");

      expect(e2).to.deep.equal({ name: 'B.B. Rodriguez', type: 'Coffee Double Brown', abv: 8, ibu: 30, })
    })


    it.skip("findHighestAbvAll", () => {
      const e = findHighestAbvAll();

      expect(e).to.deep.equal({
        name: "Barrel Aged Nature's Sweater",
        type: "Barley Wine",
        abv: 10.9,
        ibu: 40
      })
    })
  });

  describe("Board Game Prompts", () => {
    it.skip("listGames", () => {
      const strategyGames = listGames('strategy');
      const childrensGames = listGames('childrens');
      const partyGames = listGames('party');

      expect(strategyGames).to.deep.equal(["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket To Ride"]);
      expect(childrensGames).to.deep.equal(["Candy Land", "Connect Four", "Operation", "Trouble"]);
      expect(partyGames).to.deep.equal(["Werewolf", "Cards Against Humanity", "Codenames", "Sushi Go! Party", "Tsuro"]);
    });

    
    it.skip("findHighestRatedGamesByType", () => {
      const highestStrategy = findHighestRatedGamesByType('strategy');
      const highestChildrens = findHighestRatedGamesByType('childrens');
      const highestParty = findHighestRatedGamesByType('party');

      expect(highestStrategy).to.deep.equal({ name: 'Azul', rating: 8.8, maxPlayers: 4 });
      expect(highestChildrens).to.deep.equal({ name: 'Connect Four', rating: 4.9, maxPlayers: 2 });
      expect(highestParty).to.deep.equal({ name: 'Codenames', rating: 7.4, maxPlayers: 8 });
    });

    it.skip("averageScoreByType", () => {
      const avScoreStrat = averageScoreByType('strategy');
      const avScoreChildren = averageScoreByType('childrens');
      const avScoreParty = averageScoreByType('party');

      expect(Math.round(avScoreStrat * 100) / 100).to.equal(7);
      expect(Math.round(avScoreChildren * 100) / 100).to.equal(4.25);
      expect(Math.round(avScoreParty * 100) / 100).to.equal(6.54);
    });

    it.skip("averageScoreByTypeAndPlayers", () => {
      const avScoreStrat = averageScoreByTypeAndPlayers('strategy', 2);
      const avScoreChildren = averageScoreByTypeAndPlayers('childrens', 4);
      const avScoreParty = averageScoreByTypeAndPlayers('party', 8);
      Math.round(avScoreChildren * 100) / 100
      expect(Math.round(avScoreStrat * 100) / 100).to.equal(6.17); // 2 players
      expect(Math.round(avScoreChildren * 100) / 100).to.equal(3.8); // 4 players
      expect(Math.round(avScoreParty * 100) / 100).to.equal(7); // 8 players
    });
  })

  describe("Turing Prompts", () => {
    it.skip("studentsForEachInstructor", () => {
      const e = studentsForEachInstructor();

      expect(e).to.deep.equal([{
        name: "Pam",
        studentCount: 21
      }, {
        name: "Brittany",
        studentCount: 21
      }, {
        name: "Nathaniel",
        studentCount: 21
      }, {
        name: "Robbie",
        studentCount: 18
      }, {
        name: "Leta",
        studentCount: 18
      }, {
        name: "Travis",
        studentCount: 30
      }, {
        name: "Louisa",
        studentCount: 30
      }, {
        name: "Christie",
        studentCount: 20
      }, {
        name: "Will",
        studentCount: 20
      }])
    });

    it.skip("studentsPerInstructor", () => {
      const e = studentsPerInstructor();

      expect(e).to.deep.equal({
        cohort1806: 15,
        cohort1804: 7,
        cohort1803: 10,
        cohort1801: 9
      })
    });

    it.skip("modulesPerTeacher", () => {
      const e = modulesPerTeacher();

      expect(e).to.deep.equal({
        Pam: [2, 4],
        Brittany: [2, 4],
        Nathaniel: [2, 4],
        Robbie: [4],
        Leta: [2, 4],
        Travis: [1, 2, 3, 4],
        Louisa: [1, 2, 3, 4],
        Christie: [1, 2, 3, 4],
        Will: [1, 2, 3, 4]
      })
    });

    it.skip("curriculumPerTeacher", () => {
      const e = curriculumPerTeacher();

      expect(e).to.deep.equal({
        html: ["Travis", "Louisa"],
        css: ["Travis", "Louisa"],
        javascript: ["Travis", "Louisa", "Christie", "Will"],
        recursion: ["Pam", "Leta"],
        scope: ["Pam", "Nathaniel", "Will"],
        oop: ["Brittany", "Nathaniel", "Will"],
        react: ["Christie", "Will"],
        redux: ["Will"],
        pwas: ["Brittany", "Robbie", "Leta", "Louisa"],
        mobile: ["Nathaniel"],
        node: ["Pam", "Robbie", "Leta", "Louisa", "Christie"]
      })
    })
  });

  describe("Astronomy Prompts", () => {
    it.skip("getStarsByColor", () => {
      const e = getStarsByColor();

      expect(e).to.deep.equal({
        blue: [{
          name: "Sirius",
          visualMagnitude: -1.46,
          constellation: "Canis Major",
          lightYearsFromEarth: 8.6,
          color: "blue"
        }, {
          name: "Vega",
          visualMagnitude: .3,
          constellation: "Lyra",
          lightYearsFromEarth: 25,
          color: "blue"
        }, {
          name: "Rigel",
          visualMagnitude: .13,
          constellation: "Orion",
          lightYearsFromEarth: 860,
          color: "blue"
        }, {
          name: "Achernar",
          visualMagnitude: .46,
          constellation: "The Plow",
          lightYearsFromEarth: 140,
          color: "blue"
        }, {
          name: "Hadar",
          visualMagnitude: .61,
          constellation: "The Little Dipper",
          lightYearsFromEarth: 350,
          color: "blue"
        }],
        white: [{
          name: "Canopis",
          visualMagnitude: -.74,
          constellation: "Carina",
          lightYearsFromEarth: 310,
          color: "white"
        }, {
          name: "Procyon",
          visualMagnitude: .34,
          constellation: "Canis Minor",
          lightYearsFromEarth: 11,
          color: "white"
        }],
        yellow: [{
          name: "Alpha Centauri",
          visualMagnitude: -.27,
          constellation: "",
          lightYearsFromEarth: 4.4,
          color: "yellow"
        }, {
          name: "Capella",
          visualMagnitude: .08,
          constellation: "Auriga",
          lightYearsFromEarth: 42,
          color: "yellow"
        }],
        orange: [{
          name: "Arcturus",
          visualMagnitude: -.05,
          constellation: "Boötes",
          lightYearsFromEarth: 37,
          color: "orange"
        }],
        red: [{
          name: "Betelgeuse",
          visualMagnitude: .5,
          constellation: "Orion",
          lightYearsFromEarth: 640,
          color: "red"
        }]
      })
    });

  });

  describe("Ultima Prompts", () => {
    it.skip("getTotalDamage", () => {
      const e = getTotalDamage();

      expect(e).to.deep.equal(59)
    });

    it.skip("charactersByTotal", () => {
      const e = charactersByTotal();

      expect(e).to.deep.equal([{
        Avatar: {
          damage: 27,
          range: 24
        }
      }, {
        Iolo: {
          damage: 28,
          range: 46
        }
      }, {
        Shamino: {
          damage: 31,
          range: 39
        }
      }, {
        Dupre: {
          damage: 27,
          range: 24
        }
      }])
    })
  });

  describe("Dinosaur Prompts", () => {
    it.skip("countAwesomeDinosaurs", () => {
      const e = countAwesomeDinosaurs();

      expect(e).to.deep.equal({
        'Jurassic Park': 5,
        'The Lost World: Jurassic Park': 8,
        'Jurassic Park III': 9,
        'Jurassic World': 11,
        'Jurassic World: Fallen Kingdom': 18
      })
    });

    it.skip("averageAgePerMovie", () => {
      const e = averageAgePerMovie();

      expect(e).to.deep.equal({
        'Steven Spielberg': {
          'Jurassic Park': 34,
          'The Lost World: Jurassic Park': 37
        },
        'Joe Johnston': {
          'Jurassic Park III': 44
        },
        'Colin Trevorrow': {
          'Jurassic World': 56
        },
        'J. A. Bayona': {
          'Jurassic World: Fallen Kingdom': 59
        }
      })
    });
  });

  describe("Boss Prompts", () => {
    it.skip("bossLoyalty", () => {
      const e = bossPrompts.bossLoyalty();

      expect(e).to.deep.equal([{
        bossName: "Scar",
        sidekickLoyalty: 16
      }, {
        bossName: "Ursula",
        sidekickLoyalty: 20
      }, {
        bossName: "Jafar",
        sidekickLoyalty: 3
      }])
    })
  });

  describe("Astronomy Prompts II", () => {
    it.skip("starsInConstellations", () => {
      const e = astronomyPrompts.starsInConstellations();

      expect(e).to.deep.equal([{
        name: 'Rigel',
        visualMagnitude: 0.13,
        constellation: 'Orion',
        lightYearsFromEarth: 860,
        color: 'blue'
      }, {
        name: 'Achernar',
        visualMagnitude: 0.46,
        constellation: 'The Plow',
        lightYearsFromEarth: 140,
        color: 'blue'
      }, {
        name: 'Betelgeuse',
        visualMagnitude: 0.5,
        constellation: 'Orion',
        lightYearsFromEarth: 640,
        color: 'red'
      },
      {
        name: 'Hadar',
        visualMagnitude: 0.61,
        constellation: 'The Little Dipper',
        lightYearsFromEarth: 350,
        color: 'blue'
      }
      ])
    });
  });

  describe("Dino Prompts II", () => {
    it.skip("uncastActors", () => {
      const e = uncastActors();

      expect(e).to.deep.equal([{
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
      }])
    });

    it.skip("actorsAgesInMovies", () => {
      const e = actorsAgesInMovies();

      expect(e).to.deep.equal([{
        name: 'Sam Neill',
        ages: [46, 54]
      }, {
        name: 'Laura Dern',
        ages: [26, 34]
      }, {
        name: 'Jeff Goldblum',
        ages: [41, 45, 63, 66]
      }, {
        name: 'Richard Attenborough',
        ages: [70, 74, 92, 95]
      }, {
        name: 'Ariana Richards',
        ages: [14, 18]
      }, {
        name: 'Joseph Mazello',
        ages: [10, 14]
      }, {
        name: 'BD Wong',
        ages: [33, 55, 58]
      }, {
        name: 'Chris Pratt',
        ages: [36, 39]
      }, {
        name: 'Bryce Dallas Howard',
        ages: [34, 37]
      }])
    })
  });



})
