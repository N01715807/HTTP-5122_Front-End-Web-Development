/* LAB 8-1 - FINAL COUNTDOWN!! */
window.onload = function()
{
	let now = new Date()
	let dueDate = new Date("August 15, 2025 18:00:00")

	let todayData = document.getElementById("todayData")
	todayData.textContent = now.toDateString()
	let finalData = document.getElementById("finalData")
	finalData.textContent = dueDate.toDateString()

	let dueData = document.getElementById("dueData")
	let diff = (dueDate.getTime() - now.getTime())/ 86400000

	let leftDate = Math.floor(diff)

	if( leftDate <0 ){
		let countMsg = document.getElementById("countMsg")
		countMsg.textContent = "it is OVER" 
	}else {
		dueData.textContent = leftDate;
  }
}

//create page load listener

//create page load function

	//create variables for required HTML elements
	
	//create variables for now date and due date
	
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE