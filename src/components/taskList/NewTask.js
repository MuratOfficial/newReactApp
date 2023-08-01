import React, { Component } from "react";

export default class NewTask extends Component {
  state = {
    label: "",
  };

  changeHandler = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="input-group mb-3">
              <form onSubmit={this.submitHandler}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add new task"
                  aria-label="Add new task"
                  aria-describedby="button-addon2"
                  onChange={this.changeHandler}
                  value={this.state.label}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
