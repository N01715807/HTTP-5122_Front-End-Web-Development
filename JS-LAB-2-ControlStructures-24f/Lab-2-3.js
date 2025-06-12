//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var wantsToJoin = confirm("Would you like to join our mailing list?");

//==== LOGIC =============
if (wantsToJoin) {
  var email = prompt("email address:", "example@gmail.com");

  if (email === null || email.trim() === "" || email === "example@gmail.com") 
    {
        alert("not valid.");
    } 
    else 
    {
        alert("Thank you, our next newsletter will be sent to " + email + ".");
    }

} else 
{
  
  alert("Thank you, we will not bother you again.");
}