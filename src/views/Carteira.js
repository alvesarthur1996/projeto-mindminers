import React, {Component} from 'react';
import CardAcao from "../components/CardAcao";

class Carteira extends Component {


    vendaMaxima(idAcao) {
        const acao = this.props.database.carteira.filter(acao => acao.id_acao == idAcao);
        if (acao.length)
            return acao[0].qtd_media;
        else
            return 0;
    }

    render() {
        const {carteira} = this.props.database;
        return (
            <div className='row'>
                <h3> Carteira </h3>
                {
                    carteira.length < 1 ? <div><h4>Parece que você ainda não possui ações. <br/>Visite a página de ações no menu de navegação. </h4></div> : null
                }
                {
                    carteira.map((element, index) => {
                        return (
                            <CardAcao
                                key={index}
                                idx={index}
                                idAcao={element.id_acao}
                                qtdMedia={element.qtd_media}
                                precoMedio={element.preco_medio}
                                database={this.props.database}
                                vendaMax={this.vendaMaxima(element.id_acao)}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default Carteira;
