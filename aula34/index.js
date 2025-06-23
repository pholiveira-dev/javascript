const nomes = ['Pedro Henrique', 'Lucas da Silva', 'William de Oliveira'];

for (let i of nomes){
    console.log(i)
}

for (let i in nomes){} // retorna o índice ou chave (string, array ou objetos)
for (let i of nomes){} // Retorna o valor em si (iteraveis, arrays ou strings)

// Ao usar 'of' ele retorna o valor em si (ele não conta índices)