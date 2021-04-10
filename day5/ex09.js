var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var nome = valores.shift();
var salario = parseFloat(valores.shift());
var qntVendas = parseFloat(valores.shift());

var comissao = qntVendas * 0.15;
var salarioBonus = salario + comissao

console.log("TOTAL = R$ "+ salarioBonus.toFixed(2));