const numeros = [5, 50, 0, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(
    par => par % 2 == 0
).map(
    valor => valor * 2
).reduce((ac, valor) => {
    return ac + valor;
});
console.log(numerosPares);