function textoDiaSemana(diaSemana){
        switch(diaSemana){
        case 0:
            console.log(`O dia da semana é domingo`);
            break;
        case 1:
            console.log('O dia da semana é segunda');
            break;
        case 2:
            console.log('O dia da semana é terça');
            break;
        case 3:
            console.log('O dia da semana é quarta');
            break;
        case 4:
            console.log('O dia da semana é quinta');
            break;
        case 5:
            console.log('O dia da semana é sexta');
            break;
        case 6:
            console.log('O dia da semana é sábado');
            break;
    }      
    }

const data = new Date();
const diaSemana =  data.getDay();
mostraTela = textoDiaSemana(diaSemana);