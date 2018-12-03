import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { LoginService } from "../../modules/login/service/LoginService";

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            logged: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({
            logged: this.props.isLoggedIn()
        })
    }

    render() {

        const { location } = this.props;
        const { logged } = this.state;
        const checkRouter = (node) => {
            if(location.pathname === node){
                return {backgroundColor: "#000", color: "#FFF"};
            }
        };

        return (
            <div>
                <div className="header clearfix">
                    <nav>
                        <ul className="nav nav-pills float-right">
                            <li className="nav-item">
                                <Link className="nav-link" style={checkRouter('/panel')} to='panel'>Panel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={checkRouter('/')} to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={checkRouter('/about')} to='about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={checkRouter('/contact')} to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <h3 className="text-muted">React with webpack</h3>
                </div>

                <div className="jumbotron">
                    <h1 className="display-3">React with Webpack</h1>
                    <p className="lead">Project to study what better way with react + webpack. {logged ? <Link className="nav-link" to='login'>Logout</Link> : '' }</p>
                    <p><a className="btn btn-lg btn-success" href="https://github.com/douglaslira/react-webpack" role="button" target="_blank">Github</a></p>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
