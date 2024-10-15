 // Toggle Navigation Menu on Mobile
const menu = document.getElementById('menu');
const links = document.querySelector('ul.links');
const contactBtn = document.querySelector('.btn');

menu.addEventListener('click', () => {
    links.classList.toggle('active');
    contactBtn.classList.toggle('active');
});

// Close the menu when a link is clicked (optional for better UX)
const navLinks = document.querySelectorAll('ul.links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('active');
        contactBtn.classList.remove('active');
    });
});
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the clicked section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
}
