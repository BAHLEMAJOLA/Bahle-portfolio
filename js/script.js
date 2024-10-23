
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

document.addEventListener('DOMContentLoaded', function() {
    const aboutBox = document.querySelector('.about-box');

    // Reveal section on scroll
    window.addEventListener('scroll', () => {
        const aboutPosition = aboutBox.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutPosition < screenPosition) {
            aboutBox.style.opacity = '1';
            aboutBox.style.transform = 'translateY(0)';
        } else {
            aboutBox.style.opacity = '0';
            aboutBox.style.transform = 'translateY(20px)';
        }
    });

    // Hover glow effect for skills
    const skillElements = document.querySelectorAll('.skill');
    skillElements.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.textShadow = '0 0 10px #0073e6';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.textShadow = 'none';
        });
    });
});


// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when "Read More" is clicked
    readMoreButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Close modal when "X" is clicked
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        modals.forEach((modal) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
