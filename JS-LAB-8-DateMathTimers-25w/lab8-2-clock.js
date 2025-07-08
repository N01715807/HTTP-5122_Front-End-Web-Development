/* LAB 8.2 - STOP TIME */
window.onload = function(){

timeDisplay();

document.getElementById("btnStart").addEventListener("click", startClock);
document.getElementById("btnStop").addEventListener("click", stopClock);

}

let runingTime =null

function format(num){
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}

function timeDisplay(){
	let now = new Date();
	let hoursOut = document.getElementById("hoursOut")
	hoursOut.textContent = `${format(now.getHours())}`

    let minsOut = document.getElementById("minsOut")
    minsOut.textContent = `:${format(now.getMinutes())}`

    let secsOut = document.getElementById("secsOut")
    secsOut.textContent = `:${format(now.getSeconds())}`
}

function startClock(){
	if(!runingTime){timeDisplay()
		runingTime = setInterval(timeDisplay, 1000)
	}
	}

function stopClock(){
	if(runingTime){clearInterval(runingTime)
		runingTime = null}
}

//create page load listener

//create page load function

	//create variables for required HTML elements
	
	//create time variable so all functions have access to it
	
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	
	
	//CREATE FUNCTION TO START THE CLOCK.
	
	
	//CREATE FUNCTION TO STOP THE CLOCK
	
	
	// SET EVENT LISTENERS
