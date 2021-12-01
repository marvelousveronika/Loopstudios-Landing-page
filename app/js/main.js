


const burger = document.querySelector('.header__burger');
const headerB = document.querySelector('.header');
const menu = document.querySelector('.menu');
const body = document.body;

burger.addEventListener('click', ()=>{
    burger.classList.toggle('header__burger--active');
    headerB.classList.toggle('header--active');
    menu.classList.toggle('menu--open');
    body.classList.toggle('hidden');
})
