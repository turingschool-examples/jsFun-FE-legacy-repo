const constellations = {
  orion: {
    alternateNames: ['Orion', 'The Hunter', 'The Giant', 'The Deer'],
    starNames: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Mintaka', 'Alnilam', 'Alnitak', 'Saiph']
  },
  ursaMajor: {
    alternateNames: ['Ursa Major', 'The Big Dipper', 'The Great Bear', 'The Plow'],
    starNames: ['Dubhe', 'Achernar', 'Merak', 'Phecda', 'Megrez', 'Alioth', 'Mizar', 'Alkaid']
  },
  ursaMinor: {
    alternateNames: ['Ursa Minor', 'The Little Dipper', 'The Cub', 'The Little Bear'],
    starNames: ['Polaris', 'Kochab', 'Pherkad', 'Hadar', 'Delta', 'Epsilon Ursae Minoris', 'Lambda Ursae Minoris']
  }
};

const stars = [
  {
    name: 'Sirius',
    visualMagnitude: -1.46,
    constellation: 'Canis Major',
    lightYearsFromEarth: 8.6,
    color: 'blue'
  },
  {
    name: 'Canopis',
    visualMagnitude: -0.74,
    constellation: 'Carina',
    lightYearsFromEarth: 310,
    color: 'white'
  },
  {
    name: 'Alpha Centauri',
    visualMagnitude: -0.27,
    constellation: '',
    lightYearsFromEarth: 4.4,
    color: 'yellow'
  },
  {
    name: 'Arcturus',
    visualMagnitude: -0.05,
    constellation: 'Boötes',
    lightYearsFromEarth: 37,
    color: 'orange'
  },
  {
    name: 'Vega',
    visualMagnitude: 0.3,
    constellation: 'Lyra',
    lightYearsFromEarth: 25,
    color: 'blue'
  },
  {
    name: 'Capella',
    visualMagnitude: 0.08,
    constellation: 'Auriga',
    lightYearsFromEarth: 42,
    color: 'yellow'
  },
  {
    name: 'Rigel',
    visualMagnitude: 0.13,
    constellation: 'Orion',
    lightYearsFromEarth: 860,
    color: 'blue'
  },
  {
    name: 'Procyon',
    visualMagnitude: 0.34,
    constellation: 'Canis Minor',
    lightYearsFromEarth: 11,
    color: 'white'
  },
  {
    name: 'Achernar',
    visualMagnitude: 0.46,
    constellation: 'The Plow',
    lightYearsFromEarth: 140,
    color: 'blue'
  },
  {
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
];

module.exports = {
  constellations,
  stars
}
