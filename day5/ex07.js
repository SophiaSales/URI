var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n'); 

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var D = parseFloat(valores.shift());

var DIFERENCA = (A * B - C * D);

console.log("DIFERENCA = "+ DIFERENCA);