import React from 'react';
import Header from "../common/layout/header";
import Footer from "../common/layout/footer";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const { children } = this.props;

        return (
            <div className="container">
                <Header/>
                <div className="row marketing">
                    { children }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;