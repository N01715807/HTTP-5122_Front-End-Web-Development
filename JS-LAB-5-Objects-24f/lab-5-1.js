//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = 
{
  name: "liPengcheng",
  age: 25,
  city: "saskatoon",
  hobby: "code",
  info: function() {
    alert("Who is " + this.name + "? It is me, I am from " + this.city + ".");
}
};
console.log(meObject.city);

//alert(" Who is " + meObject.name + " it is me, I am from " + meObject.city + ".");

meObject.info();