// Recipe Form Validation
document.getElementById("recipeForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("recipeName").value.trim();
  let ingredients = document.getElementById("ingredients").value.trim();
  let instructions = document.getElementById("instructions").value.trim();

  if (name && ingredients && instructions) {
    alert("Recipe submitted successfully!");
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Nutrition Form Validation
document.getElementById("nutritionForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("email").value.trim();
  let question = document.getElementById("question").value.trim();

  if (email.includes("@") && question) {
    alert("Your nutrition question has been submitted!");
    this.reset();
  } else {
    alert("Please provide a valid email and question.");
  }
});

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (n + slides.length) % slides.length; // wrap around
  slides[slideIndex].classList.add("active");
}

// Next/Prev Buttons
nextBtn?.addEventListener("click", () => showSlide(slideIndex + 1));
prevBtn?.addEventListener("click", () => showSlide(slideIndex - 1));

// Auto Slide every 4 seconds
setInterval(() => {
  showSlide(slideIndex + 1);
}, 4000);

// Initialize
showSlide(slideIndex);
