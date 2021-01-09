import React, {Component} from 'react';
import CardAcao from "../components/CardAcao";

class Carteira extends Component {


    render() {
        return (
            <div className='row'>
                <h3> Carteira </h3>
                {
                    this.props.database.carteira.map((element, index) => {
                        return (
                            <CardAcao
                                key={index}
                                dadosAcoes={this.props.database.acoes}
                                idAcao={element.id_acao}
                                qtdMedia={element.qtd_media}
                                precoMedio={element.preco_medio}
                            />
                        )
                    })
                }

            </div>
        )
    }
};
export default Carteira;
