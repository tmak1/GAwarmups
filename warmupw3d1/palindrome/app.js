//sconsole.log('Hi');

// Problem 1:
//Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Some Palindromes to test against:
// 'A car, a man, a maraca'
// 'A Santa at Nasa'

// Good Luck!



//var word = 'A car, a man, a maraca';
var word = 'A Santa at Nasa';

var isPalindrome = function (word) {
    var newTempArray = [];
    if (word !== null) {
        var temp = word.trim().toLowerCase();
        if (temp !== '') {
            var tempArray = temp.split('');
            tempArray.forEach(item => (item !== ' ') ? newTempArray.push(item) : null);       

            var newWord = newTempArray.join('');
            var palindrome = newTempArray.reverse().join('');
            
            // console.log(newWord);
            // console.log(palindrome);
            return (palindrome === newWord) ?  true : false; 
        }
    }
}

console.log('Is it a palindrome? ' + isPalindrome(word));


//Problem 2:
//Console log all the ages doubled using forEach & double


var ages = [12, 15, 18, 22, 100, 55];


//Method 1
ages.forEach(item => console.log(item * 2));

console.log('==================================');

//Method 2
var double = function (num) {
    return num * 2;
}

ages.forEach(item => console.log(double(item)));

console.log('==================================');

//Method 3

var logDouble = num => console.log(double(num));

ages.forEach(logDouble);


//Problem 3
// write a funciton that returns removed space version fo a aword

//Method 1 : Split and join verbose

console.log(' 1 ===============================\n\n');

var sentence = 'you are my friend';

var nospace = function (sentence) {
    return sentence.split(' ').join('');
}

console.log(nospace(sentence));

console.log(' \n\n2 ===============================\n\n');


//Method 2: split and join short hand
var sentence = 'you are my friend';

var nospace = sentence => sentence.split(' ').join('');

console.log(nospace(sentence));

console.log(' \n\n3 ===============================\n\n');


//Method 3: foreach with split short hand
var sentence = 'you are my friend';

var nospace = sentence => {
    var arr = sentence.split(' ');
    var newerWord = '';
    arr.forEach(item => newerWord = newerWord.concat(item));
    return newerWord;
}

console.log(nospace(sentence));

console.log('\n\n4 ===============================\n\n');



//Method 4 for each with letter checking short hand
var sentence = 'you are my friend';

var nospace = sentence => {
    var str = '';
    sentence.split('').forEach(letter => (letter !== ' ') ? str = str.concat(letter) : str);
    return str;
}

console.log(nospace(sentence));







