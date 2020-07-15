console.log("working");

// Mini Golf
// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

// Bob
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// Jimbo
// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// Fish
// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1


var bob = {
    'Hole 1' : 3,
    'Hole 2' : 2,
    'Hole 3' : 6,
    'Hole 4' : 11,
    'Hole 5' : 9,
    'Hole 6' : 2,
    'Hole 7' : 6,
    'Hole 8' : 9,
    'Hole 9' : 10
}

var jimbo = {
    'Hole 1' : 5,
    'Hole 2' : 12,
    'Hole 3' : 9,
    'Hole 4' : 22,
    'Hole 5' : 13,
    'Hole 6' : 7,
    'Hole 7' : 16,
    'Hole 8' : 10,
    'Hole 9' : 11

}

var fish = {
    'Hole 1' : 2,
    'Hole 2' : 2,
    'Hole 3' : 4,
    'Hole 4' : 5,
    'Hole 5' : 4,
    'Hole 6' : 3,
    'Hole 7' : 6,
    'Hole 8' : 4,
    'Hole 9' : 1,
}

var calcTotal = function(obj) {
    var total = 0;
    for (var key in obj) {
        total += obj[key];
    }
    return total;
}

var bobTotal = calcTotal(bob);
var jimboTotal = calcTotal(jimbo);
var fishTotal = calcTotal(fish);

console.log(bobTotal);
console.log(jimboTotal);
console.log(fishTotal);

var totalScores = function (bobTotal, jimboTotal, fishTotal) {
    var sum = 0;
    var sum = bobTotal + jimboTotal + fishTotal;

    return  sum;
}

var total = totalScores(bobTotal, jimboTotal, fishTotal);

console.log(total);





// Extension
// Now work out each golfers round compared to the course par.

// Par
// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5
// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.

var par = {
    'Hole 1' : 3,
    'Hole 2' : 4,
    'Hole 3' : 5,
    'Hole 4' : 5,
    'Hole 5' : 3,
    'Hole 6' : 3,
    'Hole 7' : 4,
    'Hole 8' : 3,
    'Hole 9' : 5
}

var parTotal = calcTotal(par);
console.log(parTotal);

console.log(bob.total > par.total ? 'Bob is above par' : 'Bob is below par');
console.log(jimbo.total > par.total  ? 'Jimbo is above par' : 'Jimbo is below par');
console.log(fish.total > par.total  ? 'Fish is above par' : 'Fish is below par');

var ninja = function(obj) {
    var wining = 0;
    for (var key in obj) {
        wining += (obj[key] - par[key]);
        console.log("asd" + wining)
    }
    return wining;
}

var bobWining = ninja(bob);
var jimboWining = ninja(jimbo);

var totalWining = bobWining + jimboWining;

console.log("bobw " + bobWining);
console.log("jimw " + jimboWining);
console.log("tot " + totalWining);