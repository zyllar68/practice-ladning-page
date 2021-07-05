const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', () => {
  if(header.classList.contains('open')){
    body.classList.remove('no-scroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }else{
    header.classList.add('open');
    body.classList.add('no-scroll');
    fadeElems.forEach(function(element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
})