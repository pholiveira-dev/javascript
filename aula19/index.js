function dados(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
}
}

const primeiroCliente = dados('Pedro', 'Henrique', 28)
console.log(primeiroCliente.nome)