//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

//1.1
const [, Ana,] = empleados;
console.log(Ana);

//1.2
const [Luis, ,] = empleados;
console.log(Luis.email)

//1.3

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const { name: nombre, type, ability, stats, moves } = pokemon;
console.log(nombre);
console.log(type);
console.log(pokemon.moves[1]);


//2
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

//2.1 Mergear
const mergePokemon = { ...pokemon, ...pikachu }
console.log(mergePokemon);


//2.2 sumAllNumbers
function sumAllNumbers(...allNumbers) {
    let result = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        result += allNumbers[i];
        console.log(allNumbers[i]);
    }
    console.log("Resultado de la suma" + result);
}
sumAllNumbers(2, 4, 4);

//2.3 addOnlyNums

function addOnlyNums(...allArray) {
    const allArrayTemp = [...allArray];
    let filtered;
    let result = 0;
    filtered = allArrayTemp.filter(Number.isInteger);
    console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
        result += filtered[i];
    }
    console.log(result)
}

addOnlyNums(1, "perro", 2, 4);

//2.4
function countTheArgs(...args) {
    return args.length;
}

console.log(countTheArgs('gato', 'perro')); // 2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); // 4


//2.5
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

const arrayA = [1, 2, 3];
const arrayB = ['a', 'b', 'c'];
const combinedArray = combineTwoArrays(arrayA, arrayB);

console.log(combinedArray);