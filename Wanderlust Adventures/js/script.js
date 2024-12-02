// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Smooth scroll to table
function scrollToTable() {
    document.getElementById('destination-table').scrollIntoView({ behavior: 'smooth' });
}

// Back-to-top button functionality
window.onscroll = function() {toggleBackToTopButton()};
function toggleBackToTopButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
}

// Form validation (added to contact form)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simple form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert('Please fill out all fields!');
        return false;
    }

    alert('Thank you for contacting us!');
    this.reset(); // Reset the form after successful submission
});

// Dropdown menu functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseout', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
