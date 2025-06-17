/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST

//WAIT FOR THE PAGE TO LOAD
window.onload = onReady;

function onReady() {
	var formHandle   = document.getElementById("shippingForm");
    var inputName    = document.getElementById("in_Name");
    var inputPC      = document.getElementById("in_pc");
	var selectSpeed  = document.getElementById("in_Speed");

    var thanksBlock  = document.getElementById("thanks_msg");
    var spanName     = document.getElementById("thanksCustomer");
    var spanPC       = document.getElementById("thanksPC");
	var spanSpeed   = document.getElementById("thanksSpeed");
    var spanCost    = document.getElementById("thanksCost");

	formHandle.onsubmit = processForm;

	function processForm(evt) {

	evt.preventDefault();
    var Valid = true;

    if (inputName.value.trim() === "") {
      inputName.style.backgroundColor = "lightcoral";
      inputName.focus();
      Valid = false;
    }
    else if (inputPC.value.trim() === "") { 
      inputPC.style.backgroundColor = "lightcoral";
      inputPC.focus();
      Valid = false;
    }
	else if (selectSpeed.value === "0" || selectSpeed.value === "") {
      selectSpeed.style.backgroundColor = "lightcoral";
      selectSpeed.focus();
      valid = false;
    }

    if (!Valid) { return false; }

    spanName.textContent = inputName.value.trim();
    spanPC.textContent = inputPC.value.trim();
	spanSpeed.textContent = selectSpeed.options[selectSpeed.selectedIndex].textContent;
    spanCost.textContent  = Number(selectSpeed.value).toFixed(2);

    formHandle.style.display = "none";
    thanksBlock.style.display = "block";

    return false;
  }

}