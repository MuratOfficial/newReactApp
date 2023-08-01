import ItemStatusFilter from "../itemStatus/ItemStatusFilter";
import TaskList from "../taskList/TaskList";
import AppHeader from "./AppHeader";
import NewTask from "../taskList/NewTask";
import React, { Component } from "react";

export default class App extends Component {
  intId = 1;

  state = {
    taskData: [
      this.createNewTask("Task1"),
      this.createNewTask("Task2"),
      this.createNewTask("Task3"),
    ],
    showData: [],
  };

  createNewTask(label) {
    return {
      label: label,
      important: false,
      id: this.intId++,
      done: false,
    };
  }

  deleteItem = (id) => {
    const { taskData } = this.state;
    const idx = taskData.findIndex((el) => el.id === id);
    const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];

    this.setState({
      taskData: newArray,
      showData: newArray,
    });
  };

  addItem = (text) => {
    //generate id
    const newItem = this.createNewTask(text);

    //adding newitem to array
    this.setState(({ taskData }) => {
      const changedArray = [...taskData, newItem];

      return {
        taskData: changedArray,
        showData: changedArray,
      };
    });
  };

  onChange = (id, operand) => {
    const { taskData, showData } = this.state;
    const idx = taskData.findIndex((el) => el.id === id);
    let changableItem = taskData[idx];
    if (operand === "important") {
      changableItem.important = true;
    }
    if (operand === "done") {
      changableItem.done = true;
    }
    const changedArray = [
      ...taskData.slice(0, idx),
      changableItem,
      ...taskData.slice(idx + 1),
    ];
    this.setState({
      taskData: changedArray,
      showData: showData,
    });
  };

  onFilter = (type) => {
    let { taskData, showData } = this.state;

    if (type === "done") {
      showData = taskData.filter((el) => el.done === true);
    }
    if (type === "active") {
      showData = taskData.filter((el) => el.done === false);
    }
    if (type === "all") {
      showData = taskData;
    }
    this.setState({
      taskData: taskData,
      showData: showData,
    });
  };

  onFinder = (value) => {
    const { taskData } = this.state;

    // matching function
    const findArray = taskData.filter((el) => {
      let answer = "";
      if (el.label.indexOf(value) > -1) {
        answer = el.label;
      }

      return answer;
    });

    this.setState({
      taskData: taskData,
      showData: findArray,
    });
  };

  render() {
    const doneCount = this.state.taskData.filter(
      (el) => el.done === true
    ).length;

    const activeCount = this.state.taskData.length - doneCount;

    return (
      <div className="App">
        <AppHeader />
        <ItemStatusFilter onFilter={this.onFilter} onFinder={this.onFinder} />
        <TaskList
          data={this.state.showData}
          onDeleted={this.deleteItem}
          doneCount={doneCount}
          activeCount={activeCount}
          onChange={this.onChange}
        />
        <NewTask onAdd={this.addItem} />
      </div>
    );
  }
}
