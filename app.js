const burgerIcon = document.getElementById('burger-icon');
const nav = document.getElementById('nav-list');


burgerIcon.addEventListener('click', () => {
    nav.classList.toggle('show')
})
