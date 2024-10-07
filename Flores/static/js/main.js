const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownItems = document.querySelector(".dropdown-items");

const toggleDropdown = () => dropdownItems.classList.toggle("show");

dropdownBtn.addEventListener("click", toggleDropdown);

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".dropdown-btn") &&
    dropdownItems.classList.contains("show")
  ) {
    toggleDropdown();
  }
});
