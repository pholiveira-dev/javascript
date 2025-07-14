class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class iPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
    }
};

class Tablet extends DispositivoEletronico {
    constructor(nome, temWiFi) {
        super(nome, temWiFi);
        this.nome = nome;
        this.temWiFi = temWiFi
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }
}

const s1 = new iPhone('11', 'Preto', 'MaxPro');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar()
console.log(t1.ligado)