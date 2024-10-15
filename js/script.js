// Define the function before using it
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

// Your dropdown menu functionality
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Close the menu when a link is clicked (optional for better UX)
const navLinks = document.querySelectorAll('ul.links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('active');
        contactBtn.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.remove('hidden');
    }

    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('ul.links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            contactBtn.classList.remove('active');
        });
    });
});

