// Navbar button burger
const menuBtn = document.querySelector('.navbar__btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
// Particles
particlesJS.load('particles-js', 'particles.json');