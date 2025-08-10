const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');

openButton.addEventListener('click', () => {
    container.classList.add('show-nav');
    nav.classList.add('show-nav');
});

closeButton.addEventListener('click', () => {
    container.classList.remove('show-nav');
    nav.classList.remove('show-nav');
});