'use strict';

const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
let activeNo;
let activePlayer = document.querySelector('.player--active');
const dice = document.images.item('img.dice'); 
let scores = [0, 0];
let currentScore = 0;

const reset = function () {
  scores[0] = 0;
  document.querySelector('#score--0').textContent = 0;
  scores[1] = 0;
  document.querySelector('#score--1').textContent = 0;
  currentScore = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  activeNo = 1;
  activePlayer.classList.remove('player--winner');
  changeActivePlayer();
  dice.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
};
const setActivePlayer = function () {
  activePlayer = document.querySelector('.player--active');
  activeNo = document
    .querySelector('.player--active')
    .classList.contains('player--0')
    ? 0
    : 1;
};

const changeActivePlayer = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  currentScore = 0;
  activePlayer.querySelector('.current-score').textContent = currentScore;
  setActivePlayer();
};

const endGame = function () {
  btnRoll.classList.add('hidden');
  btnHold.classList.add('hidden');
  dice.classList.add('hidden');
};
reset();
setActivePlayer();
const setNewScore = function (score) {
  if (score !== 1) {
    currentScore += score;
    activePlayer.querySelector(`#current--${activeNo}`).textContent =
      currentScore;
    if (scores[activeNo] + currentScore >= 100) {
      activePlayer.classList.add('player--winner');
      setActivePlayer();
      scores[activeNo] += currentScore;
      activePlayer.querySelector('.score').textContent = scores[activeNo];
      endGame();
    }
  } else if (score === 1) {
    changeActivePlayer();
  }
};
btnNew.addEventListener('click', reset);

btnRoll.addEventListener('click', function () {
  dice.classList.remove('hidden');
  const diceNo = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNo}.png`;
  setNewScore(diceNo);
});
btnHold.addEventListener('click', function () {
  scores[activeNo] += currentScore;
  activePlayer.querySelector('.score').textContent = scores[activeNo];
  changeActivePlayer();
  dice.classList.add('hidden');
});
