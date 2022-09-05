"use strict";

import Eratosthenes from "./script.js";
import EratosthenesCorrecta from "./correction.js";

let filtro = new Eratosthenes();
let filtroOptimizado = new EratosthenesCorrecta();

console.log(filtro.filtroDeEratosthenes());
console.log(filtroOptimizado.calculoPrimo());


