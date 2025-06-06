var recipe = {
  Name: "Spaghetti alla Carbonara",
  Servings: 2,
  Ingredients: ["spaghetti", "egg yolks", "pecorino romano", "guanciale", "black pepper"],
  Chef: "LiPengcheng",
  
  updateServings: function(amount) 
{
    recipe.Servings = recipe.Servings + amount;
    return "“The updated number of servings is" + recipe.Servings;
}, 

addIngredient: function (newItem) 
{
    recipe.Ingredients.push(newItem);
    return "“The final required ingredients are:" + recipe.Ingredients.join(", ");
  },

}

console.log("Recipe Name:" + recipe.Name);
console.log("Servings:" + recipe.Servings);
console.log("Ingredients required:" + recipe.Ingredients);
console.log("Chef:" + recipe.Chef);

if (confirm("Current servings: " + recipe.Servings + ". Would you like to change?")) {
var input = prompt("How many more servings?", recipe.Servings);
while (input === null || input.trim() === "" || isNaN(input)) {
  alert("Invalid input. Please enter again.");
  input = prompt("How many more servings?", recipe.Servings);
}
var amount = parseInt(input);
alert(recipe.updateServings(amount));}

if (confirm("The core ingredients are: spaghetti, egg yolks, pecorino romano, guanciale, and black pepper. Would you like to add a new ingredient?")) {
var input2 = prompt(" Please enter the ingredient you'd like to add:", "NewIngredient");
while (input2 === null || input2.trim() === "") {
  alert("Invalid input. Please enter again.");
  input2 = prompt("Please enter the ingredient you'd like to add:", "NewIngredient");
}
var newItem = input2;
alert(recipe.addIngredient(newItem));}

console.log("Name: " + recipe.Name);
console.log("Final Servings: " + recipe.Servings);
console.log("Final Ingredients: " + recipe.Ingredients);
console.log("Final Chef: " + recipe.Chef);