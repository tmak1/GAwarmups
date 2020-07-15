
// # Switch up
// # Write a function switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

// # switchUp("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"
// # Extension
// # If words are separated by spaces or underscores, change them to dashes. For example:

// # switchUp2("js_Was_created_bY BRENdan Eich") --> // "JS-wAS-CREATED-By-brenDAN-eICH"

    
var switchUp = str => {
    arr = [];
    str.split('').forEach(char => {
        switch(true) {
            case /[A-Z]/.test(char):
                arr.push(char.toLowerCase());
                break;
            case /[a-z]/.test(char):
                arr.push(char.toUpperCase());
                break;
            case /[\s,_]/.test(char):
                arr.push('-');
                break;
        }
   });
    newStr = arr.join('');
    return newStr; 
}

console.log(switchUp("js_Was_created_bY BRENdan Eich"));