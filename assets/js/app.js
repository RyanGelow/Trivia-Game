const qsAndAs = [
    {
        question: "Which are the two leading three-point shooters in Warriors history?",
        answers: ["Iguodala & Durant", "Curry & Durant", "Thompson & Curry", "Durant & Cousins"],
        correctIndexAnswer: 2
    },
    {
        question: "What are those two players known as?",
        answers: ["The Snipe Shooters", "The Bad Bombers", "The Slick Assassins", "The Splash Brothers"],
        correctIndexAnswer: 3
    },
    {
        question: "As of the end of the 2018-19 season, which current Warrior has 22 career triple-doubles?",
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

$('#start').one('click', fiveSecondCountdown);


//Step One:
function fiveSecondCountdown() {
    guesses = [];
    score = 0;
    questionIndex=0
    var startdown = 6;
    var intervalId;
    $('.next').text();
    $('.reward').text();
    $(`.container .break`).removeClass('invisible hidden');
    $('#start').addClass('invisible');
    function lilrun() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        startdown--;
        $('#question h3').text('First question in ' + startdown);
        if(startdown === 6) {
            $('#answer1').addClass('btn-primary');
            $('#answer2').addClass('btn-warning');
            $('#answer3').addClass('btn-primary');
            $('#answer4').addClass('btn-warning');
        }if(startdown === 5) {
            $('#answer1').addClass('btn-warning').removeClass('btn-primary');
            $('#answer2').addClass('btn-primary').removeClass('btn-warning');
            $('#answer3').addClass('btn-warning').removeClass('btn-primary');
            $('#answer4').addClass('btn-primary').removeClass('btn-warning');
            $('div.progress-bar').attr('style', 'width: 100%');
        }if(startdown === 4) {
            $('#answer1').addClass('btn-primary').removeClass('btn-warning');
            $('#answer2').addClass('btn-warning').removeClass('btn-primary');
            $('#answer3').addClass('btn-primary').removeClass('btn-warning');
            $('#answer4').addClass('btn-warning').removeClass('btn-primary');
            $('div.progress-bar').attr('style', 'width: 0%');
        }if(startdown === 3) {
            $('#answer1').addClass('btn-warning').removeClass('btn-primary');
            $('#answer2').addClass('btn-primary').removeClass('btn-warning');
            $('#answer3').addClass('btn-warning').removeClass('btn-primary');
            $('#answer4').addClass('btn-primary').removeClass('btn-warning');
            $('div.progress-bar').attr('style', 'width: 100%').addClass('bg-warning');
        }if(startdown === 2) {
            $('#answer1').addClass('btn-primary').removeClass('btn-warning');
            $('#answer2').addClass('btn-warning').removeClass('btn-primary');
            $('#answer3').addClass('btn-primary').removeClass('btn-warning');
            $('#answer4').addClass('btn-warning').removeClass('btn-primary');
            $('div.progress-bar').attr('style', 'width: 0%');

        }if(startdown === 1) {
            $('#answer1').addClass('btn-warning').removeClass('btn-primary');
            $('#answer2').addClass('btn-primary').removeClass('btn-warning');
            $('#answer3').addClass('btn-warning').removeClass('btn-primary');
            $('#answer4').addClass('btn-primary').removeClass('btn-warning');
            $('div.progress-bar').attr('style', 'width: 100%').removeClass('bg-warning').addClass('bg-danger');
        
        }if (startdown === 0) {
            $('#answer1').removeClass('btn-warning');
            $('#answer2').removeClass('btn-primary');
            $('#answer3').removeClass('btn-warning');
            $('#answer4').removeClass('btn-primary');
            $('div.progress-bar').attr('style', 'width: 0%').removeClass('bg-danger');
        
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
    $('.next').text('');
    $('.reward').text('');
    $(`.container .break`).removeClass('invisible hidden');
    $('div.progress-bar').attr('style', 'width: 100%').addClass('bg-primary').removeClass('bg-warning bg-danger');
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
        if(time < 16) {
            $(`.progress-bar`).addClass('bg-primary').removeClass('bg-warning bg-danger');
        }if(time < 10) {
            $('#timer .timeLeft').text("0" + time);
        }
        if(time < 9) {
            $(`.progress-bar`).addClass(`bg-warning`).removeClass('bg-primary bg-danger');
        }
        if(time < 5) {
            $(`.progress-bar`).addClass(`bg-danger`).removeClass('bg-primary bg-warning');
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
        score++;
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
        console.log("QIndex : " + (parseInt(questionIndex) + 2));
        console.log("qsAndAs.length: " + qsAndAs.length); 
        console.log((parseInt(questionIndex) + 2) === qsAndAs.length);
        if((parseInt(questionIndex) + 2) < qsAndAs.length){
            $('.next').html(`<p>Next question in ${startdown}</p>`);
        }if((parseInt(questionIndex) + 2) === qsAndAs.length){
            $('.next').html(`<p>Last question in ${startdown}</p>`);
        }if((parseInt(questionIndex) + 1) === qsAndAs.length){
            $('.next').html(`<p>Trivia Game Over - Calculating...</p>`);
        }if (startdown === 0) {
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
    $('#start').removeClass('invisible');
    $('#start').one('click', fiveSecondCountdown); 
    $(`.container .break`).addClass('invisible hidden');
    $('.next').text(`Trivia Game Over - ${score} out of ${qsAndAs.length}`);
    if(score <= qsAndAs.length/2) {
        $('.next').append(` - Failed`);
        $(`.reward img`).attr(`src`, `./assets/images/uhh.gif`);
    }if((score > qsAndAs.length / 2)&(score < qsAndAs.length * 3 / 5)) {
        $(`.reward img`).attr(`src`, `./assets/images/shhh.gif`);
    }if((score >= qsAndAs.length * 3 / 5)&(score < qsAndAs.length * 2 / 3)) {
        $(`.reward img`).attr(`src`, `./assets/images/so-so.gif`)
    }if((score >= qsAndAs.length * 2 / 3)&(score < qsAndAs.length * 4 / 5)) {
        $(`.reward img`).attr(`src`, `./assets/images/dance.gif`)
    }if((score >= qsAndAs.length * 4 / 5)&(score < qsAndAs.length)) {
        $(`.reward img`).attr(`src`, `./assets/images/kinda.gif`)
    }if(score === qsAndAs.length) {
        $('.next').append(` - Perfect Score!`);
        $(`.reward img`).attr(`src`, `./assets/images/steph-wins.gif`);
    }
}