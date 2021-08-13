var base = document.querySelector('#base');
var height = document.querySelector('#height');
var calculateButton =document.querySelector('#calculateButton');
var output = document.querySelector('#output');



calculateButton.addEventListener('click', function calculateArea(){
    var area = 0.5 * Number(base.value) * Number(height.value)
    output.innerText = area + ' cm²'
})