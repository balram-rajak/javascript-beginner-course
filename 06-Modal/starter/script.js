'use strict';

const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const hideOverlay = function () {
  //   modal.style.display = 'none';
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
btnShowModal.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    // modal.style.display = 'block';
    overlay.classList.remove('hidden');
  });

  //   btnCloseModal.addEventListener('click', function () {
  //     modal.style.display = 'none';
  //   });
});

btnCloseModal.addEventListener('click', hideOverlay);
overlay.addEventListener('click', hideOverlay);
