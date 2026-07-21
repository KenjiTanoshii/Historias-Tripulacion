const pages = [

// PÁGINA 0 - INTRODUCCIÓN
{
image:"https://i.gyazo.com/a3b4b0da6d7b7e43235ff2888a9476f0.png",

content:`
<div class="page-layout">
    <div class="intro-page">
        <h1>Historias</h1>
        <p>Cada miembro de esta tripulación tiene una historia que contar.</p>
        <p>Historias de cómo llegaron a formar parte de esta maldita familia de derrotados, villanos y proscritos.</p>
        <p style="margin-top: 40px; font-style: italic; font-size: 1.1rem;">Pasa la página y descubre sus orígenes...</p>
    </div>
</div>
`
},

// PÁGINA 1 - PERSONAJE 1
{
image:"https://i.gyazo.com/34afa795b99821c6c9a6566fddc8f9e1.png",

content:`
<div class="page-layout">
    <div class="character-page">
        <h1>Nombre del Personaje</h1>
        <h2>Rol en la tripulación</h2>
        <p>
            Aquí va la historia de cómo este personaje se unió a la tripulación. Cuenta los eventos que lo llevaron a convertirse en un villano, sus motivaciones, sus secretos oscuros...
        </p>
        <p>
            Continúa con más detalles sobre su pasado, sus traumas, sus razones para luchar junto a los demás derrotados.
        </p>
        <div class="character-info">
            <b>Apodo:</b> [Tu apodo aquí]<br>
            <b>Edad:</b> [Edad aquí]<br>
            <b>Origen:</b> [Lugar de origen]
        </div>
    </div>
</div>
`
},

// PÁGINA 2 - PERSONAJE 2
{
image:"https://i.gyazo.com/34afa795b99821c6c9a6566fddc8f9e1.png",

content:`
<div class="page-layout">
    <div class="character-page">
        <h1>Nombre del Personaje</h1>
        <h2>Rol en la tripulación</h2>
        <p>
            Historia del segundo personaje. Describe cómo esta persona fue derrotada, traicionada o rechazada por el mundo.
        </p>
        <p>
            Explora sus motivaciones, sus habilidades, por qué es considerado un villano en la historia oficial.
        </p>
        <div class="character-info">
            <b>Apodo:</b> [Tu apodo aquí]<br>
            <b>Edad:</b> [Edad aquí]<br>
            <b>Origen:</b> [Lugar de origen]
        </div>
    </div>
</div>
`
},

// PÁGINA 3 - PERSONAJE 3
{
image:"https://i.gyazo.com/34afa795b99821c6c9a6566fddc8f9e1.png",

content:`
<div class="page-layout">
    <div class="character-page">
        <h1>Nombre del Personaje</h1>
        <h2>Rol en la tripulación</h2>
        <p>
            Historia del tercer miembro. Cada personaje tiene su propia tragedia, su propia razón para haber sido etiquetado como villano.
        </p>
        <p>
            Aquí puedes expandir tanto como necesites. El scroll funcionará automáticamente para historias largas.
        </p>
        <div class="character-info">
            <b>Apodo:</b> [Tu apodo aquí]<br>
            <b>Edad:</b> [Edad aquí]<br>
            <b>Origen:</b> [Lugar de origen]
        </div>
    </div>
</div>
`
},

// PÁGINA 4 - PERSONAJE 4
{
image:"https://i.gyazo.com/34afa795b99821c6c9a6566fddc8f9e1.png",

content:`
<div class="page-layout">
    <div class="character-page">
        <h1>Nombre del Personaje</h1>
        <h2>Rol en la tripulación</h2>
        <p>
            La historia del cuarto personaje. ¿Cómo llegó aquí? ¿Qué lo hizo unirse a los demás derrotados?
        </p>
        <p>
            Continúa relatando su viaje, sus luchas internas, lo que lo define como un villano en los ojos del mundo.
        </p>
        <div class="character-info">
            <b>Apodo:</b> [Tu apodo aquí]<br>
            <b>Edad:</b> [Edad aquí]<br>
            <b>Origen:</b> [Lugar de origen]
        </div>
    </div>
</div>
`
},

// PÁGINA 5 - PERSONAJE 5
{
image:"https://i.gyazo.com/34afa795b99821c6c9a6566fddc8f9e1.png",

content:`
<div class="page-layout">
    <div class="character-page">
        <h1>Nombre del Personaje</h1>
        <h2>Rol en la tripulación</h2>
        <p>
            La historia del quinto miembro de la tripulación. Cada personaje es un capítulo en la saga de los derrotados.
        </p>
        <p>
            Expande su narrativa, sus conflictos, sus razones para creer que aún hay esperanza a pesar de todo.
        </p>
        <div class="character-info">
            <b>Apodo:</b> [Tu apodo aquí]<br>
            <b>Edad:</b> [Edad aquí]<br>
            <b>Origen:</b> [Lugar de origen]
        </div>
    </div>
</div>
`
}

];

let current = 0;

const page = document.getElementById("page");
const pageContent = document.getElementById("pageContent");
const pageFlip = document.getElementById("pageFlip");
const cover = document.getElementById("cover");
const book = document.getElementById("book");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const currentPageSpan = document.getElementById("currentPage");
const totalPagesSpan = document.getElementById("totalPages");

/* ==========================
   RENDER
========================== */

function renderPage(){

page.style.backgroundImage = `url("${pages[current].image}")`;
pageContent.innerHTML = pages[current].content;
currentPageSpan.textContent = current + 1;

}

/* ==========================
   INICIALIZAR
========================== */

function init(){
const totalPages = pages.length;
totalPagesSpan.textContent = totalPages;
renderPage();
}

/* ==========================
   ABRIR LIBRO
========================== */

cover.addEventListener("click",()=>{

if(cover.classList.contains("open")) return;

cover.classList.add("open");

setTimeout(()=>{

book.classList.add("visible");

},700);

});

/* ==========================
   VOLVER A PORTADA
========================== */

function goToCover(){

book.classList.remove("visible");
cover.classList.remove("open");

pageContent.style.opacity = "0";

setTimeout(()=>{

current = 0;
renderPage();
pageContent.style.opacity = "1";

},1600);

}

/* ==========================
   ANIMACIÓN DE PÁGINA
========================== */

function animatePageTurn(nextIndex){

if(nextIndex < 0) return;
if(nextIndex >= pages.length) return;

pageFlip.classList.add("flipping");

setTimeout(()=>{

current = nextIndex;
renderPage();

},700);

setTimeout(()=>{

pageFlip.classList.remove("flipping");

},1400);

}

/* ==========================
   CIERRE CON ANIMACIÓN
========================== */

function animateCloseBook(){

pageFlip.classList.add("flipping");

setTimeout(()=>{

goToCover();

},700);

setTimeout(()=>{

pageFlip.classList.remove("flipping");

},1400);

}

/* ==========================
   SIGUIENTE
========================== */

nextBtn.addEventListener("click",()=>{

if(current < pages.length - 1){

animatePageTurn(current + 1);

}
else{

animateCloseBook();

}

});

/* ==========================
   ANTERIOR
========================== */

prevBtn.addEventListener("click",()=>{

if(current > 0){

animatePageTurn(current - 1);

}
else{

goToCover();

}

});

/* ==========================
   TECLADO
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key === "ArrowRight"){

if(current < pages.length - 1){

animatePageTurn(current + 1);

}
else{

animateCloseBook();

}

}

if(e.key === "ArrowLeft"){

if(current > 0){

animatePageTurn(current - 1);

}
else{

goToCover();

}

}

});

/* ==========================
   INICIO
========================== */

init();