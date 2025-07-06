// a função lembra onde foi escrita e todos os vizinhos dela. Nada no código vai mexer no escopo léxico da função.

const nome = 'Pedro';

function falaNome(){
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Pedro Henrique';
    falaNome();
}

usaFalaNome();