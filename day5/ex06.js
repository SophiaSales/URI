var input = require ('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n').map(x => parseFloat(x))

var A = (parseFloat(valor.shift()))/10*2;
var B = (parseFloat(valor.shift()))/10*3;
var C = (parseFloat(valor.shift()))/10*5;

var media = (A + B + C)/1;

console.log("MEDIA = "+ media.toFixed(1));
