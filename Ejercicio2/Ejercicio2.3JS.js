//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


let n = 10;
let total = 10;
let i = 9

while(true){
    if (i===1){
        break;
    }
    total=total*i;
    i--;
}

//console.log(total);

let j = 2;
let resultado = 10;

while(true){
    if (j===10){
        break;
    }
    resultado=resultado*j;
    j++;
}

console.log(resultado);