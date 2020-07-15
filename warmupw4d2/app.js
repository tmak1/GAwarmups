// console.log('hi')

// Time to fool some archaeologists
// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.

// makeFakeMap(5, 5);

// // Sample outputs:

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];

// makeFakeMap(5, 5);

// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];


var makeFakeMap = (a, b) => {
    var outerArray = [];
    for (var i = 0; i < a; i++) {
        var innerArray = [];
        for (var j = 0; j < b; j++) {
           innerArray[j] = 'A';
        }    
        outerArray[i] = innerArray   
    }
    var randB = Math.round(Math.random() * (b - 1));
    var randA = Math.round(Math.random() * (a - 1));
    outerArray[randA][randB] = 'X';  
    return outerArray;
}

console.log(makeFakeMap(5,5));

