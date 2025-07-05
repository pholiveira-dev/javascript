function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try{
console.log(soma(1, 'b'))
} catch(e) {
    console.log(e)
}

// Essa é executada quando há algum erro

try {
  // Tenta executar esse bloco
} catch (erro) {
  // Se der erro no try, cai aqui
} finally {
  // Sempre executa, com ou sem erro
}