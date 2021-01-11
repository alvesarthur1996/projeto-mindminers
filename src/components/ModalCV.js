import React, {Component} from 'react'
import CurrencyInput from 'react-currency-format';
import {Modal, Button, TextInput, DatePicker} from "react-materialize";

class ModalCV extends Component {

    constructor(props) {
        super(props);

        this.tipo = this.props.CV;
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = event.target.querySelector('#data-operacao').value;
        const qtd = parseInt(event.target.querySelector('#qtd').value);
        const preco = parseFloat(event.target.querySelector('#preco').value
            .replace("R$ ", "")
            .replace(/\./g, "")
            .replace(",", "."));
        const taxa = parseFloat(event.target.querySelector('#taxa').value
            .replace("R$ ", "")
            .replace(/\./g, "")
            .replace(",", "."));

        if (this.tipo == "compra") {
            this.props.compra(data, qtd, preco, taxa, this.props.dadosAcao.id_acao);
        } else {
            this.props.venda(data, qtd, preco, taxa, this.props.dadosAcao.id_acao);
        }
    }

    handleQtdInput(e){
        if(e.target.getAttribute('max') !== "Infinity" && parseInt(e.target.value) > parseInt(e.target.getAttribute('max'))){
           e.target.value = e.target.getAttribute('max');
        }
        if(parseInt(e.target.value) < 1){
            e.target.value = 1;
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
                    onCloseEnd: this.props.closeUpdate,
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
                    <DatePicker
                        label="Data"
                        id="data-operacao"
                        options={{
                            autoClose: false,
                            format: 'dd/mm/yyyy',
                            i18n: {
                                cancel: 'Cancelar',
                                clear: 'Limpar',
                                done: 'Ok',
                                months: [
                                    'Janeiro',
                                    'Fevereiro',
                                    'Março',
                                    'Abril',
                                    'Maio',
                                    'Junho',
                                    'Julho',
                                    'Agosto',
                                    'Setembro',
                                    'Outubro',
                                    'Novembro',
                                    'Dezembro'
                                ],
                                monthsShort: [
                                    'Jan',
                                    'Fev',
                                    'Mar',
                                    'Abr',
                                    'Mai',
                                    'Jun',
                                    'Jul',
                                    'Ago',
                                    'Set',
                                    'Out',
                                    'Nov',
                                    'Dez'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                    'Domingo',
                                    'Segunda',
                                    'Terça',
                                    'Quarta',
                                    'Quinta',
                                    'Sexta',
                                    'Sábado'
                                ],
                                weekdaysAbbrev: [
                                    'D',
                                    'S',
                                    'T',
                                    'Q',
                                    'Q',
                                    'S',
                                    'S'
                                ],
                                weekdaysShort: [
                                    'Dom',
                                    'Seg',
                                    'Ter',
                                    'Qua',
                                    'Qui',
                                    'Sex',
                                    'Sab'
                                ]
                            },
                            isRTL: false,
                            maxDate: null,
                            minDate: null,
                            onClose: null,
                            onDraw: null,
                            onOpen: null,
                            onSelect: null,
                            parse: null,
                            setDefaultDate: false,
                            showClearBtn: false,
                            showDaysInNextAndPreviousMonths: false,
                            showMonthAfterYear: false,
                            yearRange: 3
                        }}
                        required
                    />
                    <TextInput
                        id="qtd"
                        label="Quantidade"
                        onInput={this.handleQtdInput}
                        type="number"
                        min="1"
                        step="1"
                        max={this.tipo == 'venda' ? this.props.vendaMax : Number.POSITIVE_INFINITY}
                        required
                    />
                    <CurrencyInput
                        thousandSeparator="."
                        thousandSpacing="3"
                        decimalSeparator=","
                        allowNegative={false}
                        prefix="R$ "
                        customInput={TextInput}
                        label="Preço"
                        id="preco"
                        fixedDecimalScale
                        decimalScale={2}
                        required
                    />
                    <CurrencyInput
                        thousandSeparator="."
                        thousandSpacing="3"
                        decimalSeparator=","
                        allowNegative={false}
                        prefix="R$ "
                        customInput={TextInput}
                        label="Taxa de Corretagem"
                        id="taxa"
                        fixedDecimalScale
                        decimalScale={2}
                        required
                    />
                    <Button className="indigo darken-4" waves="green"> Executar Ordem </Button>
                </form>
            </Modal>
        )
    }
}

export default ModalCV;