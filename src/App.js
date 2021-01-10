import M from "materialize-css";
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./views/Home";
import Carteira from "./views/Carteira";
import Acoes from "./views/Acoes";
import Historico from "./views/Historico";
import {dbInitData, dbKey} from "./models/database"
import "./assets/styles/app.scss";

class App extends Component {

    constructor() {
        super();

        this.database = {};
    }

    componentWillMount() {
        this.setDatabase();
    }


    setDatabase() {
        const validate = localStorage.getItem(dbKey) !== null;
        if (!validate)
            localStorage.setItem(dbKey, JSON.stringify(dbInitData));

        this.database = JSON.parse(localStorage.getItem(dbKey));

        return JSON.parse(localStorage.getItem(dbKey));
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
