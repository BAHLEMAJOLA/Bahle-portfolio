document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const links = document.querySelector('ul.links');
    const contactBtn = document.querySelector('.btn');

    menu.addEventListener('click', () => {
        links.classList.toggle('active');
        contactBtn.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('ul.links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            contactBtn.classList.remove('active');
        });
    });
});

