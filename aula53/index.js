function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Digite apenas números.');
                return;
            }
            estoquePrivado = valor;
        }
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Tixan YPÊ', 32.99, 1200);
console.log(p1);
console.log(p1.estoque); // 1200

p1.estoque = 1000;
console.log(p1.estoque); // 1000
