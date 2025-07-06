// Declaração de função (function hoisting - o motor do Js eleva essa função para o topo do código - pode ser executado mesmo antes de declarar a função - não sei se ficou claro)

// function falaOi(){
//     console.log('Oi!');
// }

// First-class objects (objetos de primeira classe - tratar a função como um dado - podem ser manipuladas como qualquer outro dado)
// Function expression - criar uma variável e jogar uma função nessa variável

// const souUmDado = function(){
//     console.log('Sou um dado');
// }

// souUmDado();

// function executaFuncao(funcao){
//     console.log('Vou executar sua função abaixo: ')
//     funcao();
// }
// executaFuncao(souUmDado);

const saudacao = function() {
    return 'Olá!';
};

function executar(funcao) {
    console.log(funcao());
};

executar(saudacao)

function criarSaudacao() {
    return function() {
        return 'Oi, tudo bem?';
    };
}