let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

num1 = Number(num1);
num2 = Number(num2);

const soma = num1+ num2
const subtracao = num1 - num2
const multi = num1 * num2
const divisao = num1 / num2

document.writeln(`A soma dos dois números é igual a ${soma}<br>`);
document.writeln(`A subtração dos dois números é igual a ${subtracao}<br>`);
document.writeln(`A multiplicação dos dois números é igual a ${multi}<br>`);
document.writeln(`A divisão dos dois números é igual a ${divisao}`)
