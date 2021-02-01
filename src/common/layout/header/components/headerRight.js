import React from 'react';
import { connect } from "react-redux";

import douglaslira from "../../../../assets/images/douglaslira.jpg";

const mapStateToProps = state => {
	return { auth: state.auth };
};

class HeaderRight extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		const { auth } = this.props;

		return (
			<div className="header-btn-lg pr-0">
				<div className="widget-content p-0">
					<div className="widget-content-wrapper">
						<div className="widget-content-left">
							<div className="btn-group">
								<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
									<img width="42" className="rounded-circle" src={douglaslira} alt="" />
									<i className="fa fa-angle-down ml-2 opacity-8"></i>
								</a>
								<div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
									<button type="button" tabIndex="0" className="dropdown-item">User Account</button>
									<button type="button" tabIndex="0" className="dropdown-item">Settings</button>
									<h6 tabIndex="-1" className="dropdown-header">Header</h6>
									<button type="button" tabIndex="0" className="dropdown-item">Actions</button>
									<div tabIndex="-1" className="dropdown-divider"></div>
									<button type="button" tabIndex="0" className="dropdown-item">Dividers</button>
								</div>
							</div>
						</div>
						<div className="widget-content-left  ml-3 header-user-info">
							<div className="widget-heading">
								{auth.profileInfo.firstName} {auth.profileInfo.lastName}
							</div>
							<div className="widget-subheading">
								Administrator
							</div>
						</div>
						<div className="widget-content-right header-user-info ml-3">
							<button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
								<i className="fa text-white fa-calendar pr-1 pl-1"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
}

const HeaderRightComponent = connect(mapStateToProps)(HeaderRight);

export default HeaderRightComponent
