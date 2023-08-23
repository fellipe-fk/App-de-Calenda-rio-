const feriadosNacionais = [
    { nome: 'Confraternização universal', data: '01/01' },
    { nome: 'Tiradentes', data: '21/04' },
    { nome: 'Dia do trabalho', data: '01/05' },
    { nome: 'Independência do Brasil', data: '07/09' },
    { nome: 'Nossa senhora aparecida', data: '12/10' },
    { nome: 'Finados', data: '02/11' },
    { nome: 'Proclamação da República', data: '15/11' },
    { nome: 'Natal', data: '25/12' }
];

function formataDiaSemana(dataFeriado) {
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[dataFeriado.getDay()];
}

function filtraFeriados() {
    const dataHoje = new Date();
    const mesAtual = dataHoje.getMonth() + 1;

    feriadosNacionais.forEach(item => {
        const [dia, mes] = item.data.split('/');
        if (mes >= mesAtual) {
            const dataFeriado = new Date(dataHoje.getFullYear(), mes - 1, dia);
            const diaDaSemana = formataDiaSemana(dataFeriado);
            const dataFormatada = `${dia}/${mes}/${dataHoje.getFullYear()}`;
            console.log(`${item.nome} cairá em: ${diaDaSemana}, ${dataFormatada}`);
        }
    });
}

filtraFeriados();
