

const personajes= ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = personajes
console.log(p1, p2, p3)

const retornaArreglo = ()=>{
    return ["ABC", 123];
}
const [letas, numero] = retornaArreglo();

console.log(letas, numero )

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 1. El segunodo se llamara setNombre

// const useState = ( valor ) =>{
//     return [valor,() =>{ console.log("Hola Mundo")}];
// }

// const arr = useState("Goku");

// console.log(nombre);
// setNombre();

// console.log(arr)
// arr[1]();


const useState = ( valor ) =>{
    return [valor,()=>{console.log("Hola mundo")}];
}
const [nombre, setNombre] = useState();

console.log("Goku")
setNombre();