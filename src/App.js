import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import "./assets/css/style.css"
import Login from "./components/login";
import { Routes } from './routes';

class App extends Component {
    render() {
        const auth = localStorage.getItem('xse-auth');
        return (
            <Router>
                <Switch>
                    {Routes.map((route, index) => (
                        <Route path={route.path} key={index} exact strict component={auth?route.component:Login}/>
                    ))}
                    {/*<Route path={"*"} exact strict component={NotFound}/>*/}
                </Switch>
            </Router>
        );
    }
}

export default App;
