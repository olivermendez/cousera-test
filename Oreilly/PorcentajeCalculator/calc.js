var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var results = document.getElementById("results");
var form = document.getElementById('formCalculador');

//testing
//num1.value = "TEST";
//num2.value = "TEST2";
//results.innerText = "RESULTS!!!";

form.addEventListener('submit',function(NoBorrarDatosAlCalcular){
    //alert("YEA!");

    if(!num1.value || !num2.value){
        alert("Please enter values in the fields!");
    }else
    {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var result = x / y;
        var percent = result * 100;
        results.innerText = percent;
        NoBorrarDatosAlCalcular.preventDefault();
    }

});
