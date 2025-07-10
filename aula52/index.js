function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // o valor da chave
        writable: false, // se pode ser editado
        configurable: true // são as configurações desse objeto, eu posso definir se elas podem ser alteradas ou não (ou seja, caso não seja, eu não posso apagar e nem reconfigurar o objeto)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },

        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        }
    });
}

const p1 = new Produto('Sabão em barra', 1.99, 3000);
p1.estoque = 5000
console.log(p1);