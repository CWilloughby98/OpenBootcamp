/*- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const yo = {
    nombre: "Charlie",
    apellido: "Willoughby",
    edad: 24,
    altura: 1.82,
    eresDesarrollador: false
}

let getEdad = "edad"
console.log(yo[getEdad])

const listaAmigos = [
    {nombre:"Mati",apellido:"Patino",edad:23,altura:1.80,eresDesarrollador: false},
    yo,
    {nombre:"Ivan",apellido:"Martinez",edad:25,altura:1.90,eresDesarrollador: true}
]

listaAmigos.sort((a, b)=>b.edad-a.edad)
console.log(listaAmigos)