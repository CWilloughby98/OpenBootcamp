/*- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const hoy = new Date(2022, 06, 21)
console.log(hoy)

const cumple = new Date(1998, 02, 12)
console.log(cumple)

const comparar = hoy.getTime()>cumple.getTime()
console.log(comparar)

const dia = cumple.getDate()
console.log(dia)

const mes = cumple.getMonth()
console.log(mes)

const año = cumple.getFullYear()
console.log(año)