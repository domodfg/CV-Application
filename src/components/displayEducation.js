import React, { Component } from "react";
import EducationForm from "./educationForm";

class DisplayEducation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education">
        {this.props.education.map((education) => {
          return (
            <div key={education.id}>
              <div className="schoolName">{education.schoolName}</div>
              <div className="titleOfStudy">{education.titleOfStudy}</div>
              <div className="dateOfStudy">{education.dateOfStudy}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

class DisplayEducationForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education">
        {this.props.educationForm.map((form, i) => {
          return form;
        })}
      </div>
    );
  }
}
export { DisplayEducation, DisplayEducationForm };
