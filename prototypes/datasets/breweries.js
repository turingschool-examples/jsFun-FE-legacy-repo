const breweries = [
  { 
    name: "Little Machine Brew", 
    neighborhood: "Highlands", 
    beers: [
      { name: 'B.B. Rodriguez', type: 'Coffee Double Brown', abv: 8, ibu: 30, },
      { name: 'West Side is the Blessed Side', type: 'Barrel-Aged Tripel', abv: 7.3, ibu: 35, },
      { name: 'Tigercat', type: 'American Pale Ale', abv: 5.6, ibu: 48, },
      { name: 'Miner Threat', type: 'Rhubarb Grisette', abv: 4, ibu: 10, },        
      { name: 'That\'s My Yam', type: 'Stout', abv: 5.6, ibu: 25, },
      { name: 'Sir Veza', type: 'Lager', abv: 5.3, ibu: 8, },
      { name: 'Racer Back', type: 'English Pale', abv: 5.5, ibu: 18, },
      { name: 'The Gaffer', type: 'Porter', abv: 5.6, ibu: 28, },
      { name: 'N22', type: 'Stout', abv: 5.7, ibu: 30, },
      { name: 'Razz Against The Machine', type: 'Tart Raspberry Ale', abv: 5.3, ibu: 12, },
      { name: 'Spirit of the Game', type: 'Saison', abv: 5.4, ibu: 25, },
      { name: 'Socialist Millionare Problem', type: 'Pale Ale', abv: 4.9, ibu: 25, },
    ]
  },
  { 
    name: "Ratio Beerworks", 
    neighborhood: "RiNo",
    beers: [
      { name: 'Domestica', type: 'American Standard Ale', abv: 4.9, ibu: 11, },
      { name: 'Dear You', type: 'Saison', abv: 5.5, ibu: 25, },
      { name: 'Hold Steady', type: 'Chocolate Rye Scotch Ale', abv: 7.5, ibu: 27, },
      { name: 'Antidote', type: 'India Pale Ale', abv: 7.0, ibu: 69, },
      { name: 'Repeater', type: 'Pale Ale', abv: 6.1, ibu: 50, }
    ]
  },
  { 
    name: "Spangalang Brewery", 
    neighborhood: "Five Points",
    beers: [
      { name: 'Sugarfood', type: 'Belgian', abv: 3.5, ibu: 15, },
      { name: 'Sidewinder Wit', type: 'Belgian Style Wit', abv: 5.5, ibu: 12, },
      { name: 'Beatrice', type: 'Saison', abv: 6, ibu: 30, },
      { name: 'Sir Hops-A-Lot', type: 'Saison', abv: 4.5, ibu: 40, },
      { name: 'Birth of Cool', type: 'Gose', abv: 4.6, ibu: 10, },
      { name: 'Dysfunction Junction', type: 'Sour', abv: 6.2, ibu: 4, },
      { name: 'Dry Hopped Lager', type: 'Lager', abv: 5.3, ibu: 30, },
      { name: 'Summer Citrus IPA', type: 'India Pale Ale', abv: 6.5, ibu: 60, },
      { name: 'D-Train', type: 'India Pale Ale', abv: 6.5, ibu: 50, },
    ]
  },
  { 
    name: "Beryl's Beer Co.", 
    neighborhood: "RiNo", 
    beers: [
      { name: '5 to 7', type: 'Hoppy Pils', abv: 5.7, ibu: 50, },
      { name: 'Dick Nichols', type: 'India Pale Ale', abv: 7.1, ibu: 60, },
      { name: 'Heaven-N-Helles', type: 'Helles', abv: 4.9, ibu: null, },
      { name: 'Mila', type: 'Sour', abv: 4.2, ibu: null, },
      { name: 'O.G. Dunkel', type: 'Bavarian Dunkel', abv: 5.1, ibu: null, },
      { name: 'Paper Moon', type: 'Pale Ale', abv: 5.8, ibu: null, },
      { name: 'Riga', type: 'Porter', abv: 7.2, ibu: null, },
    ]
  },
  {
    name: "Platt Park Brewing Co.", 
    neighborhood: "Platt Park",
    beers: [
      { name: 'Platt Park Porter', type: 'Porter', abv: 5.4, ibu: 22, },
      { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 },
      { name: 'Phaded Pale Ale', type: 'American Pale Ale', abv: 5.1, ibu: 42 },
      { name: 'Old Man Strength', type: 'Imperial Red Ale', abv: 10.3, ibu: 88 },
      { name: 'Tropical Snow Dance IPA', type: 'India Pale Ale', abv: 6.9, ibu: 90 },
      { name: 'Madagascar Dream', type: 'Cream Ale', abv: 6.9, ibu: 18 },
      { name: 'Oktoberfest', type: 'Oktoberfest', abv: 5.5, ibu: 29 },
    ]
  }
];

module.exports = {
  breweries
}