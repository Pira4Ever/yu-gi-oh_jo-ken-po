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
    button: document.getElementById('next-duels'),
  },
};

const playerSides = {
  player1: 'player-cards',
  computer: 'computer-cards',
};

const imagesPath = 'src/assets/icons/';

const cardData = [
  {
    id: 0,
    name: 'Blue Eyes White Dragon',
    type: 'Paper',
    img: `${imagesPath}dragon.png`,
    winOf: [1],
    loseOf: [2],
  },
  {
    id: 1,
    name: 'Dark Magician',
    type: 'Rock',
    img: `${imagesPath}magician.png`,
    winOf: [2],
    loseOf: [1],
  },
  {
    id: 2,
    name: 'Exodia',
    type: 'Scissors',
    img: `${imagesPath}exodia.png`,
    winOf: [0],
    loseOf: [2],
  },
];

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

async function createCardImage(cardId, fieldSide) {
  const cardImage = document.createElement('img');
  cardImage.setAttribute('height', '100px');
  cardImage.setAttribute('src', 'src/assets/icons/card-back.png');
  cardImage.setAttribute('data-id', cardId);
  cardImage.classList.add('card');

  if (fieldSide === playerSides.player1) {
    cardImage.addEventListener('click', () => {
      setCardsField(cardImage.getAttribute('data-id'));
    });
    cardImage.addEventListener('mouseover', () => {
      drawSelectCard(cardId);
    });
  }

  return cardImage;
}

async function drawSelectCard(index) {
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = `Attribute: ${cardData[index].type}`;
}

async function drawCards(cardNumbers, filedSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(randomIdCard, filedSide);

    document.getElementById(filedSide).appendChild(cardImage);
  }
}

function init() {
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);
}

init();
