// EXERCÍCIO 2: SITEMA DE NOTAS

// Crie uma função avaliarNota(nota) que recebe uma nota de 0 a 10 e retorna:

// Reprovado (se menor que 5), Recuperação (se for entre 5 e 6.9), Aprovado (se maior ou igual a 7)

// Use if, else if, else ou switch/case

const avaliarNota = (nota) => {
    if(nota < 5) return 'Reprovado!!!'

    if(nota >= 5 && nota <= 6.9) return 'Recuperação'
    
    return 'Aprovado!!!'

}

console.log(avaliarNota(5))