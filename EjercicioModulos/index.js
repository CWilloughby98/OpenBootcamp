import chalk from "chalk";

import * as moduloController from "./controller.js"
/*import { suma, multiplicacion } from "./controller.js"
let sum1 = suma(1,2)
let sum2 = suma(4,5)

let mult = multiplicacion(sum1,sum2)*/

let sum1 = moduloController.suma(1,2)
let sum2 = moduloController.suma(4,5)

let mult = moduloController.multiplicacion(sum1,sum2)
console.log(chalk.greenBright(mult));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
console.log(chalk.blue.bgRed.bold('Hello world!'));
