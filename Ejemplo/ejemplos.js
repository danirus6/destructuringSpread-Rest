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