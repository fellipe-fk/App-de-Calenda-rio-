const feriadosNacionais = [
    {nome: 'Confraternizaçao universal', data: '01/01'},
    {nome: 'Tiradentes', data: '04/21'},
    {nome: 'Dia do trabalho', data: '05/01'},
    {nome: 'Independecia do Brasil', data: '09/07'},
    {nome: 'Nossa senhora aparecida', data: '10/12'},
    {nome: 'Finados', data: '11/02'},
    {nome: 'Proclamaçao da republica', data: '11/15'},
    {nome: 'Natal', data: '12/25'}
];

function filtraData (item){
    let data = new Date();
    let ano = data.getFullYear();
    let divicao = item.split('/');
    let novaData = divicao[1] + '/' + divicao[0] + '/' + ano;
    
    return novaData;
};

function filtraFeriados (){
    feriadosNacionais.forEach(item => {
        const dataPadraoBr = filtraData(item.data);
        const nomeFeriado = item.nome;

        let dataHoje = new Date();
        const dataFeriado = dataHoje.toLocaleDateString();

        const pegaMesFeriado = dataPadraoBr[3] + dataPadraoBr[4];
        const pegaMesHoje = dataFeriado[3] + dataFeriado[4];

        if(pegaMesFeriado >= pegaMesHoje){
            console.log(`${nomeFeriado} Caira em: ${dataPadraoBr}`);
        };
    });
};