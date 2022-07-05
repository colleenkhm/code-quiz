// VARIABLES
// __elements to link to html__
//     scoreboard
    const highScores = document.getElementById("highScores");
    // const scoreboard = document.getElementById("#scoreboard");
        // scoreboard slot    
        // return to home
    // timer
    const timerDisplay = document.getElementById("countdown")
    // quiz rules
    // const quizRules = document.getElementById("#quizRules");
    // question
    // answer1
    const answerOne = document.getElementById("0");
    // answer2
    const answerTwo = document.getElementById("1");
    // answer3
    const answerThree = document.getElementById("2");
    // answer4
    const answerFour = document.getElementById("3");
    // play again
    // correct alert
    const correctAlert = document.getElementById("correctAlert");
    // incorrect alert
    const incorrectAlert = document.getElementById("incorrectAlert");
    // array of questions
const questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        answer1: "Strings",
        answer2: "Booleans",
        answer3: "Alerts",
        answer4: "Numbers",
        right: "answer3"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        answer1: "Quotes",
        answer2: "Curly Brackets",
        answer3: "Parenthesis",
        answer4: "Square Brackets",
        right: "answer3"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer1: "Numbers and Strings",
        answer2: "Other Arrays",
        answer3: "Booleans",
        answer4: "All of the above",
        right: "answer4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answer1: "Commas",
        answer2: "Curly Brackets",
        answer3: "Quotes",
        answer4: "Parenthesis",
        right: "answer3"
    },
    {
        question: "A very useful tool during development and debugging for printing ",
        answer1: "JavaScript",
        answer2: "Terminal/Bash",
        answer3: "For Loops",
        answer4: "console.log()",
        right: "answer4"
    },
]

function startTimer() {
    setInterval(updateTime, 1000);
//     // const questionsDisplay = document.getElementById("questionsDisplay");
//     questionsDisplay.classList.remove("hidden")
// //     updateTime();
//     var q = questionsList[currentQuestion];
//     question.innerHTML = "<p>" + q + "</p>"
}

function populateQuiz() {
    for (var i = 0; i < 5; i++) {
        questionShown.innerHTML = "<p>" + questionsList[i].question + "</p>"
        choice1.innerHTML = "<p>" + questionsList[i].answer1 + "</p>"
        choice2.innerHTML = "<p>" + questionsList[i].answer2 + "</p>"
        choice3.innerHTML = "<p>" + questionsList[i].answer3 + "</p>"
        choice4.innerHTML = "<p>" + questionsList[i].answer4 + "</p>"
    }
}

function startQuiz() {
    quizRules.classList.add("hidden")
    questionsDisplay.classList.remove("hidden")
    console.log("quiz has started");
    startTimer()
    populateQuiz()
}

// function showHighScores() {
//     console.log("it works");
// }
// FUNCTIONS
// start quiz
    // starts timer
    // updateTime()
        // when timer reaches 0, displays high scores
    // hides instructions
    // displays questions
        // populates questions field
        // assesses validity of answer
            // alerts yes for correct answer
                // removes hidden class from "correct" footer
            // alerts no for incorrect answer
                // subtracts from time
                // removes hidden class from "incorrect" footer
    // when user clicks scoreboard, reveals scoreboard
function showHighScores() {
    const scoreboard = document.getElementById("scoreboard")
    scoreboard.classList.remove("hidden")
}

highScores.addEventListener('click', showHighScores());
        // when user clicks return to home, return to home

// questions/scoring
var score = ""; // = time remaining?
var question = "";
var answerKey = [];
var righAnswer = "";
var initials = "";

// countdown timer
var intervalId;
var currentQuestion;
const startingTime = 60;
// document.querySelector("#start-button").addEventListener()
var i = time;
var time = 60;
function updateTime() {
    const timerDisplay = document.getElementById("countdown");
    console.log("we're in the function")
    // let time = 60;
    timerDisplay.innerHTML = `${time}`
    time--;
}

