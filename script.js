document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menuContainer = document.getElementById("menu-container");

  hamburgerIcon.addEventListener("click", function () {
    const barsContainer = document.getElementById("bars-container");
    barsContainer.classList.toggle("transform-x");
    menuContainer.classList.toggle("hidden");
  });
});
