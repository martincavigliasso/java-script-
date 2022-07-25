debugger
// tres parametros : desde ; hasta ; actualizacion 
/*
    i++
    i += 1
    i = i + 1 
*/
for (let i = 0; i < 25; i++ ) {
    console.log ("Iteracion Nro.", i )
 }

//argentina, uruguay, brasil, chile , colombia, mexico 


//ciclo de iteracion dinamico 

let limite = parseInt(prompt("ingresa un numero:") )


for (let i = 0; i < limite; i++ ) {
    console.log ("Iteracion Nro.", i )
    if ( i=== 8 ) {
        break
    } 
}

//uso de wile 
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




