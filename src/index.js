import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.css';

import App from "./modules/App";
import About from "./modules/about/About";
import Home from "./modules/home/Home";
import Contact from "./modules/contact/Contact";

const newHistory = createBrowserHistory();

render(
    <Router history={newHistory}>
        <App>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </App>
    </Router>,
    document.getElementById('app')
);