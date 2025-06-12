//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...
function checkTemp(currentTemp){
if (currentTemp > 30) {
    return  false
}
else{
     return true
}
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var userTemp = prompt(" current temperature") 
userTemp = Number(userTemp);
if (checkTemp(userTemp)) { alert ("You are good, have a nice walk!")} else{alert ("Yikes! Too hot for dog walking!" )}