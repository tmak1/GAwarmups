console.log('');
console.log('');

var heads = 0;
var tails = 0;
var result;
var receipt;


var coinFlip = function () {
    result = Math.round(Math.random() * 1);
    print(result);
    msg(heads, tails);
    if ((heads >= 5) || (tails >= 5)) {
        clearInterval(receipt);
    }
}

var print = function (result) {
    if (result === 0) {
        ++heads;
        console.log('*  H =    ' + heads + '     times   *');
    } else if (result === 1) {
        ++tails;
        console.log('*  T =    ' + tails + '     times   *');
    }
}

var msg = function (heads, tails) {
    if (heads === 5) {
        console.log('===========================\n');   
        console.log('*     Winner is Heads   *');
        console.log('===========================\n');
    } else if (tails === 5) {
        console.log('===========================\n');
        console.log('*     Winner is Tails   *');
        console.log('===========================\n');
    }
}

console.log('**************************');  
var receipt = setInterval(coinFlip, 700);   







