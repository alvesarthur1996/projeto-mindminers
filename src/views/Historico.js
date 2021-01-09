import React, {Component} from 'react';
import HistoricoAcoes from "../components/HistoricoAcoes";

class Historico extends Component {


    render() {
        return (
            <div>
                <h3>Historico</h3>
                <HistoricoAcoes database={this.props.database} />
            </div>
        )
    }
};
export default Historico;
