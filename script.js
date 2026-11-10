
// Find the theme button
const themeButton = document.getElementById("theme-toggle");

// When the button is clicked
themeButton.addEventListener("click", function () {

    // Switch between light and dark mode
    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});
