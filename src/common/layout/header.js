import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { LoginService } from "../../modules/login/service/LoginService";

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            logged: LoginService.checkLogin()
        };

        this.logout = this.logout.bind(this);
    }

    logout() {
        LoginService.logout();
        window.location.reload();
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if(LoginService.checkLogin()){
                this.setState({
                    logged: true
                })
            };
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {

        const { logged } = this.state;

        return (
            <div>
                {
                    logged ? (
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
                                        <li className="nav-item">
                                            <Link className="nav-link" to='contact'>Contact</Link>
                                        </li>
                                        { logged ? <li className="nav-item"><button className="btn btn-danger" onClick={this.logout}>Logout</button></li> : '' }
                                    </ul>
                                </nav>
                                <h3 className="text-muted">React with webpack</h3>
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

export default withRouter(Header);
