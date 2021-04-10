var input = require ('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var A = parseFloat(valor.shift());
var B = parseFloat(valor.shift()); 

 var media = (A * 3.5 + B * 7.5) / 11.0;

console.log ("MEDIA = " + media.toFixed(5));