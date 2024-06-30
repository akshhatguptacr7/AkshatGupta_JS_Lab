// Sample questions array
const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Who is making the Web standards?",
        choices: ["Mozilla", "Microsoft", "Apple", "The World Wide Web Consortium"],
        correctAnswer: 3
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 0
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choiceElements = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
];
const progressElement = document.getElementById('progress');

document.getElementById('btn0').addEventListener('click', () => checkAnswer(0));
document.getElementById('btn1').addEventListener('click', () => checkAnswer(1));
document.getElementById('btn2').addEventListener('click', () => checkAnswer(2));
document.getElementById('btn3').addEventListener('click', () => checkAnswer(3));

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choiceElements.forEach((choiceElement, index) => {
            choiceElement.textContent = currentQuestion.choices[index];
        });
        progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    } else {
        showScore();
    }
}

function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showScore() {
    const percentage = (score / questions.length) * 100;
    questionElement.textContent = `You scored ${score} out of ${questions.length}. Your percentage is ${percentage.toFixed(2)}%.`;
    document.querySelector('.buttons').style.display = 'none';
    progressElement.style.display = 'none';
}

loadQuestion();
