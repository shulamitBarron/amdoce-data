import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Home from "./containers/Home";
import DataPage from "./containers/Data";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/Home"}>Chaya Kolin</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Home' component={Home}/>
                    <Route path="/Data" component={DataPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
