import React, { Component } from "react";

class EducationForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form id={this.props.id}>
        <label htmlFor="schoolName">School:</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          onChange={this.props.onChangeHandler}
          /*             value={this.props.educationInfo.schoolName} */
          required
        />
        <label htmlFor="titleOfStudy">Title of study:</label>
        <input
          type="text"
          name="titleOfStudy"
          id="titleOfStudy"
          onChange={this.props.onChangeHandler}
          /*             value={this.props.educationInfo.titleOfStudy} */
          required
        />
        <label htmlFor="dateOfStudy">Date of study:</label>
        <input
          type="text"
          name="dateOfStudy"
          id="dateOfStudy"
          onChange={this.props.onChangeHandler}
          /*            value={this.props.educationInfo.dateOfStudy} */
          required
        />
        <button type="submit" onClick={this.props.onButtonClicked}>
          Submit
        </button>
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
