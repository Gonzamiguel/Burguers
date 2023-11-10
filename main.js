const productos = [
    { 
        id: "dobles",
        titulo: "Burguer House / Doble",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "dobles"
        },
        precio: 2000,
        cantidad:1
    },
    {   id: "dobles",
        titulo: "Cuarto de libra / Doble",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "dobles"
        },
        precio: 1000,
        cantidad:1
    },
    { 
        id: "triples",
        titulo: "Triple Queso / Triple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "triples"
        },
        precio: 1000,
        cantidad:1
    },
    { 
        id: "triples",
        titulo: "Big Mac / Triple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "triples"
        },
        precio: 1000,
        cantidad:1
    },
    { 
        id: "triples",
        titulo: "Torito / Triple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "triples"
        },
        precio: 1000,
        cantidad:1
    },    
    { 
        id: "simples",
        titulo: "American / Simple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            "nombre": "Hamburguesas",
            "id": "simples"
        },
        precio: 1000,
        cantidad:1
    },
    { 
        id: "simples",
        titulo: "Blue Chesee / Simple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "simples"
        },
        precio: 1000,
        cantidad:1
    },
    { 
        id: "simples",
        titulo: "Fantasy / Simple",
        imagen: "../imagenes/hamburguesa-americana-doble-empanada-parrilla-aislada_219193-6641.avif",
        categoria: {
            nombre: "Hamburguesas",
            id: "simples"
        },
        precio: 1000,
        cantidad:1
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".botones-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos (productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach( producto=> {

        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

const productoEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productoEnCarritoLS) {
    productosEnCarrito = productoEnCarritoLS;
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {   
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}




















