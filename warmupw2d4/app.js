//console.log('Happy!');

// A wolf in sheep's clothing
// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.



// examples

// warnTheSheep(["sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"
// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) === "Oi! Sheep number 5! You are about to be eaten by a wolf!"


var saveTheSheep = function (arr) {

    var pos = arr.indexOf('wolf');
    if (pos === arr.length - 1) {
        console.log('Pls go away and stop eating my sheep');
    } else {
        console.log(`Oi! Sheep number ${(arr.length - pos - 1)}! You are about to be eaten by a wolf`);
    }
}

var outer = [
    ["sheep", "wolf", "sheep"],
    ["sheep", "sheep", "wolf"],
    ["sheep", "sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
    ["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"],
    ["sheep", "sheep", "sheep", "wolf"]
];



for (var i = 0; i < outer.length; i++) {
    saveTheSheep(outer[i]);
    console.log('\n========================================================\n\n');
}

