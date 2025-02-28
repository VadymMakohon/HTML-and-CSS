function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    progressBar.style.width = "0%";
    nextButton.style.display = "none";
    scoreText.textContent = `Score: ${score}`;
    showQuestion();
}