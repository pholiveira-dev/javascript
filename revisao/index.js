const parOuImpar = (numero) => {
    if(numero % 2 == 0){
        return `${numero} é par`;
    }

    else{
        return`${numero} é ímpar`;
    }
}

console.log(parOuImpar(6))
console.log(parOuImpar(7))
console.log(parOuImpar(7890))
console.log(parOuImpar(501))
console.log(parOuImpar(4))