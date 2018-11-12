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
                    <h3 className="text-muted">React with webpack</h3>
                </div>

                <div className="jumbotron">
                    <h1 className="display-3">React with Redux</h1>
                    <p className="lead">Project to study what better way with react + redux + webpack.</p>
                    <p><a className="btn btn-lg btn-success" href="https://github.com/douglaslira/react-webpack" role="button" target="_blank">Github</a></p>
                </div>
            </div>
        )
    }
}

export default Header;