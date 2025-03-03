let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

document.getElementById("setTime").addEventListener("click", function () {
    let inputMinutes = document.getElementById("minutesInput").value;
    if (inputMinutes && inputMinutes > 0) {
        minutes = parseInt(inputMinutes);
        seconds = 0;
        updateDisplay();
    }
});

document.getElementById("start").addEventListener("click", function () {
    if (!isRunning && (minutes > 0 || seconds > 0)) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
});

document.getElementById("pause").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset").addEventListener("click", function () {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateDisplay();
});

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Time's up!");
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}
