// https://gist.github.com/kasun-maldeni/5d4807fdc554c5bd6ba1846372fb809c

// Intersection
// Please complete this warmup in JavaScript without the use of any libraries.
// You are given three arrays, write a function threeWayIntersection 
// which only returns the common elements in all three arrays. For example:

// threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]) // => [3,4]

arr1 = [1,3,4,6]
arr2 = [2,3,4,7]
arr3 = [3,4,7,8,9]


const intersection = (arr1, arr2) => {
    return arr1.filter(arr1Element => arr2.indexOf(arr1Element) !== -1)
}

const threeWayIntersection = ((arr1, arr2, arr3) => {
    first2 = intersection(arr1, arr2)
    result = intersection(first2, arr3)
    return result
})

console.log( threeWayIntersection(arr1, arr2, arr3) )


// const uniq = (arr => {
//     return arr.filter((value, index, self) => self.indexOf(value) === index)
// })


// result = []
// function threeWayIntersection(arrayOfArrays) { 
//     if (result.length === 1) {
//         return result
//     } else {
//         if (result.length === 0) {
//             result = arrayOfArrays
//         }
//         for (let i = 0; i < result.length; i++) {
//             for (let j = i+1; j < result.length; j++) {
//                 result.push(intersection(result[i], result[j]))
//             }
//         }
//         return threeWayIntersection(result)
//     }
// }
