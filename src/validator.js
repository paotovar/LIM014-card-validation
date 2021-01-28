const validator = {  
  isValid: function (creditCardNumber) {
    let stringInvertido = creditCardNumber.split("").reverse().join("");
  
    let validador;
    let sumaTotal = 0;
    let sumaDigitos = 0;
    
   /*let te permite declarar variables limitando su alcance (scope) al bloque,
    declaración, o expresión donde se está usando.a diferencia de la palabra
     clave var la cual define una variable global o local en una función sin 
     importar el ámbito del bloque.*/
    

    for (let i = 1; i < stringInvertido.length; i += 2) {
      
      let numeroPar = parseInt(stringInvertido.charAt(i) * 2);
      

      if (numeroPar >= 10) {
        let numeroString = numeroPar.toString(); //'10'
        sumaDigitos =
          parseInt(numeroString.charAt(0)) + parseInt(numeroString.charAt(1));
        

        sumaTotal = sumaTotal + sumaDigitos;
        
      } else {
        sumaTotal = sumaTotal + numeroPar;
      }
    }

    for (let i = 0; i < stringInvertido.length; i += 2) {
     
      let numero = parseInt(stringInvertido.charAt(i));

      sumaTotal = sumaTotal + numero;
     
    }

    
    

    if (sumaTotal % 10 == 0) {
      validador = true;
    } else {
      validador = false;
    }
    return validador;
  },

  maskify: function (creditCardNumber) {
   
    let stringResult = "";

    for (let i = 0; i < creditCardNumber.length - 4; i++) {
     
      stringResult = stringResult + "#";
    }

    return (
      stringResult +
      creditCardNumber.substring(
        creditCardNumber.length - 4,
        creditCardNumber.length
      )
    );
  },
};

export default validator;


