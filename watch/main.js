document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("darkModeSwitch");

  toggleSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
  });
});
