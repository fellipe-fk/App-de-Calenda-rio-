import feriadosNacionais from "../dados/dados.js";

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
        };
    });
};

export default filtraFeriados;