var movie1 = "li";
var movie2 = "peng";
var movie3 = "cheng";
var movie4 = "like";
var movie5 = "The Matrix";
var movie6 = "Iron Man";
var movie7 = "Superman";

var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

var validInput = false;
var userInput;

while (validInput === false) 
{
    userInput = prompt("Pick a number: 1-7");
        var index = parseInt(userInput);
        if (!isNaN(index) && index >= 1 && index <= 7) 
            {validInput = true; }
         else {alert("Please enter a number between 1 and 7!");}
}

var chosenMovie = movies[index - 1];
alert("Num " + index  + chosenMovie);

for (var i = 0; i < movies.length; i++) {
  console.log("Movie " + (i + 1) + ": " + movies[i]);
}