import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.css';

import { PrivateRoute } from "./common/component/PrivateRoute";

import App from "./modules/App";
import About from "./modules/about/About";
import Home from "./modules/home/Home";
import Contact from "./modules/contact/Contact";
import Panel from "./modules/panel/Panel";
import Login from "./modules/login/Login";
import { FakeBackend } from "./common/fakebackend/FakeBackend";

const newHistory = createBrowserHistory();
FakeBackend();

render(
    <Router history={newHistory}>
        <App>
            <Route path="/login" component={Login}/>
            <PrivateRoute exact={true} path="/" component={Home}/>
            <PrivateRoute path="/panel" component={Panel}/>
            <PrivateRoute path="/about" component={About}/>
            <PrivateRoute path="/contact" component={Contact}/>
        </App>
    </Router>,
    document.getElementById('app')
);
