const data = new Date();
console.log(data.toString()) // .toString retorna um formato de data em string (ex.: Sun May 18 2025 11:35:11 GMT-0300 (Horário Padrão de Brasília)).
// Em Number: O formato seguido vai ser o americano, isso quer dizer que: ano//mês//dia. Na hora: hora, minuto, segundo e milisegundo. É necessário enviar pelo menos dois parâmetros: ano e dia. O que estiver ausente, ele vai preencher com 0.
// Em String: "2019-04-20 20:20:59"
// Os meses vão ser representados por 0 Janeiro, 1 Fevereiro, 2 Março...

var inicio = new Date("1997-03-14 08:08:35");
console.log(inicio)
console.log('Dia: ', inicio.getDate()); // Retorna dia
console.log('Mês: ', inicio.getMonth() + 1); // Retorna mês
console.log('Ano: ', inicio.getFullYear()); // Retorna o ano
console.log('Hora: ', inicio.getHours()); // Retorna hora
console.log('Minutos: ', inicio.getMinutes()); // Retorna minutos
console.log('Segundos: ', inicio.getSeconds()); // Retorna os segundos
console.log('Milisegundos: ', inicio.getMilliseconds()); // Retorna os milisegundos
console.log('Dia da semana: ', inicio.getDay()); // Retorna o dia da semana - 0 é domingo e 6 é sábado