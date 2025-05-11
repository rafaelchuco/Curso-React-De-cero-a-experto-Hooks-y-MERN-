// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;

const saludar4 = ()=> `Hola, Mundo`;

console.log(saludar("Rafael"));
console.log(saludar2("Diego"));
console.log(saludar3("Goku"));
console.log(saludar4())

const getUsers = ()=>{
    return{
        uide: "ABC123",
        username: "El_papi1502"
    }
}
const getUsers2 = ()=>({
    uide:"123ABC",
    username: "LaVacaLola"
})
console.log(getUsers())
console.log(getUsers2())

// Tarea
// 1. Transformar a funcion flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuariActivo(nombre) {
//     return{
//         uide: "ABC456",
//         username: nombre,
//     }
// };

// const UsuariActivo = getUsuariActivo("HelloKitty") 

const getUsuariActivo = (nombre)=>({
    uide: "ABC456",
    username: nombre,
});

const UsuariActivo = getUsuariActivo("HelloKitty")

console.log(UsuariActivo)