import React, {Component} from 'react';
import {Navbar, Icon} from "react-materialize";
import {Link} from "react-router-dom";
import Logo from '../assets/svg/mind_miners_logo.svg'

class NavMenu extends Component {

    render() {
        return (
            <Navbar
                alignLinks="right"
                brand={
                    <Link className="brand-logo center-align" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                }
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                className="indigo darken-4"
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <Link to="/"><Icon left>home</Icon> Home </Link>
                <Link to="/carteira"><Icon left>account_balance_wallet</Icon> Carteira </Link>
                <Link to="/acoes"><Icon left>show_chart</Icon> Ações </Link>
                <Link to="/historico"><Icon left>history</Icon> Histórico </Link>
            </Navbar>
        )
    }
}

export default NavMenu;