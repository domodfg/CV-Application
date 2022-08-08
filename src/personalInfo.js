import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="personalInfoForm">
        <form>
          <input
            type="text"
            name="name"
            onChange={this.props.onChangeHandler}
          />
          <input
            type="text"
            name="email"
            onChange={this.props.onChangeHandler}
          />
          <input
            type="text"
            name="phone"
            onChange={this.props.onChangeHandler}
          />
          <button onClick={this.props.onButtonClicked}>Submit</button>
        </form>
      </div>
    );
  }
}
export default PersonalInfo;
