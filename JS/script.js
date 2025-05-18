// Classic toggle button





const themeBtn = document.getElementById("themeBtn");
let darkMode = true;

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  darkMode = !darkMode;
  themeBtn.textContent = darkMode ? "☀️" : "🌙";
});

// Typed Effect
const typedText = document.getElementById("typed-text");
const phrases = ["Web Developer", "MERN Stack Developer", "UI/UX Enthusiast"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

function typeEffect() {
  const current = phrases[currentPhrase];
  const typed = current.slice(0, currentLetter);
  typedText.textContent = typed;

  if (!isDeleting && currentLetter < current.length) {
    currentLetter++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && currentLetter > 0) {
    currentLetter--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();




// // Place this before </body> in your HTML or in a JS file
// const closeBtn = document.querySelector('.navbar-close');
// const navLinks = document.querySelector('.nav-links');

// closeBtn.addEventListener('click', () => {
//   navLinks.style.display = 'none';
// });


// Toggle navbar open/close on mobile
const openBtn = document.querySelector('.navbar-open');
const closeBtn = document.querySelector('.navbar-close');
const navLinks = document.querySelector('.nav-links');

openBtn.addEventListener('click', () => {
  navLinks.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('open');
});




