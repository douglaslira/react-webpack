import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import TodoFilter from "./TodoFilter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTask, removeTask, filterTask } from "../../../redux/actions/task/taskActions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faTrash);

class TodoContent extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false,
			isChecked: 0
		};
		this.remove = this.remove.bind(this);
		this.edit = this.edit.bind(this);
	}

	filterList(status) {
		this.setState({loading: true, isChecked: status});
		this.props.getTask(status);
	}

	remove(id) {
		this.props.removeTask(id);
		this.props.getTask(0);
	}

	edit(id) {
		this.props.history.push(`/todo/${id}`);
	}

	render() {

		let { tasks } = this.props;

		function formatStatus(code) {
			switch (code) {
				case 1:
					return (<span className="badge badge-primary">Open</span>);
				case 2:
					return (<span className="badge badge-danger">Closed</span>);
				default:
					break;
			}
		}

		return (

			<div>
				<div className="card mb-1">
					<div className="card-body">
						<h5 className="card-title">Filter by</h5>
						<TodoFilter {...this.state} sendFilter={this.filterList.bind(this)} />
					</div>
				</div>

				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Tasks</h5>
						<div className="list-group">
						{
							tasks.map((todo, index) =>
								<div key={index} className="list-group-item list-group-item-action">
									<div className="row">
										<div className="col-10">
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-1">{formatStatus(todo.status)} {todo.title}</h5>
											</div>
											<small>{todo.description}</small>
										</div>
										<div className="col-2">
											<div className="btn-group" role="group">
												<Link className="btn btn-primary" to={`/todo/${todo.id}`}>
													<FontAwesomeIcon icon={faEdit} />
												</Link>
												<button type="button" className="btn btn-danger" onClick={() => this.remove(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
											</div>
										</div>
									</div>
								</div>
							)
						}
						</div>
					</div>
				</div>
			</div>

		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ getTask, removeTask, filterTask }, dispatch);
const mapStateToProps = state => {
	return { tasks: state.todoObj.tasks };
};

const TodoContentComponent = connect(mapStateToProps, mapDispatchToProps)(TodoContent);
export default TodoContentComponent
