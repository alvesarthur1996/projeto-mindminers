import React, {Component} from 'react';
import {Button, Card, Row, Col, Tabs, Tab} from "react-materialize";
import ModalCV from "./ModalCV";
import {dbKey} from "../models/database";

class CardAcao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openModal: false,
            buyOrSell: 'compra'
        };

        this._PM = 0;
        this._QM = 0;
        this._RA = 0;
        this._PA = 0;
        this._IR = 0;
        this._dadosAcao = {};
    }

    compraAcao(qtd, preco, taxa, idAcao) {
        const newQM = this._QM + qtd;
        const newPM = ((this._PM * this._QM) + (preco * qtd) + taxa) / newQM;

        const indexAcao = this.props.database.carteira.map((item, index) => {
            if (item.id_acao == idAcao)
                return index;
            else
                return false;
        }).filter(item => item !== false);

        if (indexAcao.length) {
            this.props.database.carteira[indexAcao].qtd_media = newQM;
            this.props.database.carteira[indexAcao].preco_medio = newPM;
            this.props.database.carteira[indexAcao].prejuizo_acumulado = this._PA;
            this.props.database.carteira[indexAcao].resultado_auferido = this._RA;
            this.props.database.carteira[indexAcao].imposto = this._IR;

        } else {
            this.props.database.carteira.push({
                id_acao: idAcao,
                qtd_media: newQM,
                preco_medio: newPM,
                prejuizo_acumulado: this._PA,
                resultado_auferido: this._RA,
                imposto: this._IR
            });
        }

        this.props.database.historico.push({
            id_acao: idAcao,
            data: new Date().toLocaleString().split(' ')[0],
            tipo: 'compra',
            cod: this.props.database.acoes.filter(acao => acao.id_acao == idAcao)[0].cod,
            preco: preco,
            qtd: qtd,
            taxa_corretagem: taxa,
            prejuizo_acumulado: this._PA,
            resultado_auferido: this._RA,
            imposto: this._IR
        });

        localStorage.setItem(dbKey, JSON.stringify(this.props.database));
        window.location.reload();
    }

    vendaAcao(qtd, preco, taxa, idAcao) {
        this._RA = ((preco - this._PM) * qtd) - taxa;
        this._QM -= qtd;
        this.props.database.carteira[this.props.idx].qtd_media = this._QM;
        this.props.database.carteira[this.props.idx].resultado_auferido = this._RA;

        if (this._RA < 0) {
            this._PA += this._RA  * -1;
            this.props.database.carteira[this.props.idx].prejuizo_acumulado = this._PA;
        } else if (this._RA >= 0) {
            this._IR = (this._RA - Math.min(this._RA, this._PA)) * 0.15;
            this._PA = this._PA - Math.min(this._RA, this._PA);
            this.props.database.carteira[this.props.idx].prejuizo_acumulado = this._PA;
        }

        this.props.database.historico.push({
            id_acao: idAcao,
            data: new Date().toLocaleString().split(' ')[0],
            tipo: 'venda',
            cod: this.props.database.acoes.filter(acao => acao.id_acao == idAcao)[0].cod,
            preco: preco,
            preco_medio: this._PM,
            qtd: qtd,
            taxa_corretagem: taxa,
            prejuizo_acumulado: this._PA,
            resultado_auferido: this._RA,
            imposto: this._IR
        });

        localStorage.setItem(dbKey, JSON.stringify(this.props.database));
        window.location.reload();
    }

    _handleClickBuySell(btn) {
        const newState = {
            openModal: true,
            buyOrSell: btn.target.getAttribute('data-cv')
        };

        this.setState(newState);
    }

    closeModal() {
        this.setState({
            openModal: false
        })
    }


    render() {
        this._PM = this.props.precoMedio;
        this._QM = this.props.qtdMedia;
        if (!this.props.somenteCompra) {
            this._PA = this.props.database.carteira[this.props.idx].prejuizo_acumulado;
        }
        this._dadosAcao = this.props.database.acoes.filter(acao => acao.id_acao == this.props.idAcao)[0];


        return (
            <Card
                className="col m4 s12 indigo darken-4"
                textClassName="white-text"
                title={this._dadosAcao.cod}
            >

                {this.props.somenteCompra ? null :
                    <div>
                        <h6>Posição: {(this._PM * this._QM).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</h6>
                        <h6> Preço Médio: R$ {this._PM.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</h6>
                        <h6>Qtd: {this._QM}</h6>
                    </div>
                }
                <br/>

                <Button data-cv="compra" onClick={this._handleClickBuySell.bind(this)} className="green darken-5"
                        style={{marginRight: '10px', minWidth: '120px'}} waves="light">
                    Compra
                </Button>
                {this.props.somenteCompra ? null :
                    <Button data-cv="venda" onClick={this._handleClickBuySell.bind(this)} className="red darken-5"
                            style={{marginRight: '10px', minWidth: '120px'}} waves="light">
                        Venda
                    </Button>
                }
                {this.state.openModal ?
                    <ModalCV
                        compra={this.compraAcao.bind(this)}
                        venda={this.vendaAcao.bind(this)}
                        openModal={this.state.openModal}
                        dadosAcao={this._dadosAcao}
                        CV={this.state.buyOrSell}
                        closeUpdate={this.closeModal.bind(this)}
                        vendaMax={this.props.vendaMax}
                    />
                    : null
                }
            </Card>
        )
    }
}

export default CardAcao;