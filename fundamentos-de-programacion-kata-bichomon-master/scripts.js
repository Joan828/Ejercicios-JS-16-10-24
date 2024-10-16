console.log(document.title);
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").innerText = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const color = document.querySelector(".infocard-list")
color.style.background = 'red';
//console.log(document.getElementsByClassName("infocard-list").style.background = "red");


// 3. Imprime por consola la URL de la página.
const url = document.URL
console.log(url);

// 4. Imprime por consola el dominio de la página.
const dominio = document.domain
console.log(dominio);

// 5. Imprime todos los nodos de imagen.
const nodosImgs = document.querySelectorAll("img")
console.log(nodosImgs)
// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for(let x of nodosImgs){
    x.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

// *Premium:*
// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const colores = document.querySelectorAll(".infocard-lg-data.text-muted")
for(let x of colores){
    if(x.lastElementChild.lastElementChild.getAttribute("class") == "itype flying"){
        x.style.background = 'blue';
    }
}//Este me ha costado un poquito más
