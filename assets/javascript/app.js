var user = {
    isStarted: false,
    isPaused: false,
    isDone: false,
    timesRight: 0,
    timesWrong: 0
}

var questionsArray = [];
var activeQuestion;
var gameStatus = [];

// var questionTimer;
// var waitTimer;
// var timeQuestion = 10000;
// var timeWait = 5000;
// var time = 0;
// var counter;

// var timeProgress = {
//     start: function () {
//         counter = setInterval(timeProgress.count, 1000);
//     },
//     stop: function () {
//         clearInterval(counter);
//         time = 0;
//     },
//     count: function () {
//         time++;
//         console.log(time);
//     }
// }

function startGame() {
    player.isStarted = !player.isStarted;
    $("#questions").text(activeQuestion.question);
    // gameStatus[];
    player.timesRight = 0;
    player.timesWrong = 0;
    questionsArray = spawnQuestionsArray();
}

$(".startBtn").on("click", function() {
    startGame();
    $("#vanish").hide();
});
console.log(activeQuestion)

function spawnQuestionsArray() {
    function qObject(question, answers, cAnswer, uAnswer, isRight, timeCheck) {
        this.question = question;
        this.answers = answers;
        this.cAnswer = cAnswer;
        this.uAnswer = uAnswer;
        this.isRight = isRight;
        this.timeCheck = timeCheck;

    }

    var question0 = new qObject(
        "Which one is not a type of galaxy?",
        ["Spiral", "Irregular", "Orbital", "Elliptical", null],
        2,
        4,
        false,
        false);

    var question1 = new qObject(
        "What process fuels the sun?",
        ["Precipitation", "Nuculear Fusion", "Condensation", "Photosynthesis", null],
        1,
        4,
        false,
        false);

    var question2 = new qObject(
        "What galaxy is made of old stars?",
        ["Spiral", "Irregular", "Lenticular", "Elliptical", null],
        3,
        4,
        false,
        false);

    return questionsArray = [question0, question1, question2];
}

// function questionLoop() {
//     for (i = 0; i < questionsArray.length; i++) {
//         activeQuestion = questionsArray[i];
//     }
// }

function selectRandomQuestion(){
    var randomIndex = Math.floor(Math.random()*questionsArray.length);
    activeQuestion = questionsArray[randomIndex];

    console.log(question0);
  
    // remove question from array.  
    questionsArray.splice(randomIndex,1);
  }

// function startGame () {
//     $("#questions").text(activeQuestion.question);
    
// }

// $(".startBtn").on("click", function() {
//     startGame();
//     $("#vanish").hide();
// });

// console.log(activeQuestion)





// // <!-- * You'll create a trivia form with multiple choice or true/false options (your choice).

// //     * The player will have a limited amount of time to finish the quiz.

// //     * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly
// //     and incorrectly.

// //     * Don't let the player pick more than one answer per question.

// //     * Don't forget to include a countdown timer. -->

// $(document).ready(function () {

//     var num = 0;
//     var time = 30;
//     var timer;
//     var isSelected = false;
//     var correct = 0;
//     var incorrect = 0;
//     var unanswered = 0;
//     var userGuess;

// // questions list

//     var questionsList = [
//         "Which one is not a type of galaxy?",
//         "What process fuels the sun?",
//         "What galaxy is made of old stars?"];

// // first question aqnswers

//     var answers0 = [
//         "Spiral", 
//         "Irregular", 
//         "Orbital", 
//         "Elliptical"
//     ];

// // second question answers

//     var answers1 = [
//         "Precipitation", 
//         "Nuculear Fusion", 
//         "Condensation", 
//         "Photosynthesis"
//     ];

// // third question answers

//     var answers2 = [
//         "Spiral", 
//         "Irregular", 
//         "Lenticular", 
//         "Elliptical"
//     ];

// // correct answers array

//     var canswers = [
//         "Orbital", 
//         "Nuclear Fusion", 
//         "Elliptical"
//     ] 

// // function to start game and populate first question need to configure to push

    // function startGame () {
    //     $("#questions").html(questionsList[0]);
    //     $("#option1").html(answers0[0]);
    //     $("#option2").html(answers0[1]);
    //     $("#option3").html(answers0[2]);
    //     $("#option4").html(answers0[3]);
    // }

    // $(".startBtn").on("click", function() {
    //     startGame();
    //     $("#vanish").hide();
    // });

//     $(".uAnswer").on("click", function() {
//         userGuess = this.val().trim();
//         console.log(this);
//     });

// // function for button clicks in answer field

//     function userGuess () {

//         if(userGuess.val() === canswers[num]) {
//             correct++;
//             isSelected = true;
//             console.log("correct!");
//             console.log("uAnswer")

//         }
//         else {
//             incorrect++;
//             isSelected = true;
//             console.log("wrong!");
//         }
//     }

//     $(".uAnswer").on("click", function() {
//         userGuess();
//     });




// });
