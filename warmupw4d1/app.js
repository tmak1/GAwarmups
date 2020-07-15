//console.log('Hi');

// Times Tables
// Solve in JS: generate the following output in the console using for loops.

// === 1 times table ===
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10
// === 2 times table ===
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20
// === 3 times table ===
// 3 x 1 = 3
// 3 x 2 = 6...
// upto 10.


// numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(element => {
//     console.log(`=== ${element} times table ===`);
//     numbers.forEach(num => console.log(`${element} x ${num} = ${element * num}`))
// });




// Exam Results
// A group of students sitting exams every quarter score the following results throughout the year:

// var exam_results = {
//   Greg: {
//     Biology: [90, 75, 23, 60],
//     Maths: [100, 80, 30, 45]
//   },
//   Sarah: {
//     Biology: [70, 65, 80, 95],
//     Maths: [80, 77, 64, 90]
//   },
//   Thomas: {
//     Biology: [40, 60, 75, 98],
//     Maths: [36, 50, 67, 82]
//   }
// }
// Write the code to find:

// How much Greg scored in their first Biology exam.
// How much Sarah scored in their last Maths exam.
// The highest score Thomas achieved in Maths throughout the year.
// The quarter that Greg achieved his lowest score in Biology in the year.
// Extension:
// The average of Sarah's scores in Maths for the whole year.


var exam_results = {
      Greg: {
        Biology: [90, 75, 23, 60],
        Maths: [100, 80, 30, 45]
      },
      Sarah: {
        Biology: [70, 65, 80, 95],
        Maths: [80, 77, 64, 90]
      },
      Thomas: {
        Biology: [40, 60, 75, 98],
        Maths: [36, 50, 67, 82]
      }
    }

    // 1st

    var result = exam_results.Greg.Biology[0];

    console.log(result);
    
    
    // 2nd 
    var result = exam_results.Sarah.Maths[exam_results.Sarah.Maths.length - 1]
    console.log(result);
    

    // NB: Array.sort() treats each element as string even if they are numbers. So the sorting is done by unicode. This can produce strange results 

    // a = [100, 2, 23, 45];
    // console.log(a.sort()) will produce [100, 2, 23, 45] insetad of [2, 23, 45, 100];

    
    // 3rd
    var arr = exam_results.Thomas.Maths.slice().sort();
    var result = arr[arr.length - 1];
    console.log(result);
    
    // 4th
    var arr1 = exam_results.Greg.Biology.slice().sort();
    var lowestScore = arr1[0];
    var result = exam_results.Greg.Biology.indexOf(23);
    switch(result) {
        case 0:
            console.log('Lowest score in 1st semester');
            break;
        case 1:
            console.log('Lowest score in 2nd semester');
            break;
        case 2:
            console.log('Lowest score in 3rd semester');
            break;
        case 3:
            console.log('Lowest score in 4th semester');
            break;
    }
    
