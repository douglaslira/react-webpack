import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TaskService } from "../../common/service/taskService";
import { getTask, addTask } from "../../redux/actions/task/taskActions";

class Todo extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			id: this.props.match.params.id || 0,
			title: '',
			description: '',
			status: 1
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {

		const { tasks } = this.props;
		let taskID = this.props.match.params.id || 0;
		let self = this;
		if(taskID && tasks) {
			const pos = tasks.findIndex(item => item.id === parseInt(taskID));
			self.setState(tasks[pos]);
		}

	}

	cancel() {
		this.props.history.push("/");
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		let params = this;
		this.props.addTask(params.state);
		params.setState({
			id: 0,
			title: '',
			description: '',
			status: 1
		});
		this.props.history.push("/");
	};

	render() {

		const { tasks } = this.props;

		return (

			tasks ? (
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label>Título</label>
								<input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Digite um título" />
							</div>
							<div className="form-group col-md-6">
								<label>Status</label>
								<select className="form-control" id="status" name="status" value={this.state.status} onChange={this.handleChange}>
									<option>- Selecione um status -</option>
									<option value="1">Aberto</option>
									<option value="2">Fechado</option>
								</select>
							</div>
						</div>
						<div className="form-group">
							<label>Descrição</label>
							<textarea id="description" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} placeholder="Digite uma descrição"></textarea>
						</div>
						<div className="btn-toolbar" role="toolbar">
								<div className="btn-group mr-1" role="group">
									<button type="submit" className="btn btn-primary">{ this.state.id ? 'Atualizar' : 'Cadastrar'}</button>
								</div>
								<div className="btn-group" role="group">
									<button type="button" className="btn btn-danger" onClick={() => this.cancel()}>Cancelar</button>
								</div>
						</div>
					</form>
				</div>
			) : (<>Waiting..</>)

		)
	}
}

const mapStateToProps = state => {
	return { tasks: state.todoObj?.tasks };
};
const mapDispatchToProps = dispatch => bindActionCreators({ getTask, addTask }, dispatch);
const TodoForm = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoForm;
