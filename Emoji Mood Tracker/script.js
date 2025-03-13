function saveMood(emoji) {
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    let moodEntry = {
        emoji: emoji,
        timestamp: new Date().toLocaleString()
    };

    moodHistory.push(moodEntry);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

    displayMoods();
}

function displayMoods() {
    let moodList = document.getElementById("moodHistory");
    moodList.innerHTML = "";

    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    moodHistory.forEach(entry => {
        let li = document.createElement("li");
        li.innerHTML = `${entry.emoji} - <small>${entry.timestamp}</small>`;
        moodList.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", displayMoods);
