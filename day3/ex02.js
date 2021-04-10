var input = require('fs').readFileSync('stdin', 'utf8');


var n = 3.14159;
var raio = parseFloat(input);
var area = n * Math.pow(raio, 2);
//Math.pow para esponenciaçao de um numero 

console.log(typeof area);
console.log( "A=", area.toFixed(4));
//toFixed deixa a saida com 4 casas decimais 