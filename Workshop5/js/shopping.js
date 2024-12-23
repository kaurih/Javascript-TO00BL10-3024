// EXCERCISE 1

function returnValidateForm(){
    var submission = document.forms["firstForm"]["email"].value;
    var message = document.forms["firstForm"]["comment"].value;
    
    // Email
    if (submission == null || submission == "" || submission.length < 6 || submission.length > 15 || submission.indexOf("@") == -1) {
        alert("Must give a valid email!");
        return false;
    } 
    // kommentti
    else if (message == null || message == "") {
        alert("Please leave a comment!");
        return false;
    } 
    else if (message.length > 50) {
        message = message.substring(0, 50);
        alert("Your message has been trimmed to 50 characters.");
    }

    // validi
    alert("Email: " + submission + "\nMessage: " + message);
} 

//tee C-kohta jos muistat


// EXCERCISE 2

subscriptionType = document.getElementById("type")
years = document.getElementById("years")
cost = document.getElementById("cost")



// EXCERCISE 3






/* *************************************************** */

// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;

    // Add validation here later!

    // Calculate the initial total:
    total = quantity * price;
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {

        total = total - discount;
    }
    total = total + (1.0 * shipping);
    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;