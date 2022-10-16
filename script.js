HamburgerMenu.js

let navWrapper = document.querySelector('.navigationBar'), navToogler = document
.querySelector('.navigationToggle')
navToogler.addEventListener('click', function(event) {
navWrapper.classList.toggle('active')
});