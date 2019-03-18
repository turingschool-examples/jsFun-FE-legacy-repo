// ==============================================
// Scope Exercise ________________________________
// ==============================================

exerciseMU() {
    var avenger = 'Iron Man';

    function changeHero() {

      // Log A: avenger
      function callAsgardian() {
        let avenger = 'Thor';
        if (avenger === 'Thor') {
          avenger = 'Loki';
          // Log B: avenger
        }
      }

      if (avenger === 'Iron Man') {
        const avenger = 'Hawk Eye';
        callAsgardian();
      } else {
        let avenger = 'Spiderman';
      }

      // Log C: avenger

      function rename() {
        avenger = 'Black Widow';
        // Log D: avenger
      }

      rename();

      // Log E: avenger

    }

    // Log F: avenger

    changeHero();

    // Log G: avenger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }


// ==============================================
// Proto Dataset ________________________________
// ==============================================
const cardgame = [
  {
    'Name': 'Blue-Eyes White Dragon',
    'Attribute': 'Light',
    'Type': [
      'Dragon',
      'Normal'
    ],
    'Atk': 3000,
    'Def': 2500,
    'Require Tribute': [
      'monster',
      'monster'
    ]
  },
  {
    'Name': 'Dark Magician',
    'Attribute': 'Dark',
    'Type': [
      'Spellcaster',
      'Normal'
    ],
    'Atk': 2500,
    'Def': 2100,
    'Require Tribute': [
      'monster',
      'monster'
    ]
  },
  {
    'Name': 'Dark Magician Girl',
    'Attribute': 'Dark',
    'Type': [
      'Spellcaster',
      'Effect'
    ],
    'Atk': 2000,
    'Def': 1700,
    'Require Tribute': [
      'monster'
    ]
  },
  {
    'Name': 'Blue-Eyes Ultimate Dragon',
    'Attribute': 'Light',
    'Type': [
      'Dragon',
      'Fusion'
    ],
    'Atk': 4000,
    'Def': 3800,
    'Require Tribute': [
      'Blue-Eyes White Dragon',
      'Blue-Eyes White Dragon',
      'Blue-Eyes White Dragon'
    ]
  },
  {
    'Name': 'Red-Eyes Black Dragon',
    'Attribute': 'Dark',
    'Type': [
      'Dragon',
      'Normal'
    ],
    'Atk': 2400,
    'Def': 2000,
    'Require Tribute': [
      'monster',
      'monster'
    ]
  },
  {
    'Name': 'Red-Eyes Black Metal Dragon',
    'Attribute': 'Dark',
    'Type': [
      'Machine',
      'Effect'
    ],
    'Atk': 2800,
    'Def': 2400,
    'Require Tribute': [
      'Red-Eyes Black Dragon'
    ]
  }
];

module.exports = {
  cardgame
};


// ==============================================
// Proto Exercise _______________________________
// ==============================================

// DATASET: cardgame from ./datasets/cardgame
const cardgamePrompts = {
  drawHand() {
    // Create an array of all the card names. e.g.
    // [
    //   'Dark Magician',
    //   'Blue-Eyes Ultimate Dragon',
    //   'Red-Eyes Black Dragon'
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAtk() {
    // Return the array of cards sorted by their Atk (greatest Atk to least)

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  doesRequireTribute() {
    // Create an array of card objects that require at least 2 tributes
    // {
    //  'Name': 'Blue-Eyes White Dragon',
    //  'Attribute': 'Light',
    //  'Type': [
    //    'Dragon',
    //    'Normal'
    //   ],
    //   'Atk': '3000',
    //   'Def': '2500',
    //   'Require Tribute': [
    //    'monster',
    //    'monster'
    //   ]
    //  },
    //  {
    //   'Name': 'Dark Magician',
    //   'Attribute': 'Dark',
    //   'Type': [
    //    'Spellcaster',
    //    'Normal'
    //   ],
    //   'Atk': '2500',
    //   'Def': '2100',
    //   'Require Tribute': [
    //     'monster',
    //     'monster'
    //   ]
    //  }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  keepItNormal() {
    // Create an array of all the card names,
    // That have a type of 'Normal'. e.g.
    // [
    //   'Dark Magician',
    //   'Blue-Eyes White Dragon',
    //   'Red-Eyes Black Dragon'
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
