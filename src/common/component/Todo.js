import React from 'react';

class Todo extends React.Component {

    remove(id) {
        this.props.remove(id);
    }

    render() {
        return (
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{this.props.title}</h5>
                        </div>
                        <small>{this.props.description}</small>
                    </div>
                    <div className="col-4">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary">Editar</button>
                            <button type="button" className="btn btn-danger" onClick={() => this.remove(this.props.id)}>Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;