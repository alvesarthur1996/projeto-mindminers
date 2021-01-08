import M from 'materialize-css';
import {Button, Card, Row, Col} from 'react-materialize';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/teste"> Teste </Link>
                </li>
            </ul>

            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </Route>
                <Route exact path="/teste">
                    Olá mundo
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
