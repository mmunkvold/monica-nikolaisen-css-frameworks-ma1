// hide navbar toggler icon when menu is open

document.querySelector(".navbar-toggler").addEventListener("click", hideIcon);

function hideIcon() {
  document.querySelector(".navbar-toggler").style.display = "none";
}
