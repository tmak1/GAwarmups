// console.log('hi');
// https://gist.github.com/kasun-maldeni/c933179e07a9f39ecc1fe079bd8c9035
// Filter Out the Geese
// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

var arrayOfStrings = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

console.log(arrayOfStrings);

var gooseFilter = (arrayOfStrings, geese) => {
    for (var i = 0; i < geese.length; i++) {
        var geeseFound = arrayOfStrings.indexOf(geese[i]);
        if (geeseFound !== -1) {
            arrayOfStrings.splice(geeseFound, 1);
            i--;
        }
    }
    return  arrayOfStrings;
}

console.log(gooseFilter(arrayOfStrings, geese));



// 2nd solution


var gooseFilter2 = (arrayOfStrings, geese) => {
    filtered = arrayOfStrings.filter(elem => {
        return !geese.includes(elem);
    });
    return filtered;
}

console.log(gooseFilter2(arrayOfStrings, geese));

