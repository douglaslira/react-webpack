import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthService } from "../../common/service/authService";

class Header extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.logout = this.logout.bind(this);
	}

	logout() {
		AuthService.logout();
		window.location.reload();
	}

	render() {

		const { auth } = this.props;

		return (
			<div>
				{
					auth.isLogged ? (
						<div>
							<div className="header clearfix">
								<nav>
									<ul className="nav nav-pills float-right">
										<li className="nav-item">
											<Link className="nav-link" to='/'>Home</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to='about'>About</Link>
										</li>
										{ auth.isLogged ? <li className="nav-item"><button className="btn btn-danger" onClick={this.logout}>Logout</button></li> : '' }
									</ul>
								</nav>
								<h3 className="text-muted">React + Redux + Webpack</h3>
							</div>
						</div>
					) : (
						<div></div>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { auth: state.authObj };
};
const HeaderComponent = connect(mapStateToProps)(Header);
export default HeaderComponent;
