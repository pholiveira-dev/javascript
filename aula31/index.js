let numeros = 20;
let soma = 0

for (let i = 0; i <= numeros; i++){
    let resultado = i % 2 === 0 ? 'par' : 'impar'
    if (resultado === 'par'){
        soma += i;
    }
    console.log(i, resultado)
}

console.log(`A soma dos pares é igual a ${soma}`)