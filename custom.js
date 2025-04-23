// Function to apply the selected theme to the document
function applyTheme(theme) {
  // Remove all possible theme classes from the body
  document.body.classList.remove("default", "cotton", "space", "retro");

  // Add the selected theme class
  document.body.classList.add(theme);

  // Save the theme in localStorage to persist the choice across page reloads
  localStorage.setItem("theme", theme);
}

// Event listener for the theme switcher button
document.getElementById("theme-submit").addEventListener("click", function () {
  const theme = document.getElementById("theme-switcher").value;
  applyTheme(theme);
});

// Load the theme from localStorage when the page loads
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "default"; // Default to "default" theme if nothing is saved
  applyTheme(savedTheme);
  
  // Set the select dropdown to reflect the saved theme
  document.getElementById("theme-switcher").value = savedTheme;
});

