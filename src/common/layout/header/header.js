import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { LoginService } from "../../../modules/login/service/LoginService";
import HeaderLogoComponent from "./components/headerLogo";
import HeaderLeftComponent from "./components/headerLeft";
import HeaderRightComponent from "./components/headerRight";

const mapStateToProps = state => {
	return { auth: state.auth };
};

class Header extends React.Component {

    constructor(props, context) {
			super(props, context);
			this.state = {
				logged: LoginService.checkLogin()
			};
			this.logout = this.logout.bind(this);
    }

    logout() {
			LoginService.logout();
			window.location.reload();
    }

    render() {

        const { auth } = this.props;

        return (
					<>
						{ 
							
							auth.isLogged ? (

							<div className="app-header header-shadow">
								<HeaderLogoComponent />
								<div className="app-header__content">
									<div className="app-header-left">
										<HeaderLeftComponent />
									</div>
									<div className="app-header-right">
										<HeaderRightComponent />
									</div>
								</div>
							</div>

						) : (
							<div></div>
						)
					
					}
					</>
        )
    }
}

const HeaderComponent = connect(mapStateToProps)(Header);

export default HeaderComponent;
