// em numeros, remova apenas o número 30

let numeros = [10, 20, 30, 40, 50];

numeros.splice(2, 1);

console.log(numeros)

// em cores, adicione 'verde' entre 'azul' e 'amarelo'

let cores = ['vermelho', 'azul', 'amarelo'];

cores.splice(2, 0, 'verde')

console.log(cores);

// // substitua 'gato' por 'papagaio'.

let animais = ['cachorro', 'gato', 'peixe'];

animais.splice(1, 1, 'papagaio');

console.log(animais);

// adicione JS no início do array

let linguagens = ['Python', 'Java'];

linguagens.splice(0, 0, 'JavaScript');

console.log(linguagens);