let typed = new Typed('#Sapaan', {
  strings: ['Welcome'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = '0';
}
function hideMenu() {
  navLinks.style.right = '-200px';
}
