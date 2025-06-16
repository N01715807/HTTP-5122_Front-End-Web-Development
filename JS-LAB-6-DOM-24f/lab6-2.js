//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT

//'WRAPPER' FUNCTION FOR DOM LOGIC
window.onload = pageReady;
function pageReady(){
	//GET DOM ELEMENTS WE'LL NEED
var MYSTERYBOX = document.getElementById("mysteryBox");
var buttonBox  = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
MYSTERYBOX.onmouseover = switchMYSTERYBOX;

function switchMYSTERYBOX() {
       if(confirm('Do you want to see something?')){
		MYSTERYBOX.style.display = 'none';
		buttonBox.style.display  = 'block';} ;
    }
	
	//FUNCTION TO CHANGE buttonBox
buttonBox.onclick = buttonBoxonclick;

function buttonBoxonclick(){
	buttonBox.style.width = "600px";
    buttonBox.style.backgroundColor = "orange";
    buttonBox.textContent = "SURPRISE!!";
}
	//SETUP LISTENERS



}//END onload FUNCTION