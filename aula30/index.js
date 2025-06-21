const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 28,
    endereco: {
        rua: 'QR 402',
        numero: 1
    }
}

// const {nome, sobrenome} = pessoa; // Atribuição via desestruturação

// Também é possível mudar o nome da variável da seguinte forma:

// const { nome, sobrenome } = pessoa; // ATENÇÃO!!! MUITO USADO

const { endereco: { rua, numero }} = pessoa // Aqui, o JS vai exibir a rua e o número.

console.log(rua, numero);