import React from 'react';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
	return {
		getTask: () => dispatch()
	};
}

const mapStateToProps = state => {
	return { infoHeader: state };
};

class HeaderLeft extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		return (
			<>
				<div className="search-wrapper">
					<div className="input-holder">
						<input type="text" className="search-input" placeholder="Type to search" />
						<button className="search-icon"><span></span></button>
					</div>
					<button className="close"></button>
				</div>
				<ul className="header-menu nav">
					<li className="nav-item">
						<a href="#" className="nav-link">
							<i className="nav-link-icon fa fa-database"> </i>
							Statistics
						</a>
					</li>
					<li className="btn-group nav-item">
						<a href="#" className="nav-link">
							<i className="nav-link-icon fa fa-edit"></i>
							Projects
						</a>
					</li>
					<li className="dropdown nav-item">
						<a href="#" className="nav-link">
							<i className="nav-link-icon fa fa-cog"></i>
							Settings
						</a>
					</li>
				</ul>
			</>
		)

	}
}

const HeaderLeftComponent = connect(mapStateToProps, mapDispatchToProps)(HeaderLeft);

export default HeaderLeftComponent
