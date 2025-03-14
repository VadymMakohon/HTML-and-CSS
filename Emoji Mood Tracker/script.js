document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

function saveMood(emoji) {
    let moodNote = document.getElementById("moodNote").value.trim();
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    let moodEntry = {
        emoji: emoji,
        note: moodNote || "No note provided",
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

    moodHistory.forEach((entry, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${entry.emoji} - ${entry.note} <small>(${entry.timestamp})</small>
            <button class="removeMood" onclick="removeMood(${index})">❌</button>
        `;
        moodList.appendChild(li);
    });
}

function removeMood(index) {
    let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];
    moodHistory.splice(index, 1);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

    displayMoods();
}

document.getElementById("clearEmoji").addEventListener("click", function () {
    document.getElementById("moodNote").value = "";
});

document.addEventListener("DOMContentLoaded", () => {
    displayMoods();
});
