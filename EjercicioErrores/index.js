const logger = require('./logger')


//console.log("Hola, estoy saliendo por pantalla")
logger.info("Esto es un mensaje informativo")
logger.warn("Esto es un mensaje de advertencia")
logger.debug("Esto es un mensaje de debug")
logger.error("Esto es un error")

/////////////////
const error = val => {
    if (typeof val === "number"){
        return true
    }
    throw new Error("Este valor no es numérico")
}

////////////////
try{
    console.log("Comenzamos la prueba.")
    Suma(3,56)
    console.log("Termina la prueba con éxito.")
} catch (e){
    console.log("ERROR!")
} finally {
    console.log("Hemos terminado el proceso")
}