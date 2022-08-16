//Array
let arrayProductos = [
    {id:1, tipo:'celular', marca: 'google', articulo:'Google Pixel 6A', precio:'450', img:'assets/img/celulares/googlePixel6A.webp'},
    {id:2, tipo:'celular', marca: 'google', articulo:'Google Pixel 6 Pro', precio:'800', img:'assets/img/celulares/googlePixel6Pro.jpg'},
    {id:3, tipo:'celular', marca: 'huawei', articulo:'Huawei P40', precio:'520', img:'assets/img/celulares/huaweiP40.jpg'},
    {id:4, tipo:'celular', marca: 'huawei', articulo:'Huawei P50', precio:'850', img:'assets/img/celulares/huaweiP50.webp'},
    {id:5, tipo:'celular', marca: 'iphone', articulo:'Iphone 13', precio:'830', img:'assets/img/celulares/iphone13.jpg'},
    {id:6, tipo:'celular', marca: 'iphone', articulo:'Iphone 13 Pro Max', precio:'1250', img:'assets/img/celulares/iphone13ProMax.jpg'},
    {id:7, tipo:'celular', marca: 'nothing', articulo:'Nothing Phone 1', precio:'470', img:'assets/img/celulares/nothingPhone1.webp'},
    {id:8, tipo:'celular', marca: 'oneplus', articulo:'OnePlus 9 Pro', precio:'670', img:'assets/img/celulares/onePlus9Pro.jpg'},
    {id:9, tipo:'celular', marca: 'oneplus', articulo:'OnePlus 10 Pro', precio:'1000', img:'assets/img/celulares/onePlus10Pro.jpg'},
    {id:10, tipo:'celular', marca: 'samsung', articulo:'Samsung S22', precio:'690', img:'assets/img/celulares/samsungS22.jpg'},
    {id:11, tipo:'celular', marca: 'samsung', articulo:'Samsung S22 Plus', precio:'995', img:'assets/img/celulares/samsungS22Plus.png'},
    {id:12, tipo:'celular', marca: 'samsung', articulo:'Samsung S22 Ultra', precio:'1200', img:'assets/img/celulares/samsungS22Ultra.jpg'},
    {id:13, tipo:'celular', marca: 'xiaomi', articulo:'Xiaomi Mi 11', precio:'730', img:'assets/img/celulares/xiaomiMi11.jpg'},
    {id:14, tipo:'celular', marca: 'xiaomi', articulo:'Xiaomi Mi 11 Ultra', precio:'1200', img:'assets/img/celulares/xiaomiMi11Ultra.jpeg'}
]

// Inyectar HTML
let contenedorDeArticulos = document.querySelector('#articulos');

arrayProductos.forEach((producto)=>{
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML =`
    <div id="${producto.id}" class="card ${producto.marca} mb-4" style="width: 16rem;">
        <img src="${producto.img}" class="card-img-top img" alt="${producto.articulo}">
        <div class="card-body d-flex flex-column align-content-center justify-content-center">
            <h5 class="articulo">${producto.articulo}</h5>
            <p class="precio">US$${producto.precio}</p>
            <button id="agregar${producto.id}" class="add-to-cart">Agregar al carrito</button>
        </div>
    </div>
    `

    contenedorDeArticulos.appendChild(div)

    const boton = div.getElementsByClassName('add-to-cart')[0]
        
    boton.addEventListener('click', ()=>{
        seleccionarArticulos(producto);
    })

})

//-----------------------------------------------------------------------------------------------------------------

const seleccionarArticulos = (prod) => {
    if(localStorage.getItem('listaArticulosSeleccionados') == null){
        const articulosSeleccionados = [];
        articulosSeleccionados.push(prod);
        localStorage.setItem('listaArticulosSeleccionados', JSON.stringify(articulosSeleccionados));
    }else{
        const listaNueva = JSON.parse(localStorage.getItem('listaArticulosSeleccionados'));
        listaNueva.push(prod);
        localStorage.setItem('listaArticulosSeleccionados', JSON.stringify(listaNueva));
    }
}