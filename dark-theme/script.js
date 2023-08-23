const darkModeButton = document.getElementById("dark-mode-button");
const lightModeButton = document.getElementById("light-mode-button");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
});

lightModeButton.addEventListener("click", () => {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
});
