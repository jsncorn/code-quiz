// array of questions to use for the quiz
var quizQuestions = [
    {
        questionTitle: 'Which HTML tag creates an unordered list?',
        choices: ['<ul>', '<li>', '<ol>', '<s>'],
        amswer: 'ul'
    },
    {
        questionTitle: 'jQuery is an API extension of what?',
        choices: ['HTML', 'Bootstrap', 'Javascript', 'CSS'],
        amswer: 'Javascript'
    },
    {
        questionTitle: 'In Javascript, what is used to store data values?',
        choices: ['array', 'string', 'function', 'variables'],
        amswer: 'variables'
    },
    {
        questionTitle: 'How do you NOT declare a variable in Javascript?',
        choices: ['let', 'var', 'const', '--var'],
        amswer: '--var'
    }
]

//create a var that will link to html button
var timer = document.querySelector('#startBtn')

//create a timer that will start on the button click
//create a button linking to the start button
timer.addEventListener('click', function() {
    console.log('works')
})
