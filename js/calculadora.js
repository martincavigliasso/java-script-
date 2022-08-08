//calculadora funcion

function calcular () {
    let primerNro = parseInt (prompt("Ingresa el primer nro"))
    let segundoNro = parseInt( prompt ("Ingresa el segundo nro"))
    let operador =  prompt ("Selecciona la operacion {+, -, *, /}")
         console.log ( "Resultado", realizarCalculo(primerNro,segundoNro,operador))

}

function realizarCalculo( num1, num2, ope) {
   switch(ope) {
    case "+":
       return num1 + num2
    case "/":
        return num1 / num2
     
    case "*":
        return  num1 * num2

    case "-": 
    
    return num1 - num2
  
    default:
        return "404 Error realice el calculo de nuevo"
     
    
   }  
}
console.log('calculadora');
calcular()

