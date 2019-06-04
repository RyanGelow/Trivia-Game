const qsAndAs = [
    {
        question: "Which two Warriors are the two leading three-point shooters in Warriors history?",
        answers: ["Iguodala & Durant", "Curry & Durant", "Thompson & Curry", "Durant & Cousins"],
        correctIndexAnswer: 2
    },
    {
        question: "What are those two players known as?",
        answers: ["The Snipe Shooters", "The Bad Bombers", "The Slick Assassins", "The Splash Brothers"],
        correctIndexAnswer: 3
    },
    {
        question: "What current Warrior has 22 career triple-doubles?",
        answers: [ "Draymond Green", "Kevin Durant", "Steph Curry", "Andre Iguodala"],
        correctIndexAnswer: 0
    },
    {
        question: 'Which current Warrior left Oklahoma City to start his "next chapter" with Golden State?',
        answers: ["Andrew Bogut", "Jonas Jerebko", "DeMarcus Cousins", "Kevin Durant"],
        correctIndexAnswer: 3
    },
    {
        question: "How many games did the Warriors win in 2015-16?",
        answers: ["70", "68", "73", "74"],
        correctIndexAnswer: 2
    },
    {
        question: "What Warriors star won the NBA dunk contest in 2002 and 2003?",
        answers: ["Jason Richardson", "Baron Davis", "Antawn Jamison", "Adonal Foyle"],
        correctIndexAnswer: 0
    },
    {
        question: "What is depicted on the current logo of the Golden State Warriors?",
        answers: ["The Oakland Tree", "The Bay Bridge", "The Golden Gate Bridge", "The Cable Car"],
        correctIndexAnswer: 1
    },
    {
        question: "Who is the current coach of the Warriors?",
        answers: ["Steve Blur", "Peter Guber", "Steve Kerr", "Joe Lacob"],
        correctIndexAnswer: 2
    },
    {
        question: "Which player choked coach P. J. Carlesimo during a 1997 practice?",
        answers: ["Chris Mullin", "Bimbo Coles", "Donyell Marshall", "Latrell Spreewell"],
        correctIndexAnswer: 3
    },
    {
        question: "Which player was not part of legendary Run TMC?",
        answers: ["Chamberlain", "Richmond", "Mullin", "Hardaway"],
        correctIndexAnswer: 0
    },
    {
        question: "Who was named NBA Finals MVP in 2015?",
        answers: ["Curry", "Thompson", "Iguodala", "Green"],
        correctIndexAnswer: 2
    },
    {
        question: "What city did the Warriors play in from 1946-1962?",
        answers: ["Dallas", "Houston", "Memphis", "Philadelphia"],
        correctIndexAnswer: 3
    },
]

let guesses = [];
let score = 0;
let questionIndex=0

$('#start').on('click', fiveSecondCountdown);


//Step One:
function fiveSecondCountdown() {
    var startdown = 6;
    var intervalId;
    function lilrun() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        startdown--;
        $('#question h3').text('First question in ' + startdown);
        if (!startdown%2 == 0) {
            $('div.progress-bar').attr('style', 'width: 100%');
        }if (startdown%2 == 0) {
            $('div.progress-bar').attr('style', 'width: 0%');
        }if (startdown === 0) {
            stop();
        }
    }
    function stop() {
        clearInterval(intervalId);
        start(); 
    }
    lilrun();
}

//Step One Part Two:
function start() {
    var time = 15;
    var intervalId;
    $('div.progress-bar').attr('style', 'width: 100%');
    $('#timer .timeLeft').text('15');
    $('#question h3').text(qsAndAs[questionIndex].question);
    $('#answer1').text(qsAndAs[questionIndex].answers[0]);
    $('#answer2').text(qsAndAs[questionIndex].answers[1]);
    $('#answer3').text(qsAndAs[questionIndex].answers[2]);
    $('#answer4').text(qsAndAs[questionIndex].answers[3]);

    function gameOn() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $('#answers').one('click','button', stop);

    }
    function decrement() {
        time--;
        $('#timer .timeLeft').text(time);
        $('div.progress-bar').attr('style', 'width: '+ (time * 100 / 15) + '%');
        if(time < 10) {
            $('#timer .timeLeft').text("0" + time);
        }
        if(time < 8) {
            $(`.progress-bar`).addClass(`bg-warning`)
        }
        if(time < 4) {
            $(`.progress-bar`).removeClass(`bg-warning`).addClass(`bg-danger`)
        }
        if(time === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
        guesses.push($(this).attr('index'));
        fiveSecondBreak()
    }

    gameOn();
}

//Step Two Part One:
function fiveSecondBreak() {
    $(`#answers button[index=${qsAndAs[questionIndex].correctIndexAnswer}]`).removeClass(`btn-outline-dark`).addClass(`btn-success`);
    
    var startdown = 6;
    var intervalId;
    
    if(guesses[questionIndex] == qsAndAs[questionIndex].correctIndexAnswer) {
        console.log("passes second test");
        score++;
        console.log(score);
        $('.score').html(`<p>Correct Answers: ${score}</p>`)
    }else{
        $(`#answers button[index=${guesses[questionIndex]}]`).removeClass(`btn-outline-dark`).addClass(`btn-danger`);
        $('.score').html(`<p>Correct Answers: ${score}</p>`)
    }
    
    function lilBreak() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        startdown--;
        $('.next').html(`<p>Next question in ${startdown}</p>`);
        if (startdown === 0) {
            breaksOver();
        }
    }
    function breaksOver() {
        clearInterval(intervalId);
        questionIndex += 1;
        $('.next').text(``);
        $(`button.answer`).removeClass(`btn-success btn-danger`).addClass(`btn-outline-dark`);
        if(questionIndex >= qsAndAs.length) {
            gameOver();
            clearInterval(intervalId);
        }else{
            start();
        } 
    }
    lilBreak();
}

function gameOver() {
    $('.next').text(`Trivia Game Over`);
    if(score === qsAndAs.length) {
        $('.next').append(` - Perfect Score!`);
    }
}