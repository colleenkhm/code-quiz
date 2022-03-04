//do not forget about event.preventDefault() for when user clicks question response

//use .textContent and .setAttribute to help with creating the content for new questions/loading it?
// initial event that loads first question/starts countdown
var startQuiz = function() {

    //reload with different question/set of possible answers
    question++
}
// questions/event listener for selecting answer
var questions = [
    prompt: "Arrays in JavaScript can be used to store ____." 

    prompt: 
]
var selectAnswer = function() {

}
// verify if answer is correct or incorrect (must be inside startQuiz function)
if (playerAnswer != rightAnswer){
    alert('Wrong!')
    //function for subtracting 10 seconds from time goes here (timeRemaining-10)
} else // alert right and continue loop/function for loading new question

//when time runs out, endQuiz (if timeRemaining=0... or use while loop for countdown)
var endQuiz = function() {

}
// calculate a final score based on time completed (high score=high time remaining)
var finalScore = timeRemaining
// store high scores/player initials

// option to replay

var addHighScore = function() {
    //place to input initials
    //append high score array to include this
}


var showHighScores = function() {
    //display high scores - give each entry a unique id and store as an object in this function?
}

startQuiz();

/* what's needed:
1. startQuiz() function that displays first question when start button is clicked
2. if statement that alerts "correct!" if answer matches correct answer and then reloads page with new question
3. else statement that alerts "incorrect" if answer does not match correct answer, subtracts 5 seconds from timeRemaining, and reloads page with new question
4. countdown() function to count down time that does not reload when new question is revealed
5. endQuiz() function that displays time remaining and gives option to startQuiz() again
6. addHighScore() function that prompts user to input initials and stores timeRemaining as score in viewHighScores object
7. function that sorts variables in viewHighScores object in terms of highest-lowest
8. event.preventDefault() in startQuiz() function to ensure that page does not reload when new question is revealed
9. append so that high score list continues to add with each playthrough */
