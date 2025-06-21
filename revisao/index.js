const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container =  document.querySelector('.container');
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    const criaTag = document.createElement(tag);
    const criaTexto = document.createTextNode(texto);

    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
}

container.appendChild(div);