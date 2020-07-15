// console.log('hi');


// Proximity
// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.

// You are given the following set of data as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly).

// var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
// var results = [
//   {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
//   {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
//   {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
//   {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
//   {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
//   {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
// ]
// Write a function in JS to print the names of the results in order of closest to your location to furthest away.

// Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.


var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]


var distanceCalculator = (startPoint, results) => {
    distances = [];
    results.forEach(result => {
        distanceX = startPoint.location.lat - result.location.lat;
        distanceY = startPoint.location.long - result.location.long;
        distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow((distanceY), 2));
        distances.push({name: result.name, distance: distance});
        
    });

    distances.sort(function(a, b) {
        return a.distance - b.distance;
    }); 

    return distances;
} 

console.log(distanceCalculator(startPoint, results));



// ---------------Extra -------------------------

str = ''
distanceCalculator(startPoint, results).forEach(distance => {
    str += distance.name +  '>'
});



document.querySelector('#results').textContent = str;
