// Modal functionality
const projectLinks = document.querySelectorAll('.project-link');
const modals = document.querySelectorAll('.modal');
const modalContents = document.querySelectorAll('.modal-content');
const closeButtons = document.querySelectorAll('.close');

// Open modal when project link is clicked
projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Close modal when close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
