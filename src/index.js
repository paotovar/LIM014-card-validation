import validator from './validator.js';

/*console.log(validator);*/


document.getElementById("pay").addEventListener("click", validarCard); 
function validarCard(event){
    event.preventDefault();
    var userNumInput = document.getElementById("cardNumber").value;
    var expiry = document.getElementById("expiry").value;
    var cardCode = document.getElementById("cardCode").value;
    var name = document.getElementById("name").value;
    
    
    if ((userNumInput == "") || (expiry== "") ||(cardCode == "")||(name == "") ) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return false;
    }

    
    document.getElementById("firstContainer").style.display = "none"; 
    document.getElementById("secondContainer").style.display = "block";
    

    let tarjetaValida = validator.isValid(userNumInput);
    let enmascarado = validator.maskify(userNumInput); 
    
   
    if (tarjetaValida == true){
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado 
        + " es válida" + "<br><br>" + "<button id='back' class='back' onclick='location.reload();'>" + "Back" +"</button>";
        
    }
    else {
    
        document.getElementById("secondContainer").innerHTML = "La tarjeta " + enmascarado 
        + " es inválida"+"<br><br a>" + "<button id='back' class='back' onclick='location.reload();'>" + "Back" +"</button>";
         
        

    }

}

