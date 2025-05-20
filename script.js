document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("darkmode");
        if (body.classList.contains("darkmode")) {
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });
});
