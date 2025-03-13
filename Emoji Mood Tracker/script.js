document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

function saveMood(emoji) {
    let moodNote = document.getElementById("moodNote").value;
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    let moodEntry = {
        emoji: emoji,
        note: moodNote,
        timestamp: new Date().toLocaleString()
    };

    moodHistory.push(moodEntry);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

    displayMoods();
    updateChart();
}

function displayMoods() {
    let moodList = document.getElementById("moodHistory");
    moodList.innerHTML = "";

    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    moodHistory.forEach(entry => {
        let li = document.createElement("li");
        li.innerHTML = `${entry.emoji} - ${entry.note} <small>(${entry.timestamp})</small>`;
        moodList.appendChild(li);
    });
}

function updateChart() {
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    let moodCounts = {};

    moodHistory.forEach(entry => {
        moodCounts[entry.emoji] = (moodCounts[entry.emoji] || 0) + 1;
    });

    let ctx = document.getElementById("moodChart").getContext("2d");
    if (window.moodChart) {
        window.moodChart.destroy();
    }
    window.moodChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(moodCounts),
            datasets: [{
                label: "Mood Count",
                data: Object.values(moodCounts),
                backgroundColor: ["#ff7eb3", "#ff758c", "#ff5a8a", "#f0475b", "#e71c23"],
            }]
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayMoods();
    updateChart();
});
