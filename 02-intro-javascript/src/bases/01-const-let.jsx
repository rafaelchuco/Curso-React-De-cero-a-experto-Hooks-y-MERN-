// Variables y Constantes

const nombre = "Rafael"; // Se declara una constante llamada 'nombre' con valor "Rafael"
const apellido = "Chuco"; // Se declara una constante llamada 'apellido' con valor "Chuco"

let valorDado = 5; // Se declara una variable con 'let', permitiendo su reasignación posterior
// let valorDado = 4; // ❌ Error: no se puede volver a declarar una variable 'let' en el mismo ámbito
valorDado = 4; // ✅ Se reasigna el valor de 'valorDado' a 4 (válido porque no se está redeclarando)

console.log(nombre, apellido, valorDado); // Imprime: Rafael Chuco 4

// ⚠️ var no se debe usar: tiene alcance de función, lo que puede causar errores difíciles de detectar
// if (true) {
//     const nombre = "Diego"; // Se declara una NUEVA constante 'nombre' válida solo dentro del bloque
//     let valorDado = 12; // Se declara una NUEVA variable 'valorDado' solo visible dentro del bloque
//     console.log(nombre, valorDado); // Imprime: Diego 12 (valores dentro del bloque)
// }

console.log(valorDado); // Imprime: 4 (valor original fuera del 'if', no fue afectado por el interior)
