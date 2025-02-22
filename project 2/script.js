let cards = [];
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let timerInterval;

const categories = {
    fruits: ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🍑', '🍉'],
    emojis: ['😀', '😂', '😍', '😎', '😜', '😇', '😱', '🤔'],
    animals: ['🐶', '🐱', '🐭', '🐰', '🐼', '🐨', '🐯', '🦁'],
    planets: ['🪐', '🌕', '🌍', '☀️', '🌑', '🌟', '🌙', '🌏']
};

function startGame(category) {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    cards = [...categories[category], ...categories[category]];
    cards = shuffle(cards);
    displayCards();
    startTimer();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayCards() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.addEventListener('click', handleCardClick);
        cardsContainer.appendChild(cardElement);
    });
}

function handleCardClick(event) {
    const cardElement = event.target;
    const cardIndex = cardElement.dataset.index;

    if (selectedCards.length < 2 && !cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
        cardElement.innerText = cards[cardIndex];
        selectedCards.push(cardElement);

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    const isMatch = cards[card1.dataset.index] === cards[card2.dataset.index];

    if (isMatch) {
        score += 1;
        card1.classList.add('matched');
        card2.classList.add('matched');
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '';
        card2.innerText = '';
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    selectedCards = [];

    if (score === 8) {
        endGame(true);
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').innerText = `Time: ${timeLeft}s`;

        if (timeLeft === 0) {
            endGame(false);
        }
    }, 1000);
}

function endGame(won) {
    clearInterval(timerInterval);
    const message = won ? 'You Win!' : 'Game Over!';
    document.getElementById('game-over-message').innerText = message;
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('game-over').classList.remove('hidden');
}

function restartGame() {
    score = 0;
    document.getElementById('score').innerText = 'Score: 0';
    document.getElementById('game-over').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('cards-container').innerHTML = '';
    selectedCards = [];
    clearInterval(timerInterval);
}
