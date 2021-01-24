import validator from './validator.js';

/*console.log(validator);*/
  
document.getElementById("pay").addEventListener("click", validarCard); 


function validarCard(event){
    document.querySelector(".secondContainer").style.display = "block";
    document.querySelector(".firstContainer").style.display = "none";


    event.preventDefault();
    var userNumInput = document.getElementById("cardNumber").value;
    let tarjetaValida = validator.isValid(userNumInput);
    let enmascarado = validator.maskify(userNumInput); 
    

    if (tarjetaValida == true){
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado + " es válida";
    }
    else {
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado + " es inválida";

    }

}

