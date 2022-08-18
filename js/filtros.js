let celularesfiltrados = 0;


function filtrarProductos(e) {
    celularesfiltrados = arrayProductos.filter(producto => producto.marca == e.target.innerText)
    cargarProductos(celularesfiltrados)
}



let filtroGoogle = document.querySelector('.filtroGoogle')
let filtroHuawei = document.querySelector('.filtroHuawei')
let filtroApple = document.querySelector('.filtroApple')
let filtroNothing = document.querySelector('.filtroNothing')
let filtroOnePlus = document.querySelector('.filtroOnePlus')
let filtroSamsung = document.querySelector('.filtroSamsung')
let filtroXiaomi = document.querySelector('.filtroXiaomi')
let sinFiltro = document.querySelector('.sinFiltro')


filtroGoogle.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroHuawei.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroApple.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroNothing.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroOnePlus.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroSamsung.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
filtroXiaomi.addEventListener('click', (e)=>{
    filtrarProductos(e)
})
sinFiltro.addEventListener('click', (e) => {
    cargarProductos(arrayProductos)
})










