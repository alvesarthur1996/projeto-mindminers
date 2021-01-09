import React, {Component} from 'react';
import {Table} from "react-materialize";

class HistoricoAcoes extends Component {


    render() {

        return (
            <Table responsive striped centered>
                <thead>
                    <tr>
                        <th data-field="date"> Data</th>
                        <th data-field="code"> Cod.</th>
                        <th data-field="type"> Tipo</th>
                        <th data-field="price"> Preço</th>
                        <th data-field="qtd"> Quantidade</th>
                        <th data-field="fee"> Taxa de corretagem</th>
                    </tr>
                </thead>
                <tbody>

                {
                    this.props.database.historico.map((el, index) => {
                        return (
                            <tr key={index} className={el.tipo == 'compra' ? 'green lighten-4' : 'red lighten-4'}>
                                <td>{el.data}</td>
                                <td>{el.cod}</td>
                                <td style={{textTransform:'capitalize'}}>{el.tipo}</td>
                                <td>{el.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                <td>{el.qtd}</td>
                                <td>{el.taxa_corretagem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        )
    }
}

export default HistoricoAcoes;