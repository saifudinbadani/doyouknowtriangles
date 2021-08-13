var angleA = document.querySelector('#angleA');
var angleB = document.querySelector('#angleB');
var angleC = document.querySelector('#angleC');
var checkButton = document.querySelector('#checkButton')



checkButton.addEventListener('click',function checkSum(){
    
        if (Number(angleA.value) + Number(angleB.value) + Number(angleC.value) === 180) {
            console.log('The angles entered does form a triangle.')
        } else {
            console.log('The angles entered does not form a triangle.')
        }
    
})