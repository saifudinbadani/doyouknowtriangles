var sideAB = document.querySelector('#sideAB');
var sideBC = document.querySelector('#sideBC');
var submitButton = document.querySelector('#submitButton');
var output = document.querySelector('#output');


submitButton.addEventListener('click', function checkHypotenuse() {
    if (Number(sideAB.value) < 0 || Number(sideBC.value) < 0  ) {
        output.innerText = 'Enter positive values!'
        
    } else {
        var sumOfSquares = Math.pow(Number(sideAB.value), 2) + Math.pow(Number(sideBC.value), 2);

        output.innerText = (Math.round(Math.sqrt(sumOfSquares) * 100) / 100).toFixed(2) + ' cm'
        
    }

});