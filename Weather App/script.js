document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    const apiKey = "YOUR_API_KEY"; // Replace with OpenWeather API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        changeBackground(data.weather[0].main);
    } catch (error) {
        alert("City not found! Try again.");
    }
}

function changeBackground(weather) {
    const body = document.body;
    if (weather.includes("Clear")) body.style.backgroundColor = "#FFD700";
    else if (weather.includes("Clouds")) body.style.backgroundColor = "#B0C4DE";
    else if (weather.includes("Rain")) body.style.backgroundColor = "#4682B4";
    else if (weather.includes("Snow")) body.style.backgroundColor = "#E0FFFF";
    else body.style.backgroundColor = "#87CEEB";
}
