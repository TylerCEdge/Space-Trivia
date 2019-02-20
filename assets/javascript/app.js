// <!-- * You'll create a trivia form with multiple choice or true/false options (your choice).

//     * The player will have a limited amount of time to finish the quiz.

//     * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly
//     and incorrectly.

//     * Don't let the player pick more than one answer per question.

//     * Don't forget to include a countdown timer. -->

$(document).ready(function () {

    var score = 0;

    var questionsList = [
        "Which one is not a type of galaxy?",
        "What process fuels the sun?",
        "What galaxy is made of old stars?"];

    var answers0 = ["Spiral", "Irregular", "Orbital", "Elliptical"];
    var answers1 = ["Precipitation", "Nuculear Fusion", "Condensation", "Photosynthesis"];
    var answers2 = ["Spiral", "Irregular", "Lenticular", "Elliptical"];



    function startGame () {
        $("#questions").text(questionsList[0]);
        $("#option1").text(answers0[0]);
        $("#option2").text(answers0[1]);
        $("#option3").text(answers0[2]);
        $("#option4").text(answers0[3]);
    }

    $(".startBtn").on("click", function() {
        startGame();
        $("#vanish").hide();
    });




});
