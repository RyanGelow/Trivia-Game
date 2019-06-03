const qsAndAs = [
    {
        question: "Which ocean is the largest?",
        answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctIndexAnswer: 1
    },
    {
        question: "What is 12 x 5?",
        answers: ["40", "50", "60", "70"],
        correctIndexAnswer: 2
    },
    {
        question: "How much is 1 ton?",
        answers: [ "2,000 lbs.", "2,000 kg.", "2,000 slugs", "1,000 lbs."],
        correctIndexAnswer: 0
    },
    {
        question: "Which lore is most common about vampires?",
        answers: ["They can be killed with silver bullets", "They eat people whole", "They are reanimated with electricity", "They are vulnerable to Garlic"],
        correctIndexAnswer: 3
    },
    {
        question: "Which of the following colors is closest to white?",
        answers: ["Pearl", "Eggshell", "Ivory", "Vanilla"],
        correctIndexAnswer: 0
    }
]

// function trivia () {
//     const output = [];
//     qsAndAs.forEach((currentQuestion, questionNumber) => {
//         const answers = [];
//         for(letter in currentQuestion, answers) {
//             answers.push(
//                 `<label>
//                     <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} :
//                     ${currentQuestion.answers[letter]}
//                 </label>`
//             );
//         }
//         output.push(
//             `<div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join('')} </div>`
//         );
//     })
// }

//  When the start button is clicked, execute the run function.
$('#start').on('click', fiveSecondCountdown);

function fiveSecondCountdown() {
    // clearInterval(intervalId);
    // var startdown = 6;
    // var intervalId;
    // function lilrun() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }
    // function decrement() {
    //     startdown--;
    //     $('#question h3').text('First question in ' + startdown);
    //     if (!startdown%2 == 0) {
    //         $('div.progress-bar').attr('style', 'width: 100%');
    //     }if (startdown%2 == 0) {
    //         $('div.progress-bar').attr('style', 'width: 0%');
    //     }if (startdown === 0) {
    //         stop();
    //     }
    // }
    // function stop() {
    //     clearInterval(intervalId);
        run(); 
    // }
    // lilrun();
}



//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;


//Time for each question
var timeLeft = 30;
//timer always in 2 digits
var timeConverter = function() {
    if(timeLeft < 10) {   
        return "0" + timeLeft;
    }else{
        return timeLeft;
    };
};
//run bar down 1 sec at a time
var timeBarConverter = function () {
    return (timeLeft * 100 / 30);
}
    
//  The run function starts it off
function run() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    $('div.progress-bar').attr('style', 'width: 100%');
    $('#timer .timeLeft').text(timeConverter);  
    intervalId = setInterval(decrement, 1000);
    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        timeLeft--;
        timeConverter();
        $('#timer .timeLeft').text(timeConverter);   
        //Timer bar countdown matching timer
        $('div.progress-bar').attr('style', 'width: ' + timeBarConverter() + '%');
        // if(timeBarConverter < 34) {
        //     $('div.progress-bar').addClass('bg-danger');
        // }if(timeBarConverter >= 34) {
        //     $('div.progress-bar').removeClass('bg-danger');
        // }
        
        //  Once number hits zero...       
        if (timeLeft === 0) {
            //  ...run the stop function.
            clearInterval(intervalId); 
            stop();
            
            //Missed question count and move on to next question
            
            //If last question end game
        };
    }
    
    
    //  The stop function
    function stop() {
        
        //  Clears our intervalId - pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
        pushAnswer();
    };
    //Load questions and answers
    
    $('#question h3').text(qsAndAs[0].question);
    $('#answer1').text(qsAndAs[0].answers[0]);
    $('#answer2').text(qsAndAs[0].answers[1]);
    $('#answer3').text(qsAndAs[0].answers[2]);
    $('#answer4').text(qsAndAs[0].answers[3]);

    if($('.answers').on('click')){
        stop();
    }
}

function pushAnswer() {
    for(let i = 0; i < qsAndAs.length; i++) {
        if($('#question h3').html() == (qsAndAs[i].question)) {
            guesses.push(qsAndAs[i].answers);
            console.log(guesses);
        }
    }
    threeSecondBreak()    
}


function threeSecondBreak() {
    $('div.progress-bar').attr('style', 'width: 100%');
    var shortBreak = 4;
    var intervalId;
    //run bar down 1 sec at a time
    function threeBarConverter () {
        return (shortBreak * 100 / 4);
    }
    function lilrun() {
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        shortBreak--;
        $('#question h3').text('Next question in ' + shortBreak);
        $('div.progress-bar').attr('style', 'width: ' + threeBarConverter() + '%');
        if(threeBarConverter < 34) {
            $('div.progress-bar').addClass('bg-danger');
        }if(threeBarConverter >= 34) {
            $('div.progress-bar').removeClass('bg-danger');
        }if (shortBreak === 0) {
            stop();
        }
    }
    function stop() {
        clearInterval(intervalId);
        nextQuestion();
    }
    lilrun();
}

function nextQuestion() {
    for(let i = 0; i < qsAndAs.length; i++) {
        $('#question h3').text(qsAndAs[i].question);
        $('#answer1').text(qsAndAs[i].answers[0]);
        $('#answer2').text(qsAndAs[i].answers[1]);
        $('#answer3').text(qsAndAs[i].answers[2]);
        $('#answer4').text(qsAndAs[i].answers[3]);
    }
    
    $('#answers').on('click', threeSecondBreak()); 
}
        
//Load first question

let guesses = [];
const answerCheck = {a: 0, b: 1, c: 2, d: 3};
let score = 0;

//Submit Answer
