//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
window.onload = function(){

    //check for stored values
        //retrieve stored values
        let storedName = localStorage.getItem("name");
        let storedColor = localStorage.getItem("colour");
        //change welcome text to stored name
        if (storedName && storedColor) {
            //change BG colour to stored colour
            document.getElementById("newMsgBox").textContent = `Welcome, ${storedName}`;
            //  document.body.style.background = 
            document.body.style.background = storedColor;
        }};

        	
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	 document.forms["infoForm"].addEventListener("submit", function (e) {
        e.preventDefault();
        let nameInput = document.getElementById("inName").value;
        let colorInput = document.getElementById("inColor").value;
        localStorage.setItem("name", nameInput);
        localStorage.setItem("colour", colorInput);
        location.reload();
    });

    document.getElementById("btnDel").addEventListener("click", function () {
        localStorage.removeItem("name");
        localStorage.removeItem("colour");
        location.reload();
    });
	

	//onsubmit Function
        
        //get values from form
		
		
		//console.log the form values

        
        //store values
        
        



    