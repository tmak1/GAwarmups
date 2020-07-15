//console.log("Hellow World!");



// 1. Drinking age?
// Ask the user for their age. -Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
// If age is less than 18, print an appropriate message.
// If the age is equal to or over 18, print a different message.


// var age;

// do {
//     age = prompt("Type your age");
//     if (age.trim() !== ''){
//         age = Number(age);
//         if (age >= 18) {
//             console.log("You are 18 or over");
//         }
//         else if (age < 18) {
//             console.log("You are under 18");
//         }
//     } else {
//         alert("You did not type anything");
//     }
// } while (age.trim() === '')






// 2. Air Conditioning
// Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
// If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."



// var currentTemp = 30;
// var isFunctional = false;
// var input;

// do {
//     input = prompt("What temp");
//     if (input.trim() !== '') {
//         desiredTemp = Number(input);
//         if (isFunctional) {
//             if (currentTemp > desiredTemp) {
//                 console.log("Turn on the A/C Please");
//             }
//         } else {
//             if (currentTemp > desiredTemp){
//                 console.log("Fix the A/C now! It's hot!"); 
//             } else {
//                 console.log("Fix the A/C whenever you have the chance... It's cool..."); 
//             } 
//         }
//     } else {
//         alert("You did not input anything");
//     }
// } while(input.trim() === '')




// 3. Melbourne Suburbs
// Create a program that asks what suburbs you live in.
// Depending on the answer, print an appropriate response of your choosing


var suburb;
do {
    suburb = prompt("What suburb you live in");
    if (suburb.trim() !== '') {
        console.log('I heard ' + suburb.trim() + ' is a nice place');
    } else {
        alert(`You did not say anything`);
    }
} while(suburb.trim() === '')
