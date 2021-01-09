import React, {Component} from 'react'
import {Modal, Button, TextInput} from "react-materialize";

class ModalCV extends Component {

    constructor(props) {
        super(props);

        this.tipo = this.props.CV;
        this.moneyRegex = /^\d{1,3}(?:\.\d{3})*,\d{2}$/;
    }

    handleSubmit(event) {
        event.preventDefault();
        const qtd = parseInt(event.target.querySelector('#qtd').value);
        const preco = parseFloat(event.target.querySelector('#preco').value);
        const taxa = parseFloat(event.target.querySelector('#taxa').value);

        if (this.tipo == "compra") {
            this.props.compra(qtd, preco, taxa, this.props.dadosAcao.id_acao);
        } else {
            this.props.venda(qtd, preco, taxa, this.props.dadosAcao.id_acao);
        }
    }


    render() {
        return (
            <Modal
                actions={[
                    <Button onClick={this.props.closeUpdate} flat modal="close" node="button"
                            waves="red">Cancelar</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header={this.props.dadosAcao.nome}
                id={"mdlAcao-" + this.props.dadosAcao.id_acao}
                open={this.props.openModal}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
            >
                <h5>{this.props.dadosAcao.cod}</h5>
                <h6>Ordem de {this.tipo}</h6>

                <br/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextInput
                        id="qtd"
                        label="Quantidade"
                        type="number"
                        min="1"
                        step="1"
                        max={this.tipo == 'venda' ? this.props.vendaMax : Number.POSITIVE_INFINITY}
                        required
                    />
                    <TextInput
                        id="preco"
                        label="Preço"
                        type="number"
                        min="0.01"
                        step="0.01"
                        validations={{matchRegexp: this.moneyRegex}}
                        required
                    />
                    <TextInput
                        id="taxa"
                        label="Taxa de Corretagem"
                        type="number"
                        min="0.00"
                        step="0.01"
                        validations={{matchRegexp: this.moneyRegex}}
                        required
                    />
                    <Button className="indigo darken-4" waves="green"> Executar Ordem </Button>
                </form>
            </Modal>
        )
    }
}

export default ModalCV;