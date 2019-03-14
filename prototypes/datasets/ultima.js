const characters = [
  {
    name: 'Avatar',
    profession: 'heroine',
    weapons: ['magebane', 'whip', 'axe'],
    home: 'Earth',
  },
  {
    name: 'Iolo',
    profession: 'bard',
    weapons: ['crossbow', 'axe', 'halbred'],
    home: 'Britannia',
  },
  {
    name: 'Shamino',
    profession: 'ranger',
    weapons: ['bow', 'magebane', 'whip'],
    home: 'Sosaria',

  },
  {
    name: 'Dupre',
    profession: 'paladin',
    weapons: ['axe', 'halbred', 'magebane'],
    home: 'Trinsic',
  }
];

const weapons = {
  magebane : {
    damage: 9,
    range: 3
  },
  whip: {
    damage: 10,
    range: 5
  },
  axe: {
    damage: 8,
    range: 16
  },
  crossbow: {
    damage: 10,
    range: 25
  },
  halbred: {
    damage: 10,
    range: 5
  },
  bow: {
    damage: 12,
    range: 31
  }
}

module.exports = {
  characters,
  weapons
}