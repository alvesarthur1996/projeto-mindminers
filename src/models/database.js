export const dbInitData = {
    carteira: [
        {id_acao: '1', qtd_media: 5, preco_medio: 7.68},
        {id_acao: '2', qtd_media: 10, preco_medio: 5.62},
        {id_acao: '3', qtd_media: 5, preco_medio: 15.66},
        {id_acao: '4', qtd_media: 5, preco_medio: 55.66},
        {id_acao: '5', qtd_media: 5, preco_medio: 25.66},
    ],
    historico: [
        {id_acao: '1', data: '08/01/2021', tipo: 'compra', preco: 6.55, qtd: 5, taxa_corretagem: 0.25},
        {id_acao: '1', data: '08/01/2021', tipo: 'venda', preco: 6.55, qtd: 5, taxa_corretagem: 0.25},
    ],
    acoes: [
        {id_acao: '1', nome: 'Cemig', cod: 'CMIG4'},
        {id_acao: '2', nome: 'Petrobras', cod: 'PETR4'},
        {id_acao: '3', nome: 'Santos Brasil', cod: 'STBP3'},
        {id_acao: '4', nome: 'WEG SA', cod: 'WEGE3'},
        {id_acao: '5', nome: 'Magazine Luiza', cod: 'MGLU3'},
    ],
};

const dbKey = '@projeto-mindminers/db';


export const dbAdd = (to, data) => {
    console.log('aqui');
    let db = JSON.parse(localStorage.getItem(dbKey));
    console.log(db);
    return true;
}

export function dbRemove() {

}

export function dbEdit() {

}