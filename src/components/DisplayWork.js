import React, { Component } from "react";
import uniqid from "uniqid";


class DisplayWork extends Component {

  render() {
    return (
      <div className="work">
        {this.props.work.map((obj) => {
          return (
            <div key={uniqid()} className="workInfo">
              <div className="company">{obj.info.company}</div>
              <div className="position">{obj.info.position}</div>
              <div className="task">{obj.info.task}</div>
              <div className="date">{obj.info.date}</div>
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
