class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Pedro', 'Henrique');
p1.falar()
p1.comer()
p1.beber()