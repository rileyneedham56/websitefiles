var order = function() {

    var pizzas = prompt("Please enter your full order.");
    
    var address = prompt("Please enter your full address.");
    
    confirm("Your order is on it's way. " + pizzas + " is being delivered to " + address +".");
    
}

var pizzas = function() {

    confirm("Our pizzas include: Cheese, Pepperoni, Hamburger, Canadian Bacon, and Custom. Our sizes are small (10in.), medium (15in.), and large (20in.).");

}

var aboutUs = function() {

    confirm("Homeslice is a small pizza company with only a few locations in Texas. We make our pizza from fresh ingrediants brought in daily and make the pizza when you order it, so it is as fresh as possible. You can come to one of our locations and have it made infront of you or you can order it from our website and have it delivered straight to your doorstep.");

}

var locations = function() {

    confirm("We have five total locations around Texas. We have one in Dallas, Fort Worth, Houston, San Antonio, and Austin.")

}

$(document).ready(function(){}