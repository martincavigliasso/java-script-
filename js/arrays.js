const IVA =1.21
const productos = ['aceitunas' , 'salsas' , 'masitas' , 'harinas' , 'aceites']
//                     0           1            2           3             4


const carrito = []

function listaCiudades(){
    //debugger
    toal = parseInt (prompt("ingresa un nro."))
    if (productos.length < total)
    for(let i = 0; i < total; i++){
        console.log(productos[i])
    }
} 

function agregarProductos(){
    let nuevoProductos = prompt("ingresa el nuevo producto:")
     productos.push(nuevoProducto)
} 

function quitarPoductos () {

}

function quitarPoductos(){
    let aQuitar =  parseInt(prompt ("ingrese el ID del producto a quitar"))
    let resultado = paises.splice (aQuitar, 3)
    console.warn ("se elimino el producto:", resultado)
}
