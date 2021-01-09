import M from "materialize-css";
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./views/Home";
import Carteira from "./views/Carteira";
import Acoes from "./views/Acoes";
import Historico from "./views/Historico";
import {dbInitData} from "./models/database"

class App extends Component {

    constructor() {
        super();

        this.database = {};
    }

    componentWillMount() {
        this.setDatabase();
        console.log(this.database);
    }


    setDatabase() {
        const validate = localStorage.getItem('@projeto-mindminers/db') !== null;
        if (!validate)
            localStorage.setItem('@projeto-mindminers/db', JSON.stringify(dbInitData));

        this.database = JSON.parse(localStorage.getItem('@projeto-mindminers/db'));

        return JSON.parse(localStorage.getItem('@projeto-mindminers/db'));
    }

    render() {
        return (
            <div>
                <Router>
                    <NavMenu/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <Home database={this.database} />
                            </Route>

                            <Route exact path="/carteira">
                                <Carteira database={this.database}/>
                            </Route>

                            <Route exact path="/acoes">
                                <Acoes database={this.database}/>
                            </Route>

                            <Route exact path="/historico">
                                <Historico database={this.database}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;
