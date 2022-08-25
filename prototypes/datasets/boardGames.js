const boardGames = {
  strategy: [
    { name: 'Chess', rating: 6.9, maxPlayers: 2 },
    { name: 'Catan', rating: 6.9, maxPlayers: 6 },
    { name: 'Checkers', rating: 5.9, maxPlayers: 2 },
    { name: 'Pandemic', rating: 7.4, maxPlayers: 4 },
    { name: 'Battle Ship', rating: 5.7, maxPlayers: 2 },
    { name: 'Azul', rating: 8.8, maxPlayers: 4 },
    { name: 'Ticket To Ride', rating: 7.4, maxPlayers: 4 },
  ],
  party: [
    { name: 'Werewolf', rating: 6.1, maxPlayers: 24 },
    { name: 'Cards Against Humanity', rating: 5.6, maxPlayers: 30 },
    { name: 'Codenames', rating: 7.4, maxPlayers: 8 }, 
    { name: 'Sushi Go! Party', rating: 6.9, maxPlayers: 8 },
    { name: 'Tsuro', rating: 6.7, maxPlayers: 8 },
  ],
  childrens: [
    { name: 'Candy Land', rating: 3.8, maxPlayers: 4 },
    { name: 'Connect Four', rating: 4.9, maxPlayers: 2 },
    { name: 'Operation', rating: 4.5, maxPlayers: 6 },
    { name: 'Trouble', rating: 3.8, maxPlayers: 4 },
  ],
}

module.exports = {
  boardGames,
}