const burger = document.querySelector('.header-burger');
const navigation = document.querySelector('.nav');
const dim = document.querySelector('.dim');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
    dim.classList.toggle('active');
})