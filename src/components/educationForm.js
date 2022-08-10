import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="schoolName">School:</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
        <label htmlFor="titleOfStudy">Title of study:</label>
        <input
          type="text"
          name="titleOfStudy"
          id="titleOfStudy"
          data={this.props.id}
          onChange={this.props.onChangeHandler}
          required
        />
        <label htmlFor="dateOfStudy">Date of study:</label>
        <input
          type="text"
          name="dateOfStudy"
          id="dateOfStudy"
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
export default EducationForm;
