var myAccountBalance = 80;
var nikeShoes = 100;

var coupon = 100;
var aplyCoupon = "INEED100";

if (nikeShoes <= myAccountBalance){
    console.log("i can buy this!");
    console.log(" Do you want to but this shoes? ");
    var decition = prompt(" Yes/Not");

    if(decition == "Yes"){
        myAccountBalance -= nikeShoes;
        console.log("Congratulations! You buyed a new shoes!");
        console.log("Your new account balance is: "+ myAccountBalance);
    }else if(decition == "Not"){
        console.log("Okey! your account balace still "+ myAccountBalance);
    }

}else{
    console.log(" You dont have enough money to buy this shoes! ");

    console.log("Do need a coupon, we have one for you: use the code: INEED100 to add US$"+ coupon+ ".0 to your account balance, do you want? ");

    var couponDecition = prompt("Inserte el copon aqui: ");

    if(couponDecition === aplyCoupon){
        myAccountBalance+=coupon;
        console.log("Your new account balance is: "+ myAccountBalance);
    }else{
        console.log("Ese no es el cupon mmg! bye");
    }
    
}


