//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var Team = ["li", "peng", "cheng", "is", "genius"]

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log("Team：", Team)

//REMOVE LAST MEMBER
Team.pop();
console.log("Team：", Team)

//ADD SEAN TO FRONT OF ARRAY
Team.unshift("Sean")
console.log("Team：", Team)

//REARRANGE THE ARRAY ALPHABETICALLY
Team.sort();

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + Team.length );

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < Team.length; i++) 
{
  console.log(Team[i] + " is # " + (i + 1) + ".");
}
