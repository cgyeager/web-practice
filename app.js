const menuOpen = document.querySelector('#mainMenuOpen');
const navButtons = document.querySelector('.nav-buttons');

menuOpen.addEventListener('click', () => {
  if (navButtons.style.display === "none") {
    navButtons.style.display = "flex";
  }
  else {
    navButtons.style.display = "none";
  }
});