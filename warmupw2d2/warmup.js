console.log("working");

// Mini Golf
// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

// Bob
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// Jimbo
// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// Fish
// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1

var totalScores = function () {
    var bob = new Array(3).fill(0);
    var jimbo = new Array(3).fill(0);
    var fish = new Array(3).fill(0);
    var recorded = new Array(3).fill(0);

    var bobTotal = 0.0;
    var jimboTotal = 0.0;
    var fishTotal = 0.0;

  
        while (!((recorded[0] === 1) && (recorded[1] === 1) && (recorded[2] === 1))) {
            var playerName = prompt("Whose score to enter?");
            playerName = playerName.trim().toLowerCase();

            switch(playerName) {
                case 'bob': 
                    for (var i = 0; i < bob.length; i++) {
                        var score = Number(prompt("Hole " + (i + 1.0) + " : "));
                        bob[i] = score;
                    }
                    recorded[0] = 1;
                    break;
                case 'jimbo': 
                    for (var i = 0; i < jimbo.length; i++) {
                        var score = Number(prompt("Hole " + (i + 1.0) + " : "));
                        jimbo[i] = score;               
                    }
                    recorded[1] = 1;
                    break;
                case 'fish': 
                    for (var i = 0; i < fish.length; i++) {
                        var score = Number(prompt("Hole " + (i + 1.0) + " : "));
                        fish[i] = score;                                    
                    }
                    recorded[2] = 1;
                    break;
            }
            // console.log(bob);
            // console.log(jimbo);
            // console.log(fish);
            // console.log(recorded);
        }


        for (var b = 0; b < bob.length; b++) {
            bobTotal += bob[b]; 
        }

        for (var j = 0; j < jimbo.length; j++) {
            jimboTotal += jimbo[j]; 
        }

        for (var f = 0; f < fish.length; f++) {
            fishTotal += fish[f]; 
        }

        console.log("Bob: " + bobTotal);

        console.log("Jimbo " + jimboTotal);

        console.log("fish " + fishTotal);

        console.log("ALl total \n" + (bobTotal + jimboTotal + fishTotal));
        console.log("======================================");

        
    }

var compare = function (bobTotal, jimboTotal, fishTotal) {
    var par = new Array(3).fill(0);
    var score = 0;
    var partotal = 0;

    for (var i = 0; i < par.length; i++) {
        score = Number(prompt("par hole " + i + " : "));
        par[i] = score;
        partotal += par[i];
    }

    console.log(partotal);

    if ()

}

totalScores();
compare();



// Extension
// Now work out each golfers round compared to the course par.

// Par
// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5
// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.