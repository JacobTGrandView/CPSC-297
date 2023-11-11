const questions = [
    {
        question: "What is the capital of Iowa?",
        choices: ["Des Moines", "Iowa City"],
        correct: "Des Moines"
    },
    {
        question: "Who founded Walmart?",
        choices: ["Sam Walton", "Bill Gates"],
        correct: "Sam Walton"
    },
    {
        question: "What is 3 to the 9th power?",
        choices: ["19683", "17237"],
        correct: "19683"
    },
    {
        question: "Where is the Taj Mahal",
        choices: ["Australia", "India"],
        correct: "India"
    },
    {
        question: "When was Declaration of Independence signed?",
        choices: ["1776", "1823"],
        correct: "1776"
    }
];

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const score = document.getElementById("score");

let currentQuestionIndex = 0;
let userScore = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        choiceA.textContent = currentQuestion.choices[0];
        choiceB.textContent = currentQuestion.choices[1];
    } else {
        if (userScore === questions.length) {
            questionContainer.innerHTML = "<p>You got all the questions correct!</p>";
        } else {
            questionContainer.innerHTML = "<p>You didn't get them all right, booooooo</p>";
        }
        score.textContent = userScore;
    }
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        userScore++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

choiceA.addEventListener("click", () => checkAnswer(questions[currentQuestionIndex].choices[0]));
choiceB.addEventListener("click", () => checkAnswer(questions[currentQuestionIndex].choices[1]));

displayQuestion();