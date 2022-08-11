import React, { Component } from "react";

class WorkForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="company">Company name:</label>
        <input
          type="text"
          name="company"
          id="company"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
        <label htmlFor="position">Position title:</label>
        <input
          type="text"
          name="position"
          id="position"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
         <label htmlFor="task"> Main tasks of your jobs:</label>
        <input
          type="text"
          name="task"
          id="task"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
        <label htmlFor="date">Start date and end date:</label>
        <input
          type="text"
          name="date"
          id="date"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
        <button
          type="button"
          onClick={this.props.onDelete}
          id={this.props.id}
        >
          Delete
        </button>
      </form>
    );
  }
}
export default WorkForm;
