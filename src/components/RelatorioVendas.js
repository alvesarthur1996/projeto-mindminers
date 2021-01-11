import React, {Component} from 'react';
import {Table} from "react-materialize";

class RelatorioVendas extends Component {


    render() {

        const {historico} = this.props.database;
        return (
            <div>
                {
                    historico.filter(item => item.tipo == "venda").length > 0 ?

                        <Table responsive hoverable centered>
                            <thead>
                            <tr>
                                <th data-field="date"> Data</th>
                                <th data-field="code"> Cod.</th>
                                <th data-field="price"> Preço de Venda</th>
                                <th data-field="price"> Preço Médio</th>
                                <th data-field="qtd"> Quantidade</th>
                                <th data-field="loss"> Prejuízo Total/papel</th>
                                <th data-field="profit"> Lucro</th>
                                <th data-field="tax"> Imposto a pagar</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                historico.filter(item => item.tipo == "venda").map((el, index) => {
                                    return (
                                        <tr key={index}
                                            className={el.prejuizo_acumulado > 0 ? 'red lighten-4' : 'green lighten-4'}>
                                            <td>{el.data}</td>
                                            <td>{el.cod}</td>
                                            <td>{el.preco.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}</td>
                                            <td>{el.preco_medio.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}</td>
                                            <td>{el.qtd}</td>
                                            <td>{el.prejuizo_acumulado.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}</td>
                                            <td>{el.resultado_auferido > 0 ?
                                                el.resultado_auferido.toLocaleString('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }) :
                                                (0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
                                            <td>{el.imposto.toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        :
                        <span>Nenhuma venda realizada até o momento</span>
                }
            </div>
        )
    }
}

export default RelatorioVendas;