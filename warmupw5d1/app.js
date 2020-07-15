// # https://gist.github.com/kasun-maldeni/51626fb1920dc1c4786c615cb0e0db39

// # A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

// # Make a new file called get_squares.rb.

// # Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

// # NOTE: The returned array of perfect squares should be in ascending order with no duplicates.

// # get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]

// # Done?

// # Solve it with a JavaScript function!

// # Store your solution in a new file called getSquares.js and run it in the console.

// # HINT: Sorting an array of numbers with .sort in JS would produce the following...

// # getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
// # What's that all about?!?!?!


console.log('Hi')



var getSquare = arr => {
    result = [];
    arr.sort((a, b) => a - b);
    uniqSorted = arr.filter((value, index, self) =>  self.indexOf(value) === index)
    uniqSorted.forEach(n => {
        if (Math.sqrt(n) % 1 === 0) {
            result.push(n);
        }
    });
    return result;
}

console.log(getSquare([4, 1, 16, 1, 10, 35, 22]))


// NB: When the elements of an array are undefined, they are compared and sorted as strings according to their UT-16 code
// That is why for numbers "80" can appear before "9" in an ascending sort
// To avoid this we need a compare function to run for each element and its next in the array
// For example, 
// compareFunction(a,b) {
//     return a-b
// }
// If result of compareFunction is 
// less than -1: sort a before b in order position
// 0: unchanged position
// greater than 1: sort b before a in order position
// Since a-b, so (80,9) results in 80 - 9, which is greater than 1. So b is positioned before a is ascending sort 


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The uniq finding function says that only pick an element if the only position it can be found is the current index
// So it skips duplicates.

// To test perfect square:
// If Math.sqrt(x) is true it is a perfect square. but still it is returned as float
// That is it is a whole number that is a float
// So checking if it is integer will always fail
// Instead check if it is % by 1 === 0
// example 5.1 % 1  ===> 0.09999... (5.1 is non whole number floating point, that is a non integer)
// but 5.1 % 1  =======> 0 (5.0 is whole number floating point, that is an integer)
// Why does this work?
//
// a % b = a - floor(a / b) * b
// 5.1 - (floor (5.1/1)*1)
// 5.1 - 5
// 0.099999999 ~= 0.1
// Therefore 5.1 is foating number
//
// a % b = a - floor(a / b) * b
// 5.0 - (floor (5.0/1)*1)
// 5.0 - 5
// 0
// Therefore 5.0 is an integer
//
// Still the question remains why
// 5.1 - Math.floor(5.1) = 0.09999999 and not 0.1?


