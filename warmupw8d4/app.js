// https://gist.github.com/kasun-maldeni/3082b440f8c1753bf2f90171c3472206
// Alternating Split
// For building the encrypted string:

// Take every 2nd character from the string, then the other characters that are not every 2nd character, and concat them as a new String.
// Do this n times!
// To do the above, you must build an encrypt(message, n) method that performs like this:

// encrypt("This is a test!", 1) -> "hsi  etTi sats!"
// encrypt("This is a test!", 2) -> "s eT ashi tist!"


var encrypt = (msg, n) => {
    if (n === 0) {
        return msg;
    } else {
        odd_pos = msg.split('').filter((char, index) => index % 2 === 0);
        even_pos = msg.split('').filter((char, index) => index % 2 !== 0);
        encrypted = even_pos.concat(odd_pos).join('');
        return encrypt(encrypted, n-1);
    }
}

console.log(`encrypt("${"This is a test!"}", 2) -> "${encrypt("This is a test!", 2)}"`);
console.log(`encrypt("${"This is a test!"}", 4) -> "${encrypt("This is a test!", 4)}"`);
