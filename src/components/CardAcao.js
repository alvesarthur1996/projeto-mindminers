import React, {Component} from 'react';
import {Button, Card, Row, Col, Tabs, Tab} from "react-materialize";
import ModalCV from "./ModalCV";

class CardAcao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openModal: false,
            buyOrSell: 'compra'
        };

        this._PM = 0;
        this._QM = 0;
        this._PC = this.props.PC;
        this._QC = this.props.QC;
        this._TC = this.props.TC;
        this._dadosAcao = {};
    }


    _handleClickBuySell(btn) {
        const newState = {
            openModal: true,
            buyOrSell: btn.target.getAttribute('data-cv')
        };

        this.setState(newState);
        console.log(newState)
    }

    closeModal(){
        this.setState({
            openModal: false
        })
        console.log(this.state)
    }


    render() {
        this._PM = this.props.precoMedio;
        this._QM = this.props.qtdMedia;
        this._dadosAcao = this.props.dadosAcoes.filter(acao => acao.id_acao == this.props.idAcao)[0];

        return (
            <Card className="col m4 s12 indigo darken-4" textClassName="white-text" title={this._dadosAcao.cod}>
                <h6>Posição: R$ {this._PM}</h6>
                <h6>Qtd: {this._QM}</h6>

                <Button data-cv="compra" onClick={this._handleClickBuySell.bind(this)} className="green darken-5"
                        style={{marginRight: '10px', minWidth: '120px'}} waves="light">
                    Compra
                </Button>

                <Button data-cv="venda" onClick={this._handleClickBuySell.bind(this)} className="red darken-5"
                        style={{marginRight: '10px', minWidth: '120px'}} waves="light">
                    Venda
                </Button>
                {this.state.openModal ?
                    <ModalCV
                        openModal={this.state.openModal}
                        dadosAcao={this._dadosAcao}
                        CV={this.state.buyOrSell}
                        closeUpdate={this.closeModal.bind(this)}
                    />
                    : null
                }
            </Card>
        )
    }
}

export default CardAcao;