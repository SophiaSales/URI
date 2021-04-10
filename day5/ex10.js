var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var [idPeca1, qtdPeca1, valorUniPeca1] = valores.shift().split(" ");  
//indentificador do produto1,quantidade do produto1 e valor unitario do produto1
//usando o split para dar espasamento entre os valores sugeridos
var [idPeca2, qtdPeca2, valorUniPeca2] = valores.shift().split(" ");  //produto2

var valorTotal1 = qtdPeca1 * valorUniPeca1; //valor total de itens comprado 
var valorTotal2 = qtdPeca2 * valorUniPeca2; //valor toral de itens comprados 

var valorTotalCompra = valorTotal1 + valorTotal2; //valor total dos produtos comprado
console.log("VALOR A PAGAR: R$ S"+ valorTotalCompra.toFixed(2));
