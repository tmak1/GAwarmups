// <!-- https://gist.github.com/kasun-maldeni/fa236db071c77a28dd625c71e5614f4d

// Query String to Params hash
// You can do this in javascript or ruby
// Given the following sample query string

// var qs = "?title=jaws&apikey=123456&page=5"
// Write a function that accepts a query string as an argument and returns an object

// queryStringToObject(qs)
// Returns the following

// {
//   title: "jaws",
//   apikey: "123456",
//   page: "5"
// } -->

const qs = "?title=jaws&apikey=123456&page=5";

var queryStringToObj = quesrystring => {
    const obj = {};
    quesrystring.slice(1).split('&').forEach(qstring => {
        keyvalue = qstring.split('=');
        obj[keyvalue[0]] = keyvalue[1];
    })
    return obj;
}

console.log(queryStringToObj(qs));