const initialStore = {
  selected: { // object with the two last selected cards
    firstSelected: { id: -1, episodeId: -1 },
    secondSelected: { id: -1, episodeId: -1 }
  },
  bestTime: 0, // game record (non-persistent)
  gameSize: 0, // size of the game
  started: false, // bool value to determine if the game has started
  rightOnes: [] // array card type that the user has got right in the game
}

export default initialStore