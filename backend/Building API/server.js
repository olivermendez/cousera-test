var express = require('express'); //express es la funcion que tiene las funciones de express

var app = express();

app.get('/',function(request ,response){
    response.send('My Firts API');
});

app.listen(3000, function(){
    console.log("Firts api running on port 3000!");
});