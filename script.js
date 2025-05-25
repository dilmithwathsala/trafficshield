// Optional: Add scroll highlight or simple interactions
document.addEventListener("DOMContentLoaded", () => {
  console.log("Traffic Violation Detection System page loaded");

  // Example: Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
