
class Estudiante {
    nombre
    edad
    asignaturas = ["Javacript", "HTML", "CSS"]
    constructor(nombre, edad, asignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }
    obtenDatos() {
        return this
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años y estoy estudiando ${this.asignaturas}.`)
    }

}

yo = new Estudiante("Charlie", 24, "Javascript")
console.log(yo.obtenDatos())
yo.saludo()

