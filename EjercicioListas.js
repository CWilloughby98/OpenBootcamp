/*- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const compra = ["Leche", "Huevos", "Cereales", "Platano", "Detergente"]

compra.splice(5, 0, "Aceite de Girasol")
console.log(compra)

compra.splice(5, 1)
console.log(compra)

let jjk0 = new Date("December 24, 2021")
let incep = new Date("August 6, 2010")
let nemo = new Date("November 10, 1003")
let fecha_1 = new Date("January 1, 2010")

const pelis = [
    {nombre:"Jujutsi Kaisen 0", director:"Park Sung-hoo", fecha: jjk0},
    {nombre:"Inception", director:"Christopher Nolan", fecha: incep},
    {nombre:"Buscando a Nemo", director:"Andrew Stanton", fecha: nemo}
]

const oldPelis = pelis.filter(val=>val.fecha<fecha_1)
console.log(oldPelis)


const director = pelis.map((val, indice)=>`${indice+1}|${val.director}`)
console.log(director)

const titulos = pelis.map((val, indice)=>`${indice+1}|${val.nombre}`)
console.log(titulos)

const tYd = titulos.concat(director)
console.log(tYd)

const tYd2 = [...titulos, ...director]
console.log(tYd2)