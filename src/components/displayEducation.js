import React, { Component } from "react";
import uniqid from "uniqid";


class DisplayEducation extends Component {

  render() {
    return (
      <div className="education">
        {this.props.education.map((obj) => {
          return (
            <div key={uniqid()} className="eduInfo">
              <div className="schoolName">{obj.info.schoolName}</div>
              <div className="titleOfStudy">{obj.info.titleOfStudy}</div>
              <div className="dateOfStudy">{obj.info.dateOfStudy}</div>
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
