// EXERCÍCIO 1: Crie um script que receba duas variáveis numéricas

// Verifique: - Qual é a maior, se são iguais e se alguma é falsy

// Use || ou && para retornar uma das variáveis com base no valor

const compare = (x, y) => {

    if (!x || !y){
        return 'Um (ou ambos) dos valores é considerado falsy'
    }

    if(x === y){
        return 'Os valores são iguais';
    }

    return x > y ? `O maior valor é ${x}` : `O maior valor é ${y}`;

}

console.log(compare(0,0))