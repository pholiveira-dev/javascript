function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
       falar() {
            console.log(`Seja muito bem-vindo(a), ${this.nome} ${this.sobrenome}`)
        }
    }
}

const pessoa1 = criaPessoa('Pedro', 'Henrique');
pessoa1.falar()