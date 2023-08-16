class Producto{
    constructor(id,nombre, precio, img, descripcion, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.img= img
        this.descripcion=descripcion
    }

    aumentarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }

    descripcion(){
        return  "id: " + this.id+
                "\nnombre: " + this.nombre+
                "\nprecio: " + this.precio
    }

    descripcionDeCompra(){
        return  "nombre: " + this.nombre+
                "\nprecio: " + this.precio+
                "\ncantidad: "+ this.cantidad
    }
}

class ControladorProductos{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    buscarProductoPorID(id){
        return this.listaProductos.find(producto => producto.id == id)
    }

    mostrarProductos(){
        const contenedor_productos= document.getElementsByClassName("contenedor-tarjetas")
        this.listaProductos.forEach( producto => {
            contenedor_productos+=
        })
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto,cantidad){
        let existe = this.listaCarrito.some( el => el.id == producto.id)
        if(existe){
            producto.aumentarCantidad(cantidad)
        }else{
            producto.aumentarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }
    }

    mostrarProductos(){
        let listaEnTexto = "Carrito de compras:\n"
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra() + "\n--------------\n"
            //console.log(producto.descripcionDeCompra())
        })
        alert(listaEnTexto)
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad ,0)
    }

    calcularIVA(){
        return this.calcularTotal() * 1.21
    }
}

const Controlador = new ControladorProductos()
const CARRITO = new Carrito()

Controlador.agregar(new Producto(1, "jabon", 100, 0))
Controlador.agregar(new Producto(2, "Blue label", 1500, 0))
Controlador.agregar(new Producto(3, "Jamon", 300, 0))
Controlador.agregar(new Producto(4, "Doritos", 250, 0))

let rta
/*
do{
    Controlador.mostrarProductos()
    let opcion = Number(prompt("Ingrese el id del producto que desea agregar"))
    let producto = Controlador.buscarProductoPorID(opcion)
    let cantidad = Number(prompt("Ingrese cuantas unidades quiere del producto"))
    CARRITO.agregar(producto,cantidad)
    alert("El producto fué añadido al carrito: ")
    CARRITO.mostrarProductos()

    rta = prompt("Ingrese 'ESC' para salir").toUpperCase()
}while(rta != "ESC")

alert("El total de su compra con IVA incluido es de: "+ CARRITO.calcularIVA())
*/