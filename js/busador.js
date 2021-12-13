


const productos = [
    {nombre:"Mouses",enlace:`<a href="./a-accesorios/a-4.html">Mouse logitec G502</a>`, img:"images/img-accesorios/lg502.png"},
    {nombre:"Audifonos",enlace:`<a href="./a-accesorios/a-1.html">Audifono Ps4</a>`, img:"images/img-accesorios/audifonosP4.png"},
    {nombre:"Audifonos",enlace:`<a href="./a-accesorios/a-7.html">Hyperx Cloud Stinger Core</a>`, img:"images/img-accesorios/hhcs.png"},
    {nombre:"Teclados",enlace:`<a href="./a-accesorios/a-10.html">Teclado Razer</a>`, img:"images/img-accesorios/tecladoRazer.png"},
    {nombre:"Audifonos",enlace:`<a href="./a-accesorios/a-11.html">Audifono Pulse 3D</a>`, img:"images/img-accesorios/audifonosP5.png"},
    {nombre:"Xbox",enlace:`<a href="./a-consolas/c-11.html">Xbox One</a>`, img:"images/img-accesorios/Caja-Xbox-One.jpg"},
    {nombre:"Xbox",enlace:`<a href="./a-consolas/c-10.html">Xbox 360</a>`, img:"images/img-accesorios/xbox360.jpg"},
    {nombre:"Nintendos",enlace:`<a href="./a-consolas/c-9.html">Nintendo Wii</a>`, img:"images/img-accesorios/wiibox.jpg"},
    {nombre:"Playstations",enlace:`<a href="./a-consolas/c-7.html">PS4</a>`, img:"images/img-accesorios/ps4.jpg"},
    {nombre:"Playstations",enlace:`<a href="./a-consolas/c-8.html">PS5</a>`, img:"images/img-accesorios/ps5.jpg"},
    {nombre:"Funko pop",enlace:`<a href="./a-merch/m-8.html">Funko Pop! God of War-Atreus</a>`, img:"images/img-merch/b8.jpg"},
    {nombre:"Fifa 22",enlace:`<a href="./a-videojuegos/v-2.html">FIFA 22</a>`, img:"images/img-juegos/ps5fifa.jpg"},
    {nombre:"Spider-verse",enlace:`<a href="./novedades.html">Spider-Man: Across the Spider-Verse (Part One)</a>`, img:"images/img-novedades/2099.jpg"},
]

const formulario = document.querySelector("#buscador");

const resultado = document.querySelector(".resultado");

const filtrar = ()=>{
    
    resultado.innerHTML ="";
    
    const texto = formulario.value.toLowerCase();

    for(let p of productos){
        let nombre = p.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
           
            resultado.innerHTML+=` 
               <img src=${p.img}>  ${p.enlace}</br >
            `

        }
 
    }
    if(resultado.innerHTML === ""){
            resultado.innerHTML = `
                <a>Producto no encontrado... :(</a>
            `
        }

}

formulario.addEventListener("keyup",filtrar,);
document.addEventListener("click",()=>{
    resultado.innerHTML ="";   
})
