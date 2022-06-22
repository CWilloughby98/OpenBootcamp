//- Una función sin parámetros que devuelva siempre "true"
//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
//- Una función generadora de índices pares automáticos

function siempre(){
    return true
}
siempre()
console.log(siempre())

////////////////

function promesa () {
    return new Promise(resolve=> {
        setTimeout(()=> {
            resolve(console.log("Hola, soy una promesa"));
        }, 5000);
    });
}
promesa()

////////////////

function* index(){
    let i = 0;
    while (true) {
        i = i + 2;
        if(i===20) {
            return i
        }
        yield i
    }
}

const gen = index()

