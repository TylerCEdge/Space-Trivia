$('#start').on('click', function () {
    game.start();
});

$(document).on('click','#end',function(){
    game.done();
});

var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bugs Life", "Monsters Inc", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
}, {
    question: "Which of these in NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls"
}, {
    question: 'Which group released the hit song, "Smells Like Teen Spirit?"',
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana"
}, {
    question: 'Which popular Disney movie featured the song, "The Circle of Life?',
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King"
}, {
    question: "What is your quest?",
    answers: ["To Take over The World", "To Seek The Holy Grail", "Victory Is Mine", "Giggity"],
    correctAnswer: "To Seek The Holy Grail"
}, {
    question: "What is your favorite color?",
    answers: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue"
}, {
    question: "What is the best truck brand?",
    answers: ["Ford", "Chevy", "Dodge", "GMC"],
    correctAnswer: "Chevy"
}, {
    question: "What is the best Linux OS?",
    answers: ["Elementary OS", "Linux Mint", "Arch Linux", "Kali Linux"],
    correctAnswer: "Kali Linux"
}, {
    question: "What is the best 007 game?",
    answers: ["Nightfire", "GoldenEye", "From Russia With Love", "The World Is Not Enough"],
    correctAnswer: "GoldenEye"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><br><button id="end">DONE</button>');
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-1']:checked"), function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-2']:checked"), function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-3']:checked"), function () {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-4']:checked"), function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-5']:checked"), function () {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-6']:checked"), function () {
                if ($(this).val() == questions[6].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-7']:checked"), function () {
                if ($(this).val() == questions[7].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-8']:checked"), function () {
                if ($(this).val() == questions[8].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-9']:checked"), function () {
                if ($(this).val() == questions[9].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Inorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}
