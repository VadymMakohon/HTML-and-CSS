document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌙 Dark Mode";
    } else {
        body.classList.remove("light-mode");
        toggleButton.textContent = "☀️ Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙 Dark Mode";
        } else {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️ Light Mode";
        }
    });
});
