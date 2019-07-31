import React from 'react';
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import { TodoService } from "./service/TodoService";

class TodoContent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
            isChecked: 0,
            list: []
        };
    }

    componentDidMount() {
        TodoService.getTasks().then((response)=>{
            this.setState({list: response});
        });
    }

    filterList(status) {
        this.setState({loading: true, isChecked: status});
        TodoService.getTasks().then((response)=>{
            let listFilter = [];
            if(status === 0) {
                listFilter = response;
            } else {
                listFilter = response.filter((obj)=>{
                    return obj.status === status;
                });
            }
            this.setState({list: listFilter, loading: false});
        });
    }

    removeTask(id) {
        this.setState({loading: true});
        TodoService.removeTasks({id: id}).then((response)=>{
            this.setState({list: response, loading: false});
        });
    }

    render() {

        let { list, loading } = this.state;

        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Filtros</h5>
                        <TodoFilter {...this.state} sendFilter={this.filterList.bind(this)} />
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Atividades</h5>
                        <div className="list-group">
                            { list.length && !loading ? (
                                list.map((todo) => 
                                    <TodoItem {...todo} key={todo.id} remove={this.removeTask.bind(this)} />
                                )
                            ) : <p><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></p>}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TodoContent;