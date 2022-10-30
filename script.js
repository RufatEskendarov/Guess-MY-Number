'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const inputMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  inputMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // No input;
  if (!guess) {
    inputMessage('⛔ No Number!');
    //document.querySelector('.message').textContent = '⛔ No Number!';
    // Win!;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      inputMessage(guess > secretNumber ? '📈 Too high ...' : '📉 Too low ...');
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? '📈 Too high ...' : '📉 Too low ...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      inputMessage('💥 You lost the game ...');
      //document.querySelector('.message').textContent =
      //'💥 You lost the game ...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(163, 27, 27)';
    }
  }
  /*
    // Too high;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high ...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game ...';
      document.querySelector('.score').textContent = 0;
    }
    //Too low;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low ...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game ...';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
