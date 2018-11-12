import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="header clearfix">
                    <nav>
                        <ul className="nav nav-pills float-right">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <h3 className="text-muted">Project name</h3>
                </div>

                <div className="jumbotron">
                    <h1 className="display-3">Jumbotron heading</h1>
                    <p className="lead">LOREM</p>
                    <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
                </div>
            </div>
        )
    }
}

export default Header;