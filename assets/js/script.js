const start = document.getElementById("start")
const intro = document.getElementById()
const counter = document.getElementById("counter")
const 
var timeLeft = 90;

// array of questions
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        btnOption1 : "Strings",
        btnOption2 : "Booleans",
        btnOption3 : "Alerts",
        btnOption4 : "Numbers",
        right : btnOption3
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        btnOption1 : "Quotes",
        btnOption2 : "Curly Brackets",
        btnOption3 : "Parenthesis",
        btnOption4 : "Square Brackets",
        right : btnOption3
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        btnOption1 : "Numbers and Strings",
        btnOption2 : "Other Arrays",
        btnOption3 : "Booleans",
        btnOption4 : "All of the above",
        right : btnOption4
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        btnOption1 : "Commas",
        btnOption2 : "Curly Brackets",
        btnOption3 : "Quotes",
        btnOption4 : "Parenthesis",
        right : btnOption3
    },
    {
        question: "A very useful tool during development and debugging for printing ",
        btnOption1 : "JavaScript",
        btnOption2 : "Terminal/Bash",
        btnOption3 : "For Loops",
        btnOption4 : "console.log()",
        right : btnOption4
    },
]
function countdown () {
    timeLeft--
    timer.innerHTML = secondsLeft
    if(secondsLeft === 0){
        clearInterval(timerId)
    }
}


/* what's needed:
1. startQuiz() function that displays first question when start button is clicked
2. if statement that alerts "correct!" if answer matches correct answer and then reloads page with new question
3. else statement that alerts "incorrect" if answer does not match correct answer, subtracts 5 seconds from timeRemaining, and reloads page with new question
4. countdown() function to count down time that does not reload when new question is revealed
5. endQuiz() function that displays time remaining and gives option to startQuiz() again
6. addHighScore() function that prompts user to input initials and stores timeRemaining as score in viewHighScores object
7. function that sorts variables in viewHighScores object in terms of highest-lowest
8. event.preventDefault() in startQuiz() function to ensure that page does not reload when new question is revealed
9. append existing outside of startQuiz() function so that high score list continues to add with each playthrough */
