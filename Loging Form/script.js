document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleLink = document.getElementById("toggle-form");
    const btn = document.querySelector(".btn");
    let isLogin = true;

    toggleLink.addEventListener("click", function (event) {
        event.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Login";
            btn.textContent = "Login";
            toggleLink.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>";
        } else {
            formTitle.textContent = "Sign Up";
            btn.textContent = "Sign Up";
            toggleLink.innerHTML = "Already have an account? <a href='#'>Login</a>";
        }
    });
});