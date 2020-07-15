console.log("testing");

arr = [2,3,5,7,7,4,3,2,1];
console.log(`ori: ${arr}`);

for (var i = 0; i < (arr.length - 1); i++) {
    for (var j = (i + 1) ; j < arr.length; j++) {
        var num = arr[i];
        if (arr[i] > arr[j]) {
            arr[i] = arr[j];
            arr[j] = num;
        }
    }
}

console.log(`changed: ${arr}`);