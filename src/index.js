import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import style from './assets/styles/style.scss';

import { Provider } from "react-redux";
import store from "./redux/store/index";

import App from "./modules/App";
import { FakeBackend } from "./common/fakebackend/FakeBackend";

FakeBackend();

render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
