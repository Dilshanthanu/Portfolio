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