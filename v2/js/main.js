const bars = document.getElementById("nav-action");
const nav = document.getElementById("nav");

bars.addEventListener("click", barClicked, false);

function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}