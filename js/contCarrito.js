// Traer productos almacenados en el STORAGE
let elementosCarritos = JSON.parse(localStorage.getItem('listaArticulosSeleccionados'))


let carritoOk = document.getElementsByClassName('articulosCarrito')[0];


// Inyectar Productos almacenados
const mostrarProductos = () =>{
    elementosCarritos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('divCarrito')
        div.innerHTML = `
        <div class="card" style="width: 17rem;">
            <img src="${producto.img}" class="card-img-top" alt="${producto.articulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.articulo}</h5>
                <p class="card-text">US$${producto.precio}</p>
                <button class="btn btn-dark remove-btn">X</button>
            </div>
        </div>
        `
        carritoOk.appendChild(div)
    
    
    
        const boton = div.getElementsByClassName('remove-btn')[0]
        boton.addEventListener('click', (e) => {
            eliminarProducto(producto)
            borrarDeLaVista(e)
            actualizarPrecio()
        })
    })
}

if(elementosCarritos == null || elementosCarritos.length == 0){ //Aviso por si el carrito esta vacio
    const div = document.createElement('div')
        div.classList.add('divCarritoVacio')
        div.innerHTML = `
        <div>
            El carrito esta vacio.
        </div>
        `
        carritoOk.appendChild(div)
}else{
    mostrarProductos()
}

//F(x) eliminar productos
const eliminarProducto = (prod) => {
    let index = elementosCarritos.indexOf(prod)
    elementosCarritos.splice(index,1)

    localStorage.setItem('listaArticulosSeleccionados', JSON.stringify(elementosCarritos));
}

function borrarDeLaVista(e) {
    btn = e.target
    btn.parentElement.parentElement.remove()
}




// actualizar precio total
let precioTotal = document.getElementsByClassName('precioTotal')[0]

const actualizarPrecio = () =>{
    let precioSumado = elementosCarritos.reduce((valorFinal,elem)=>{
        return valorFinal + elem.precio
    },0)
    precioTotal.innerHTML = precioSumado
}
actualizarPrecio()