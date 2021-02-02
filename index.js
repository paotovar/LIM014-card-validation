import validator from './validator.js';

/*console.log(validator);*/


document.getElementById("pay").addEventListener("click", validarCard); 
function validarCard(event){
    event.preventDefault();
    const userNumInput = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cardCode = document.getElementById("cardCode").value;
    const name = document.getElementById("name").value;
    
    
    if ((userNumInput == "") || (expiry== "") ||(cardCode == "")||(name == "") ) {  
        alert("Los campos no pueden quedar vacios");
        return false;
    }
    document.querySelector(".firstContainer").style.display = "none"; 
    document.querySelector(".secondContainer").style.display = "block";
    
    /*document.getElementById("firstContainer").style.display = "none"; 
    document.getElementById("secondContainer").style.display = "block";*/
    

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

