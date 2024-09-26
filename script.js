// Initial "Continue" button to fade out the introduction and show the first activity section
document.getElementById('continue-btn').addEventListener('click', function() {
    // Fade out the introduction
    document.querySelector('.container').style.animation = 'fadeOut 1s ease forwards';
    
    // After the fade-out animation, display the first activity section
    setTimeout(function() {
        document.getElementById('activity-section-1').classList.add('active');
    }, 1000);
});

// Function to handle section transitions
function navigateSection(currentSection, nextSection) {
    document.getElementById(currentSection).classList.remove('active');
    setTimeout(function() {
        document.getElementById(nextSection).classList.add('active');
    }, 500);
}

// Add event listeners to navigation buttons dynamically
document.querySelectorAll('.right-btn, .left-btn').forEach(button => {
    button.addEventListener('click', function() {
        const currentSection = this.closest('.overlay-section').id;
        const direction = this.classList.contains('right-btn') ? 1 : -1;
        const currentIndex = parseInt(currentSection.split('-')[2]); // Get current section index
        const nextIndex = currentIndex + direction;
        const nextSection = `activity-section-${nextIndex}`;
        
        // Only navigate if the next section exists
        if (document.getElementById(nextSection)) {
            navigateSection(currentSection, nextSection);
        }
    });
});

// "Home" link functionality to go back to the intro section
document.getElementById('home-link').addEventListener('click', function() {
    // Hide any active sections
    document.querySelectorAll('.overlay-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show the main container again
    setTimeout(function() {
        document.querySelector('.container').style.animation = 'fadeInRight 1s ease forwards';
    }, 500);
});
