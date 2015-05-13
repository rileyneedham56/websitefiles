var order = function() {

    var pizzas = prompt("Please enter your full order.");
    
    var address = prompt("Please enter your full address.");
    
    confirm("Your order is on it's way. " + pizzas + " is being delivered to " + address +".");
    
}

var pizzas = function() {

    confirm("Here at Galaxy Pizza we have Cheese and Pepperoni pizzas pre-made that we keep hot and ready for you to order. We also make pizzas with any topings you like, but it will take some time as we have to make it after you order it. Our sizes are small (10in.), medium (15in.), and large (20in.).");
    
}

var aboutUs = function() {

    confirm("Galaxy Pizza is a small pizza company with a few locations in Texas. We make our pizza from fresh ingrediants brought in daily and make the pizza right when you order so it is as fresh as possible. You can come to one of our locations and have it made infront of you or you can order it from our website and have it delivered straight to your doorstep.");

}

var locations = function() {

    confirm("We have three total locations around Texas. We have one in Dallas, Austin, and Fort Worth.")

}

var nothingHere = function() {

    alert("There is nothing here yet. Do not panic.");

}