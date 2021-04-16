const input = require('fs').readFileSync('stdin','utf-8');
const [X, Y] = input.split("\n");

const consumoMedio = X / Y;

console.log(consumoMedio.toFixed(3)+ " km/l");