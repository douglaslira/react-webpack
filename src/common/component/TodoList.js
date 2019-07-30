import React from 'react';
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";

const listOfTodo = [
    {
        id: 1,
        title: "Task 01",
        description: "Description task 01",
        status: 1
    }, {
        id: 2,
        title: "Task 02",
        description: "Description task 02",
        status: 2
    }, {
        id: 3,
        title: "Task 03",
        description: "Description task 03",
        status: 1
    }
];

class ListTodo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isChecked: 0,
            list: listOfTodo
        };
    }

    filterList(status) {
        let listFilter = [];
        if(status === 0) {
            listFilter = listOfTodo;
        } else {
            listFilter = listOfTodo.filter((obj)=>{
                return obj.status === status;
            });
        }
        this.setState({isChecked: status, list: listFilter});
    }

    removeTask(id) {
        let indexOfTask = listOfTodo.findIndex((obj)=>{
            return obj.id === id;
        });
        listOfTodo.splice(indexOfTask, 1);
        this.setState({list: listOfTodo});
    }

    render() {

        let { list } = this.state;

        return (
            <div>
                <TodoFilter {...this.state} sendFilter={this.filterList.bind(this)} />
                <div className="list-group">
                {
                    list.map((todo) => 
                        <Todo {...todo} key={todo.id} remove={this.removeTask.bind(this)}/>
                    )
                }
                </div>
            </div>
        )
    }
}

export default ListTodo;