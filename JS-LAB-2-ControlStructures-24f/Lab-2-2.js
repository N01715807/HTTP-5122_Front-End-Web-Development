//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES

		// Correct user name
		var username = "dart"
		// Correct password
		var password = "vader"
		// user name input
		// password input
		
		



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var inputUsername = prompt("username:");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("username" + inputUsername);
//5. CREATE POPUP BOX FOR PASSWORD
var inputpassword = prompt("password:");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("password" + inputpassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputUsername === correctUsername && inputPassword === correctPassword)
	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	{
		alert("Welcome" + inputUsername);
		console.log("successful")
	}
	//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
	else 
	{
		alert("Invalid username/password");
		console.log("Fail");
	}
