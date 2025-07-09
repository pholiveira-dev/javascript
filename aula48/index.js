const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobraNumero = numeros.map(numero => numero * 2);

console.log(dobraNumero);

// Para cada elemento:

const pessoas = [
    { nome: 'Pedro', idade: 28},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

// Retorne apenas uma string com o nome da pessoa

const filtra = pessoas.map(
    letra => letra.nome
);

console.log(filtra);

// Remova apenas a chave "nome" do objeto

const idadePessoas = pessoas.map(
    anos => ({anos: anos.idade})
);

console.log(idadePessoas); 