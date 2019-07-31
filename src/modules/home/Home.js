import React from 'react';

import TodoContent from "../../common/component/TodoContent";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <h1>Lista de Atividades</h1>
                <TodoContent />
            </div>
        )
    }
}

export default Home;