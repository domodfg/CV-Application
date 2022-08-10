import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="personalInfoForm">
        <form>
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.props.onChangeHandler}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.props.onChangeHandler}
          />
          <label htmlFor="phone">Phone number:</label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={this.props.onChangeHandler}
          />
          <button onClick={this.props.onButtonClicked}>Submit</button>
        </form>
      </div>
    );
  }
}
export default PersonalInfo;