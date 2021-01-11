import React, {Component} from 'react'
import {Pie, Bar} from "@reactchartjs/react-chart.js";
import distinctColors from "distinct-colors";

class Grafico extends Component {

    constructor(props) {
        super(props);

        this.createTemplate = this.createTemplate.bind(this);
        this.filteredData = this.filteredData.bind(this);
        this.defaultColors = this.randomColors();
    }

    filteredData() {
        const {carteira, acoes} = this.props.database;
        let data = {labels: [], values: []};

        if (this.props.carteira) {
            carteira.forEach(item => {
                const cod = acoes.filter(a => a.id_acao === item.id_acao)[0].cod;
                data.labels.push(cod);
                data.values.push(item.qtd_media);
            });
            return data;
        }

        if (this.props.patrimonio) {
            carteira.forEach(item => {
                const cod = acoes.filter(a => a.id_acao === item.id_acao)[0].cod;
                data.labels.push(cod);
                data.values.push((item.qtd_media * item.preco_medio).toFixed(2));
            });
            return data;
        }


    }

    randomColors() {
        return distinctColors({
            count: 50,
            chromaMin: 40,
            lightMin: 40,
        }).map(item => {
            return "rgba(" + parseInt(item._rgb[0]) + ", " + parseInt(item._rgb[1]) + ", " + parseInt(item._rgb[2]) + ", 1)";
        });
    }

    createTemplate(data) {

        const {values, labels} = data;

        if(labels.length <= 0)
            return (<h6> Adicione ativos na sua carteira para visualizar esta informação.</h6>);

        if (this.props.carteira) {
            const cleanData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Carteira',
                        data: values,
                        backgroundColor: this.defaultColors,
                        borderWidth: 1,
                    },
                ],
            };

            return (
                <Pie options={{maintainAspectRatio: true}} data={cleanData}/>
            )
        }

        if (this.props.patrimonio) {
            const cleanData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Carteira',
                        data: values,
                        backgroundColor: this.defaultColors,
                        borderWidth: 1,
                    },
                ],
            };

            let options = {
                animation: false,
                maintainAspectRatio: true
            };

            return (
                <Bar options={options} data={cleanData}/>
            )
        }
    }

    render() {
        return (
            this.createTemplate(this.filteredData())
        )
    }
}

export default Grafico;