import React, { Component } from "react";
import uniqid from "uniqid";

class DisplayEducation extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        {this.props.education.map((obj) => {
          return (
            <div key={uniqid()} className="eduInfo">
              <div className="titleOfStudy">{obj.info.titleOfStudy}</div>
              <div className="eduRight">
                <p className="schoolName">{obj.info.schoolName}</p>
                <p className="dateOfStudy">{obj.info.dateOfStudy}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class DisplayEducationForm extends Component {
  render() {
    return (
      <div className="educationForm">
        {this.props.educationForm.map((form) => {
          return form.form;
        })}
      </div>
    );
  }
}
export { DisplayEducation, DisplayEducationForm };
