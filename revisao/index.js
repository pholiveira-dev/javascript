// Crie uma função chamada criaContador que retorna outra função.
// Essa função interna, quando chamada, deve incrementar um número interno e exibir o valor atual.

// ✅ Requisitos:
// O número interno não deve ser acessível fora da função.

// Cada contador criado deve ter seu próprio estado.

// function criaContador(){
//     let total = 0
//     return function () {
//         total ++
//         console.log(total);
//     }
// }

// const num = criaContador();

// num();
// num();
// num();

// Crie uma função chamada criaSaudacao que recebe um nome como parâmetro.
// Ela deve retornar uma outra função, que quando chamada, imprime uma saudação personalizada com o nome fornecido.

function criaSaudacao(nome) {
    return function() {
        console.log(`Seja bem-vindo(a), ${nome}`);
    };
}

const pedro = criaSaudacao('Pedro');
pedro();