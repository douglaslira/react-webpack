import React from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/index";
import { TodoService } from "../../common/component/todo/service/TodoService";
import todoApi from '../../common/service/todoApi';

function mapDispatchToProps(dispatch) {
    return {
        addTask: task => dispatch(addTask(task))
    };
}

class Todo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id || new Date().getUTCMilliseconds(),
            title: '',
            description: '',
            status: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        let taskID = this.props.match.params.id || 0;
        let self = this;
        if(taskID) {
            todoApi.getTasks(taskID).then((response) => {
                response.id = ''+response.id;
                self.setState(response);
            });
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
            id: new Date().getUTCMilliseconds(),
            title: '',
            description: '',
            status: 1
        });
        
        //if(params.state.id) {
        //    todoApi.updateTasks(params.state).then(function(response){
        //        if(response.status){
        //            params.setState({
        //                title: '',
        //                description: '',
        //                status: 1
        //            });
        //            params.props.history.push("/");
        //        }
        //    });
        //} else {
        //    this.props.addTask(params.state);
        //    todoApi.createTasks(params.state).then(function(response){
        //        if(response.status){
        //            params.setState({
        //                title: '',
        //                description: '',
        //                status: 1
        //            });
        //            params.props.history.push("/");
        //        }
        //    });
        //}
    };

    render() {

        let { id } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Título</label>
                            <input type="text" className="form-control" value={this.state.title} onChange={event => this.setState({ title: event.target.value })} placeholder="Digite um título" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Status</label>
                            <select className="form-control" value={this.state.status} onChange={event => this.setState({ status: event.target.value })}>
                                <option>- Selecione um status -</option>
                                <option value="1">Aberto</option>
                                <option value="2">Fechado</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <textarea className="form-control" value={this.state.description} onChange={event => this.setState({ description: event.target.value })} placeholder="Digite uma descrição"></textarea>
                    </div>
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group mr-1" role="group">
                            <button type="submit" className="btn btn-primary">{ id ? 'Atualizar' : 'Cadastrar'}</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-danger" onClick={() => this.cancel()}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const TodoForm = connect(null, mapDispatchToProps)(Todo);

export default withRouter(TodoForm);