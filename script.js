document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menuContainer = document.getElementById("menu-container");

  hamburgerIcon.addEventListener("click", function () {
    const barsContainer = document.getElementById("bars-container");
    barsContainer.classList.toggle("transform-x");
    menuContainer.classList.toggle("hidden");
  });
});

const links = document.querySelectorAll(".link");
const contents = document.querySelectorAll(".content");

// Loop through the links and add click event listeners
links.forEach((link) => {
  // Get the contentId from the link's data attribute
  const contentId = link.dataset.content;

  // Add a click event listener
  link.addEventListener("click", () => {
    // Remove the active class from all links and contents
    links.forEach((link) => link.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active-content"));

    // Get the content element that matches the contentId
    const selectedContent = document.getElementById(contentId);

    // Add the active class to the clicked link and the matching content
    link.classList.add("active");
    selectedContent.classList.add("active-content");
  });
});

function updateLabel() {
  var addend1 = getNumber1();
  console.log("addend1:", addend1); // Print the value of addend1
  var addend2 = getNumber2();
  console.log("addend2:", addend2); // Print the value of addend2
  var sum = addend1 + addend2;
  console.log("sum:", sum); // Print the value of sum
  label.textContent = addend1 + " + " + addend2 + " = " + sum;
}
