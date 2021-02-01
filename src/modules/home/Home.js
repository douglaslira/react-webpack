import React from 'react';
import SideBarComponent from '../../common/layout/sidebar/sidebar';

class Home extends React.Component {

    constructor(props, context) {
			super(props, context);
    }

    render() {
			return (
				<div className="app-main__outer">
					<div className="app-main__inner">
						Dashboard						
					</div>
				</div>
			)
    }
}

export default Home;