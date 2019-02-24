import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import douglaslira from "../../assets/images/douglaslira.jpg";

library.add(faFacebook, faLinkedin, faGithub);

class About extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-5 center-card">
                        <div className="card profile-card">
                            <img src={douglaslira} alt="profile-image" className="profile"/>
                            <div className="card-content">
                                <h2>Douglas Lira<small>System Analyst</small></h2>
                                <div className="icon-block">
                                    <a href="https://www.facebook.com/douglas.lira.web" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                                    <a href="https://www.linkedin.com/in/douglaslira" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                                    <a href="https://github.com/douglaslira" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;
