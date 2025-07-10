// Dado o array:

// let frutas = ["maçã", "banana", "laranja", "uva"];

// Remova 'banana' e 'laranja' do array usando splice
// Mostre o array resultante

// frutas.splice(1, 2);

// console.log(frutas);

// ________________________________________________________________________

// Dado o array:

// let numeros = [1, 2, 3, 7, 8];

// Use splice para inserir os números 4, 5 e 6 nas posições corretas.
// Resultado esperado: [1, 2, 3, 4, 5, 6, 7, 8]

// numeros.splice(3, 0, 4, 5, 6);

// console.log(numeros);

// ________________________________________________________________________

// Dado o array:

// let idades = [12, 17, 8, 21, 14, 30];

// Crie um novo array apenas com as idades maiores ou iguais a 18.

// const maiorIdade = idades.filter(dezoito => dezoito >= 18);

// console.log(maiorIdade);

// ________________________________________________________________________

// Dado o array:

// let palavras = ["carro", "moto", "avião", "barco", "ônibus"];

// Filtre apenas as palavras que possuem mais de 4 letras.

// const quatroLetras = palavras.filter(palavra => palavra.length > 4);
// console.log(quatroLetras);

// ________________________________________________________________________

// Dado o array:

// let nums = [1, 2, 3, 4, 5];

// multiplique cada número por 10

// let multiplicador = nums.map(n => n * 10);

// console.log(multiplicador);

// ________________________________________________________________________

// Dado o array:

let nomes = ["joão", "maria", "ana"];

// Use map para transformar cada nome para a forma capitalizada (primeira letra maiúscula, o resto minúsculo).

let maiusculo = nomes.map(letra => letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase());

console.log(maiusculo);

// ________________________________________________________________________