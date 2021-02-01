import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import HeaderComponent from "../common/layout/header/header";
import SideBarComponent from "../common/layout/sidebar/sidebar";
import Footer from "../common/layout/footer";
import { PrivateRoute } from "../common/component/privateroute/PrivateRoute";
import indexRoutes from "../routers";

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			logged: false
		}
	}

	render() {

		return (
			<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
				<HeaderComponent />
				<div class="app-main">

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

export default App;
