    // Toggle the navigation menu and update the menu icon
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        const menuIcon = document.getElementById('menu-icon');

        // Toggle the 'active' class to show/hide the navigation links
        navLinks.classList.toggle('active');

        // Change the icon based on whether the menu is active or not
        if (navLinks.classList.contains('active')) {
            menuIcon.textContent = '✖'; // Close icon
        } else {
            menuIcon.textContent = '☰'; // Menu icon
        }
    }

    // Close the menu if the user clicks outside of it
    document.addEventListener('click', function(event) {
        const navLinks = document.getElementById('nav-links');
        const menuIcon = document.getElementById('menu-icon');

        // Check if the click was outside the nav or menu icon
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active'); // Close the menu
            menuIcon.textContent = '☰'; // Reset to menu icon
        }
    });

    // Dropdown toggle functionality for additional options
    const dropdownLabel = document.getElementById('dropdownLabel');
    const dropdownOptions = document.getElementById('dropdownOptions');

    // Toggle dropdown options visibility when label is clicked
    dropdownLabel.addEventListener('click', () => {
    dropdownOptions.style.display = dropdownOptions.style.display === 'grid' ? 'none' : 'grid';
    });

    // Select an option and navigate to the corresponding URL
    function selectOption(optionElement) {
    const url = optionElement.getAttribute('data-url'); // Get the URL from the data attribute
    window.location.href = url; // Navigate to the selected URL
    dropdownOptions.style.display = 'none'; // Hide dropdown after selection
    }

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
    if (!dropdownLabel.contains(event.target) && !dropdownOptions.contains(event.target)) {
        dropdownOptions.style.display = 'none'; // Close dropdown
    }
    });

    // Update navigation links on scroll (highlight the current section in the navbar)
    function updateNavOnScroll(entries) {
        entries.forEach(entry => {
            const navLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);

            if (entry.isIntersecting) {
                navLink.classList.add('selected'); // Highlight the active section link
            } else {
                navLink.classList.remove('selected'); // Remove highlight if not active
            }
        });
    }

    // Intersection observer to track sections and highlight corresponding navbar links
    const observer = new IntersectionObserver(updateNavOnScroll, {
        threshold: 0.6 // Trigger when 60% of the section is visible
    });

    // Observe each section to apply scroll behavior
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Sticky navbar functionality
    var navbar = document.querySelector('nav');
    var sticky = navbar.offsetTop; // Get the offset position of the navbar

    // Add or remove sticky class based on scroll position
    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Trigger sticky behavior on scroll
    window.onscroll = function() {
        stickyNavbar();
    };

    // Toggle dropdown menu in the navbar
    function toggleDropdown() {
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('active'); // Show/hide the dropdown
    }

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        const dropdown = document.querySelector('.dropdown');
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active'); // Close the dropdown
        }
    });

    // Animate text letters one by one
    const words = document.querySelectorAll(".text");
    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    // Split the letters of each word into individual spans for animation
    words.forEach((word) => {
        const letters = word.textContent.split("");
        word.textContent = ""; // Clear current word text

        letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span); // Append each letter in a span
        });
    });

    // Show the first word by default
    words[currentWordIndex].style.opacity = "1";

    // Change the word displayed and animate its letters
    const changeText = () => {
        const currentWord = words[currentWordIndex];
        const nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        // Animate the letters of the current word out
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        // Hide the current word after all letters animate out
        setTimeout(() => {
            currentWord.style.opacity = "0";
        }, currentWord.children.length * 80);

        // Animate the letters of the next word in
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });

        // Update the current word index for the next cycle
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    // Start the text animation
    changeText();
    setInterval(changeText, 3000); // Repeat every 3 seconds

    // Open a new tab with the provided URL
    function navigateTo(url) {
        window.open(url, '_blank');
    }

    // Download the CV when the button is clicked
    document.getElementById('downloadCvBtn').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = './Docs/Dilshan Totapaladeniya cv 2.pdf'; // CV file location
        link.download = 'Dilshan Totapaladeniya cv 2.pdf'; // Filename for download
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link); // Clean up after download
    });

    // Handle modal (pop-up) for the contact form
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById("contactModal");
        var btn = document.getElementById("contactButton");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "none"; // Initially hide the modal

        // Open the modal when contact button is clicked
        btn.onclick = function() {
            modal.style.display = "flex"; 
            document.body.classList.add('modal-open'); // Prevent body from scrolling
        }

        // Close the modal when the close button is clicked
        span.onclick = function() {
            modal.style.display = "none"; 
            document.body.classList.remove('modal-open'); // Re-enable body scroll
        }

        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";  
                document.body.classList.remove('modal-open');  
            }
        }

        // Handle form submission to send email via backend API
        document.getElementById("contactForm").onsubmit = function(event) {
            event.preventDefault();  // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Send data to the server via POST request
            fetch('http://localhost:5000/api/send-email', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),  
            })
            .then(response => response.json())  
            .then(data => {
                alert('Message sent!');  // Notify success
                modal.style.display = "none";  
                document.body.classList.remove('modal-open');  
                document.getElementById("contactForm").reset(); // Reset form
            })
            .catch(error => {
                console.error('Error:', error);  
                alert('There was an issue sending your message.');  // Notify failure
            });
        }
    });

    // Typing effect for the introduction text
    const text = "HI I'M Dilshan Thanushka";
    const typingTextElement = document.getElementById('typingText');
    let index = 0;

    // Function to animate typing effect
    function typeEffect() {
        if (index < text.length) {
            typingTextElement.innerHTML += text[index]; // Add next character
            index++;
            setTimeout(typeEffect, 150); // Adjust typing speed (milliseconds)
        }
    }

    // Start the typing effect when the page loads
    window.onload = function () {
        typingTextElement.innerHTML = ""; // Clear the initial text
        typeEffect(); // Start typing effect
    };
