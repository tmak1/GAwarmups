// console.log('hi')

// # https://gist.github.com/kasun-maldeni/ce4fb1d81648057fd6ccdf0079d6d4a9

// # Series Sum
// # Your task is to write a function which returns the sum of following series upto nth term(parameter).

// # Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// # Rules:
// # You need to round the answer to 2 decimal places and return it as String.
// # If the given value is 0 then it should return 0.00
// # You will only be given Natural Numbers as arguments.
// # Examples:
// # seriesSum(1) => 1 = "1.00"
// # seriesSum(2) => 1 + 1/4 = "1.25"
// # seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"


var seriesSum = (num) => {
    sum = 0;
    if (num > 0) {
        denominator = 1
        sum ++; 
        for (var i = 0; i < (num - 1); i++) {
            denominator += 3 
            sum += (1.0/denominator)
        }    
    }
    sum = Math.round(sum * 100) / 100; 
    sum = sum.toFixed(2); 
    sumS = sum + "";
    return sumS;
}

// Need teh orinting function


console.log(seriesSum(0))

console.log("================")
console.log(seriesSum(1))
console.log("================")

console.log(seriesSum(2))
console.log("================")


console.log(seriesSum(5))
console.log("================")


