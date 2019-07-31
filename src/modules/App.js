import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from "../common/layout/header";
import Footer from "../common/layout/footer";
import { PrivateRoute } from "../common/component/PrivateRoute";

import About from "./about/About";
import Home from "./home/Home";
import Todo from "./todo/Todo";
import Login from "./login/Login";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            logged: false
        }
    }

    render() {

        return (
            <div className="container-fluid">
                <Header />
                <div className="row marketing">
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute exact={true} path="/" component={Home} />
                        <PrivateRoute path="/todo" component={Todo} />
                        <PrivateRoute path="/about" component={About} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
