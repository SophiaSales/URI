var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n'); 
// split divide uma string em substrings defininindo o que separa colocando dentro do ('AQUI')

var A = parseInt(valores.shift()); 
// shift paga o valor de um array e retorna ele colocando na variavel A
var B =  parseInt(valores.shift()); 
//parseInt tranforma em numeros inteiros

var X = A + B;
console.log( "X = " + X );


