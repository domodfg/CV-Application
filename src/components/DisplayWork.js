import React, { Component } from "react";
import uniqid from "uniqid";

class DisplayWork extends Component {
  render() {
    return (
      <div className="work">
        <h2>Work experience</h2>
        {this.props.work.map((obj) => {
          return (
            <div key={uniqid()} className="workInfo">
              <div className="job">
                <p className="position">{obj.info.position}</p>
                <div className="workRight">
                  <p className="company">{obj.info.company}</p>
                  <p className="date">{obj.info.date}</p>
                </div>
              </div>
              <p className="task">{obj.info.task}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

class DisplayWorkForm extends Component {
  render() {
    return (
      <div className="workForm">
        {this.props.workForm.map((form) => {
          return form.form;
        })}
      </div>
    );
  }
}
export { DisplayWork, DisplayWorkForm };
