import React from 'react';
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";
import { TodoService } from "./service/TodoService";

class ListTodo extends React.Component {

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
                <TodoFilter {...this.state} sendFilter={this.filterList.bind(this)} />
                <div className="list-group">
                { list.length && !loading ? (
                    list.map((todo) => 
                        <Todo {...todo} key={todo.id} remove={this.removeTask.bind(this)}/>
                    )
                ) : <p>Carregando...</p>}
                </div>
            </div>
        )
    }
}

export default ListTodo;