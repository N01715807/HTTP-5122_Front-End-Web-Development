var validTeamNumber  = 6;
var teamMembers = ["li1", "li2", "li3", "li4", "li5", "li6"];

var teamInput = prompt("team number:");

if (teamInput == validTeamNumber) 
    {
        var inputName = prompt("Enter your first name:");
        if (!inputName || inputName.trim() === "") 
            {
                alert("Access denied. No name entered.");
            }
            if (teamMembers.includes(inputName))
                {
                    alert("Welcome, " + inputName + "!");
                }
                else 
                {
                    alert("Access denied!");
                }


    } 