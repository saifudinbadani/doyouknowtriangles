var questionForm = document.querySelector('#quizForm');
var quizOutput = document.querySelector('#quizOutput');

rightAnswers = ['right', 'scalene', 'acute', 'isosceles', 'isosceles', '180', '30', 'acute', 'hypotenuse', 'equilateral' ];

function calculateScore(e){
    e.preventDefault();
    let index = 0;
    let score = 0;
    const formResults = new FormData(questionForm);
    for(let value of formResults.values()){
        if(value === rightAnswers[index]){
            score = score + 1;
        } index = index + 1;
    }

    quizOutput.innerText = 'Your score is ' + score;
}

questionForm.addEventListener('submit', calculateScore);