const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// -----------------------------------------------------
var typed = new Typed(".typing", {
  strings: [
    "",
    "FrontEnd Developer",
    "Problem Solver",
    "Critical Thinker",
    "Engineer",
  ],
  typeSpeed: 100,
  BackSpeed: 600,
  loop: true,
});
// --------------------------------------------------
