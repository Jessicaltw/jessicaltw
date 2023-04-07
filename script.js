const hamburgerMenu = document.querySelector('.hamburger-menu');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', function() {
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', function() {
  overlay.classList.remove('show');
});

console.log('Script file is linked successfully');