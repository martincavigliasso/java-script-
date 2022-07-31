debugger

for (let i = 0; i < 25; i++ ) {
    console.log ("Iteracion Nro.", i )
 }






let limite = parseInt(prompt("ingresa un numero:") )


for (let i = 0; i < limite; i++ ) {
    console.log ("Iteracion Nro.", i )
    if ( i=== 8 ) {
        break
    } 
}


debugger

let seguimos = true 
let num = parseInt (prompt("ingresa numero"))
let factor = 1

while (seguimos) {
    console.log ("resultado", num * factor)
    seguimos = confirm ("¿Suiguiente multiplicacion?")
    if (seguimos){
        factor++
    }
} 

function visualizarNombreCompleto() {
    console.log ( "dilo", distribuidora)
    
} 

function sumar(num0, num4){
    console.log("resultado" , num0 * num4)
} 

function calcular (){
    let primNro = prompt ("ing el numero.")
    let segNro = prompt ("ing el seg num.")
    let operador = prompt("selecciona el tipo de operacion + - * /")

}

function realizarCalculo (num1, num2, ope) {
    switch (ope) {
        case "+":
        num1 + num2
        case "-":
        num1 - num2
        case "*":
        num1 * num2
        default: 
        return "404 error en calculo."


    }

}



