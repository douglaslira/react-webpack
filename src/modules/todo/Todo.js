import React from 'react';
import { withRouter } from "react-router";
import { TodoService } from "../../common/component/service/TodoService";

class Todo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            status: 1
        };
    }

    componentWillMount() {
        let taskID = this.props.match.params.id || 0;
        let self = this;
        if(taskID) {
            TodoService.getTasks(taskID).then((response) => {
                self.setState(response[0]);
            });
        }
    }

    cancel() {
        this.props.history.push("/");
    }

    handleSubmit(event) {
        event.preventDefault();
        let params = this;
        if(params.state.id) {
            TodoService.updateTasks(params.state).then(function(response){
                if(response.status){
                    params.setState({
                        title: '',
                        description: '',
                        status: 1
                    });
                    params.props.history.push("/");
                }
            });
        } else {
            TodoService.createTasks(params.state).then(function(response){
                if(response.status){
                    params.setState({
                        title: '',
                        description: '',
                        status: 1
                    });
                    params.props.history.push("/");
                }
            });
        }
    };

    render() {

        let { id } = this.state;

        return (
            <div className="container">
                <form>
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
                            <button className="btn btn-primary" onClick={() => this.handleSubmit(event)}>{ id ? 'Atualizar' : 'Cadastrar'}</button>
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

export default withRouter(Todo);