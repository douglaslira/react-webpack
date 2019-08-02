import React from 'react';
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import { TodoService } from "./service/TodoService";
import todoApi from '../../service/todoApi';
import { connect } from "react-redux";
import { getTask } from "../../../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        getTask: () => dispatch(getTask())
    };
}

const mapStateToProps = state => {
    return { tasks: state.tasks };
};

class TodoContent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            isChecked: 0
        };
    }

    filterList(status) {
        this.setState({loading: true, isChecked: status});
        todoApi.getTasks().then((response)=>{
            let listFilter = response;
            if(status !== 0) {
                listFilter = response.filter((obj)=>{
                    return obj.status === status;
                });
            }
            this.setState({list: listFilter, loading: false});
        });
    }

    removeTask(id) {
        this.setState({loading: true});
        todoApi.removeTasks({id: id}).then((response)=>{
            this.setState({loading: false});
        }).then(()=>{
            todoApi.getTasks().then((response)=>{
                this.setState({list: response});
            });
        });
    }

    render() {

        let { loading } = this.state;
        let { tasks } = this.props;

        return (
            <div>
                <div className="card mb-1">
                    <div className="card-body">
                        <h5 className="card-title">Filtros</h5>
                        <TodoFilter {...this.state} sendFilter={this.filterList.bind(this)} />
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Atividades</h5>
                        <div className="list-group">
                            { tasks.length && !loading ? (
                                tasks.map((todo) => 
                                    <TodoItem {...todo} key={todo.id} remove={this.removeTask.bind(this)} />
                                )
                            ) : <p>{ tasks.length === 0 && !loading ? <span>Nenhuma atividade com este status</span> : <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> } </p>}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const TodoBla = connect(mapStateToProps, mapDispatchToProps)(TodoContent);

export default TodoBla