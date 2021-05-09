var express = require('express'); //Funcion que tiene las funciones de express
var app = express();

// parser application
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(3000, function(){
    console.log("Firts api running on port 3000!");
});

var ingredients = [
    {
        "id":"23433",
        "text": "Eggs!!"
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

app.get('/ingredients',function(request ,response){
    response.send(ingredients);
});

//POST
app.post('/ingredients',function(request, response){
    var ingredient = request.body;

    for(var i = 0; i< ingredients.length; i++){
        var ing = ingredients[i];

        if(ingredient.id === ing.id){
            response.status(500).send({
                error: "These id already exists"
            });
            break;
        }
    }

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

//PUT -> UPGRADE ELEMENTS
app.put('/ingredients/:ingredientId', function(request, response){

    //obtain id fron json
    //var ingredientsId = request.params.ingredientsId;
    var newText = request.body.text;

    if(!newText || newText === ""){
        response.status(500).send({error: "Yoy must provide ingredient text"});
    }else
    {
        var objectFound = false;
        for(var x = 0; ingredients.length; x++){
            var ing = ingredients[x];
    
            if(ing.id === request.params.ingredientId){
                objectFound = true;
                ingredients[x].text = newText;
                break;
            }
    
        }
        if(!objectFound){
            response.status(500).send({
                error: "Ingredient id no found!"
            });
        }else{
            response.send(ingredients);
        }
    }
 
});


app.delete('/ingredients/:ingredientId', function(request, response){

    for(var x = 0; x < ingredients.length; x++){
        var ing = ingredients[x];

        if(ing.id === request.params.ingredientId){
            ingredients[x].text = "";
            ingredients[x].id = "";
            response.send(ingredients);
            
        }else{
            response.status(500).send({error: "Id not found!"});
        }

    }
 
});