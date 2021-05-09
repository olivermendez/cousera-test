var express = require('express'); //Funcion que tiene las funciones de express
var app = express();

// parser application
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

var ingredients = [
    {
        "id":"23433",
        "text": "Eggs"
    },
    {
        "id":"23333",
        "text": "Bacon" 
    },
    {
        "id":"23465",
        "text": "Bacalao" 
    }

];

app.get('/',function(request ,response){
    response.send(ingredients);
});


app.post('/',function(request, response){
    var ingredient = request.body;
    if(!ingredient || ingredient.text === ""){
        response.status(500).send({
            error: "Your ingredient must have text"
        });

    } else 
    {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});


app.listen(3000, function(){
    console.log("Firts api running on port 3000!");
});