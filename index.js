const menu = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove('active');
        navMenu.classList.remove('active');
    })
})