const miNombre = "Charlie"
const miApellido = "Willoughby"

const date = Date.now(+120000)

const yo = {
    nombre: miNombre,
    apellido: miApellido
}

sessionStorage.setItem("ObjetoSession", yo)
console.log(sessionStorage.getItem("ObjetoSession"))

localStorage.setItem("ObjetoLocal", yo)
console.log(localStorage.getItem("ObjetoLocal"))

const now = new Date()
document.cookie = `yo=${JSON.stringify(yo)}: expires=${new Date(now.getTime() + 2 * 60000)}`