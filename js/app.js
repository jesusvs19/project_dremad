const carrito = document.getElementById('carrito');
const catalogos = document.getElementById('lista-catalogo');
const listaCatalogos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
     catalogos.addEventListener('click', comprarCatalogo);
     carrito.addEventListener('click', eliminarCatalogo);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


function comprarCatalogo(e) {
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
          const catalogo = e.target.parentElement.parentElement;
          leerDatosCatalogo(catalogo);
     }
}


function leerDatosCatalogo(catalogo) {
     const infoCatalogo = {
          imagen: catalogo.querySelector('img').src,
          titulo: catalogo.querySelector('h4').textContent,
          precio: catalogo.querySelector('.precio span').textContent,
          id: catalogo.querySelector('a').getAttribute('data-id')
     }
     insertarCarrito(infoCatalogo);
}

function insertarCarrito(catalogo) {
     const row = document.createElement('tr');
     row.innerHTML = `
          <td>
               <img src="${catalogo.imagen}" width=100>
          </td>
          <td>${catalogo.titulo}</td>
          <td>${catalogo.precio}</td>
          <td>
               <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
          </td>
     `; 
     listaCatalogos.appendChild(row);
     guardarCatalogoLocalStorage(catalogo);
}

function eliminarCatalogo(e) {
     e.preventDefault();

     let catalogo,
          catalogoId;

     if(e.target.classList.contains('borrar-catalogo')){
          e.target.parentElement.parentElement.remove();
          catalogo = e.target.parentElement.parentElement;
          catalogoId = catalogo.querySelector('a').getAttribute('data-id');
     }

     eliminarCatalogoLocalStorage(catalogoId);
}


function vaciarCarrito() {
     while(listaCatalogos.firstChild) {
          listaCatalogos.removeChild(listaCatalogos.firstChild);
     }

     vaciarLocalStorage();

     return false;
}


function guardarCatalogoLocalStorage(catalogo) {
     let catalogos;

     catalogos = obtenerCatalogosLocalStorage();

     catalogos.push(catalogo);

     localStorage.setItem('catalogos', JSON.stringify(catalogos));
}


function obtenerCatalogosLocalStorage() {
     let catalogosLS;

     if(localStorage.getItem('catalogos') === null){
          catalogosLS = [];
     }else {
          catalogosLS = JSON.parse(localStorage.getItem('catalogos'));
     }
     return catalogosLS
}


function leerLocalStorage() {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogo){

          const row = document.createElement('tr');
          row.innerHTML = `
               <td>
                    <img src="${catalogo.imagen}" width=100>
               </td>
               <td>${catalogo.titulo}</td>
               <td>${catalogo.precio}</td>
               <td>
                    <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
               </td>
          `;
          listaCatalogos.appendChild(row);

     });
}


function eliminarCatalogoLocalStorage(catalogo) {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogosLS, index){
          if(catalogosLS.id === catalogo) {
               catalogosLS.splice(index, 1);
          }
     });

     localStorage.setItem('catalogos', JSON.stringify(catalogosLS));

}

function vaciarLocalStorage() {
     localStorage.clear();
}

function acc1(){
     window.location.href="a-accesorios/a-1.html";
}

function acc2(){
     window.location.href="a-accesorios/a-2.html";
}

function acc3(){
     window.location.href="a-accesorios/a-3.html";
}

function acc4(){
     window.location.href="a-accesorios/a-4.html";
}

function acc5(){
     window.location.href="a-accesorios/a-5.html";
}

function acc6(){
     window.location.href="a-accesorios/a-6.html";
}

function acc7(){
     window.location.href="a-accesorios/a-7.html";
}

function acc8(){
     window.location.href="a-accesorios/a-8.html";
}

function acc9(){
     window.location.href="a-accesorios/a-9.html";
}

function acc10(){
     window.location.href="a-accesorios/a-10.html";
}

function acc11(){
     window.location.href="a-accesorios/a-11.html";
}

function acc12(){
     window.location.href="a-accesorios/a-12.html";
}

function acc13(){
     window.location.href="a-accesorios/a-13.html";
}

function acc14(){
     window.location.href="a-accesorios/a-14.html";
}

function acc15(){
     window.location.href="a-accesorios/a-15.html";
}

function cons1(){
     window.location.href="a-consolas/c-1.html";
}

function cons2(){
     window.location.href="a-consolas/c-2.html";
}
function cons3(){
     window.location.href="a-consolas/c-3.html";
}
function cons4(){
     window.location.href="a-consolas/c-4.html";
}
function cons5(){
     window.location.href="a-consolas/c-5.html";
}
function cons6(){
     window.location.href="a-consolas/c-6.html";
}
function cons7(){
     window.location.href="a-consolas/c-7.html";
}
function cons8(){
     window.location.href="a-consolas/c-8.html";
}
function cons9(){
     window.location.href="a-consolas/c-9.html";
}

function cons10(){
     window.location.href="a-consolas/c-10.html";
}

function cons11(){
     window.location.href="a-consolas/c-11.html";
}

function cons12(){
     window.location.href="a-consolas/c-12.html";
}


function juego1(){
     window.location.href="a-videojuegos/v-1.html";
}

function juego2(){
     window.location.href="a-videojuegos/v-2.html";
}

function juego3(){
     window.location.href="a-videojuegos/v-3.html";
}

function juego4(){
     window.location.href="a-videojuegos/v-4.html";
}

function juego5(){
     window.location.href="a-videojuegos/v-5.html";
}

function juego6(){
     window.location.href="a-videojuegos/v-6.html";
}

function juego7(){
     window.location.href="a-videojuegos/v-7.html";
}

function juego8(){
     window.location.href="a-videojuegos/v-8.html";
}

function juego9(){
     window.location.href="a-videojuegos/v-9.html";
}

function juego10(){
     window.location.href="a-videojuegos/v-10.html";
}

function juego11(){
     window.location.href="a-videojuegos/v-11.html";
}

function juego12(){
     window.location.href="a-videojuegos/v-12.html";
}

function juego13(){
     window.location.href="a-videojuegos/v-13.html";
}

function juego14(){
     window.location.href="a-videojuegos/v-14.html";
}

function juego15(){
     window.location.href="a-videojuegos/v-15.html";
}




