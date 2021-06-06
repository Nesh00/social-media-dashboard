'use strict';

const init = function () {
  const body = document.querySelector('body');
  const h1 = document.querySelectorAll('h1');
  const p = document.querySelectorAll('p');
  const header = document.querySelector('.header');
  const card = document.querySelectorAll('.card');
  const btnSwitch = document.querySelector('.btn-switch');

  btnSwitch.addEventListener('click', function (e) {
    e.preventDefault();
    const btnText = btnSwitch.innerHTML;

    btnText.startsWith('Light')
      ? (btnSwitch.innerHTML = 'Dark Mode')
      : (btnSwitch.innerHTML = 'Light Mode');

    body.classList.toggle('dark');
    h1.forEach(h1 => h1.classList.toggle('dark'));
    p.forEach(p => p.classList.toggle('dark'));
    header.classList.toggle('dark');
    card.forEach(card => card.classList.toggle('dark'));
  });
};
init();
