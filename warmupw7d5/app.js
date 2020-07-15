// https://gist.github.com/kasun-maldeni/919b2d75fe2d41c563c826ff1616bbf7
// The Odd Integer Warmup
// You have an array of integers. Find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 
//answer is 5 since it is the only number that appears an odd number of times.


var integerCounter = integers => {
    integerCounted = []
    integers.forEach((num, index, array) => {
        if (array.indexOf(num) === index) {
            var integerObj = {
                integer: num,
                count: array.filter(elem => elem === num).length
            }
            integerCounted.push(integerObj);
        }
    })
    return integerCounted;
}

var integerFinder = integers => {
    integerCounted = integerCounter(integers);
    integerObj = integerCounted.filter(integer => (integer.count % 2) !== 0);
    return integerObj[0].integer;   
}

console.log('Integer appears odd times is: ' + integerFinder([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


// Alternative method

