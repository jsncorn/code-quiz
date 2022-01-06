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
var timer = document.querySelector('#startBtn');
//create a var that will link and change the timer
var currentTime = document.querySelector('#currentTime');
//variable to access the quizdiv in html
var quizDiv = document.querySelector('#quizDiv');
//variable to access ul in html
var quizUl = document.querySelector('#multipleChoice');
var divRW = document.querySelector('#rightWrongDiv');

//create a variable for the countdown timer (in seconds)
var timeLeft = 90;
var stopInterval = 0;
var qIndex = 0;

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
        var quizMultipleChoice = quizQuestions[qIndex].questionChoices;
            //apend the title from questionTitle
        quizDiv.textContent = quizQuestionTitle;
    }
    //make a loop to create and append a new li item
    //  using questionchoices; using for loop instead
    quizMultipleChoice.forEach(function (listItem) {
        //create an li element to append to ul later
        var listChoice = document.createElement('li');
        //set the new element text to the array's input
        listChoice.textContent = listItem;
        quizDiv.appendChild(quizUl);
        quizUl.appendChild(listChoice);
        listChoice.addEventListener('click', 'li', (compareClick))
    })
}

function compareClick(event) {
    var target = event.target;
    if(target.textContent == quizQuestions[qIndex].questionAnswer) {
        divRW.textContent = "Correct";
    }
    else {
        timeLeft = timeLeft - 10;
        divRW.textContent = "Wrong";
    }
}