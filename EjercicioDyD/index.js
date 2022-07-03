const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const imagen_papelera = document.querySelector("#papelera")

let img = document.createElement("img")
img.src = "images.jpg"
let block = document.getElementById("papelera")
block.appendChild(img)


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        //console.log("Drag start")
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar: "+ parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect="move"
        //console.log("Dragging Over")
        //
    })
    seccion.addEventListener("drop", event => {
        console.log("He droppeado el parrafo")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Párrafo id:", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})


imagen_papelera.addEventListener("dragover", event =>{
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
})
imagen_papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})