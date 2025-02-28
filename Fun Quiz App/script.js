const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
        correct: "Harper Lee"
    },
    {
        question: "What is 5 + 7?",
        answers: ["10", "12", "14", "15"],
        correct: "12"
    }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const progressBar = document.querySelector(".progress");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    progressBar.style.width = "0%";
    nextButton.style.display = "none";
    scoreText.textContent = `Score: ${score}`;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });

    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(button, selectedAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    scoreText.textContent = `Score: ${score}`;
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `Quiz Finished! 🎉 Your Score: ${score} / ${questions.length}`;
        nextButton.innerText = "Restart";
        nextButton.addEventListener("click", startQuiz);
        answerButtons.innerHTML = "";
    }
});

startQuiz();
