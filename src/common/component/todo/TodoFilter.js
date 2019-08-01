import React from 'react';
import { withRouter } from "react-router";

class TodoFilter extends React.Component {

    toggleChange(obj) {
        this.props.sendFilter(obj);
    }

    add() {
        this.props.history.push("/todo");
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" checked={this.props.isChecked === 0} value="1" onChange={() => this.toggleChange(0)} />
                            <label className="form-check-label">Todos</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" checked={this.props.isChecked === 1} value="1" onChange={() => this.toggleChange(1)} />
                            <label className="form-check-label">Aberto</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" checked={this.props.isChecked === 2} value="2" onChange={() => this.toggleChange(2)} />
                            <label className="form-check-label">Fechado</label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary" onClick={() => this.add()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TodoFilter);