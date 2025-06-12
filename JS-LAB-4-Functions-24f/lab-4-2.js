//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function calculateAverage(a, b, c, d, e) {
  var total = a + b + c + d + e;
  var average = total / 5;
  return average.toFixed(1);
}

console.log(calculateAverage(5, 10, 15, 20, 25))
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var course1 = 100, course2 = 60, course3 = 99, course4 = 74, course5 = 38;
var Average = calculateAverage(course1, course2, course3, course4, course5);

if (Average >= 70) {
  alert("Success!" + Average);
} else {
  alert("Review" + Average);
}