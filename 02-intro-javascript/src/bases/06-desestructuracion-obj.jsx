
// Desestructuració0n
// Asignacion Desestructurante

const persona = {
    nombre: "Rafael",
    edad: 18,
    clave: "GoGoGo",
};

// const {nombre, edad, clave} = persona;

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)
// console.log(nombre);
// console.log(edad);
// console.log(clave);
const useContext = ( { nombre, edad, clave, rango = "S" } ) =>{


    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.13421,
            lng: 12.342143,
        }

    }

}

const cazador = useContext(persona); 

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)