const player1 = {
    score: 0,
    element: document.getElementById('player1'),
    scoreElement: document.getElementById('score1'),
};

const player2 = {
    score: 0,
    element: document.getElementById('player2'),
    scoreElement: document.getElementById('score2'),
};

const rollDiceButton = document.getElementById('rollDice');
const rollDice2Button = document.getElementById('rollDice2');
const resetButton = document.getElementById('reset');

rollDiceButton.addEventListener('click', () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;

    player1.score += roll1;

    player1.scoreElement.textContent = player1.score;

    checkWinner();
});
rollDice2Button.addEventListener('click', () => {
    const roll2 = Math.floor(Math.random() * 6) + 1;

    player2.score += roll2;

    player2.scoreElement.textContent = player2.score;

    checkWinner();
});


resetButton.addEventListener('click', () => {
    player1.score = 0;

    player1.scoreElement.textContent = '0';

    player1.element.style.backgroundColor = 'initial';
});
resetButton.addEventListener('click', () => {
    player2.score = 0;

    player2.scoreElement.textContent = '0';

    player2.element.style.backgroundColor = 'initial';
});

