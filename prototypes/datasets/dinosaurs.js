const dinosaurs = { 
  Brachiosaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Dilophosaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Gallimimus: { carnivore: true, herbivore: true, isAwesome: false },
  Triceratops: { carnivore: false, herbivore: true, isAwesome: true },
  Parasaurolophus: { carnivore: false, herbivore: true, isAwesome: false },
  'Tyrannosaurus Rex': { carnivore: true, herbivore: false, isAwesome: true },
  Velociraptor: { carnivore: true, herbivore: false, isAwesome: true },
  Compsognathus: { carnivore: true, herbivore: false, isAwesome: true },
  Mamenchisaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Pachycephalosaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Pteranodon: { carnivore: true, herbivore: false, isAwesome: true },
  Stegosaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Ankylosaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Ceratosaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Corythosaurus: { carnivore: false, herbivore: true, isAwesome: false },
  Spinosaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Apatosaurus: { carnivore: false, herbivore: true, isAwesome: true },
  Dimorphodon: { carnivore: true, herbivore: false, isAwesome: true },
  'Indominus Rex': { carnivore: true, herbivore: false, isAwesome: true },
  Mosasaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Allosaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Baryonyx: { carnivore: true, herbivore: false, isAwesome: true },
  Carnotaurus: { carnivore: true, herbivore: false, isAwesome: true },
  Indoraptor: { carnivore: true, herbivore: false, isAwesome: true },
  Sinoceratops: { carnivore: true, herbivore: true, isAwesome: true },
  Stygimoloch: { carnivore: false, herbivore: true, isAwesome: true } 
};

const humans = {
  'Sam Neill': {
    yearBorn: 1947,
    nationality:'Irish',
    imdbStarMeterRating: 5000
  },
  'Tom Wilhoit':{
    yearBorn: 1777,
    nationality:'Kiwi',
    imdbStarMeterRating:1
  },
  'Laura Dern': {
    yearBorn: 1967,
    nationality:'American',
    imdbStarMeterRating: 5000
  },
  'Jeff Goldblum': {
    yearBorn: 1952,
    nationality:'American',
    imdbStarMeterRating:5000
  },
  'Jeo D': {
    yearBorn: 1776,
    nationality:'Martian',
    imdbStarMeterRating:0
  },
  'Richard Attenborough': {
    yearBorn: 1923,
    nationality:'British',
    imdbStarMeterRating:5000
  },
  'Ariana Richards': {
    yearBorn: 1979,
    nationality:'American',
    imdbStarMeterRating:5000
  },
  'Joseph Mazello': {
    yearBorn: 1983,
    nationality:'American',
    imdbStarMeterRating: 21
  },
  'Justin Duncan': {
    yearBorn: 1775,
    nationality:'Alien',
    imdbStarMeterRating: 0
  },
  'BD Wong': {
    yearBorn: 1960,
    nationality:'American',
    imdbStarMeterRating:5000
  },
  'Chris Pratt': {
    yearBorn: 1979,
    nationality:'American',
    imdbStarMeterRating:500
  },
  'Karin Ohman': {
    yearBorn: 1995,
    nationality: 'Chinese',
    imdbStarMeterRating: 0
  },
  'Bryce Dallas Howard': {
    yearBorn: 1981,
    nationality:'American',
    imdbStarMeterRating:80
  }
}; 

const movies = [
  {
    title: 'Jurassic Park',
    director: 'Steven Spielberg',
    leadingActor: 'Sam Neill',
    cast: [
      'Sam Neill',
      'Laura Dern',
      'Jeff Goldblum',
      'Richard Attenborough',
      'Ariana Richards',
      'Joseph Mazello',
      'BD Wong'
    ],
    dinos: [
      'Brachiosaurus',
      'Dilophosaurus',
      'Gallimimus',
      'Triceratops',
      'Parasaurolophus',
      'Tyrannosaurus Rex',
      'Velociraptor'
    ],
    yearReleased: 1993,
    hasOscar: true,
    millionsGrossed: 1029,
  },
  {
    title: 'The Lost World: Jurassic Park',
    director: 'Steven Spielberg',
    leadingActor: 'Jeff Goldblum',
    cast: [
      'Jeff Goldblum',
      'Richard Attenborough',
      'Ariana Richards',
      'Joseph Mazello'
    ],
    dinos: [
      'Compsognathus',
      'Gallimimus',
      'Mamenchisaurus',
      'Pachycephalosaurus',
      'Parasaurolophus',
      'Pteranodon',
      'Stegosaurus',
      'Triceratops',
      'Tyrannosaurus Rex',
      'Velociraptor'
    ],
    yearReleased: 1997,
    hasOscar: false,
    millionsGrossed: 619
  },
  {
    title: 'Jurassic Park III',
    director: 'Joe Johnston',
    leadingActor: 'Sam Neill',
    cast: ['Sam Neill', 'Laura Dern'],
    dinos: ['Ankylosaurus', 'Brachiosaurus', 'Ceratosaurus', 'Corythosaurus', 'Parasaurolophus', 'Pteranodon', 'Spinosaurus', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus Rex', 'Velociraptor'],
    cast: [
      'Sam Neill',
      'Laura Dern'
    ],
    dinos: [
      'Ankylosaurus',
      'Brachiosaurus',
      'Ceratosaurus',
      'Corythosaurus',
      'Parasaurolophus',
      'Pteranodon',
      'Spinosaurus',
      'Stegosaurus',
      'Triceratops',
      'Tyrannosaurus Rex',
      'Velociraptor'
    ],
    yearReleased: 2001,
    hasOscar: false,
    millionsGrossed: 369
  },
  {
    title: 'Jurassic World',
    director: 'Colin Trevorrow',
    leadingActor: 'Chris Pratt',
    cast: [
      'Jeff Goldblum',
      'Richard Attenborough',
      'BD Wong',
      'Chris Pratt',
      'Bryce Dallas Howard'
    ],
    dinos: [
      'Ankylosaurus',
      'Apatosaurus',
      'Dimorphodon',
      'Gallimimus',
      'Indominus Rex',
      'Mosasaurus',
      'Pachycephalosaurus',
      'Parasaurolophus',
      'Pteranodon',
      'Stegosaurus',
      'Triceratops',
      'Tyrannosaurus Rex',
      'Velociraptor'
    ],
    yearReleased: 2015,
    hasOscar: false,
    millionsGrossed: 1672
  },
  {
    title: 'Jurassic World: Fallen Kingdom',
    director: 'J. A. Bayona',
    leadingActor: 'Chris Pratt',
    cast: [
      'Jeff Goldblum',
      'Richard Attenborough',
      'BD Wong',
      'Chris Pratt',
      'Bryce Dallas Howard'
    ],
    dinos: [
      'Allosaurus',
      'Ankylosaurus',
      'Apatosaurus',
      'Baryonyx',
      'Brachiosaurus',
      'Carnotaurus',
      'Compsognathus',
      'Dilophosaurus',
      'Gallimimus',
      'Indominus Rex',
      'Indoraptor',
      'Mosasaurus',
      'Parasaurolophus',
      'Pteranodon',
      'Sinoceratops',
      'Stegosaurus',
      'Stygimoloch',
      'Triceratops',
      'Tyrannosaurus Rex',
      'Velociraptor'
    ],
    yearReleased: 2018,
    hasOscar: false,
    millionsGrossed: 1304
  }
];

module.exports = {
  dinosaurs,
  humans,
  movies,
};