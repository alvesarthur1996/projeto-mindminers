import React, {Component} from 'react';
import CardAcao from "../components/CardAcao";
import {Card, Icon, Button, Modal, TextInput} from "react-materialize";
import {dbKey} from "../models/database";


class Acoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        }
    }

    componentWillMount() {
        this.setState({
            openModal: false
        })
    }

    _openModal() {
        this.setState({
            openModal: true
        })
    }

    _closeModal() {
        this.setState({
            openModal: false
        })
    }

    _handleSubmit(el){
        el.preventDefault();
        el.stopPropagation();

        const nome = el.target.querySelector('#nome').value;
        const codigo = el.target.querySelector('#codigo').value;
        this.novaAcao(nome, codigo);
    }

    novaAcao(nome, cod){
        let {acoes} = this.props.database;

        if(acoes.filter(item => item.cod == cod).length) {
            alert("Essa ação já está listada!");
            return false;
        }

        acoes.push({
            id_acao: String((acoes.length + 1)),
            nome: nome,
            cod: cod
        });
        
        this.props.database.acoes = acoes;
        localStorage.setItem(dbKey, JSON.stringify(this.props.database));
        window.location.reload();
    }



    render() {

        const {carteira, acoes} = this.props.database;

        return (
            <div className="row">
                <h3>Ações</h3>
                {
                    acoes.map((element, index) => {
                        const naCarteira = carteira.filter(item => item.id_acao === element.id_acao);

                        return (
                            <CardAcao
                                key={index}
                                idx={index}
                                idAcao={element.id_acao}
                                qtdMedia={naCarteira.length ? naCarteira[0].qtd_media : 0}
                                precoMedio={naCarteira.length ? naCarteira[0].preco_medio : 0}
                                database={this.props.database}
                                vendaMax={0}
                                somenteCompra={true}
                            />
                        )
                    })
                }
                <a className="new-btn" onClick={this._openModal.bind(this)}>
                    <Card
                        className="col m4 s12 indigo darken-4 add-new center"
                        textClassName="white-text"
                    >
                        <Icon large>add</Icon>
                    </Card>
                </a>
                {
                    this.state.openModal ?
                        <Modal
                            open={this.state.openModal}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="Adicionar Ação"
                            id={"novaAcao-"+acoes.length + 1}
                            options={{
                                onCloseEnd: this._closeModal.bind(this)
                            }}
                        >
                            <form onSubmit={this._handleSubmit.bind(this)}>
                                <TextInput
                                    id="nome"
                                    label="Nome da Empresa"
                                    required
                                />
                                <TextInput
                                    id="codigo"
                                    label="Código de negociação"
                                    maxLength="6"
                                    required
                                />
                                <Button className="indigo darken-4" waves="green"> Adicionar Ação </Button>
                            </form>
                        </Modal>
                        : null
                }

            </div>
        )
    }
}

export default Acoes;