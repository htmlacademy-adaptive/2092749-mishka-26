const buttonToggle = document.querySelector('.nav__toggle--active');
const navSelector = document.querySelector('.nav');
const headerSelector = document.querySelector('.header');

navSelector.classList.remove('main-nav--nojs');
headerSelector.classList.remove('header--nojs');

const openMenu = function(){
  // navSelector.classList.toggle('main-nav--close');
  headerSelector.classList.toggle('nav__list--opened');
}

buttonToggle.addEventListener('click', openMenu)
