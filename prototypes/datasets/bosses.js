const bosses = {
  scar: {
    name: 'Scar',
    archnemesis: 'Mufasa',
    goal: 'to rule the pride',
    sidekicks: [
      {name: 'Shenzi', dispensability: 4},
      {name: 'Banzai', dispensability: 6},
      {name: 'Ed', dispensability: 10 }
    ],
    weaknesses: ['vanity', 'hubris', 'jealousy', 'disdain for subordinates'],
    signatureMove: 'fratricide'
  },
  ursula: {
    name: 'Ursula',
    archnemesis: 'Triton',
    goal: 'to rule the seas',
    sidekicks: [
      {name: 'Flotsam', dispensability: 0},
      {name: 'Jetsam', dispensability: 0}
    ],
    weaknesses: ['jealousy', 'anger', 'bitterness'],
    signatureMove: 'tricking fools into signing legal documents without reading them thoroughly'
  },
  jafar: {
    name: 'Jafar',
    archnemesis: 'Genie',
    goal: 'to take over as Sultan',
    sidekicks: [
      {name: 'Iago', dispensability: 5}
    ],
    weaknesses: ['hubris', 'greed', 'disdain for subordinates'],
    signatureMove: 'hypnosis'
  }
};

const sidekicks = [
  {
    name: 'Shenzi',
    associates: ['Banzai', 'Ed'],
    strengths: ['leadership', 'sass'],
    boss: 'Scar',
    loyaltyToBoss: 4
  },
  {
    name: 'Banzai',
    associates: ['Shenzi', 'Ed'],
    strengths: ['strategy', 'suspicion'],
    boss: 'Scar',
    loyaltyToBoss: 5
  },
  {
    name: 'Ed',
    associates: ['Shenzi', 'Banzai'],
    strengths: ['unknown'],
    boss: 'Scar',
    loyaltyToBoss: 7
  },
  {
    name: 'Flotsam',
    associates: ['Jetsam'],
    strengths: ['spying', 'manipulation', 'flipping boats'],
    boss: 'Ursula',
    loyaltyToBoss: 10
  },
  {
    name: 'Jetsam',
    associates: ['Flotsam'],
    strengths: ['spying', 'manipulation', 'flipping boats'],
    boss: 'Ursula',
    loyaltyToBoss: 10
  },
  {
    name: 'Iago',
    associates: [],
    strengths: ['mimicry', 'critical'],
    boss: 'Jafar',
    loyaltyToBoss: 3
  }
];

module.exports = {
  bosses,
  sidekicks
};
