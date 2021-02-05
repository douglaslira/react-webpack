import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import HeaderComponent from '../common/layout/header';
import Footer from "../common/layout/footer";
import { PrivateRoute } from "../common/component/privateroute/PrivateRoute";

import About from "./about/About";
import Home from "./home/Home";
import Todo from "./todo/Todo";
import AuthComponent from "./auth/Auth";

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		return (
			<div className="container-fluid">
				<HeaderComponent />
				<div className="row marketing">
					<Switch>
						<Route path="/auth" component={AuthComponent}/>
						<PrivateRoute exact={true} path="/" component={Home} />
						<PrivateRoute path="/todo/:id?" component={Todo} />
						<PrivateRoute path="/about" component={About} />
					</Switch>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;
