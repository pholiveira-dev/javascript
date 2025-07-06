function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const chamaPedro = retornaFuncao('Pedro Henrique');
const chamaArtur = retornaFuncao('Artur de França');

console.log(chamaArtur());
console.log(chamaPedro());