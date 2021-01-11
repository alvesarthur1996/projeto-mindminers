import React, {Component} from 'react';
import RelatorioVendas from "../components/RelatorioVendas";
import {Collapsible, CollapsibleItem, Icon} from "react-materialize";
import Grafico from "../components/Grafico";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    changeIcon(el) {
        if (el.target.className.indexOf('collapsible-header') == -1 && el.target.parentElement.className.indexOf('collapsible-header') == -1)
            return false;

        if (el.target.closest('li').querySelector("i.material-icons").innerHTML == "expand_more")
            el.target.closest('li').querySelector("i.material-icons").innerHTML = "expand_less";
        else
            el.target.closest('li').querySelector("i.material-icons").innerHTML = "expand_more";
    }

    render() {
        return (
            <div>
                <div className="container-graficos">
                    <div className="center-align">
                        <h5>Quantidade de ativos na carteira</h5>
                        <Grafico carteira database={this.props.database}/>
                    </div>
                    <div className="center-align">
                        <h5>Patrimônio por ativo</h5>
                        <Grafico patrimonio database={this.props.database}/>
                    </div>
                </div>

                <br/>

                <Collapsible accordion={false} popout>
                    <CollapsibleItem
                        expanded={false}
                        header={<b>Relatório de Vendas / Impostos a pagar</b>}
                        icon={<Icon>expand_more</Icon>}
                        node="div"
                        onClick={this.changeIcon}
                    >
                        <RelatorioVendas database={this.props.database}/>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}

export default Home;
