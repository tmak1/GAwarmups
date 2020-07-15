console.log('hie');


// Make Them Green
// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.



var boxOne = document.querySelector('#one');
var boxTwo = document.querySelector('#two');
var boxThree = document.querySelector('#three');

var isOneRed = false;
var isTwoRed = false;
var isThreeRed = false;

var isRedChecker = num =>  (isOneRed && isTwoRed && isThreeRed) ?  true : false;


var makeAllGreen = function () {
    boxOne.style.backgroundColor = 'green';
    boxTwo.style.backgroundColor = 'green';
    boxThree.style.backgroundColor = 'green';
}


boxOne.addEventListener('click', function() {
    if (boxOne.style.backgroundColor !== 'red') {
        boxOne.style.backgroundColor = 'red';
    } else {
        isOneRed = true;
        isRedChecker() ? makeAllGreen() : false;
        if (isRedChecker) {
            makeAllGreen();
        }
    }
});

boxTwo.addEventListener('click', function() {
    if (boxTwo.style.backgroundColor !== 'red') {
        boxTwo.style.backgroundColor = 'red';
    } else {
        isTwoRed = true;
        if (isRedChecker) {
            makeAllGreen();
        }
    }
});

boxThree.addEventListener('click', function() {
    if (boxThree.style.backgroundColor !== 'red') {
        boxThree.style.backgroundColor = 'red';
    } else {
        isThreeRed = true;
        if (isRedChecker) {
            makeAllGreen();
        }
    }
});

