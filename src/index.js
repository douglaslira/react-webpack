import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import style from './assets/styles/style.scss';

import App from "./modules/App";
import { FakeBackend } from "./common/fakebackend/FakeBackend";

FakeBackend();

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('app')
);
