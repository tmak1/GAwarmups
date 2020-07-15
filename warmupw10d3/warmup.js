// https://gist.github.com/kasun-maldeni/a95dd12bf451a715f343e3780304ce87
// Roman Numerals
// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Write a function to convert from normal numbers to Roman Numerals: e.g.

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990.

// In Roman numerals 1990 is MCMXC:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

// See also: http://www.novaroma.org/via_romana/numbers.html



// const I = 1
// const V = 5
// const X = 10
// const L = 50
// const C = 100

const getPlaceValue = num => {
    ones = Math.floor(num % 10),
    tens = Math.floor(num/10 % 10),
    hundreds = Math.floor(num/100 % 10)

    return [ones, tens, hundreds]
}

const placeValueRomanConverter = (digit, place) => {
    marks = ['I', 'V', 'X', 'L', 'C', 'C']
    
    if (digit < 4) {
        digitRoman = marks[place].repeat(digit) 
    } else if (digit === 4){
        digitRoman = marks[place] + marks[place + 1]
    } else if (digit === 9){
        digitRoman = marks[place] + marks[place + 2]
    } else {
        gap = digit - 5
        digitRoman = marks[place + 1] + marks[place].repeat(gap)
    }
    return digitRoman
}

const romanConverter = num => {
    [ones, tens, hundreds] = [...getPlaceValue(num)]

    onesRoman = placeValueRomanConverter(ones, 0)
    tensRoman = placeValueRomanConverter(tens, 2)
    hundredsRoman = placeValueRomanConverter(hundreds, 4)

    roman = hundredsRoman + tensRoman + onesRoman

    return roman
}
arr1 = []
arr2 = []
arr3 = []

for (let i = 1; i <= 100; i++) {
    arr1.push(romanConverter(i))
    // console.log(romanConverter(i))
}

for (let i = 101; i <= 200; i++) {
    arr2.push(romanConverter(i))
    // console.log(romanConverter(i))
}

for (let i = 201; i <= 300; i++) {
    arr3.push(romanConverter(i))
    // console.log(romanConverter(i))
}

console.log(arr1)
console.log(arr2)
console.log(arr3)