//How to write functions in js

var areas = [];

function area(len, wid){
    return len * wid;
}

var area1 = area(10,15);
var area2 = area(10,25);
var area3 = area(10,45);

areas.push(area1);
areas.push(area2);
areas.push(area3);

console.log(areas);



var bankBalance = 1000;

function makeTransactions(priceOfSale){

    if(priceOfSale <= bankBalance){
        bankBalance -=priceOfSale;
        console.log("Purchase successful!");
        console.log("Before, your actual balance is: "+ bankBalance);
    }else{
        console.log("Insufficient Funds :(");
    }
}

console.log("Your actual bank balance is: "+ bankBalance);
makeTransactions(79.00);
makeTransactions(1022);


//Another ways to create a functions is


var transactions = function(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -=priceOfSale;
        console.log("Purchase successful!");
        console.log("Before, your actual balance is: "+ bankBalance);
    }else{
        console.log("Insufficient Funds :(");
    }
}

transactions(900);


var printCustomerName = function(firts, last){
    console.log("Firts name is: "+ firts + " Last name is: "+ last);
}

printCustomerName("Oliver", "Mendez");
3