// const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

// console.log(personas[2])
// console.log(personas[4])


//Destructurando el Array

const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

const [p1, p2, p3, p4, p5] = personas
console.log(p4)

const [, , nombrePersona] = personas
console.log(nombrePersona)


//Accedemos a las propiedades de un objeto

// const usuario = {
//     nombre: 'Javier',
//     email: 'javi@gmail.com',
//     registrado: true,
//     seguidores: [
//         'Ger',
//         'Gabriel',
//         'Jorge',
//         'Rebeca',
//         'Xavi'
//     ]
// }

// console.log(‘Email: ’, usuario.email)
// console.log(‘Registrado: ’, usuario["registrado"])
// console.log(‘Seguidores: ’, usuario.seguidores[4])



//  Destructuramos Objetos 3 Formas

// const { nombre, seguidores, registrado } = usuario
// console.log(seguidores)

// const { nombre, email: correo } = usuario
// console.log(correo)

// const { nombre, email: correo, edad = 38 } = usuario
// console.log(edad)


//Operador Spread

const arrayMin = [2, 5, 7, 1, 9]

const minimo = Math.min(...arrayMin)

console.log(minimo)

//concatenar Arrays y mergear Objetos
const array1 = ['patata', 'tomate', 'lechuga']
const array2 = [1, true, 'chocolate']

const concatenarArrays = [...array1, ...array2]
console.log(concatenarArrays)

const objeto1 = { a: 10, b: 'caracola' }
const objeto2 = { c: 2, d: 'cocacola' }

const mergearObjetos = { ...objeto1, ...objeto2 }
console.log(mergearObjetos)

//Operador Rest
// const usuario = {
//     nombre: 'Laura',
//     email: 'laura@gmail.com',
//     edad: 31,
//     registrado: false,
//     seguidores: ['Ger', 'Gabriel', 'Angela']
// }

// const { edad, registrado, ...loDemas } = usuario
// console.log(loDemas)


function listarArticulos(...articulos) {
    console.log(articulos);
}

listarArticulos('Hola', 2, true, { a: 3, c: 17 }, [1, 2, 3, 4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
listarArticulos(2)