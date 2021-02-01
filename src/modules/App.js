import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators  } from "redux"

import HeaderComponent from "../common/layout/header/header";
import SideBarComponent from "../common/layout/sidebar/sidebar";
import Footer from "../common/layout/footer";
import { PrivateRoute } from "../common/component/privateroute/PrivateRoute";
import indexRoutes from "../routers";

import { LoginService } from "./login/service/LoginService";
import { loginAction } from '../redux/actions/auth/authActions';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		const checkUser = LoginService.checkLogin();
		if(checkUser && checkUser.isLogged) {
			this.props.loginAction(checkUser);
		}
	}

	render() {

		return (
			<div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
				<HeaderComponent />
				<div className="app-main">

					<SideBarComponent />

					<Switch>
						{
							indexRoutes.map((prop, key) => {
								if(prop.restrict) {
									return <PrivateRoute path={prop.path} key={key} component={prop.component} />;
								}
          			return <Route path={prop.path} key={key} component={prop.component} />;
        			})
						}
					</Switch>
				</div>
				<Footer/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({ loginAction }, dispatch);

const AppComponent = connect(null, mapDispatchToProps)(App);

export default AppComponent;
