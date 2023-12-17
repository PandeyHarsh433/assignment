document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const hiddenSections = document.querySelectorAll(".section_down");
  const labels = document.querySelectorAll(".section");

  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("change", function () {
      hiddenSections.forEach((section) => {
        section.style.display = "none";
      });

      labels.forEach((label) => {
        label.classList.remove("active-section");
      });

      if (radioButton.checked) {
        hiddenSections[index].style.display = "flex";
        hiddenSections[index].style.gap = "10px";
        labels[index].classList.add("active-section");
      }
    });
  });
});
