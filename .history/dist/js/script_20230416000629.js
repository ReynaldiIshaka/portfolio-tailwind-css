//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
}

// Hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
})