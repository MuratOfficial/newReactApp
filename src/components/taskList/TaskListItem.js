import React, { Component } from "react";

export default class TaskListItem extends Component {
  render() {
    const { label, onDeleted, onChangeDone, onChangeImportant } = this.props;

    let classNameDone = "";
    let classNameImportant = "col-9 pe-auto";

    const cursor = {
      cursor: "pointer",
    };

    if (this.props.done) {
      classNameDone += " text-decoration-line-through";
    }

    if (this.props.important) {
      classNameImportant += " fw-bold  text-warning";
    }

    return (
      <div className="row">
        <div className={classNameImportant}>
          <span onClick={onChangeDone} style={cursor} className={classNameDone}>
            {label}
          </span>
        </div>

        <div className="col-3">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning"
              onClick={onChangeImportant}
            >
              im
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onDeleted}
            >
              del
            </button>
          </div>
        </div>
      </div>
    );
  }
}
