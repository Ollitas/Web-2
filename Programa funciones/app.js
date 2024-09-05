let numeroVidas = 3;

numeroRandom = Math.floor(Math.random()*(10-1)+1);
console.log(numeroRandom);

comparacion();

function comparacion(){
    valor1 = parseInt(prompt(`Ingresa un numero del 1 al 10`));
    while (numeroRandom !== valor1 && numeroVidas >1){
        numeroVidas--;
        alert(`Fallaste, tu numero de vidas es ${numeroVidas}`);
        prompt(`Ingresa un numero del 1 al 10: `);  
    }
    verdades();
}

function verdades(){
    if(numeroRandom == valor1){
        alert("Ganaste");
    } else {
        alert (`Perdiste, el valor era ${numeroRandom}`);
    }
}

