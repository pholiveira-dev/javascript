// let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// let maior = numeros.filter(num => num >= 10);

// console.log(maior);

const pessoas = [
    { nome: 'Pedro', idade: 28},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

// Retorne as pessoas que tem o nome com 5 letras ou mais:

// const nomeGrande = pessoas.filter(
//     nomes => nomes.nome.length >= 7
// )

// console.log(nomeGrande);

// Retorne as pessoas com mais de 50 anos

// const maisCinquenta = pessoas.filter(
//     cinquenta => cinquenta.idade > 50
// );

// console.log(maisCinquenta);

// Retorne as pessoas cujo nome termina com a

const ultimaLetras = pessoas.filter(
    letra => letra.nome.toLowerCase().endsWith('a')
);

console.log(ultimaLetras);
