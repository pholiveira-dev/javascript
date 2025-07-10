// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce((soma, valor) => {
//     return soma + valor}, 0);
// console.log(total);

// Retorne a pessoa mais velha:

const pessoas = [
    { nome: 'Pedro', idade: 28 },
    { nome: 'Maria', idade: 62 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 23 },
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
});

console.log(maisVelha);