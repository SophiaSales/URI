var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var A = parseInt(valor.shift());
var B = parseInt(valor.shift());
var soma = A + B;

console.log("SOMA = " + soma);
