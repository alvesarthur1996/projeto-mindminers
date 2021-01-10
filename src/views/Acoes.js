import React, {Component} from 'react';
import CardAcao from "../components/CardAcao";


class Acoes extends Component {


    render() {
        return (
            <div className="row">
                <h3>Ações</h3>
                {
                    this.props.database.acoes.map((element, index) => {
                        const naCarteira = this.props.database.carteira.filter(item => item.id_acao == element.id_acao);

                        return (
                            <CardAcao
                                key={index}
                                idx={index}
                                idAcao={element.id_acao}
                                qtdMedia={naCarteira.length ? naCarteira[0].qtd_media : 0}
                                precoMedio={naCarteira.length ? naCarteira[0].preco_medio : 0}
                                database={this.props.database}
                                vendaMax={0}
                                somenteCompra={true}
                            />
                        )
                    })
                }
            </div>
        )
    }
};

export default Acoes;