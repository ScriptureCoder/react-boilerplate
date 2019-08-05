import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./assets/css/style.css"
import Login from "./components/login";
import { Routes } from './routes';
import {Token} from "./config";
import ErrorPage from "./components/error";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {Routes.map((route, index) => (
                        <Route path={route.path} key={index} exact strict component={Token?route.component:Login}/>
                    ))}
                    <Route path={"*"} exact strict component={Token?ErrorPage:Login}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
