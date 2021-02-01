import React from 'react';
import { connect } from "react-redux";
import { LoginService } from "../../../modules/login/service/LoginService";

const mapStateToProps = state => {
	return { auth: state.auth };
};

class SideBar extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const { auth } = this.props;

		return (
			<>
				{
					
					auth.isLogged ? (

						<div className="app-sidebar sidebar-shadow">
							<div className="app-header__logo">
								<div className="logo-src"></div>
								<div className="header__pane ml-auto">
									<div>
										<button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
											<span className="hamburger-box">
												<span className="hamburger-inner"></span>
											</span>
										</button>
									</div>
								</div>
							</div>
							<div className="app-header__mobile-menu">
								<div>
									<button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
										<span className="hamburger-box">
											<span className="hamburger-inner"></span>
										</span>
									</button>
								</div>
							</div>
							<div className="app-header__menu">
								<span>
									<button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
										<span className="btn-icon-wrapper">
											<i className="fa fa-ellipsis-v fa-w-6"></i>
										</span>
									</button>
								</span>
							</div>
							<div className="scrollbar-sidebar">
								<div className="app-sidebar__inner">
									<ul className="vertical-nav-menu">
										<li className="app-sidebar__heading">Dashboards</li>
										<li>
											<a href="index.html" className="mm-active">
												<i className="metismenu-icon pe-7s-rocket"></i> Dashboard
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

					) : (<div></div>)

				}
			</>
		)

	}
}

const SideBarComponent = connect(mapStateToProps)(SideBar);

export default SideBarComponent;