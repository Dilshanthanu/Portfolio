function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon-img');

    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {

        menuIcon.src = 'https://img.icons8.com/?size=100&id=TSExQV5Lydnu&format=png&color=000000';
    } else {
        menuIcon.src = 'https://img.icons8.com/?size=100&id=68555&format=png&color=000000';
    }
}



var navbar = document.querySelector('nav');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {
    stickyNavbar();
};


const words = document.querySelectorAll(".text");
let currentWordIndex = 0;
const maxWordIndex = words.length - 1;


words.forEach((word) => {
    const letters = word.textContent.split("");
    word.textContent = ""; // Clear current word text

    letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span); 
    });
});


words[currentWordIndex].style.opacity = "1";


const changeText = () => {
    const currentWord = words[currentWordIndex];
    const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];


    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

 
    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, currentWord.children.length * 80);


    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });


    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};


changeText();
setInterval(changeText, 3000);

function navigateTo(url) {
    window.open(url, '_blank');
}

document.getElementById('downloadCvBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './Docs/Dilshan Totapaladeniya cv 2.pdf'; 
    link.download = 'Dilshan Totapaladeniya cv 2.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactButton");
    var span = document.getElementsByClassName("close")[0];

    // Hide the modal by default
    modal.style.display = "none";

    // Show modal when the "Contact Me" button is clicked
    btn.onclick = function() {
        modal.style.display = "flex"; 
        document.body.classList.add('modal-open'); 
    }

    // Close the modal when the "X" (close) button is clicked
    span.onclick = function() {
        modal.style.display = "none"; 
        document.body.classList.remove('modal-open'); 
    }

    // Close the modal if the user clicks outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";  
            document.body.classList.remove('modal-open');  
        }
    }

    // Handle form submission
    document.getElementById("contactForm").onsubmit = function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        // Get user input from form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Make a POST request to send the email using the backend
        fetch('http://localhost:5000/api/send-email', {  // Replace with your backend URL when deployed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),  // Send form data in request body
        })
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            alert('Message sent!');  // Show success message
            modal.style.display = "none";  // Close the modal
            document.body.classList.remove('modal-open');  
            document.getElementById("contactForm").reset();  // Clear the form
        })
        .catch(error => {
            console.error('Error:', error);  // Log any errors to the console
            alert('There was an issue sending your message.');  // Show error message
        });
    }
});
