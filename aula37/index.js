const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if(numero === 3){
        console.log('Pulei o número 3')
        continue
    }

    else if(numero === 9){
        console.log('Não vai ter o número 9')
        break
    }
    console.log(numero)
}