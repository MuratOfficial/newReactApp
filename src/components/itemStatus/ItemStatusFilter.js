import { Component } from "react";

export default class ItemStatusFilter extends Component {
  findHandler = (event) => {
    this.props.onFinder(event.target.value);
  };

  render() {
    const { onFilter } = this.props;

    return (
      <div className="container text-center">
        <div className="row">
          <form className="col" onSubmit={this.submitHandler}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Type what you want to find"
              aria-label="text"
              onChange={this.findHandler}
            />
          </form>

          <div className="col">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => onFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => onFilter("done")}
              >
                Completed
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => onFilter("active")}
              >
                Active
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
