let nombre= "Charlie"
let apellido= "\"Willoughby\""

let estudiante=`   ${nombre}    ${apellido}   `
console.log(estudiante)

let estudianteMayus= estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus= estudiante.toLowerCase()
console.log(estudianteMinus)

let numChar= estudiante.length
console.log(numChar)

let firstCharName= nombre[0]
console.log(firstCharName)

let lastCharSurname= apellido[9]
console.log(lastCharSurname)

let trimmed= estudiante.trim()
console.log(trimmed)
console.log(trimmed.length)

console.log("Estoy usando comillas simples")

//Para instalar dependencias de desarrollo en Terminal: npm i -D eslint
//Para la configuración: npm init @eslint/config
//Implementar script "lint-fix": "eslint --fix ."/"eslint --fix --ext .js, .jsx ."