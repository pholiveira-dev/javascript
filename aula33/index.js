const frutas = ['Pera', 'Maçã', 'Uva'];

// for clássico => sem muito segredos

// for (i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// For in => lê os índices ou chaves do objeto

// for (let i in frutas){
//     console.log(i)
// }

// for in com objetos

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 28
};

for (let i in pessoa){
    console.log(i, pessoa[i])
};