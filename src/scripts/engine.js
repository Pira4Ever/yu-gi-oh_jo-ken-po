const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points'),
  },
  cardSprites: {
    avatar: document.getElementById('card-image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type'),
  },
  fiedCards: {
    player: document.getElementById('player-field-card'),
    computer: document.getElementById('computer-field-card'),
  },
  actions: {
    button: document.getElementById('next-duels')
  },
};

const imagesPath = 'src/assets/icons/';

const cardData = [
  {
    id: 0,
    name: 'Blue Eyes White Dragon',
    type: 'Paper',
    img: `${imagesPath}dragon.png`,
    winOf: [1],
    loseOf: [2]
  },
  {
    id: 1,
    name: 'Dark Magician',
    type: 'Rock',
    img: `${imagesPath}magician.png`,
    winOf: [2],
    loseOf: [1]
  },
  {
    id: 2,
    name: 'Exodia',
    type: 'Scissors',
    img: `${imagesPath}exodia.png`,
    winOf: [0],
    loseOf: [1]
  }
]

function init() {}

init();
