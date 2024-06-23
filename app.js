const menuOpen = document.querySelector('#mainMenuOpen');
const navButtons = document.querySelector('.nav-buttons');

navButtons.style.display = "none";

menuOpen.addEventListener('click', () => {
  if (navButtons.style.display === "none") {
    navButtons.style.display = "flex";
  }
  else {
    navButtons.style.display = "none";
  }
});