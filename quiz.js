var questionForm = document.querySelector('#quizForm');
var submitButton = document.querySelector('#submitButton');
var quizOutput = document.querySelector('#quizOutput');

rightAnswers = ['right', 'scalene', 'acute', 'isoceles', 'isoceles' ];

function calculateScore(){
    let index = 0;
    let score = 0;
    const formResults = new FormData(questionForm);
    for(let values of questionForm.values()){
        if(values === rightAnswers[index]){
            score = score + 1;
        } index = index + 1;
    }

    quizOutput.innerText = 'Your score is ' + score;
}

submitButton.addEventListener('click', calculateScore());