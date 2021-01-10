export const dbInitData = {
    carteira: [],
    historico: [],
    acoes: [
        {id_acao: '1', nome: 'Cemig', cod: 'CMIG4'},
        {id_acao: '2', nome: 'Petrobras', cod: 'PETR4'},
        {id_acao: '3', nome: 'Santos Brasil', cod: 'STBP3'},
        {id_acao: '4', nome: 'WEG SA', cod: 'WEGE3'},
        {id_acao: '5', nome: 'Magazine Luiza', cod: 'MGLU3'},
    ],
};

export const dbKey = '@projeto-mindminers/db';


export const dbSave = (to, data) => {
    console.log('aqui');
    let db = JSON.parse(localStorage.getItem(dbKey));
    console.log(db);
    return true;
};