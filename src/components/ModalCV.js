import React,{Component} from 'react'
import {Modal, Button, TextInput} from "react-materialize";

class ModalCV extends Component {
	render(){
	    console.log(this.props);
		return (
            <Modal
                actions={[
                    <Button onClick={this.props.closeUpdate} flat modal="close" node="button" waves="red">Cancelar</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header={this.props.dadosAcao.nome}
                id={"mdlAcao-"+this.props.dadosAcao.id_acao}
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
                <h6>Ordem de {this.props.CV}</h6>

                <br/>
                <form>
                    <TextInput
                        id="qtd"
                        label="Quantidade"
                        type="number"
                        min="1"
                        step="1"
                    />
                    <TextInput
                        id="preco"
                        label="Preço"
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                    <TextInput
                        id="taxa"
                        label="Taxa de Corretagem"
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </form>
            </Modal>
		)
	}
}

export default ModalCV;