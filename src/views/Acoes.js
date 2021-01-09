import React, {Component} from 'react';
import CardAcao from "../components/CardAcao";


class Acoes extends Component {


    render() {
        return (
            <div className="row">
                <h3>Ações</h3>
                {
                    this.props.database.acoes.map((element, index) => {
                        return (
                            <CardAcao
                                key={index}
                                idx={index}
                                idAcao={element.id_acao}
                                qtdMedia={0}
                                precoMedio={0}
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