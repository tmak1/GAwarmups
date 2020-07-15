console.log("working");

// 1. Create an array of the days of the week
// Create a variable named days_of_the_week as an array of the following:
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

//console.log(days_of_the_week);





// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. Use array methods.

// days_of_the_week.unshift(days_of_the_week.pop());
// console.log(days_of_the_week);





// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days

// new_days_of_the_week = 
// [
//     days_of_the_week.slice(1, 6),
//     [
//         days_of_the_week.shift(), days_of_the_week.pop()
//     ]
// ];

// console.log(days_of_the_week);
// console.log(new_days_of_the_week);





// 4. Remove either the weekdays or the weekends
// Your choice...

// new_days_of_the_week.pop();
// console.log(new_days_of_the_week);





// 5. Sort the remaining days alphabetically

//sorted = new_days_of_the_week[0].sort();


// sorted = new_days_of_the_week[0];

// for (var i = 0; i < (sorted.length - 1); i++) {
//     for (var j = (i + 1) ; j < sorted.length; j++) {
//         var temp = sorted[i];
//         if (sorted[i] > sorted[j]) {
//             sorted[i] = sorted[j];
//             sorted[j] = temp;
//         }
//     }
// }

// console.log(sorted);