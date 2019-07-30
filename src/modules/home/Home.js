import React from 'react';

import TodoList from "../../common/component/TodoList";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <h1>Lista de Atividades</h1>
                <TodoList />
            </div>
        )
    }
}

export default Home;