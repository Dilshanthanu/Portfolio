function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');



    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&#128473;';  
    } else {
        menuIcon.innerHTML = '&#9776;';  
    }
}


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