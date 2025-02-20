document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // Form submission alert (for now)
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message!");
        form.reset();
    });

    // Animate elements on page load
    document.querySelectorAll(".fade-in").forEach(el => el.style.opacity = "1");
});
