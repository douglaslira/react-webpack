import React from 'react';
import Header from "../common/layout/header";
import Footer from "../common/layout/footer";
import { LoginService } from "./login/service/LoginService";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        console.log("OPA");
    }

    render() {

        const { children } = this.props;
        const isChecked = () => {
            return LoginService.checkLogin();
        }

        return (
            <div className="container">
                <Header isLoggedIn={isChecked} />
                <div className="row marketing">
                    { children }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
