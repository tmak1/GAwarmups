// https://gist.github.com/kasun-maldeni/4785336b3f1c4bb8edbd8a9d4f3fdd01

// Winnie the Pooh's Honey Problem
// You have 100 jars of honey in a row that are all initially closed. You make 100 visits to the jars of honey.

// The first time around, you visit every jar and toggle the lid (if the jar is closed, you open it; if it is open, you close it).

// The second time you only visit every 2nd jar of honey (jar #2, #4, #6, ...). The third time, every 3rd jar of honey (jar #3, #6, #9, ...), etc, until you only visit the 100th jar of honey.

// Question: Write a function that shows which jars of honey are open after Pooh's last pass.

// Extension
// Try it in JavaScript (or in Ruby if you already did it in JavaScript)

// 0 -> closed
// 1 -> open

const limit = 100
const jars = Array(limit).fill(1);
let start = 2
const openJars = []

while (start <= limit) {
    for (let j = start-1; j < jars.length; j += start) {
        jars[j] = jars[j] === 0 ? 1 : 0
    }
    start++
}

jars.filter((status, index) => { return status === 1 ? openJars.push(index + 1) : false})

console.log(jars)
console.log(openJars)
