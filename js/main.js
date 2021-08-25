var priceCheese = 2;
var priceTomato = 2;
var priceEgg = 2;
var priceLettuce = 1;
var priceMustard = 0.5;
var priceKetchup = 0.5;
var validCode = ["123", "456", "ABC"];

// Console log utili per controllare i prezzi
console.log("Prezzo Cheese = " + priceCheese + " €");
console.log("Prezzo Tomato = " + priceTomato + " €");
console.log("Prezzo Egg = " + priceEgg + " €");
console.log("Prezzo Lettuce = " + priceLettuce + " €");
console.log("Prezzo Mustard = " + priceMustard + " €");
console.log("Prezzo Ketchup = " + priceKetchup + " €");
console.log("I codici sconto sono: 123, 456, ABC");

function calcBurger() {
   var totalPrice = 0;

   var cheese = document.getElementById("cheese").checked;
   var tomato = document.getElementById("tomato").checked;
   var egg = document.getElementById("egg").checked;
   var lettuce = document.getElementById("lettuce").checked;
   var mustard = document.getElementById("mustard").checked;
   var ketchup = document.getElementById("ketchup").checked;
   var discountCode = document.getElementById("code").value;

   if (cheese == true) {
      totalPrice += priceCheese;
   }
   if (tomato == true) {
      totalPrice += priceTomato;
   }
   if (egg == true) {
      totalPrice += priceEgg;
   }
   if (lettuce == true) {
      totalPrice += priceLettuce;
   }
   if (mustard == true) {
      totalPrice += priceMustard;
   }
   if (ketchup == true) {
      totalPrice += priceKetchup;
   }
   if (validCode.includes(discountCode)) {
      totalPrice = totalPrice - totalPrice * (20 / 100); //Sconto del 20%
   }

   document.getElementById("price").innerHTML = totalPrice.toFixed(2) + "€";

   totalPrice = 0;
}
