
/*function calcularIMC(peso, altura) {
    return peso/altura**2;
};

function clasificarIMC(imc) {
    console.log(`Su imc es: ${imc}`)
    if(imc < 18.5){
        console.log("Bajo Peso");
    } else if(imc < 25){
        console.log("Normal");
    } else if(imc < 30){
        console.log("Sobrepeso");
    } else{
        console.log("Obesidad");
    }   
};

let peso = 0;

while (peso <= 0) {
    peso = prompt("Escribe aqui tu peso en kilogramos");

    if (peso <= 0) {
        alert("El peso no puede ser menor o igual a 0");
    }
}

let altura = 0;

while (altura <= 0) {
    altura = prompt("Escribe aqui tu altura en metros");

    if (altura <= 0) {
        alert("La altura no puede ser menor o igual a 0");
    }
}

clasificarIMC(calcularIMC(peso, altura));

//-------------------------------------------------------------------

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        } else if(i%5 === 0){
            console.log("Buzz");
        } else if(i%3 === 0){
            console.log("Fizz");
        } else{
            console.log(i);
        }
    }
}

let iteraciones = 0;

while (iteraciones == false || iteraciones <= 0 || iteraciones%1 !== 0) {
    iteraciones = prompt("Cuantas iteraciones quieres para el fizzbuzz?")

    if (iteraciones == false || iteraciones <= 0 || iteraciones%1 !== 0) {
        alert("Valor invalido, vuelve a intentar");
    }
}

fizzBuzz(iteraciones);*/


// Parte por si acaso no la aplique bien abajo
const menuSolito = [
    { id: 0, nombre: "Burguersita", precio: 150, tipo: "Hamburguesa", tiempoPrepMin: 15},
];

// --------------------- Desestructuración
const { nombre, tipo } = menuSolito;
//A qui extraigo el nombre y el tipo del producto en mi primer arreglo
// nombre -> "Burguersita"
// tipo -> "Hamburguesa"
const { tipo: categoria } = menuSolito;
// Aqui extraigo el tipo del producto y modifico su nombre a "categoria"
// vategoria -> "Hamburguesa"
const { vieneEnCombo = false } = menuSolito;
// Aqui hago un valor por defecto que no existia
// vieneEnCombo -> false

// --------------------- Spread
const copia = { ... menuSolito, tiempoPrepMin: 999};
// Hice una copia del elemento y le cambie el tiempo de preparacion a 999
// copia = { id: 0, nombre: "Burguersita", precio: 150, tipo: "Hamburguesa", tiempoPrepMin: 999}

// --------------------- Principal
const menu = [
    { id: 1, nombre: "Titanica", precio: 280, tipo: "Hamburguesa", tiempoPrepMin: 18},    
    { id: 2, nombre: "Cataratas Del Niagara", precio: 120, tipo: "Bebida", tiempoPrepMin: 5},    
    { id: 3, nombre: "El Ataque Al Corazón", precio: 349, tipo: "Hamburguesa", tiempoPrepMin: 20},    
    { id: 4, nombre: "Papocalipsis", precio: 150, tipo: "Papas", tiempoPrepMin: 12},    
    { id: 5, nombre: "Oceano Sin Fin", precio: 90, tipo: "Bebida", tiempoPrepMin: 4},    
];

const filtrados = menu.filter(
    m => m.tiempoPrepMin < 10
).length == 0 ? "Ninguna busqueda coincidio" : menu.filter(m => m.tiempoPrepMin < 10); 
// Filtro los elementos que tengan un tiempo de preparación de 10 minutos, 
// Utilice un operador terniario para que en caso de que el array no arroje coincidencias lo muestre en el codigo.

const total = menu.reduce(
    (acc, {precio}) => acc + precio, 0
);
// Usando el reduce sumo todos los precios.

const promedio = (total / menu.length) ?? "Error en el sistema";
// Calculo en promedio con base en el total.
// Añadi un ?? por si acaso.

const ordenados = [ ... menu].sort(
    (a, b) => a.tiempoPrepMin - b.tiempoPrepMin
);
// Ordene los elementos desde menor precio hasta mayor precio. 

console.log({ filtrados, total, promedio, ordenados });

console.log(menu);