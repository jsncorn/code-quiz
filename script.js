// array of questions to use for the quiz
var quizQuestions = [
    {
        questionTitle: 'Which HTML tag creates an unordered list?',
        questionChoices: ['<ul>', '<li>', '<ol>', '<s>'],
        questionAnswer: 'ul'
    },
    {
        questionTitle: 'jQuery is an API extension of what?',
        questionChoices: ['HTML', 'Bootstrap', 'Javascript', 'CSS'],
        questionAnswer: 'Javascript'
    },
    {
        questionTitle: 'In Javascript, what is used to store data values?',
        questionChoices: ['array', 'string', 'function', 'variables'],
        questionAnswer: 'variables'
    },
    {
        questionTitle: 'How do you NOT declare a variable in Javascript?',
        questionChoices: ['let', 'var', 'const', '--var'],
        questionAnswer: '--var'
    }
]

//create a var that will link to html button
var timer = document.querySelector('#startBtn')
//create a var that will link and change the timer
var currentTime = document.querySelector('#currentTime')

//create a variable for the countdown timer (in seconds)
var timeLeft = 90;
var stopInterval = 0;

//create a timer that will start on the button click
//create a button linking to the start button
timer.addEventListener('click', function() {
    if(stopInterval === 0) {
        stopInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = 'Time left: ' + timeLeft;

            if(timeLeft <= 0) {
                clearInterval(stopInterval);
                currentTime.textContent = 'There is no more time left';
            }
        }, 1000);
    }
    renderQuestions(qIndex);
})

function renderQuestions(qIndex) {
    //get all data from the array
    for(i = 0; i < quizQuestions.length; i++) {
        var quizQuestionTitle = quizQuestions[qIndex].questionTitle;
    }
    //apend the title from questionTitle
    //make a loop to create and append a new li item
    //  using questionchoices
}