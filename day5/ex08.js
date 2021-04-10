var input = require("fs").readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var nmFuncionario = valores.shift();
var hrsTrabalhadas = valores.shift();
var valorHora = valores.shift();

var salrio = hrsTrabalhadas * valorHora;

console.log("NUMBER = "+ nmFuncionario);
console.log("SALARY = U$ "+ salrio.toFixed(2));