//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cartPrices = [];
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < 35)
{
	//GET ITEM COST FROM USER
	var price = prompt("Enter price:")
	
	//CONVERT USER INPUT TO A NUMBER
	var numPrice = parseInt(price);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	cartPrices.push(numPrice);
	
	//PUSH ITEM COST TO CART ARRAY
	total += numPrice;
	
}	


//SEND POPUP MESSAGE TO USER
alert("“Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cartPrices.join("|"));
