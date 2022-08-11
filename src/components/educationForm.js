import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <form>
        <div className="input">
          <label htmlFor="schoolName">School:</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            data={this.props.id}
            onChange={this.props.onChangeHandler}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="titleOfStudy">Title of study:</label>
          <input
            type="text"
            name="titleOfStudy"
            id="titleOfStudy"
            data={this.props.id}
            onChange={this.props.onChangeHandler}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="dateOfStudy">Date of study:</label>
          <input
            type="text"
            name="dateOfStudy"
            id="dateOfStudy"
            data={this.props.id}
            onChange={this.props.onChangeHandler}
            required
          />
        </div>
        <button
          type="button"
          className="delete"
          onClick={this.props.onDelete}
          id={this.props.id}
        >
          Delete
        </button>
      </form>
    );
  }
}
export default EducationForm;
