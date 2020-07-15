var numberOfChildren = 5;
var partnerName = "Farzana";
var locs = "131 William Street";
var jobTitle = "Web Developer";

function doit() {
    console.log("You will be a " + jobTitle + " in " + locs + " , and married to " + partnerName + " with " + numberOfChildren + " kids ^_^");
    var print = "You will be a " + jobTitle + " in " + locs + " , and married to " + partnerName + " with " + numberOfChildren + " kids ^_^";
    document.getElementById("demo").innerHTML = print;
};

doit();