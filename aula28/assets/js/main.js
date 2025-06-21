const titulo = document.querySelector('h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

titulo.innerHTML = data.toLocaleString('pt-BR', opcoes);