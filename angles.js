var angleA = document.querySelector('#angleA');
var angleB = document.querySelector('#angleB');
var angleC = document.querySelector('#angleC');
var checkButton = document.querySelector('#checkButton')
var output = document.querySelector('#output');



checkButton.addEventListener('click', function checkSum() {
    if (Number(angleA.value) || Number(angleB.value) || Number(angleC.value) > 0) {
        if (Number(angleA.value) + Number(angleB.value) + Number(angleC.value) === 180) {
            output.innerText = 'The angles entered form a triangle.'
        } else {
            output.innerText = 'The angles entered does not form a triangle.'
        }
        
    } else {
        output.innerText = 'Enter a positive number.'
    }

})