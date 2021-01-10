import React, {Component} from 'react';
import RelatorioVendas from "../components/RelatorioVendas";
import {Collapsible, CollapsibleItem, Icon} from "react-materialize";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    changeIcon(el) {
        if(el.target.className.indexOf('collapsible-header') == -1 && el.target.parentElement.className.indexOf('collapsible-header') == -1)
            return false;

        if (el.target.closest('li').querySelector("i.material-icons").innerHTML == "expand_more")
            el.target.closest('li').querySelector("i.material-icons").innerHTML = "expand_less";
        else
            el.target.closest('li').querySelector("i.material-icons").innerHTML = "expand_more";
    }

    render() {
        return (
            <div>
                <h3></h3>
                <br/>
                <Collapsible accordion={false} popout>
                    <CollapsibleItem
                        expanded={false}
                        header={<b>Relatório de Vendas</b>}
                        icon={<Icon>expand_more</Icon>}
                        node="div"
                        onClick={this.changeIcon}
                    >
                        <RelatorioVendas database={this.props.database}/>
                    </CollapsibleItem>
                    <br/>
                </Collapsible>
            </div>
        )
    }
}

export default Home;
