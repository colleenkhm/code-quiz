// variables/constants
const btnStart = document.getElementById("start");
const score_counter = document.getElementById("counter");
const btnOption1 = document.getElementById("0");
const btnOption2 = document.getElementById("1");
const btnOption3 = document.getElementById("2");
const btnOption4 = document.getElementById("3");
const timer = document.getElementById("timer");
var timeLeft = 60;
var initials = "";

// array of questions
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        btnChoice1 : "Strings",
        btnChoice2 : "Booleans",
        btnChoice3 : "Alerts",
        btnChoice4 : "Numbers",
        right : btnChoice3
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        btnChoice1 : "Quotes",
        btnChoice2 : "Curly Brackets",
        btnChoice3 : "Parenthesis",
        btnChoice4 : "Square Brackets",
        right : btnChoice3
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        btnChoice1 : "Numbers and Strings",
        btnChoice2 : "Other Arrays",
        btnChoice3 : "Booleans",
        btnChoice4 : "All of the above",
        right : btnChoice4
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        btnChoice1 : "Commas",
        btnChoice2 : "Curly Brackets",
        btnChoice3 : "Quotes",
        btnChoice4 : "Parenthesis",
        right : btnChoice3
    },
    {
        question: "A very useful tool during development and debugging for printing ",
        btnChoice1 : "JavaScript",
        btnChoice2 : "Terminal/Bash",
        btnChoice3 : "For Loops",
        btnChoice4 : "console.log()",
        right : btnChoice4
    },
]

// function to display new question on page
function showQuestion() {
    var q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>"
}
var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var questionDuration = 10;

function startQuiz() {
    quizRules.classList.add("hidden");
    questions.classList.remove("hidden");
}

// event listener to start quiz
start.addEventListener('click', startQuiz());


function countdown() {
    timeLeft--
    timer.innerHTML = secondsLeft
    if(secondsLeft === 0){
        clearInterval(timerId)
    }
}


// what's needed:
// Intro page: contains start button to execute StartQuiz()
// variable(s): start button
// 1. startQuiz() function that displays first question when start button is clicked

// 2. if statement that alerts "correct!" if answer matches correct answer and then reloads page with new question
// 3. else statement that alerts "incorrect" if answer does not match correct answer, subtracts 5 seconds from timeRemaining, and reloads page with new question
// 4. countdown() function to count down time that does not reload when new question is revealed
// 5. endQuiz() function that displays time remaining and gives option to startQuiz() again
// 6. addHighScore() function that prompts user to input initials and stores timeRemaining as score in viewHighScores object
// 7. function that sorts variables in viewHighScores object in terms of highest-lowest
// 8. event.preventDefault() in startQuiz() function to ensure that page does not reload when new question is revealed
// 9. append existing outside of startQuiz() function so that high score list continues to add with each playthrough
