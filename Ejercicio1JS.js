/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
nombre= "Charlie Willoughby";
edad= 24;
desarrollador= false;

if (desarrollador){
    console.log("Sí que soy desarrollador.")
}
else{
    console.log("Aún no soy desarrollador.")
}

const miCumple = new Date(1998, 02 ,12);



const fechapublicacion = new Date (1951, 6, 16);
const libro= {
    titulo: "El Guardian Entre El Centeno",
    autor: "JD Salinger",
    fecha: fechapublicacion,
    url: "https://es.wikipedia.org › wiki › The_Catcher_in_the_Rye"  
}


ListaCharlie= new Array (nombre,
    edad, 
    desarrollador, 
    miCumple, 
    libro);
console.log(ListaCharlie)