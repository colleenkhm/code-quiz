// VARIABLES
//__elements to link to html__
    // scoreboard
        // scoreboard slot    
        // return to home
    // timer
    // quiz rules
    const quizRules = document.getElementById("#quizRules");
    // question
    // answer1
    // answer2
    // answer3
    // answer4
    // play again
    // correct alert
    const correctAlert = document.getElementById("#correct-alert");
    // incorrect alert
    const incorrectAlert = document.getElementById("#incorrect-alert");

// FUNCTIONS
// start quiz
function startQuiz() {
    console.log("quiz has started")
    revealQuestion()
}
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
        // when user clicks return to home, return to home

const answerOne = document.getElementById("#0");
const answerTwo = document.getElementById("#1");
const answerThree = document.getElementById("#2");
const answerFour = document.getElementById("#3");
const rules = document.getElementById("#quizRules");
const questionsDisplay = document.getElementById("#questions");
var questionDisplay = document.getElementById("#")

// questions/scoring
var score = ""; // = time remaining?
var question = "";
var answerKey = [];
var righAnswer = "";
var initials = "";


// array of questions
const questionsList = [
    {
        question: "Commonly used data types DO NOT include:",
        btnChoice1: "Strings",
        btnChoice2: "Booleans",
        btnChoice3: "Alerts",
        btnChoice4: "Numbers",
        right: "btnChoice3"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        btnChoice1 : "Quotes",
        btnChoice2 : "Curly Brackets",
        btnChoice3 : "Parenthesis",
        btnChoice4 : "Square Brackets",
        right : "btnChoice3"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        btnChoice1 : "Numbers and Strings",
        btnChoice2 : "Other Arrays",
        btnChoice3 : "Booleans",
        btnChoice4 : "All of the above",
        right : "btnChoice4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        btnChoice1 : "Commas",
        btnChoice2 : "Curly Brackets",
        btnChoice3 : "Quotes",
        btnChoice4 : "Parenthesis",
        right : "btnChoice3"
    },
    {
        question: "A very useful tool during development and debugging for printing ",
        btnChoice1 : "JavaScript",
        btnChoice2 : "Terminal/Bash",
        btnChoice3 : "For Loops",
        btnChoice4 : "console.log()",
        right : "btnChoice4"
    },
]

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
    for (var i = 60; i > 0; i--) {
        if(time === 0){
            clearInterval(time)
        } else {
        timerDisplay.innerHTML = `${time}`
    }
    };
    let time = 60;
    timerDisplay.innerHTML = `${time}`
    time--;
}

setInterval(updateTime, 1000);


// set original time
// link OG time variable to dynamic time variable
// create increment for time change
// 


// function to show selected element/hide others
function revealQuiz() {
    questions.classList.remove("hidden")
    updateTime();
    var q = questionsList[currentQuestion];
    question.innerHTML = "<p>" + q + "</p>"
};
// function to display quiz/hide rules
// function showQuiz() {
//     revealElement()
// };


function startQuiz() {
    console.log("quiz has started")
    quizRules.classList.add("hidden")
    questions.classList.remove("hidden")
    // displayTime();
    revealQuiz();
    
    // for(var i=0; i < questions.length; i++) {
    //     var response = '';
    //     if (response === questions[i]) {
            
    //     }
    //         question++;
    //     } else {

    //     }
    // }

}

function showHighScores() {
    console.log("it works");
}

// event listener to start quiz
// btnStart.addEventListener('click', startQuiz());
highScores.addEventListener('click', showHighScores());


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
