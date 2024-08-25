let Altura = parseFloat;
let Peso = parseFloat;
let Nombre;
let Resultado;

Nombre = prompt ("Cual es tu nombre: ");
Altura = prompt ("Cual es tu altura en metros: ");
Peso = prompt ("Cual es tu peso: ");

Resultado = Peso/(Altura^2);
alert("Tu masa corporal " + Nombre + " es de " + Resultado);