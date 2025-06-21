const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso'); // event.target vai me informar o elemento que tá recebendo o evento (por exemplo, o clique do mouse)
    const inputAltura = event.target.querySelector('#altura');
    
    
    const peso = Number(inputPeso.value) // Vai me retornar o valor desse input
    const altura = Number(inputAltura.value); // Vai me retornar o valor desse input

    if (!peso){
        setResultado('Peso inválido', false)
        return;
    }

    if (!altura){
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    console.log(imc)
});

function getNivelImc(imc){


};

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p'); // Cria um elemnto HTML, no caso o 'p' de parágrafo
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP(p);
    p.innerHTML = msg;
    resultado.appendChild(p);
}
