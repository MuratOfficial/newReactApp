import React, { Component } from "react";
import TaskListItem from "./TaskListItem";

export default class TaskList extends Component {
  render() {
    const { data, onDeleted, doneCount, activeCount, onChange } = this.props;
    const taskDataItem = data.map((item) => {
      const { id, ...pervItem } = item;

      return (
        <li key={id} className="list-group-item">
          <TaskListItem
            {...pervItem}
            onDeleted={() => onDeleted(id)}
            onChangeDone={() => onChange(id, "done")}
            onChangeImportant={() => onChange(id, "important")}
          />
        </li>
      );
    });

    return (
      <div className="container text-center pt-3 rounded">
        <div className="row">
          <ul className="list-group col-8">{taskDataItem}</ul>
          <div className="list-group col-8"></div>

          <div className="col-4">
            <div className="row">
              <h5 className="col-6 text-center">
                Tasks on progress: {activeCount}
              </h5>
              <h5 className="col-6">Tasks done: {doneCount}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
