
function calcularIMC(peso, altura) {
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

clasificarIMC(calcularIMC(peso, altura));\

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

fizzBuzz(iteraciones);