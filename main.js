// Navbar button burger
const burger = document.querySelector('.burger');
const menuBtn = document.querySelector('.navbar__btn');
const menuburger = document.querySelector('.navbar__list');
let menuOpen = false;

burger.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuburger.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuburger.classList.remove('open');
        menuOpen = false;
    }
});

// Particles
particlesJS.load('particles-js', 'particles-large.json');

//Get the button:
mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Navbar Sticky
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown_1() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function dropdown_2() {
  document.getElementById("myDropdown-2").classList.toggle("show");
}
function dropdown_3() {
  document.getElementById("myDropdown-3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}