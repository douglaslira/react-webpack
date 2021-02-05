import React from 'react';

import TodoContentComponent from "../../common/component/todo/TodoContent";

class Home extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="container">
				<h1>Lista de Atividades</h1>
				<TodoContentComponent />
			</div>
		)
	}
}

export default Home;
