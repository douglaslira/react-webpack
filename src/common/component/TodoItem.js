import React from 'react';
import { withRouter } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faTrash);

class Todo extends React.Component {

    remove(id) {
        this.props.remove(id);
    }

    edit(id) {
        this.props.history.push(`/todo/${id}`);
    }

    render() {
        
        function formatStatus(code) {
            switch (code) {
                case 1:
                    return (<span className="badge badge-primary">A</span>);
                case 2:
                    return (<span className="badge badge-danger">F</span>);
                default:
                    break;
            }
        }

        return (
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-10">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{formatStatus(this.props.status)} {this.props.title}</h5>
                        </div>
                        <small>{this.props.description}</small>
                    </div>
                    <div className="col-2">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary" onClick={() => this.edit(this.props.id)}><FontAwesomeIcon icon={faEdit} /></button>
                            <button type="button" className="btn btn-danger" onClick={() => this.remove(this.props.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Todo);