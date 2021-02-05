import React from 'react';

class Footer extends React.Component {

    constructor(props, context) {
			super(props, context);
    }

    render() {
        return (
					<footer className="footer">
						<div className="row">
							<div className="col-6">
							<p className="text-left">Digital FrontEnd - ALTRAN</p>
							</div>
							<div className="col-6">
								<p className="text-right">by Douglas Lira - 2020</p>
							</div>
						</div>
					</footer>
        )
    }
}

export default Footer;
