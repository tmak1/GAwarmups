console.log('Hi');

// # Grandma

// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with

// > HUH?!  SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// > NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.



do {
    var input = prompt('Say what to Grandma?');

    if (input !== null) {
        input = input.trim();
    }
    
    if ((input !== '') && (input !== 'BYE')) {
        if (input === input.toUpperCase()) {
            var randomYear = Math.round((Math.random() * (1950 - 1930)) + 1930);  // Math.round(Math.random() * (max - min)) + min;
            alert(`NO, NOT SINCE ${randomYear}!`);
        } else {
            alert('HUH?!  SPEAK UP, SONNY!');
        }
    }
} while (input !== 'BYE');









// ## Extensions

// Please do some research into Git and Github as I will be doing an intro on it after this mornings warmup


