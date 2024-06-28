'use strict';

let game = {
  score: 20,
  highscore: 0,
  secretNumber: 0,
  setSecretNumber: function () {
    this.secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = String(this.secretNumber);
  },
};

game.setSecretNumber();
const displayMessage = (dest, message) => {
  document.querySelector(`.${dest}`).textContent = message;
};
document.querySelector('.again').addEventListener('click', () => {
  game.score = 20;
  displayMessage('highscore', game.highscore);
  displayMessage('score', game.score);
  displayMessage('message', 'Start guessing...');
  game.setSecretNumber();
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //When guess is invalid
  if (!guess) displayMessage('message', '📛 No number!');
  // When guess is correct
  else if (guess === game.secretNumber) {
    game.highscore = game.score > game.highscore ? game.score : game.highscore;
    displayMessage('highscore', game.highscore);
    displayMessage('message', '✔ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
  }

  if (game.score === 0) {
    document.querySelector('body').style.backgroundColor = 'red';
    displayMessage('message', '😢 You have lost the game!');
  } else if (guess !== game.secretNumber) {
    displayMessage(
      'message',
      guess > game.secretNumber ? '📈 Too high!' : '📉 Too low!'
    );
    game.score--;
    displayMessage('score', game.score);
  }
});
